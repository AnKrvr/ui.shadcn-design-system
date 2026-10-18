import { test, expect } from "@playwright/test"
for (const width of [375,1440]) for (const colorScheme of ["light","dark"] as const) {
  test(`page fits ${width}px in ${colorScheme}`, async ({page}) => {
    await page.setViewportSize({width,height:1000})
    await page.emulateMedia({colorScheme})
    await page.goto("/")
    await expect(page.getByRole("heading",{name:"От идеи к интерфейсу."})).toBeVisible()
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await expect(page.locator("html")).toHaveClass(colorScheme === "dark" ? /dark/ : /^(?!.*dark)/)
  })
}
test("theme is restored after reload", async ({page}) => {
  await page.goto("/")
  await page.getByRole("button",{name:"Выбрать тему"}).click()
  await page.getByRole("menuitem",{name:"Тёмная"}).click()
  await page.reload()
  await expect(page.locator("html")).toHaveClass(/dark/)
})
test("blocked localStorage does not crash the page", async ({page}) => {
  await page.addInitScript(() => Object.defineProperty(window,"localStorage",{get(){throw new DOMException("blocked","SecurityError")}}))
  await page.goto("/")
  await expect(page.getByRole("heading",{name:"От идеи к интерфейсу."})).toBeVisible()
})
test("dialog closes with Escape and restores keyboard focus", async ({page}) => {
  await page.goto("/")
  const trigger=page.getByRole("button",{name:"Новый проект",exact:true})
  await trigger.focus()
  await page.keyboard.press("Enter")
  await expect(page.getByRole("dialog")).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(page.getByRole("dialog")).not.toBeVisible()
  await expect(trigger).toBeFocused()
})
test("form validates and submits locally", async ({page}) => {
  await page.goto("/")
  await page.getByRole("button",{name:"Сохранить профиль"}).click()
  await expect(page.getByText("Укажите имя и корректный email.")).toBeVisible()
  await page.getByLabel("Имя", {exact:true}).fill("Анастасия")
  await page.getByLabel("Email", {exact:true}).fill("designer@example.com")
  await page.getByRole("button",{name:"Сохранить профиль"}).click()
  await expect(page.getByText("Профиль сохранён", {exact:true})).toBeVisible()
})
test("table search and sorting update visible data", async ({page}) => {
  await page.goto("/")
  await page.getByLabel("Поиск по проектам").fill("Личный")
  await expect(page.getByRole("cell",{name:"Личный кабинет"})).toBeVisible()
  await expect(page.getByRole("cell",{name:"Портфолио"})).not.toBeVisible()
  await page.getByLabel("Поиск по проектам").fill("")
  await page.getByRole("button",{name:"Название"}).click()
  await expect(page.locator("tbody tr").first()).toContainText("Личный кабинет")
})
test("date picker changes its value", async ({page}) => {
  await page.goto("/")
  await page.getByRole("button",{name:"Выберите дату"}).click()
  await page.getByRole("gridcell").filter({has:page.locator("button")}).nth(10).getByRole("button").click()
  await expect(page.getByRole("button",{name:"Выберите дату"})).not.toBeVisible()
})


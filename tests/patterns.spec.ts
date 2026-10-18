import { test, expect } from "@playwright/test"
test("table recipe supports sorting and search", async ({page}) => {
  await page.goto("http://127.0.0.1:6006/iframe.html?id=components-data-table--default&viewMode=story")
  const preview=page.locator("#storybook-root")
  await expect(preview.locator("tbody tr").first()).toContainText("Портфолио")
  await preview.getByRole("button",{name:"Название"}).click()
  await expect(preview.locator("tbody tr").first()).toContainText("Личный кабинет")
  await preview.getByLabel("Поиск по проектам").fill("Портфолио")
  await expect(preview.getByRole("cell",{name:"Личный кабинет"})).not.toBeVisible()
  await expect(preview.getByRole("cell",{name:"Портфолио"})).toBeVisible()
})

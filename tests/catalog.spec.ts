import { test, expect } from "@playwright/test"
import inventory from "../docs/component-inventory.json"
for (const entry of inventory.components) for (const id of entry.storyIds) {
  test(`catalog: ${entry.slug} / ${id}`, async ({page}) => {
    const errors: string[]=[]
    page.on("pageerror",error=>errors.push(error.message))
    await page.goto(`http://127.0.0.1:6006/iframe.html?id=${id}&viewMode=story`)
    await expect(page.locator("#storybook-root")).not.toBeEmpty()
    await expect(page.locator(".sb-errordisplay")).not.toBeVisible()
    expect(errors, id).toEqual([])
  })
}


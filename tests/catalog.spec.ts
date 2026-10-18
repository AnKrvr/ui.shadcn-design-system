import { test, expect } from "@playwright/test"
import { readFileSync } from "node:fs"
const inventory = JSON.parse(readFileSync(new URL("../docs/component-inventory.json", import.meta.url), "utf8")) as { components: { slug: string; storyIds: string[] }[] }
for (const entry of inventory.components) for (const id of entry.storyIds) {
  test(`catalog: ${entry.slug} / ${id}`, async ({page}) => {
    const errors: string[]=[]
    page.on("pageerror",error=>errors.push(error.message))
    await page.goto(`http://127.0.0.1:6006/iframe.html?id=${id}&viewMode=story`)
    await expect(page.locator("#storybook-root [data-slot], #storybook-root article").first()).toBeVisible()
    await expect(page.locator(".sb-errordisplay")).not.toBeVisible()
    expect(errors, id).toEqual([])
  })
}


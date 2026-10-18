import { defineConfig, devices } from "@playwright/test"
export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  expect: { timeout: 7000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["list"], ["html", {open: "never"}]],
  use: {baseURL: "http://127.0.0.1:4173", trace: "retain-on-failure", launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }},
  projects: [{name:"chromium",use:{...devices["Desktop Chrome"]}}],
  webServer: [
    {command:"npm run dev -- --port 4173",url:"http://127.0.0.1:4173",reuseExistingServer: !process.env.CI},
    {command:"npx http-server storybook-static -p 6006 -a 127.0.0.1 --silent",url:"http://127.0.0.1:6006",reuseExistingServer: !process.env.CI},
  ],
})


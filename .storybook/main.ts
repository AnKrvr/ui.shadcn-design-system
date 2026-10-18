import type { StorybookConfig } from "@storybook/react-vite"
const config: StorybookConfig = {
  stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: "@storybook/react-vite",
  docs: { defaultName: "Описание" },
}
export default config


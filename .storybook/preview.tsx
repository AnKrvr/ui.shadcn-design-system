import type { Preview } from "@storybook/react-vite"
import { ThemeProvider } from "../src/components/theme-provider"
import { TooltipProvider } from "../src/components/ui/tooltip"
import { Toaster } from "../src/components/ui/sonner"
import "../src/styles/globals.css"
const preview: Preview = {
  initialGlobals: { theme: "light" },
  globalTypes: { theme: { description: "Тема", toolbar: { icon: "circlehollow", items: [{ value: "light", title: "Светлая" }, { value: "dark", title: "Тёмная" }], dynamicTitle: true } } },
  parameters: { layout: "padded", controls: { expanded: true }, options: { storySort: { order: ["Начало работы", "Основы", "Components", "Паттерны", "Страница"] } } },
  decorators: [(Story, context) => <ThemeProvider forcedTheme={context.globals.theme === "dark" ? "dark" : "light"}><TooltipProvider><div className="min-w-0 p-4 text-foreground"><Story /></div><Toaster theme={context.globals.theme === "dark" ? "dark" : "light"} /></TooltipProvider></ThemeProvider>],
}
export default preview


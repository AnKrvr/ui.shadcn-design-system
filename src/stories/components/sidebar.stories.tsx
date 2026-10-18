import type { Meta, StoryObj } from "@storybook/react-vite"
import { SidebarDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-sidebar",
  title: "Components/Sidebar",
  component: SidebarDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Собирает навигацию приложения в боковую панель с возможностью сворачивания.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/sidebar\n\nИсходник: src/components/ui/sidebar.tsx\n\n```tsx\nimport { Sidebar } from \"@/components/ui/sidebar\"\n```" } } },
} satisfies Meta<typeof SidebarDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


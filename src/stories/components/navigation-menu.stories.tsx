import type { Meta, StoryObj } from "@storybook/react-vite"
import { NavigationMenuDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-navigation-menu",
  title: "Components/Navigation Menu",
  component: NavigationMenuDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Собирает основные навигационные ссылки и разделы сайта.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/navigation-menu\n\nИсходник: src/components/ui/navigation-menu.tsx\n\n```tsx\nimport { NavigationMenu } from \"@/components/ui/navigation-menu\"\n```" } } },
} satisfies Meta<typeof NavigationMenuDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { NavigationMenuDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-navigation-menu",
  title: "Components/Navigation Menu",
  component: NavigationMenuDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Navigation Menu. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/navigation-menu\n\nИсходник: src/components/ui/navigation-menu.tsx" } } },
} satisfies Meta<typeof NavigationMenuDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


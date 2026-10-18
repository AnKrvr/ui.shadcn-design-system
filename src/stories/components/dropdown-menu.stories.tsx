import type { Meta, StoryObj } from "@storybook/react-vite"
import { DropdownMenuDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-dropdown-menu",
  title: "Components/Dropdown Menu",
  component: DropdownMenuDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Размещает связанные команды в меню рядом с кнопкой вызова.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/dropdown-menu\n\nИсходник: src/components/ui/dropdown-menu.tsx\n\n```tsx\nimport { DropdownMenu } from \"@/components/ui/dropdown-menu\"\n```" } } },
} satisfies Meta<typeof DropdownMenuDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


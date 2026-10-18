import type { Meta, StoryObj } from "@storybook/react-vite"
import { ItemDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-item",
  title: "Components/Item",
  component: ItemDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Показывает строку объекта с названием, описанием, иконкой и при необходимости действиями.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/item\n\nИсходник: src/components/ui/item.tsx\n\n```tsx\nimport { Item } from \"@/components/ui/item\"\n```" } } },
} satisfies Meta<typeof ItemDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { SelectDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-select",
  title: "Components/Select",
  component: SelectDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Позволяет выбрать одно значение из компактного раскрывающегося списка.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/select\n\nИсходник: src/components/ui/select.tsx\n\n```tsx\nimport { Select } from \"@/components/ui/select\"\n```" } } },
} satisfies Meta<typeof SelectDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


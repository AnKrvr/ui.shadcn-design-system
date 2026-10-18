import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputGroupDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-input-group",
  title: "Components/Input Group",
  component: InputGroupDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Input Group. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/input-group\n\nИсходник: src/components/ui/input-group.tsx" } } },
} satisfies Meta<typeof InputGroupDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


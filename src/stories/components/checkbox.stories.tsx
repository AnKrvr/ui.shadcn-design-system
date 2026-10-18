import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckboxDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-checkbox",
  title: "Components/Checkbox",
  component: CheckboxDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Checkbox. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/checkbox\n\nИсходник: src/components/ui/checkbox.tsx" } } },
} satisfies Meta<typeof CheckboxDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


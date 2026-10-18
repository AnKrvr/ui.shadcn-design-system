import type { Meta, StoryObj } from "@storybook/react-vite"
import { DatePickerDemo } from "@/components/examples/pattern-demos"
const meta = {
  id: "components-date-picker",
  title: "Components/Date Picker",
  component: DatePickerDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Date Picker. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/date-picker\n\nИсходник: src/components/patterns/date-picker.tsx" } } },
} satisfies Meta<typeof DatePickerDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


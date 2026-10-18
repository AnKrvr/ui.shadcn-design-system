import type { Meta, StoryObj } from "@storybook/react-vite"
import { CalendarDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-calendar",
  title: "Components/Calendar",
  component: CalendarDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Calendar. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/calendar\n\nИсходник: src/components/ui/calendar.tsx" } } },
} satisfies Meta<typeof CalendarDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { CalendarDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-calendar",
  title: "Components/Calendar",
  component: CalendarDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Позволяет выбирать дни в календарной сетке и переходить между месяцами.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/calendar\n\nИсходник: src/components/ui/calendar.tsx\n\n```tsx\nimport { Calendar } from \"@/components/ui/calendar\"\n```" } } },
} satisfies Meta<typeof CalendarDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


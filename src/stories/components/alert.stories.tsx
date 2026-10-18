import type { Meta, StoryObj } from "@storybook/react-vite"
import { AlertDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-alert",
  title: "Components/Alert",
  component: AlertDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Alert. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/alert\n\nИсходник: src/components/ui/alert.tsx" } } },
} satisfies Meta<typeof AlertDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


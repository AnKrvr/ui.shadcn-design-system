import type { Meta, StoryObj } from "@storybook/react-vite"
import { BubbleDemo } from "@/components/examples/message-demos"
const meta = {
  id: "components-bubble",
  title: "Components/Bubble",
  component: BubbleDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Bubble. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/bubble\n\nИсходник: src/components/ui/bubble.tsx" } } },
} satisfies Meta<typeof BubbleDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


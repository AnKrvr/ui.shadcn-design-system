import type { Meta, StoryObj } from "@storybook/react-vite"
import { CardDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-card",
  title: "Components/Card",
  component: CardDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Card. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/card\n\nИсходник: src/components/ui/card.tsx" } } },
} satisfies Meta<typeof CardDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


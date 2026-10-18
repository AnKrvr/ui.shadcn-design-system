import type { Meta, StoryObj } from "@storybook/react-vite"
import { HoverCardDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-hover-card",
  title: "Components/Hover Card",
  component: HoverCardDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Hover Card. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/hover-card\n\nИсходник: src/components/ui/hover-card.tsx" } } },
} satisfies Meta<typeof HoverCardDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


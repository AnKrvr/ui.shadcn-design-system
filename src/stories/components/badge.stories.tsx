import type { Meta, StoryObj } from "@storybook/react-vite"
import { BadgeDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-badge",
  title: "Components/Badge",
  component: BadgeDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Badge. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/badge\n\nИсходник: src/components/ui/badge.tsx" } } },
} satisfies Meta<typeof BadgeDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


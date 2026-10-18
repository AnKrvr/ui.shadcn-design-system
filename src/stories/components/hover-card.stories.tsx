import type { Meta, StoryObj } from "@storybook/react-vite"
import { HoverCardDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-hover-card",
  title: "Components/Hover Card",
  component: HoverCardDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Показывает необязательное превью объекта при наведении; важную информацию лучше оставить в основном содержимом.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/hover-card\n\nИсходник: src/components/ui/hover-card.tsx\n\n```tsx\nimport { HoverCard } from \"@/components/ui/hover-card\"\n```" } } },
} satisfies Meta<typeof HoverCardDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


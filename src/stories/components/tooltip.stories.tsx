import type { Meta, StoryObj } from "@storybook/react-vite"
import { TooltipDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-tooltip",
  title: "Components/Tooltip",
  component: TooltipDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Tooltip. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/tooltip\n\nИсходник: src/components/ui/tooltip.tsx\n\n```tsx\nimport { Tooltip } from \"@/components/ui/tooltip\"\n```" } } },
} satisfies Meta<typeof TooltipDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


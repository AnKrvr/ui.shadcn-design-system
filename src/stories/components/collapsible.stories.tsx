import type { Meta, StoryObj } from "@storybook/react-vite"
import { CollapsibleDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-collapsible",
  title: "Components/Collapsible",
  component: CollapsibleDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Collapsible. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/collapsible\n\nИсходник: src/components/ui/collapsible.tsx" } } },
} satisfies Meta<typeof CollapsibleDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


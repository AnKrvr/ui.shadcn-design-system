import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollAreaDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-scroll-area",
  title: "Components/Scroll Area",
  component: ScrollAreaDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Scroll Area. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/scroll-area\n\nИсходник: src/components/ui/scroll-area.tsx" } } },
} satisfies Meta<typeof ScrollAreaDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { ChartDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-chart",
  title: "Components/Chart",
  component: ChartDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Встраивает графики Recharts в общую тему, добавляя согласованные цвета, легенду и подсказки.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/chart\n\nИсходник: src/components/ui/chart.tsx\n\n```tsx\nimport { ChartContainer } from \"@/components/ui/chart\"\n```" } } },
} satisfies Meta<typeof ChartDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


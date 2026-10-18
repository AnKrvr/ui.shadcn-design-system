import type { Meta, StoryObj } from "@storybook/react-vite"
import { ProgressDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-progress",
  title: "Components/Progress",
  component: ProgressDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Показывает измеримый прогресс выполнения задачи или заполнения данных.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/progress\n\nИсходник: src/components/ui/progress.tsx\n\n```tsx\nimport { Progress } from \"@/components/ui/progress\"\n```" } } },
} satisfies Meta<typeof ProgressDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


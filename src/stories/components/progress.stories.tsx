import type { Meta, StoryObj } from "@storybook/react-vite"
import { ProgressDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-progress",
  title: "Components/Progress",
  component: ProgressDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Progress. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/progress\n\nИсходник: src/components/ui/progress.tsx" } } },
} satisfies Meta<typeof ProgressDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


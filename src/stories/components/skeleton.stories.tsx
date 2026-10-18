import type { Meta, StoryObj } from "@storybook/react-vite"
import { SkeletonDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-skeleton",
  title: "Components/Skeleton",
  component: SkeletonDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Skeleton. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/skeleton\n\nИсходник: src/components/ui/skeleton.tsx" } } },
} satisfies Meta<typeof SkeletonDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


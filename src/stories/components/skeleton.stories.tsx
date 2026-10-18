import type { Meta, StoryObj } from "@storybook/react-vite"
import { SkeletonDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-skeleton",
  title: "Components/Skeleton",
  component: SkeletonDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Обозначает форму будущего содержимого, пока данные ещё загружаются.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/skeleton\n\nИсходник: src/components/ui/skeleton.tsx\n\n```tsx\nimport { Skeleton } from \"@/components/ui/skeleton\"\n```" } } },
} satisfies Meta<typeof SkeletonDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


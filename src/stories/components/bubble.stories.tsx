import type { Meta, StoryObj } from "@storybook/react-vite"
import { BubbleDemo } from "@/components/examples/message-demos"
const meta = {
  id: "components-bubble",
  title: "Components/Bubble",
  component: BubbleDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Оформляет отдельную реплику в переписке; поддерживает разные визуальные варианты и выравнивание.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/bubble\n\nИсходник: src/components/ui/bubble.tsx\n\n```tsx\nimport { Bubble } from \"@/components/ui/bubble\"\n```" } } },
} satisfies Meta<typeof BubbleDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


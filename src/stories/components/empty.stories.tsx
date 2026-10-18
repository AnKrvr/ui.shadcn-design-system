import type { Meta, StoryObj } from "@storybook/react-vite"
import { EmptyDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-empty",
  title: "Components/Empty",
  component: EmptyDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Объясняет отсутствие данных или результатов и предлагает следующий полезный шаг.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/empty\n\nИсходник: src/components/ui/empty.tsx\n\n```tsx\nimport { Empty } from \"@/components/ui/empty\"\n```" } } },
} satisfies Meta<typeof EmptyDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


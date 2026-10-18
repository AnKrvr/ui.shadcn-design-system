import type { Meta, StoryObj } from "@storybook/react-vite"
import { LabelDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-label",
  title: "Components/Label",
  component: LabelDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Даёт элементу управления понятную подпись; htmlFor связывает её с id этого элемента.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/label\n\nИсходник: src/components/ui/label.tsx\n\n```tsx\nimport { Label } from \"@/components/ui/label\"\n```" } } },
} satisfies Meta<typeof LabelDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


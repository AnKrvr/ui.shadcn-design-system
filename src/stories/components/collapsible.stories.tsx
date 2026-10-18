import type { Meta, StoryObj } from "@storybook/react-vite"
import { CollapsibleDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-collapsible",
  title: "Components/Collapsible",
  component: CollapsibleDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Раскрывает или скрывает дополнительное содержимое одного раздела.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/collapsible\n\nИсходник: src/components/ui/collapsible.tsx\n\n```tsx\nimport { Collapsible } from \"@/components/ui/collapsible\"\n```" } } },
} satisfies Meta<typeof CollapsibleDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


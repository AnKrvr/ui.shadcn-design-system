import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToggleDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-toggle",
  title: "Components/Toggle",
  component: ToggleDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Переключает действие между нажатым и ненажатым состояниями, например полужирное начертание.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/toggle\n\nИсходник: src/components/ui/toggle.tsx\n\n```tsx\nimport { Toggle } from \"@/components/ui/toggle\"\n```" } } },
} satisfies Meta<typeof ToggleDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


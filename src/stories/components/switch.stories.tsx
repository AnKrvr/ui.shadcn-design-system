import type { Meta, StoryObj } from "@storybook/react-vite"
import { SwitchDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-switch",
  title: "Components/Switch",
  component: SwitchDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Включает и выключает настройку, изменение которой применяется сразу.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/switch\n\nИсходник: src/components/ui/switch.tsx\n\n```tsx\nimport { Switch } from \"@/components/ui/switch\"\n```" } } },
} satisfies Meta<typeof SwitchDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToggleGroupDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-toggle-group",
  title: "Components/Toggle Group",
  component: ToggleGroupDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Toggle Group. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/toggle-group\n\nИсходник: src/components/ui/toggle-group.tsx\n\n```tsx\nimport { ToggleGroup } from \"@/components/ui/toggle-group\"\n```" } } },
} satisfies Meta<typeof ToggleGroupDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


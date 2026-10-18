import type { Meta, StoryObj } from "@storybook/react-vite"
import { ButtonGroupDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-button-group",
  title: "Components/Button Group",
  component: ButtonGroupDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Объединяет связанные действия в компактную группу, например переключение периода.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/button-group\n\nИсходник: src/components/ui/button-group.tsx\n\n```tsx\nimport { ButtonGroup } from \"@/components/ui/button-group\"\n```" } } },
} satisfies Meta<typeof ButtonGroupDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { FieldDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-field",
  title: "Components/Field",
  component: FieldDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Связывает поле с подписью, описанием и сообщением об ошибке в согласованную группу.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/field\n\nИсходник: src/components/ui/field.tsx\n\n```tsx\nimport { Field } from \"@/components/ui/field\"\n```" } } },
} satisfies Meta<typeof FieldDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


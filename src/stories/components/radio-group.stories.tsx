import type { Meta, StoryObj } from "@storybook/react-vite"
import { RadioGroupDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-radio-group",
  title: "Components/Radio Group",
  component: RadioGroupDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Radio Group. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/radio-group\n\nИсходник: src/components/ui/radio-group.tsx\n\n```tsx\nimport { RadioGroup } from \"@/components/ui/radio-group\"\n```" } } },
} satisfies Meta<typeof RadioGroupDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


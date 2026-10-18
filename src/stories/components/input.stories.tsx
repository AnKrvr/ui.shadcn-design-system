import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-input",
  title: "Components/Input",
  component: InputDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Input. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/input\n\nИсходник: src/components/ui/input.tsx\n\n```tsx\nimport { Input } from \"@/components/ui/input\"\n```" } } },
} satisfies Meta<typeof InputDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


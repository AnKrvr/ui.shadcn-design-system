import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComboboxDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-combobox",
  title: "Components/Combobox",
  component: ComboboxDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Объединяет поле поиска и список вариантов для выбора из большого набора.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/combobox\n\nИсходник: src/components/ui/combobox.tsx\n\n```tsx\nimport { Combobox } from \"@/components/ui/combobox\"\n```" } } },
} satisfies Meta<typeof ComboboxDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


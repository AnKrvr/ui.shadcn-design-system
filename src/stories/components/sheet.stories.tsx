import type { Meta, StoryObj } from "@storybook/react-vite"
import { SheetDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-sheet",
  title: "Components/Sheet",
  component: SheetDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Sheet. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/sheet\n\nИсходник: src/components/ui/sheet.tsx\n\n```tsx\nimport { Sheet } from \"@/components/ui/sheet\"\n```" } } },
} satisfies Meta<typeof SheetDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


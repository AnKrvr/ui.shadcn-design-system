import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataTableDemo } from "@/components/examples/pattern-demos"
const meta = {
  id: "components-data-table",
  title: "Components/Data Table",
  component: DataTableDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Data Table. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/data-table\n\nИсходник: src/components/patterns/data-table.tsx" } } },
} satisfies Meta<typeof DataTableDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


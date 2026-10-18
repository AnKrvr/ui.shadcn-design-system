import type { Meta, StoryObj } from "@storybook/react-vite"
import { TableDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-table",
  title: "Components/Table",
  component: TableDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Table. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/table\n\nИсходник: src/components/ui/table.tsx" } } },
} satisfies Meta<typeof TableDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataTableDemo } from "@/components/examples/pattern-demos"
const meta = {
  id: "components-data-table",
  title: "Components/Data Table",
  component: DataTableDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Добавляет поиск и сортировку к таблице данных с типизированными колонками.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/data-table\n\nИсходник: src/components/patterns/data-table.tsx\n\n```tsx\nimport { DataTable } from \"@/components/patterns/data-table\"\n```" } } },
} satisfies Meta<typeof DataTableDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


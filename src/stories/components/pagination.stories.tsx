import type { Meta, StoryObj } from "@storybook/react-vite"
import { PaginationDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-pagination",
  title: "Components/Pagination",
  component: PaginationDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Помогает переходить между страницами длинного списка и показывает текущую страницу.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/pagination\n\nИсходник: src/components/ui/pagination.tsx\n\n```tsx\nimport { Pagination } from \"@/components/ui/pagination\"\n```" } } },
} satisfies Meta<typeof PaginationDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


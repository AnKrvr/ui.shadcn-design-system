import type { Meta, StoryObj } from "@storybook/react-vite"
import { BreadcrumbDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-breadcrumb",
  title: "Components/Breadcrumb",
  component: BreadcrumbDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Breadcrumb. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/breadcrumb\n\nИсходник: src/components/ui/breadcrumb.tsx\n\n```tsx\nimport { Breadcrumb } from \"@/components/ui/breadcrumb\"\n```" } } },
} satisfies Meta<typeof BreadcrumbDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


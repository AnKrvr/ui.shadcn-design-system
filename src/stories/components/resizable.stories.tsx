import type { Meta, StoryObj } from "@storybook/react-vite"
import { ResizableDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-resizable",
  title: "Components/Resizable",
  component: ResizableDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Resizable. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/resizable\n\nИсходник: src/components/ui/resizable.tsx\n\n```tsx\nimport { ResizablePanelGroup } from \"@/components/ui/resizable\"\n```" } } },
} satisfies Meta<typeof ResizableDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


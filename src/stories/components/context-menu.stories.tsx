import type { Meta, StoryObj } from "@storybook/react-vite"
import { ContextMenuDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-context-menu",
  title: "Components/Context Menu",
  component: ContextMenuDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Context Menu. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/context-menu\n\nИсходник: src/components/ui/context-menu.tsx\n\n```tsx\nimport { ContextMenu } from \"@/components/ui/context-menu\"\n```" } } },
} satisfies Meta<typeof ContextMenuDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


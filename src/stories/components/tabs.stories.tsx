import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabsDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-tabs",
  title: "Components/Tabs",
  component: TabsDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Tabs. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/tabs\n\nИсходник: src/components/ui/tabs.tsx\n\n```tsx\nimport { Tabs } from \"@/components/ui/tabs\"\n```" } } },
} satisfies Meta<typeof TabsDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


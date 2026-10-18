import type { Meta, StoryObj } from "@storybook/react-vite"
import { SeparatorDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-separator",
  title: "Components/Separator",
  component: SeparatorDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Separator. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/separator\n\nИсходник: src/components/ui/separator.tsx\n\n```tsx\nimport { Separator } from \"@/components/ui/separator\"\n```" } } },
} satisfies Meta<typeof SeparatorDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


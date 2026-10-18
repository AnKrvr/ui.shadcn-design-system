import type { Meta, StoryObj } from "@storybook/react-vite"
import { EmptyDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-empty",
  title: "Components/Empty",
  component: EmptyDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Empty. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/empty\n\nИсходник: src/components/ui/empty.tsx" } } },
} satisfies Meta<typeof EmptyDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


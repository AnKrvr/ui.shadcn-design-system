import type { Meta, StoryObj } from "@storybook/react-vite"
import { DirectionDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-direction",
  title: "Components/Direction",
  component: DirectionDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Direction. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/direction\n\nИсходник: src/components/ui/direction.tsx" } } },
} satisfies Meta<typeof DirectionDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


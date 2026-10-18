import type { Meta, StoryObj } from "@storybook/react-vite"
import { MarkerDemo } from "@/components/examples/message-demos"
const meta = {
  id: "components-marker",
  title: "Components/Marker",
  component: MarkerDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Marker. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/marker\n\nИсходник: src/components/ui/marker.tsx" } } },
} satisfies Meta<typeof MarkerDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


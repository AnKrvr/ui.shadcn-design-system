import type { Meta, StoryObj } from "@storybook/react-vite"
import { MarkerDemo } from "@/components/examples/message-demos"
const meta = {
  id: "components-marker",
  title: "Components/Marker",
  component: MarkerDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Разделяет события и сообщения меткой времени, границей раздела или другим контекстным указателем.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/marker\n\nИсходник: src/components/ui/marker.tsx\n\n```tsx\nimport { Marker } from \"@/components/ui/marker\"\n```" } } },
} satisfies Meta<typeof MarkerDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


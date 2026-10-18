import type { Meta, StoryObj } from "@storybook/react-vite"
import { MessageDemo } from "@/components/examples/message-demos"
const meta = {
  id: "components-message",
  title: "Components/Message",
  component: MessageDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Message. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/message\n\nИсходник: src/components/ui/message.tsx\n\n```tsx\nimport { Message } from \"@/components/ui/message\"\n```" } } },
} satisfies Meta<typeof MessageDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


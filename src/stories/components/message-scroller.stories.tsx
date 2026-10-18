import type { Meta, StoryObj } from "@storybook/react-vite"
import { MessageScrollerDemo } from "@/components/examples/message-demos"
const meta = {
  id: "components-message-scroller",
  title: "Components/Message Scroller",
  component: MessageScrollerDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Message Scroller. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/message-scroller\n\nИсходник: src/components/ui/message-scroller.tsx\n\n```tsx\nimport { MessageScroller } from \"@/components/ui/message-scroller\"\n```" } } },
} satisfies Meta<typeof MessageScrollerDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


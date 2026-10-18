import type { Meta, StoryObj } from "@storybook/react-vite"
import { AvatarDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-avatar",
  title: "Components/Avatar",
  component: AvatarDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Avatar. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/avatar\n\nИсходник: src/components/ui/avatar.tsx\n\n```tsx\nimport { Avatar } from \"@/components/ui/avatar\"\n```" } } },
} satisfies Meta<typeof AvatarDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


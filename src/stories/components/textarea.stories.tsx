import type { Meta, StoryObj } from "@storybook/react-vite"
import { TextareaDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-textarea",
  title: "Components/Textarea",
  component: TextareaDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Принимает многострочный текст: комментарий, описание или сообщение.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/textarea\n\nИсходник: src/components/ui/textarea.tsx\n\n```tsx\nimport { Textarea } from \"@/components/ui/textarea\"\n```" } } },
} satisfies Meta<typeof TextareaDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


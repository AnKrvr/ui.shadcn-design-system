import type { Meta, StoryObj } from "@storybook/react-vite"
import { AttachmentDemo } from "@/components/examples/message-demos"
const meta = {
  id: "components-attachment",
  title: "Components/Attachment",
  component: AttachmentDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Attachment. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/attachment\n\nИсходник: src/components/ui/attachment.tsx\n\n```tsx\nimport { Attachment } from \"@/components/ui/attachment\"\n```" } } },
} satisfies Meta<typeof AttachmentDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


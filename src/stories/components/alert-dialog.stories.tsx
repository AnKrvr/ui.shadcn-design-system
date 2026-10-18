import type { Meta, StoryObj } from "@storybook/react-vite"
import { AlertDialogDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-alert-dialog",
  title: "Components/Alert Dialog",
  component: AlertDialogDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Запрашивает подтверждение важного действия и удерживает фокус, пока пользователь не выберет ответ.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/alert-dialog\n\nИсходник: src/components/ui/alert-dialog.tsx\n\n```tsx\nimport { AlertDialog } from \"@/components/ui/alert-dialog\"\n```" } } },
} satisfies Meta<typeof AlertDialogDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


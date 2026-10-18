import type { Meta, StoryObj } from "@storybook/react-vite"
import { DialogDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-dialog",
  title: "Components/Dialog",
  component: DialogDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Открывает модальное окно для отдельной задачи, например изменения параметров объекта.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/dialog\n\nИсходник: src/components/ui/dialog.tsx\n\n```tsx\nimport { Dialog } from \"@/components/ui/dialog\"\n```" } } },
} satisfies Meta<typeof DialogDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


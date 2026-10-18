import type { Meta, StoryObj } from "@storybook/react-vite"
import { DialogDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-dialog",
  title: "Components/Dialog",
  component: DialogDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Dialog. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/dialog\n\nИсходник: src/components/ui/dialog.tsx" } } },
} satisfies Meta<typeof DialogDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { TextareaDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-textarea",
  title: "Components/Textarea",
  component: TextareaDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Textarea. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/textarea\n\nИсходник: src/components/ui/textarea.tsx" } } },
} satisfies Meta<typeof TextareaDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


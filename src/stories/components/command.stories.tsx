import type { Meta, StoryObj } from "@storybook/react-vite"
import { CommandDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-command",
  title: "Components/Command",
  component: CommandDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Command. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/command\n\nИсходник: src/components/ui/command.tsx" } } },
} satisfies Meta<typeof CommandDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


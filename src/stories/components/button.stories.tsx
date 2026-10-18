import type { Meta, StoryObj } from "@storybook/react-vite"
import { ButtonDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-button",
  title: "Components/Button",
  component: ButtonDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Button. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/button\n\nИсходник: src/components/ui/button.tsx" } } },
} satisfies Meta<typeof ButtonDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


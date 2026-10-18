import type { Meta, StoryObj } from "@storybook/react-vite"
import { SonnerDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-toast",
  title: "Components/Toast",
  component: SonnerDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Toast устарел в shadcn/ui. Этот пример использует официальный рекомендуемый Sonner.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/toast\n\nИсходник: src/components/ui/sonner.tsx" } } },
} satisfies Meta<typeof SonnerDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


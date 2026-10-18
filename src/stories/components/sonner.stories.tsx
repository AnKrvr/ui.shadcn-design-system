import type { Meta, StoryObj } from "@storybook/react-vite"
import { SonnerDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-sonner",
  title: "Components/Sonner",
  component: SonnerDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Sonner. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/sonner\n\nИсходник: src/components/ui/sonner.tsx\n\n```tsx\nimport { Toaster } from \"@/components/ui/sonner\"\n```" } } },
} satisfies Meta<typeof SonnerDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


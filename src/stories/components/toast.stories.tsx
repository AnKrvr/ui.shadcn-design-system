import type { Meta, StoryObj } from "@storybook/react-vite"
import { SonnerDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-toast",
  title: "Components/Toast",
  component: SonnerDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Toast устарел в shadcn/ui. Для кратковременных уведомлений используйте официальную замену Sonner; она показана в этом примере.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/toast\n\nИсходник: src/components/ui/sonner.tsx\n\n```tsx\nimport { Toaster } from \"@/components/ui/sonner\"\n```" } } },
} satisfies Meta<typeof SonnerDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { KbdDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-kbd",
  title: "Components/Kbd",
  component: KbdDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Визуально обозначает клавишу или сочетание клавиш в подсказке к действию.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/kbd\n\nИсходник: src/components/ui/kbd.tsx\n\n```tsx\nimport { Kbd } from \"@/components/ui/kbd\"\n```" } } },
} satisfies Meta<typeof KbdDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


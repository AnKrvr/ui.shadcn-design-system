import type { Meta, StoryObj } from "@storybook/react-vite"
import { PopoverDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-popover",
  title: "Components/Popover",
  component: PopoverDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Открывает небольшой немодальный блок рядом с кнопкой, например быстрые настройки.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/popover\n\nИсходник: src/components/ui/popover.tsx\n\n```tsx\nimport { Popover } from \"@/components/ui/popover\"\n```" } } },
} satisfies Meta<typeof PopoverDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


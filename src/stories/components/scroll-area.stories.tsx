import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollAreaDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-scroll-area",
  title: "Components/Scroll Area",
  component: ScrollAreaDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Ограничивает высоту или ширину содержимого и обеспечивает прокрутку внутри блока.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/scroll-area\n\nИсходник: src/components/ui/scroll-area.tsx\n\n```tsx\nimport { ScrollArea } from \"@/components/ui/scroll-area\"\n```" } } },
} satisfies Meta<typeof ScrollAreaDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


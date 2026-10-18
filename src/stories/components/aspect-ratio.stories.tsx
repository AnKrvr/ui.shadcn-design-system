import type { Meta, StoryObj } from "@storybook/react-vite"
import { AspectRatioDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-aspect-ratio",
  title: "Components/Aspect Ratio",
  component: AspectRatioDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Aspect Ratio. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/aspect-ratio\n\nИсходник: src/components/ui/aspect-ratio.tsx\n\n```tsx\nimport { AspectRatio } from \"@/components/ui/aspect-ratio\"\n```" } } },
} satisfies Meta<typeof AspectRatioDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


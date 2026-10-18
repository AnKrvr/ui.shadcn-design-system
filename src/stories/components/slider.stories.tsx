import type { Meta, StoryObj } from "@storybook/react-vite"
import { SliderDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-slider",
  title: "Components/Slider",
  component: SliderDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Slider. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/slider\n\nИсходник: src/components/ui/slider.tsx\n\n```tsx\nimport { Slider } from \"@/components/ui/slider\"\n```" } } },
} satisfies Meta<typeof SliderDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


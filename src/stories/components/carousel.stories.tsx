import type { Meta, StoryObj } from "@storybook/react-vite"
import { CarouselDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-carousel",
  title: "Components/Carousel",
  component: CarouselDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Показывает последовательность карточек с горизонтальным перемещением и кнопками навигации.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/carousel\n\nИсходник: src/components/ui/carousel.tsx\n\n```tsx\nimport { Carousel } from \"@/components/ui/carousel\"\n```" } } },
} satisfies Meta<typeof CarouselDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


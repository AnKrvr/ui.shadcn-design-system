import type { Meta, StoryObj } from "@storybook/react-vite"
import { TypographyDemo } from "@/components/examples/pattern-demos"
const meta = {
  id: "components-typography",
  title: "Components/Typography",
  component: TypographyDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Демонстрирует согласованную иерархию заголовков, основного текста, цитат, списков и подписей.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/typography\n\nИсходник: src/components/patterns/typography.tsx\n\n```tsx\nimport { TypographyDemo } from \"@/components/patterns/typography\"\n```" } } },
} satisfies Meta<typeof TypographyDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


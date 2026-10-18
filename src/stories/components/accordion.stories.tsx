import type { Meta, StoryObj } from "@storybook/react-vite"
import { AccordionDemo } from "@/components/examples/layout-demos"
const meta = {
  id: "components-accordion",
  title: "Components/Accordion",
  component: AccordionDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Accordion. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/accordion\n\nИсходник: src/components/ui/accordion.tsx\n\n```tsx\nimport { Accordion } from \"@/components/ui/accordion\"\n```" } } },
} satisfies Meta<typeof AccordionDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { TraceDemo } from "@/components/examples/message-demos"
const meta = {
  id: "components-trace",
  title: "Components/Trace",
  component: TraceDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Trace. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/trace\n\nИсходник: src/components/ui/trace.tsx\n\n```tsx\nimport { Trace } from \"@/components/ui/trace\"\n```" } } },
} satisfies Meta<typeof TraceDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


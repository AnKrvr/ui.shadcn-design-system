import type { Meta, StoryObj } from "@storybook/react-vite"
import { SpinnerDemo } from "@/components/examples/feedback-demos"
const meta = {
  id: "components-spinner",
  title: "Components/Spinner",
  component: SpinnerDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Spinner. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/spinner\n\nИсходник: src/components/ui/spinner.tsx\n\n```tsx\nimport { Spinner } from \"@/components/ui/spinner\"\n```" } } },
} satisfies Meta<typeof SpinnerDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


import type { Meta, StoryObj } from "@storybook/react-vite"
import { QuestionnaireDemo } from "@/components/examples/message-demos"
const meta = {
  id: "components-questionnaire",
  title: "Components/Questionnaire",
  component: QuestionnaireDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Questionnaire. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/questionnaire\n\nИсходник: src/components/ui/questionnaire.tsx" } } },
} satisfies Meta<typeof QuestionnaireDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


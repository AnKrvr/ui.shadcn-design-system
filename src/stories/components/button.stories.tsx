import type { Meta, StoryObj } from "@storybook/react-vite"
import { ButtonDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-button",
  title: "Components/Button",
  component: ButtonDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Запускает действие или оформляет ссылку; варианты помогают показать приоритет и опасность действия.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/button\n\nИсходник: src/components/ui/button.tsx\n\n```tsx\nimport { Button } from \"@/components/ui/button\"\n```" } } },
} satisfies Meta<typeof ButtonDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


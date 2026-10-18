import type { Meta, StoryObj } from "@storybook/react-vite"
import { CodeBlockDemo } from "@/components/examples/message-demos"
const meta = {
  id: "components-code-block",
  title: "Components/Code Block",
  component: CodeBlockDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Показывает код и текстовый вывод с заголовком, нумерацией строк и кнопкой копирования.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/code-block\n\nИсходник: src/components/ui/code-block.tsx\n\n```tsx\nimport { CodeBlock } from \"@/components/ui/code-block\"\n```" } } },
} satisfies Meta<typeof CodeBlockDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


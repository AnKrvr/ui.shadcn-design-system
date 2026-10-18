import type { Meta, StoryObj } from "@storybook/react-vite"
import { NativeSelectDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-native-select",
  title: "Components/Native Select",
  component: NativeSelectDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Использует встроенный список браузера для простого выбора одного значения.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/native-select\n\nИсходник: src/components/ui/native-select.tsx\n\n```tsx\nimport { NativeSelect } from \"@/components/ui/native-select\"\n```" } } },
} satisfies Meta<typeof NativeSelectDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


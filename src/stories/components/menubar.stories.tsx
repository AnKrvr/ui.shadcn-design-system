import type { Meta, StoryObj } from "@storybook/react-vite"
import { MenubarDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-menubar",
  title: "Components/Menubar",
  component: MenubarDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Организует постоянное меню команд приложения, например «Файл» и «Правка».\n\nДокументация: https://ui.shadcn.com/docs/components/radix/menubar\n\nИсходник: src/components/ui/menubar.tsx\n\n```tsx\nimport { Menubar } from \"@/components/ui/menubar\"\n```" } } },
} satisfies Meta<typeof MenubarDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


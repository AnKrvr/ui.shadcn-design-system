import type { Meta, StoryObj } from "@storybook/react-vite"
import { DrawerDemo } from "@/components/examples/overlay-demos"
const meta = {
  id: "components-drawer",
  title: "Components/Drawer",
  component: DrawerDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Drawer. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/drawer\n\nИсходник: src/components/ui/drawer.tsx" } } },
} satisfies Meta<typeof DrawerDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


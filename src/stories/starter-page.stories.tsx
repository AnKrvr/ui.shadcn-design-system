import type { Meta, StoryObj } from "@storybook/react-vite"
import { StarterPage } from "@/components/examples/starter-page"
const meta = { title: "Страница/Пример", component: StarterPage, parameters: { layout: "fullscreen" } } satisfies Meta<typeof StarterPage>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Стартовый сайт" }

import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputOTPDemo } from "@/components/examples/input-demos"
const meta = {
  id: "components-input-otp",
  title: "Components/Input OTP",
  component: InputOTPDemo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Рабочий пример Input OTP. Поддерживаемые варианты и состояния показаны на этой странице.\n\nДокументация: https://ui.shadcn.com/docs/components/radix/input-otp\n\nИсходник: src/components/ui/input-otp.tsx\n\n```tsx\nimport { InputOTP } from \"@/components/ui/input-otp\"\n```" } } },
} satisfies Meta<typeof InputOTPDemo>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: "Пример" }


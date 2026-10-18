import type { Meta, StoryObj } from "@storybook/react-vite"
import { ProfileForm as ProfileFormExample } from "@/components/examples/starter-page"
import { DataTableDemo, DatePickerDemo } from "@/components/examples/pattern-demos"
const meta = {
  id: "patterns-compositions",
  title: "Паттерны/Формы и данные",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Готовые композиции для страниц: форма с валидацией, таблица с поиском и сортировкой, выбор даты с доступной подписью." } } },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>
export const ProfileForm: Story = { name: "Форма профиля", render: () => <div className="max-w-sm"><ProfileFormExample /></div> }
export const SortableTable: Story = { name: "Поиск и сортировка таблицы", render: () => <DataTableDemo /> }
export const DatePicker: Story = { name: "Выбор даты", render: () => <DatePickerDemo /> }


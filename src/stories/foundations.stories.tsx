import type { Meta, StoryObj } from "@storybook/react-vite"
const meta = { title: "Основы/Токены" } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>
export const Colors: Story = { name: "Цвета", render: () => <div className="grid gap-4 sm:grid-cols-3">{["background","foreground","primary","secondary","muted","accent","destructive","border","ring"].map(name => <div key={name} className="overflow-hidden rounded-lg border"><div className="h-24 border-b" style={{background: `var(--${name})`}} /><div className="p-3 text-sm font-medium">{name}</div></div>)}</div> }
export const Typography: Story = { name: "Типографика", render: () => <div className="space-y-4"><h1 className="text-4xl font-semibold tracking-tight">Сначала — содержание</h1><h2 className="text-2xl font-semibold tracking-tight">Затем — ясная иерархия</h2><p className="max-w-prose text-base leading-7">Системный шрифт, читаемые интервалы и единая шкала размеров помогают собирать согласованные интерфейсы.</p><p className="text-sm text-muted-foreground">Второстепенная подпись · 14 px</p><code className="rounded bg-muted px-2 py-1 text-sm">font-mono</code></div> }
export const Spacing: Story = { name: "Отступы", render: () => <div className="space-y-4">{[1,2,3,4,6,8,12,16].map(n => <div key={n} className="flex items-center gap-4"><span className="w-20 text-sm text-muted-foreground">{n} · {n*4}px</span><div className="h-5 rounded bg-primary" style={{width:n*4}} /></div>)}</div> }
export const Surfaces: Story = { name: "Радиусы и тени", render: () => <div className="flex flex-wrap gap-6">{["sm","md","lg","xl"].map(n => <div key={n} className="grid size-32 place-items-center border bg-card text-sm shadow-sm" style={{borderRadius:`var(--radius-${n})`}}>radius-{n}</div>)}</div> }


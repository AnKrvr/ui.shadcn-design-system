import { useState, type FormEvent } from "react"
import { ArrowDownUp, ArrowRight, Check, Layers, Plus, Github, Component, Code2, Moon, Palette, LayoutTemplate } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ThemeToggle } from "@/components/theme-toggle"
import { DataTable } from "@/components/patterns/data-table"
import { DatePicker } from "@/components/patterns/date-picker"
type Project={name:string;type:string;status:string}
const initialProjects:Project[]=[{name:"Портфолио",type:"Персональный сайт",status:"Опубликован"},{name:"Личный кабинет",type:"Веб-приложение",status:"В работе"},{name:"Страница продукта",type:"Лендинг",status:"Черновик"}]
const columns:ColumnDef<Project>[]=[
  {accessorKey:"name",header:({column})=><Button variant="ghost" className="-ml-2" onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")}>Название<ArrowDownUp className="size-3" /></Button>,cell:({row})=><span className="font-medium">{row.original.name}</span>},
  {accessorKey:"type",header:"Тип",cell:({getValue})=><span className="text-muted-foreground">{getValue<string>()}</span>},
  {accessorKey:"status",header:"Статус",cell:({getValue})=><Badge variant={getValue()==="Опубликован"?"default":"secondary"}>{getValue<string>()}</Badge>},
]
function ProfileForm(){
  const [name,setName]=useState("");const [email,setEmail]=useState("");const [error,setError]=useState(false)
  const submit=(event:FormEvent)=>{event.preventDefault();const invalid=!name.trim()||!/^\S+@\S+\.\S+$/.test(email);setError(invalid);if(!invalid)toast.success("Профиль сохранён")}
  return <form noValidate onSubmit={submit} className="space-y-4"><div className="space-y-2"><Label htmlFor="profile-name">Имя</Label><Input id="profile-name" value={name} onChange={event=>setName(event.target.value)} placeholder="Анастасия" autoComplete="name" aria-invalid={error} aria-describedby={error?"profile-error":undefined} /></div><div className="space-y-2"><Label htmlFor="profile-email">Email</Label><Input id="profile-email" type="email" value={email} onChange={event=>setEmail(event.target.value)} placeholder="designer@example.com" autoComplete="email" aria-invalid={error} aria-describedby={error?"profile-error":undefined} /></div>{error&&<p id="profile-error" role="alert" className="text-sm text-destructive">Укажите имя и корректный email.</p>}<Button type="submit" className="w-full">Сохранить профиль<ArrowRight /></Button></form>
}
function NewProject({onAdd}:{onAdd:(project:Project)=>void}){
 const [open,setOpen]=useState(false);const [name,setName]=useState("")
 return <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><Button><Plus />Новый проект</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Начните с идеи</DialogTitle><DialogDescription>Название можно изменить позже. Проект добавится в демонстрационную таблицу.</DialogDescription></DialogHeader><form onSubmit={event=>{event.preventDefault();if(!name.trim())return;onAdd({name:name.trim(),type:"Новый сайт",status:"Черновик"});setName("");setOpen(false);toast.success("Проект создан")}} className="space-y-5"><div className="space-y-2"><Label htmlFor="project-name">Название проекта</Label><Input id="project-name" value={name} onChange={event=>setName(event.target.value)} placeholder="Мой следующий сайт" required /></div><DialogFooter><Button type="submit">Создать проект</Button></DialogFooter></form></DialogContent></Dialog>
}
export function StarterPage(){
 const [projects,setProjects]=useState(initialProjects);const [date,setDate]=useState<Date>();const [notifications,setNotifications]=useState(true)
 return <div className="min-h-screen">
  <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded focus:bg-background focus:p-3">Перейти к содержимому</a>
  <header className="border-b"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8"><a href="#" className="flex items-center gap-2.5 text-sm font-semibold"><Layers className="size-5" />studio<span className="hidden font-normal text-muted-foreground sm:inline">/ design system</span></a><nav aria-label="Основная навигация" className="flex items-center gap-2"><Button asChild variant="ghost" className="hidden sm:inline-flex"><a href="#components">Компоненты</a></Button><Button asChild variant="ghost" size="icon"><a href="https://github.com/AnKrvr/ui.shadcn-design-system" aria-label="Репозиторий GitHub"><Github /></a></Button><ThemeToggle /></nav></div></header>
  <main id="main" className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
    <section className="grid items-end gap-8 py-14 sm:py-20 lg:grid-cols-[1fr_auto]"><div><Badge variant="outline" className="mb-6 gap-1.5"><span className="size-1.5 rounded-full bg-primary" />Основа для вашего следующего сайта</Badge><h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">От идеи<br className="hidden sm:block" /> к интерфейсу.</h1><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Проверенные компоненты, общие стили и свобода собрать своё. Всё необходимое уже на месте — начните с первого экрана.</p><div className="mt-8 flex flex-wrap gap-3"><NewProject onAdd={project=>setProjects(current=>[...current,project])} /><Button asChild variant="outline"><a href="#components">Посмотреть примеры<ArrowRight /></a></Button></div></div><div className="grid grid-cols-3 gap-8 border-t pt-6 lg:grid-cols-1 lg:gap-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">{[[Component,"67","компонентов и рецептов"],[Moon,"2","темы оформления"],[Code2,"100%","исходного кода"]].map(([Icon,value,label])=>{const I=Icon as typeof Component;return <div key={label as string}><div className="mb-1 flex items-center gap-2"><I className="size-4 text-muted-foreground" /><span className="text-xl font-semibold tracking-tight">{value as string}</span></div><p className="max-w-28 text-xs leading-5 text-muted-foreground">{label as string}</p></div>})}</div></section>
    <Separator />
    <section id="components" className="scroll-mt-8 pt-10"><div className="mb-7 flex flex-wrap items-end justify-between gap-3"><div><p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Компоненты в работе</p><h2 className="text-2xl font-semibold tracking-tight">Маленькие детали. Цельный интерфейс.</h2></div><Badge variant="secondary">Интерактивные примеры</Badge></div>
    <div className="grid min-w-0 gap-5 lg:grid-cols-3">
      <Card className="lg:col-span-2"><CardHeader><CardTitle>Ваши проекты</CardTitle><CardDescription>Таблица с поиском и сортировкой.</CardDescription></CardHeader><CardContent><DataTable columns={columns} data={projects} filterColumn="name" /></CardContent></Card>
      <Card><CardHeader><CardTitle>Профиль</CardTitle><CardDescription>Форма с проверкой ввода и уведомлением.</CardDescription></CardHeader><CardContent><ProfileForm /></CardContent></Card>
      <Card><CardHeader><CardTitle>Важные даты</CardTitle><CardDescription>Календарь в компактном окне.</CardDescription></CardHeader><CardContent className="space-y-4"><Label>Дата запуска</Label><DatePicker value={date} onChange={setDate} /><p className="text-xs leading-5 text-muted-foreground">Выберите день, чтобы увидеть состояние заполненного поля.</p></CardContent></Card>
      <Card><CardHeader><CardTitle>Настройки</CardTitle><CardDescription>Небольшие действия с понятной обратной связью.</CardDescription></CardHeader><CardContent><div className="flex items-start justify-between gap-5"><div><Label htmlFor="notifications">Уведомления</Label><p className="mt-1 text-sm leading-6 text-muted-foreground">Получать обновления о своих проектах</p></div><Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} /></div><Separator className="my-5" /><p className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="size-4" />{notifications?"Уведомления включены":"Уведомления выключены"}</p></CardContent></Card>
      <Card className="bg-muted/30"><CardHeader><CardTitle>Ваша система</CardTitle><CardDescription>Меняйте основу — компоненты подстроятся.</CardDescription></CardHeader><CardContent className="space-y-4"><div className="flex items-center gap-3 text-sm"><Palette className="size-4 text-muted-foreground" />Общая палитра и типографика</div><div className="flex items-center gap-3 text-sm"><LayoutTemplate className="size-4 text-muted-foreground" />Адаптивные композиции</div><div className="flex items-center gap-3 text-sm"><Moon className="size-4 text-muted-foreground" />Светлая и тёмная темы</div><p className="pt-2 text-xs leading-5 text-muted-foreground">Весь каталог и варианты компонентов — в Storybook: npm run storybook.</p></CardContent></Card>
    </div></section>
    <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t pt-6 text-xs text-muted-foreground"><p>Собрано на shadcn/ui. Сделайте своим.</p><a href="https://ui.shadcn.com/docs" className="underline-offset-4 hover:underline">Документация shadcn/ui ↗</a></footer>
  </main>
 </div>
}


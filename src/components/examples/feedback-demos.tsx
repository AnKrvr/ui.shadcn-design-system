import { useState } from "react"
import { CircleCheck, AlertCircle } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { toast } from "sonner"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
export function AlertDemo(){return <div className="max-w-lg space-y-4"><Alert><CircleCheck /><AlertTitle>Изменения сохранены</AlertTitle><AlertDescription>Можно продолжить работу с проектом.</AlertDescription></Alert><Alert variant="destructive"><AlertCircle /><AlertTitle>Не удалось загрузить данные</AlertTitle><AlertDescription>Проверьте соединение и повторите попытку.</AlertDescription></Alert></div>}
export function BadgeDemo(){return <div className="flex flex-wrap gap-3">{(["default","secondary","outline","destructive"] as const).map(variant=><Badge key={variant} variant={variant}>{variant}</Badge>)}</div>}
export function AvatarDemo(){return <div className="flex gap-4"><Avatar><AvatarImage src="/avatar.svg" alt="Абстрактный аватар" /><AvatarFallback>АК</AvatarFallback></Avatar><Avatar><AvatarFallback>DS</AvatarFallback></Avatar></div>}
export function ProgressDemo(){const[value,setValue]=useState(40);return <div className="max-w-sm space-y-4"><Progress value={value} aria-label="Готовность проекта" /><div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">{value}%</span><Button variant="outline" size="sm" onClick={()=>setValue(v=>v>=100?0:v+20)}>{value>=100?"Заново":"+20%"}</Button></div></div>}
export function SkeletonDemo(){return <div role="status" aria-label="Загрузка карточки" className="flex max-w-sm items-center gap-4"><Skeleton className="size-12 rounded-full" /><div className="flex-1 space-y-2"><Skeleton className="h-4 w-3/4" /><Skeleton className="h-4 w-full" /></div><span className="sr-only">Загрузка…</span></div>}
export function SpinnerDemo(){return <div className="flex items-center gap-4"><Spinner className="size-6" aria-label="Загрузка" /><Button disabled><Spinner />Сохранение…</Button></div>}
export function SonnerDemo(){return <div className="flex flex-wrap gap-3"><Button onClick={()=>toast.success("Изменения сохранены")}>Успех</Button><Button variant="outline" onClick={()=>toast.error("Не удалось сохранить")}>Ошибка</Button><Button variant="outline" onClick={()=>toast("Встреча запланирована",{description:"Завтра в 11:00",action:{label:"Отменить",onClick:()=>toast("Встреча отменена")}})}>С действием</Button></div>}
export function KbdDemo(){return <div className="flex items-center gap-3 text-sm text-muted-foreground">Быстрый поиск<KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup></div>}
export function CarouselDemo(){return <div className="px-12"><Carousel className="w-64 max-w-full"><CarouselContent>{[1,2,3,4].map(n=><CarouselItem key={n}><Card><CardContent className="grid aspect-square place-items-center"><span className="text-4xl font-semibold">{n}</span></CardContent></Card></CarouselItem>)}</CarouselContent><CarouselPrevious /><CarouselNext /></Carousel></div>}
const chartConfig={visits:{label:"Посещения",color:"var(--chart-1)"}} satisfies ChartConfig
export function ChartDemo(){return <ChartContainer config={chartConfig} className="h-64 w-full max-w-xl"><BarChart accessibilityLayer data={[{month:"Янв",visits:140},{month:"Фев",visits:220},{month:"Мар",visits:180},{month:"Апр",visits:310},{month:"Май",visits:260}]}><CartesianGrid vertical={false} /><XAxis dataKey="month" tickLine={false} axisLine={false} /><ChartTooltip content={<ChartTooltipContent />} /><Bar dataKey="visits" fill="var(--color-visits)" radius={4} /></BarChart></ChartContainer>}


import { useState } from "react"
import { CalendarDays } from "lucide-react"
import { ru } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
export function DatePicker({value,onChange,disabled=false}:{value?: Date;onChange:(date:Date|undefined)=>void;disabled?:boolean}){
  const [open,setOpen]=useState(false)
  return <Popover open={open} onOpenChange={setOpen}><PopoverTrigger asChild><Button variant="outline" disabled={disabled} className="w-full justify-start font-normal"><CalendarDays />{value ? new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"}).format(value) : "Выберите дату"}</Button></PopoverTrigger><PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" locale={ru} selected={value} onSelect={date=>{onChange(date);if(date)setOpen(false)}} /></PopoverContent></Popover>
}


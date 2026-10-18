import { useId, useState } from "react"
import { ArrowDownUp } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DatePicker } from "@/components/patterns/date-picker"
import { DataTable } from "@/components/patterns/data-table"
export { TypographyDemo } from "@/components/patterns/typography"
export function DatePickerDemo(){
  const[value,setValue]=useState<Date>()
  const id=useId()
  return <div className="max-w-sm space-y-2"><Label htmlFor={id}>Дата события</Label><DatePicker id={id} value={value} onChange={setValue} /></div>
}
type Row={name:string;status:string}
const columns:ColumnDef<Row>[]=[
  {accessorKey:"name",header:({column})=><Button variant="ghost" className="-ml-2" onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")}>Название<ArrowDownUp className="size-3" /></Button>},
  {accessorKey:"status",header:"Статус"}
]
export function DataTableDemo(){return <DataTable columns={columns} filterColumn="name" data={[{name:"Портфолио",status:"Опубликован"},{name:"Личный кабинет",status:"В работе"}]} />}


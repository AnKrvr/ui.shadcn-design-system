import { useState } from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { DatePicker } from "@/components/patterns/date-picker"
import { DataTable } from "@/components/patterns/data-table"
export { TypographyDemo } from "@/components/patterns/typography"
export function DatePickerDemo(){const[value,setValue]=useState<Date>();return <div className="max-w-sm"><DatePicker value={value} onChange={setValue} /></div>}
type Row={name:string;status:string}
const columns:ColumnDef<Row>[]=[{accessorKey:"name",header:"Название"},{accessorKey:"status",header:"Статус"}]
export function DataTableDemo(){return <DataTable columns={columns} filterColumn="name" data={[{name:"Портфолио",status:"Опубликован"},{name:"Личный кабинет",status:"В работе"}]} />}


import { useState } from "react"
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable, type ColumnDef, type SortingState, type ColumnFiltersState } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
export function DataTable<TData,TValue>({columns,data,filterColumn}:{columns:ColumnDef<TData,TValue>[];data:TData[];filterColumn?:string}){
  const [sorting,setSorting]=useState<SortingState>([])
  const [columnFilters,setColumnFilters]=useState<ColumnFiltersState>([])
  const table=useReactTable({data,columns,state:{sorting,columnFilters},onSortingChange:setSorting,onColumnFiltersChange:setColumnFilters,getCoreRowModel:getCoreRowModel(),getSortedRowModel:getSortedRowModel(),getFilteredRowModel:getFilteredRowModel()})
  return <div className="min-w-0 space-y-4">{filterColumn && <Input aria-label="Поиск по проектам" placeholder="Найти проект…" value={(table.getColumn(filterColumn)?.getFilterValue() as string)??""} onChange={event=>table.getColumn(filterColumn)?.setFilterValue(event.target.value)} className="max-w-sm" />}<div className="overflow-x-auto rounded-lg border"><Table><TableHeader>{table.getHeaderGroups().map(group=><TableRow key={group.id}>{group.headers.map(header=><TableHead key={header.id}>{header.isPlaceholder?null:flexRender(header.column.columnDef.header,header.getContext())}</TableHead>)}</TableRow>)}</TableHeader><TableBody>{table.getRowModel().rows.length?table.getRowModel().rows.map(row=><TableRow key={row.id}>{row.getVisibleCells().map(cell=><TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell,cell.getContext())}</TableCell>)}</TableRow>):<TableRow><TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">Проекты не найдены. Попробуйте другой запрос.</TableCell></TableRow>}</TableBody></Table></div></div>
}


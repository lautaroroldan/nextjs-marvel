"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "./table-pagination"
import SearchInput from "./input-search"

interface DataTableProps<TData, TValue> {
    title: string,
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    pagination: {
        totalResults: number
        totalPages: number
        actualPage: number
    }
}


export function DataTable<TData, TValue>({
    title,
    columns,
    data,
    pagination
}: DataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        getFilteredRowModel: getFilteredRowModel(),
        rowCount: pagination.totalResults,
    })

    return (
        <div>

            <div className="flex items-center py-4 justify-between">
                <h1 className="text-4xl font-bold">{title}</h1>
                <SearchInput
                    placeholder="Filter names..."
                />
            </div>
            <div className="rounded-md border mb-4 overflow-y-auto overflow-x-auto">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <DataTablePagination table={table} totalPages={pagination.totalPages} />
            </div>
        </div >
    )
}
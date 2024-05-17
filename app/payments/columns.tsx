"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "modified",
        header: "Modified",
        cell: ({ row }) => {
            const date = new Date(row.getValue("modified"))
            return <div>{date.toLocaleDateString()}</div>
        }
    },
]

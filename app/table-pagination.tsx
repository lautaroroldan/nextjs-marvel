'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { Table } from "@tanstack/react-table"
import { ButtonPagination } from "./button-pagination"

interface DataTablePaginationProps {
    table: Table<any>
    totalPages: number
}

export function DataTablePagination({
    table,
    totalPages
}: DataTablePaginationProps) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const currentPage = Number(searchParams.get('page')) || 1

    function handlePreviousPage() {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('page', String(currentPage - 1))
        const newUrl = `${pathname}?${newSearchParams.toString()}`;
        replace(newUrl)
        table.previousPage()
    }

    function handleNextPage() {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('page', String(currentPage + 1))
        const newUrl = `${pathname}?${newSearchParams.toString()}`;
        replace(newUrl)
        table.nextPage()
    }

    return (
        <div className="flex justify-center">
            <div className="flex items-center space-x-2 self-center">
                <ButtonPagination
                    onClick={handlePreviousPage}
                    disabled={!table.getCanPreviousPage()}
                >
                    <span className="flex items-center">
                        <IconChevronLeft size={14} stroke={2} />
                        Previous
                    </span>
                </ButtonPagination>

                {
                    Array.from({ length: totalPages }, (_, i) => {

                        if (totalPages == i) {
                            return (
                                <ButtonPagination
                                    key={i}
                                    onClick={() => {
                                        const newSearchParams = new URLSearchParams(searchParams)
                                        newSearchParams.set('page', String(i + 1))
                                        const newUrl = `${pathname}?${newSearchParams.toString()}`
                                        replace(newUrl)
                                        table.setPageIndex(i)
                                    }}
                                    className="bg-red-600 "
                                >
                                    {i + 1}
                                </ButtonPagination>
                            )
                        }

                        return (
                            <ButtonPagination
                                key={i}
                                onClick={() => {
                                    const newSearchParams = new URLSearchParams(searchParams)
                                    newSearchParams.set('page', String(i + 1))
                                    const newUrl = `${pathname}?${newSearchParams.toString()}`
                                    replace(newUrl)
                                    table.setPageIndex(i)
                                }}
                            >
                                {i + 1}
                            </ButtonPagination>
                        )
                    })
                }

                <ButtonPagination
                    onClick={handleNextPage}
                    disabled={!table.getCanNextPage()}
                >
                    <span className="flex items-center">
                        Next
                        <IconChevronRight size={14} stroke={2} />
                    </span>
                </ButtonPagination>
            </div>
        </div>
    )
}

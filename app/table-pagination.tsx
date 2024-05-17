import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface DataTablePaginationProps {
}

export function DataTablePagination({
}: DataTablePaginationProps) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    return (
        <div className="flex items-center justify-between px-2">
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                Page {Number(searchParams.get('offset')) + 1}
            </div>
            <div className="flex items-center space-x-2">
                <Button
                    variant="outline"
                    className="p-2 lg:flex"
                    onClick={() => replace(`${pathname}?offset=0`)}
                // disabled={!table.getCanPreviousPage()}
                >
                    <span>Go to first page</span>
                </Button>
                <Button
                    variant="outline"
                    className="p-2"
                    onClick={() => replace(`${pathname}?offset=${Number(searchParams.get('offset')) - 1}`)}
                // disabled={!table.getCanPreviousPage()}
                >
                    <span>Go to previous page</span>
                </Button>
                <Button
                    variant="outline"
                    className="p-2"
                    onClick={() => replace(`${pathname}?offset=${Number(searchParams.get('offset')) + 10}`)}
                // disabled={!table.getCanNextPage()}
                >
                    <span >Go to next page</span>
                </Button>
                {/* <Button
                    variant="outline"
                    className="hidden h-8 w-8 p-0 lg:flex"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    <span className="sr-only">Go to last page</span>
                </Button> */}
            </div>
        </div>
    )
}

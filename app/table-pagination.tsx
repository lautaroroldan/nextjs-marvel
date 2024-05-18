'use client'

import { Button } from "@/components/ui/button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

interface DataTablePaginationProps {
}

interface ButtonPaginationProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
    className?: string
    onClick: () => void
    children: React.ReactNode
}

const ButtonPagination = ({ variant = "ghost", className = "p-2 px-3", onClick, children }: ButtonPaginationProps) => (
    <Button
        variant={variant}
        className={className}
        onClick={onClick}
    >
        {children}
    </Button>
)

export function DataTablePagination({
}: DataTablePaginationProps) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    return (
        <div className="flex justify-center">
            <div className="flex items-center space-x-2 self-center">
                <ButtonPagination
                    onClick={() => replace(`${pathname}?offset=${Number(searchParams.get('offset')) - 10}`)}
                >
                    <span className="flex items-center">
                        <IconChevronLeft size={14} stroke={2} />
                        Previous
                    </span>
                </ButtonPagination>
                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Page {Number(searchParams.get('offset')) + 1}
                </div>
                <ButtonPagination
                    onClick={() => replace(`${pathname}?offset=${Number(searchParams.get('offset')) + 10}`)}
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

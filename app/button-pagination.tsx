import { Button } from "@/components/ui/button"

interface ButtonPaginationProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
    className?: string
    onClick: () => void
    children: React.ReactNode
    disabled?: boolean
}

export const ButtonPagination = ({ variant = "ghost", className, onClick, children, disabled }: ButtonPaginationProps) => (
    <Button
        variant={variant}
        className={className}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </Button>
)
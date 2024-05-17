'use client'

import { Input } from "@/components/ui/input"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

export default function SearchInput({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()
    function handleSearch(e: string) {
        const params = new URLSearchParams(searchParams)
        if (e) {
            params.set('search', e)
        }
        else {
            params.delete('search')
        }
        replace(`${pathName}?${params.toString()}`)
    }

    return (
        <Input
            placeholder={placeholder}
            className="w-full"
            onChange={(e) => handleSearch(e.target.value)}
        />
    )
}
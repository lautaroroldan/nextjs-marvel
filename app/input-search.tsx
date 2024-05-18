'use client'

import { Input } from "@/components/ui/input"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

const DEBOUNCE_TIME = 300

export default function SearchInput({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((e: string) => {
        const params = new URLSearchParams(searchParams)
        if (e) {
            params.set('query', e)
        }
        else {
            params.delete('query')
        }
        replace(`${pathName}?${params.toString()}`)
    }, DEBOUNCE_TIME)

    return (
        <Input
            placeholder={placeholder}
            className="max-w-sm focus-visible:ring-0"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get('query') || ""}
        />
    )
}
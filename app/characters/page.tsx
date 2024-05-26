import { getAllCharacters } from "@/components/services/Character"
import { Character, columns } from "./columns"
import { DataTable } from "../data-table"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Marvel Characters',
    description: 'Marvel Characters from the Marvel API.',
}

export default async function CharactersPage({
    searchParams,
}: {
    searchParams?: {
        page?: string
        query?: string
    }
}) {
    const currentPage = searchParams?.page || 1
    const queryText = searchParams?.query || ""
    const PAGE_SIZE = 20
    const data = await getAllCharacters({
        nameStartsWith: queryText,
        offset: (Number(currentPage) - 1) * PAGE_SIZE,
        limit: PAGE_SIZE,
    })

    console.log('totalPages', Math.ceil(data.data.total / data.data.limit))
    return (
        <div className="mx-auto">
            <DataTable columns={columns} data={data.data.results} pagination={{
                totalResults: data.data.total,
                totalPages: Math.ceil(data.data.total / data.data.limit),
                actualPage: data.data.offset / data.data.limit + 1,
            }} />
        </div>
    )
}
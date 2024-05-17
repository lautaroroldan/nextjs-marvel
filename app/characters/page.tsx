import { getAllCharacters } from "@/components/services/Character"
import { Payment, columns } from "./columns"
import { DataTable } from "../data-table"

async function getCharacteres(offset: number, limit: number): Promise<any> {
    const characters = await getAllCharacters({ offset, limit })
    console.log(characters)
    return characters?.results ?? []
}

export default async function DemoPage({
    searchParams,
}: {
    searchParams?: {
        page?: string
        query?: string
    }
}) {
    const currentPage = Number(searchParams?.page) || 1
    const query = searchParams?.query || ""
    const data = await getCharacteres(currentPage, 10)

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
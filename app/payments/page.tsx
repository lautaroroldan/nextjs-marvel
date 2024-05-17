import { getAllCharacters } from "@/components/services/Character"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getCharacteres(offset: number, limit: number): Promise<any> {
    const characters = await getAllCharacters({ offset, limit })
    console.log(characters)
    return characters?.results ?? []
}

export default async function DemoPage({
    searchParams = {
        offset: 0,
        limit: 20,
    },
}: {
    searchParams?: {
        offset: number
        limit: number
    }
}) {
    const data = await getCharacteres(searchParams.offset, searchParams.limit)

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
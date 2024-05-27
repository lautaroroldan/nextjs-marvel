import { getAllComics } from "@/components/services/Comics"
import { DataTable } from "../data-table"
import { columns } from "./columns"


export default async function Page({
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
    const data = await getAllComics({
        titleStartsWith: queryText,
        offset: (Number(currentPage) - 1) * PAGE_SIZE,
        limit: PAGE_SIZE,
    })

    return (
        <div className="mx-auto">
            <DataTable title="Marvel Comics" columns={columns} data={data.data.results} pagination={{
                totalResults: data.data.total,
                totalPages: Math.ceil(data.data.total / data.data.limit),
                actualPage: data.data.offset / data.data.limit + 1,
            }} />
        </div>
    )
}
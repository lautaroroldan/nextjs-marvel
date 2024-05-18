import CharacterTable from "./characters-table"

export default async function CharactersPage({
    searchParams,
}: {
    searchParams?: {
        page?: string
        query?: string
    }
}) {

    return (
        <div className="mx-auto py-10">
            <CharacterTable page={Number(searchParams?.page)} query={searchParams?.query ?? ''} />
        </div>
    )
}
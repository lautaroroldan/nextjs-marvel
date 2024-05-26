import { getCharacterById } from '@/components/services/Character'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

export async function generateMetadata(
    { params, searchParams }: { params: { id: string }; searchParams: URLSearchParams },
    parent: ResolvingMetadata
): Promise<Metadata> {

    const id = Number(params?.id)
    const { results: character } = await (await getCharacterById(id)).data

    return {
        title: character[0].name,
    }
}

async function CharacterInfo({
    params,
}: {
    params?: {
        id?: string
    }
}) {
    const id = Number(params?.id)
    const { results: character } = await (await getCharacterById(id)).data
    return (
        <div
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 md:p-0 mt-0 md:mt-8"
        >
            <div className="flex-shrink-0">
                <img
                    alt="Comic Character"
                    className="rounded-lg"
                    height="500"
                    src={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`}
                    style={{
                        aspectRatio: "500/500",
                        objectFit: "cover",
                    }}
                    width="500"
                />
            </div>
            <div className="space-y-4 text-center md:text-left w-full">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl align-top">{character[0].name}</h1>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                    {character[0].description || "No description available"}
                </p>
                <div className="grid gap-2">
                    <h2 className="text-xl font-semibold">Appearances</h2>
                    <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400 max-h-[250px] overflow-y-auto text-left">
                        {character[0].comics.items.map((comic) => (
                            <li key={comic.resourceURI}>
                                {comic.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterInfo
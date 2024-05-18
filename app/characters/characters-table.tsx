'use server'
import { getAllCharacters } from '@/components/services/Character'
import React, { Suspense } from 'react'
import { Character, columns } from './columns'
import SkeletonTable from '../skeleton-table'
import { DataTable } from '../data-table'
async function getCharacteres(query: string, offset: number, limit: number): Promise<Character[]> {
    const characters = await getAllCharacters({ nameStartsWith: query, offset, limit })
    return characters?.data.results ?? []
}
async function CharacterTable({ page, query }: { page: number, query: string }) {
    const currentPage = page || 1
    const queryText = query
    const data = await getCharacteres(query, 0, 10)
    return (
        <>
            <Suspense
                key={queryText + currentPage}
                fallback={<h2>CARGANDOOOOO</h2>}>
                <DataTable columns={columns} data={data} />
            </Suspense>
        </>
    )
}

export default CharacterTable
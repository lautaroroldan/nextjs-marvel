"use client"
import { z } from "zod"
import { Thumbnail, Url } from "../characters/columns"
import { ColumnDef } from "@tanstack/react-table"
import { IconPencil } from "@tabler/icons-react"

const Creator = z.object({
    available: z.number(),
    returned: z.number(),
    collectionURI: z.string(),
    items: z.array(z.object({
        resourceURI: z.string(),
        name: z.string(),
        role: z.string(),
    })),
})

const Comic = z.object({
    id: z.number(),
    digitalId: z.number(),
    title: z.string(),
    issueNumber: z.number(),
    variantDescription: z.string(),
    description: z.string(),
    modified: z.date(),
    isbn: z.string(),
    upc: z.string(),
    diamondCode: z.string(),
    ean: z.string(),
    issn: z.string(),
    format: z.string(),
    pageCount: z.number(),
    textObjects: z.array(z.object({
        type: z.string(),
        language: z.string(),
        text: z.string(),
    })),
    resourceURI: z.string(),
    urls: z.array(Url),
    series: z.object({
        resourceURI: z.string(),
        name: z.string(),
    }),
    variants: z.array(z.object({
        resourceURI: z.string(),
        name: z.string(),
    })),
    collections: z.array(z.object({
        resourceURI: z.string(),
        name: z.string(),
    })),
    collectedIssues: z.array(z.object({
        resourceURI: z.string(),
        name: z.string(),
    })),
    dates: z.array(z.object({
        type: z.string(),
        date: z.date(),
    })),
    prices: z.array(z.object({
        type: z.string(),
        price: z.bigint(),
    })),
    thumbnail: Thumbnail,
    images: z.array(Thumbnail),
    creators: Creator,
    characters: z.object({
        available: z.number(),
        returned: z.number(),
        collectionURI: z.string(),
        items: z.array(z.object({
            resourceURI: z.string(),
            name: z.string(),
            role: z.string(),
        })),
    }),
    stories: z.object({
        available: z.number(),
        returned: z.number(),
        collectionURI: z.string(),
        items: z.array(z.object({
            resourceURI: z.string(),
            name: z.string(),
            type: z.string(),
        })),
    }),
    events: z.object({
        available: z.number(),
        returned: z.number(),
        collectionURI: z.string(),
        items: z.array(z.object({
            resourceURI: z.string(),
            name: z.string(),
        })),
    }),
})

export type Comic = z.infer<typeof Comic>
export type Creator = z.infer<typeof Creator>
export const columns: ColumnDef<Comic>[] = [
    {
        accessorKey: 'thumbnail',
        header: 'Image',
        cell: ({ row }) => {
            const imageVariant = 'standard_medium'
            const thumbnail: Thumbnail = row.getValue('thumbnail')
            return (
                <img
                    src={`${thumbnail.path}/${imageVariant}.${thumbnail.extension}`}
                    alt={row.getValue('title')}
                    className="w-10 h-10"
                />
            )
        }
    },
    {
        accessorKey: 'title',
        header: 'Title',
    },
    {
        accessorKey: 'creators',
        header: 'Creators',
        cell: ({ row }) => {
            const creators: Creator = row.getValue('creators')
            return (
                <div className="flex gap-2">
                    <IconPencil stroke={2} />
                    {creators.available}
                </div>
            )
        }
    },
    {
        accessorKey: 'characters',
        header: 'Characters',
        cell: ({ row }) => {
            const characters = row.getValue('characters')
            return (
                <div className="flex gap-2">
                    <IconPencil stroke={2} />
                    {characters.available}
                </div>
            )
        }
    }
]
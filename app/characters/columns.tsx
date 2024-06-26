"use client"

import { ColumnDef } from "@tanstack/react-table"
import { z } from "zod"
import { IconBook2, IconClock, IconInfoCircle, IconStar } from '@tabler/icons-react';
import Link from "next/link";

const Comic = z.object({
    available: z.number(),
    returned: z.number(),
    collectionURI: z.string(),
    items: z.array(z.object({
        resourceURI: z.string(),
        name: z.string(),
    })),
})

const Story = z.object({
    available: z.number(),
    returned: z.number(),
    collectionURI: z.string(),
    items: z.array(z.object({
        resourceURI: z.string(),
        name: z.string(),
        type: z.string(),
    })),
})

const Event = z.object({
    available: z.number(),
    returned: z.number(),
    collectionURI: z.string(),
    items: z.array(z.object({
        resourceURI: z.string(),
        name: z.string(),
    })),
})

const Serie = z.object({
    available: z.number(),
    returned: z.number(),
    collectionURI: z.string(),
    items: z.array(z.object({
        resourceURI: z.string(),
        name: z.string(),
    })),
})

export const Thumbnail = z.object({
    path: z.string(),
    extension: z.string(),
})

export const Url = z.object({
    type: z.string(),
    url: z.string(),
})

const Character = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    modified: z.date(),
    resourceURI: z.string(),
    urls: z.array(Url),
    thumbnail: Thumbnail,
    comics: Comic,
    stories: Story,
    events: Event,
    series: Serie,
})

export type Event = z.infer<typeof Event>
export type Comic = z.infer<typeof Comic>
export type Thumbnail = z.infer<typeof Thumbnail>
export type Character = z.infer<typeof Character>

export const columns: ColumnDef<Character>[] = [
    {
        accessorKey: 'thumbnail',
        header: 'Image',
        cell: ({ row }) => {
            const imageVariant = 'standard_medium'
            const thumbnail: Thumbnail = row.getValue('thumbnail')
            return (
                <img
                    src={`${thumbnail.path}/${imageVariant}.${thumbnail.extension}`}
                    alt={row.getValue('name')}
                    className="w-10 h-10"
                />
            )
        }
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "modified",
        header: "Modified",
        cell: ({ row }) => {
            const date = new Date(row.getValue("modified"))
            return <div className="flex gap-2 items-center">
                <IconClock stroke={2} />
                {date.toLocaleDateString('en-EU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })}
            </div>
        }
    },
    {
        accessorKey: "comics",
        header: "Comics",
        cell: ({ row }) => {
            const comics: Comic = row.getValue("comics")
            return <div className="flex gap-2 items-center">
                <IconBook2 stroke={2} />
                {comics.available}
            </div>
        }
    },
    {
        accessorKey: "events",
        header: "Events",
        cell: ({ row }) => {
            const events: Event = row.getValue("events")
            return <div className="flex gap-2 items-center">
                <IconStar stroke={2} />
                {events.available}
            </div>
        }
    },
    {
        accessorKey: "id",
        header: "Info",
        cell: ({ row }) => {
            const id = row.getValue("id")
            return (
                <Link href={`/characters/${id}`}>
                    <IconInfoCircle stroke={2} />
                </Link>
            )
        }
    }
]

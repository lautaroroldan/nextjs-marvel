import { Character } from "@/app/characters/columns";

export const PUBLIC_KEY = '1d1f4d2fa728d33fb88d02b90bc44681'
export const PRIVATE_KEY = 'a6f175d3b9e6e07f632233e01fb4f2861f2961c3'
export const HASH_KEY = 'febf7c3aa8b6f76d5c7c2c9dc9f0e3db'
const crypto = require('crypto');

// encodeURIComponent(`/v1/public/characters?ts=1685640514654&apikey=${PUBLIC_KEY}&hash=${HASH_KEY}`)
const url = `https://gateway.marvel.com:443/v1/public/`

type ResponseType<T> = {
    code: number
    status: string
    copyright: string
    attributionText: string
    attributionHTML: string
    etag: string
    data: {
        offset: number
        limit: number
        total: number
        count: number
        results: T[]
    }

}

export function getAllCharacters(params: { nameStartsWith?: string, modifiedSince?: string, comics?: string, series?: string, events?: string, stories?: string, orderBy?: string, limit?: number, offset?: number }): Promise<ResponseType<Character>> {
    const ts = Date.now()
    const hash = crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex')
    const urlParams = new URLSearchParams({
        limit: Number(params.limit).toString(),
        offset: Number(params.offset).toString(),
    })
    if (params.nameStartsWith) urlParams.append('nameStartsWith', params.nameStartsWith)
    return fetch(url + `characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&` + urlParams, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then((resp) => resp.json())
}
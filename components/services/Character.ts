'use server'
import { Character } from "@/app/characters/columns";
import { crypto, PRIVATE_KEY, PUBLIC_KEY, ResponseType, url } from "./Request";

export async function getAllCharacters(params: { nameStartsWith?: string, modifiedSince?: string, comics?: string, series?: string, events?: string, stories?: string, orderBy?: string, limit?: number, offset?: number }): Promise<ResponseType<Character>> {
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

export async function getCharacterById(id: number): Promise<ResponseType<Character>> {
    const ts = Date.now()
    const hash = crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex')
    return fetch(url + `characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then((resp) => resp.json())
}
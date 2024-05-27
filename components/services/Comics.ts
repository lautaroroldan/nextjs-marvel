'use server'

import { crypto, PRIVATE_KEY, PUBLIC_KEY, ResponseType, url } from "./Request";

export async function getAllComics(params: {
    title?: string,
    titleStartsWith?: string,
    limit?: number,
    offset?: number
}): Promise<ResponseType<any>> {
    const ts = Date.now()
    const hash = crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex')
    const urlParams = new URLSearchParams({
        limit: Number(params.limit).toString(),
        offset: Number(params.offset).toString(),
    })
    if (params.titleStartsWith) urlParams.append('titleStartsWith', params.titleStartsWith)
    return fetch(url + `comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&` + urlParams, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then((resp) => resp.json())

}
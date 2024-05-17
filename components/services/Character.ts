export const PUBLIC_KEY = '1d1f4d2fa728d33fb88d02b90bc44681'
export const PRIVATE_KEY = 'a6f175d3b9e6e07f632233e01fb4f2861f2961c3'
export const HASH_KEY = 'febf7c3aa8b6f76d5c7c2c9dc9f0e3db'
const crypto = require('crypto');

// encodeURIComponent(`/v1/public/characters?ts=1685640514654&apikey=${PUBLIC_KEY}&hash=${HASH_KEY}`)
const url = `https://gateway.marvel.com:443/v1/public/`

export function getAllCharacters(params: { nameStartsWith?: string, modifiedSince?: string, comics?: string, series?: string, events?: string, stories?: string, orderBy?: string, limit?: number, offset?: number }) {
    const ts = Date.now()
    const hash = crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex')
    return fetch(url + `characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&` + new URLSearchParams({
        nameStartsWith: 'S',
        limit: Number(params.limit).toString(),
        offset: Number(params.offset).toString(),
    }), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then((resp) => resp.json())
        .then((response) => {
            return response.data
        })
}
export const PUBLIC_KEY = '1d1f4d2fa728d33fb88d02b90bc44681'
export const PRIVATE_KEY = 'a6f175d3b9e6e07f632233e01fb4f2861f2961c3'
export const HASH_KEY = 'febf7c3aa8b6f76d5c7c2c9dc9f0e3db'

export const crypto = require('crypto');
export const url = `https://gateway.marvel.com:443/v1/public/`

export type ResponseType<T> = {
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
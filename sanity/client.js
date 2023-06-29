import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: 'rujaqcat',
    dataset: 'production',
    apiVersion: '2023-05-23',
    useCdn: true,
})


export const builder = createImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export async function createPost(post) {
    const result = client.create(post)
    return result
}
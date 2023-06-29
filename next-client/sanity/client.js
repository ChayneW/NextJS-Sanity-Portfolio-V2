// import createClient from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: 'rujaqcat',
    dataset: 'production',
    apiVersion: '2023-05-23',
    useCdn: true,
    // token: 'skMfqu0koFOndlB95PKMGhpAU72q0yWaSDWtM4j3lOcKGMoMV4QUuYauFOkVES5FjkmIYR16TclZLoxmhZkw0GXRgvEl2v0ItXvI1ke1YES6OiheBmhkww4Xw4AuYubXRqiL6BDmnD8CVyGZPeA4z8TnJ59yTJG6q9DJQrOF3j5ry8LJKiMj',
})


export const builder = createImageUrlBuilder(client)

// export const urlFor = (source) => createImageUrlBuilder(client).image(source)

export const urlFor = (source) => builder.image(source)

export async function createPost(post) {
    const result = client.create(post)
    return result
}
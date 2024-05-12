import React from 'react'

export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  )
  // incremental static regeneration ISR ^

  // can be applied to either type of component, show the data for 60 seconds before it is revalidated - benefit of SSR and if the page updates e.g. weather forecasting etc. like get user posts

  if (!res.ok) undefined

  return res.json()
}

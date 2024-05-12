type Props = {
  promise: Promise<Post[]>
}

import React from 'react'

export default async function UserPosts({ promise }: Props) {
  const posts = await promise

  const content = posts.map((post) => {
    return (
      <article key={post.id} className='flex flex-col p-5 lg:px-48 lg:py-11'>
        <h2 className='font-bold text-2xl mb-2'>{post.title}</h2>
        <p className='my-3'>{post.body}</p>
        <br />
      </article>
    )
  })
  return content
}

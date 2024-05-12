import React from 'react'
import getUser from '@/lib/getuser'
import getUserPosts from '@/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  if (!user.name) {
    return {
      title: 'User Not Found',
    }
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  }
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)

  // const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData

  if (!user.name) return notFound()

  return (
    <>
      <h2 className='font-bebas-neue uppercase sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800 py-4 px-12'>
        {user.name}
      </h2>
      <br />
      {/* Only loads a certain section of the page instead of the whole tree */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>

      <Link
        href='/users'
        className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 w-full'
      >
        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full'>
          Back to Users
        </span>
      </Link>
    </>
  )
}

// generate the static pages in advance thanks to the genration of the static parameters, SSG and not SSR - this still follows our ISR strategy

// Next.js generally recommends SSG where possible
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData

  return users.map((user) => ({
    userId: user.id.toString(),
  }))
}

import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Users',
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers()

  const users = await usersData

  const content = (
    <section className='mx-auto max-w-3xl flex flex-col items-center justify-center min-h-screen'>
      <h1 className='font-bebas-neue  sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800 py-4 px-12 '>
        Check out our blog posts
      </h1>
      <br />
      <div className='mt-2 relative z-10'>
        <ul className='mt-8 mx-auto max-w-xs text-left font-medium text-lg leading-none border-green-200 divide-y divide-green-200'>
          {users.map((user) => {
            return (
              <>
                <li key={user.id}>
                  <a className='py-3.5 w-full flex items-center text-green-100 hover:text-green-700 hover:bg-blue-50'>
                    <span className='ml-5 mr-2.5 w-1 h-7 bg-green-500 rounded-r-md'></span>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                  </a>
                </li>
              </>
            )
          })}
        </ul>
      </div>
      <div className='mt-8'>
        <h3>
          <Link
            href='/'
            className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 w-full'
          >
            <span className='relative px-5 py-2.5 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full'>
              Want to go back?
            </span>
          </Link>
        </h3>
      </div>
    </section>
  )

  return content
}

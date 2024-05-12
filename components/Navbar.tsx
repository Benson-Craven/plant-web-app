import Link from 'next/link'
import leafImg from '../public/images/leaf.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2 mb-8'>
      <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
        <div className='flex items-center justify-between w-full md:w-auto'>
          <Link href='/' aria-label='Home'>
            <Image src={leafImg} alt='Leaf logo' height={40} width={40} />
          </Link>
          <div className='-mr-2 flex items-center md:hidden'>
            <button
              type='button'
              id='main-menu'
              aria-label='Main menu'
              aria-haspopup='true'
              className='inline-flex items-center justify-center p-2 rounded-md text-green-300 hover:text-green-100 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-green-300 transition duration-150 ease-in-out'
            >
              <svg
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
                className='h-6 w-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='hidden md:flex md:space-x-10'>
        <Link
          href='#features'
          className='font-medium text-green-300 hover:text-green-200 transition duration-150 ease-in-out'
        >
          Features
        </Link>
        <Link
          href='#pricing'
          className='font-medium text-green-300 hover:text-green-200 transition duration-150 ease-in-out'
        >
          Pricing
        </Link>
        <Link
          href='/blog'
          className='font-medium text-green-300 hover:text-green-200 transition duration-150 ease-in-out'
        >
          Blog
        </Link>
        <Link
          href='https://docs.pingping.io'
          target='_blank'
          className='font-medium text-green-300 hover:text-green-200 transition duration-150 ease-in-out'
        >
          Docs
        </Link>
      </div>
      <div className='hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0'>
        <span className='inline-flex'>
          <Link
            href='/login'
            className='inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-green-600 hover:text-green-500 focus:outline-none transition duration-150 ease-in-out'
          >
            Login
          </Link>
        </span>
        <span className='inline-flex rounded-md shadow ml-2'>
          <Link
            href='/signup'
            className='inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 transition duration-150 ease-in-out'
          >
            Get started
          </Link>
        </span>
      </div>
    </nav>
  )
}

export default Navbar

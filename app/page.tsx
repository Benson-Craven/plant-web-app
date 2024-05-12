import Image from 'next/image'
import Link from 'next/link'
import leafImg from '../public/images/leaves.avif'

export default function Home() {
  return (
    <main>
      <div className='flex flex-wrap'>
        <div className='w-full sm:w-8/12 mb-10'>
          <div className='container mx-auto h-full sm:p-10'>
            <nav className='flex px-4 justify-between items-center'>
              <div className='font-bebas-neue  sm:text-8xl font-black leading-none dark:text-white text-gray-800 py-4 '>
                Plant<span className='text-green-600'>.</span>
              </div>
              <div>
                {/* <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"> */}
              </div>
            </nav>
            <header className='container px-4 lg:flex mt-10 items-center h-full lg:mt-0'>
              <div className='w-full'>
                <h1 className='text-4xl lg:text-6xl font-bold'>
                  Find your <span className='text-green-700'>greeny</span> stuff
                  for your room
                </h1>
                <div className='w-20 h-2 bg-green-700 my-4'></div>
                <p className='text-xl mb-10'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae maiores neque eaque ea odit placeat, tenetur illum
                  distinctio nulla voluptatum a corrupti beatae tempora aperiam
                  quia id aliquam possimus aut.
                </p>

                {/* Button detailing the user to join the community and see the blog posts */}
                <h3>
                  <Link
                    href='/users'
                    className='relative inline-flex items-center justify-center p-0.5 mt-8 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 w-full'
                  >
                    <span className='relative px-5 py-2.5 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full'>
                      Join Our Community
                    </span>
                  </Link>
                </h3>
              </div>
            </header>
          </div>
        </div>
        <Image
          src={leafImg}
          alt='Description of the image'
          width={300}
          height={200}
          className='object-cover'
        />
      </div>
    </main>
  )
}

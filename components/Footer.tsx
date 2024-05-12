// components/Footer.js
import Link from 'next/link'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-green-950 text-white py-8 mt-8'>
      <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div>
          <h3 className='text-lg font-bold mb-4'>Plants in a Box</h3>
          <ul>
            <li>
              <Link href='/support'>Support</Link>
            </li>
            <li>
              <Link href='/about'>Our brand</Link>
            </li>
            <li>
              <Link href='/promise'>Plant Promise</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-4'>Help</h3>
          <ul>
            <li>
              <Link href='/help'>Help + FAQs</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-4'>Services</h3>
          <ul>
            <li>
              <Link href='/discounts'>Discounts</Link>
            </li>
            <li>
              <Link href='/delivery'>Delivery</Link>
            </li>
            <li>
              <Link href='/corporate-orders'>Corporate Orders</Link>
            </li>
            <li>
              <Link href='/contact'>Contact Support</Link>
            </li>
            <li>
              <Link href='/refer'>Refer A Friend</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
          <ul className='flex space-x-4'>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-instagram fa-2x'></i>
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-facebook fa-2x'></i>
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-pinterest fa-2x'></i>
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-youtube fa-2x'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='container mx-auto mt-8 text-center text-sm'>
        <p>&copy; {year} Plant. - Privacy - Terms</p>
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <p>Made by BensonBytes.co</p>
      </div>
    </footer>
  )
}

export default Footer

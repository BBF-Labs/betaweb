import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <>
      <section className='scroll-mt-16 min-h-screen text-white bg-black flex items-center'>
        <div className='px-4 md:px-6 mx-auto text-center tracking-tighter'>
          <h1 className='text-8xl'>
            Transform Ideas Into <br />
            Digital Success
          </h1>
          <h3 className='text-2xl font-extralight mt-8 text-gray-300'>
            We're your partner in product design, website creation, <br />
            and branding for every stage of your business.
          </h3>
          <div className='space-x-5 mt-8'>
            <button className='bg-white text-black border px-6 py-2 rounded-lg hover:bg-transparent hover:text-white hover:border-gray-500 transition-all duration-500'>
              Get Started
            </button>
            <button className="text-white px-6 py-2 rounded-lg border border-gray-500 hover:text-black hover:bg-white hover:border-none transition-all duration-500">
              Contact
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
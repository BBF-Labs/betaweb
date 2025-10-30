import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className='fixed top-0 w-full z-50 backdrop-blur-sm'>
                <div className='px-4 md:px-14'>
                    <div className='flex h-16 items-center justify-between'>
                        <p>Logo</p>
                        <div className='flex items-center space-x-4'>
                            <button className='bg-white text-black border px-6 py-2 rounded-lg hover:bg-transparent hover:text-white hover:border-gray-500 transition-all duration-500'>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
import Image from 'next/image'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex items-center justify-center w-full max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6 bg-secondary rounded-xl sm:rounded-2xl mt-2 mb-4'>
            <div className="flex items-center">
                <Image 
                    src="/yoga.svg" 
                    alt="logo" 
                    width={25} 
                    height={25}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0"
                />
                <span className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pl-2 text-white whitespace-nowrap'>
                    नमस्कार Yoga
                </span>
            </div>
        </nav>
    )
}

export default Navbar
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='flex items-center justify-between'>
            <div className='w-2xl ml-2'>
                <h1 className='text-6xl font-black '>Welcome to<br/> <span className='text-secondary'>नमस्कार </span>Yoga</h1>
                <p className='text-lg mt-2'>Discover the power of yoga with Namaskar Yoga. Learn traditional asanas, breathing techniques, and mindfulness practices to strengthen your body and calm your mind.</p>
                <button className="btn btn-neutral mt-5">Let's Start</button>
            </div>
            <Image src="/hero.png" alt='hero' width={500} height={500}></Image>
        </div>
    )
}


export default Hero

import Image from 'next/image'
import React from 'react'

export default function PostViewPage() {
  return (
    <article className='max-w-3xl mx-auto py-20 px-6'>
        {/* article header */}
        <header className='mb-10'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4'>
                Building a Medium-Style Blog with Next.js
            </h1>

            <div className='flex items-center gap-4 text-sm text-gray-400'>
                <span>By Emmanuel Egbon</span>
                <span>•</span>
                <span>Sep 12, 2025</span>
            </div>
        </header>

        <div className='relative w-full h-55 sm:h-80 lg:h-105 mb-12'>
           <Image src="/p1.png" alt='cover-image' className='object-cover rounded-2xl' fill/>  
        </div>
    </article>
  )
}

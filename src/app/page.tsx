import ContainerLayout from '@/layouts/ContainerLayout'
import React from 'react'
import Image from 'next/image'
export default function Home() {
  return (
    <ContainerLayout>
      <h1 className='text-3xl lg:text-5xl xl:text-7xl text-center text-gray-200 tracking-wide leading-snug lg:leading-tight xl:leading-tight'>
        <span className='font-bold'>Welcome to Tech by Kuldeep!</span>  <br />Discover Stories and Creative Ideas
      </h1>
      <div className='py-12 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          {/* image */}
          <div className='relative'>
            <Image
              src="/about.png"
              height={600}
              width={600}
              alt='about-image'
              className='rounded-2xl border border-white/10' />

            {/* glow */}
            <div className='absolute -inset-4 bg-indigo-500/10 blur-3xl -z-10' />
          </div>

          {/* contents */}
          <div className='max-w-xl'>
            <span className='text-sm uppercase tracking-widest text-indigo-400'>
              About Tech by Kuldeep
            </span>
            <h3 className='mt-3 text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-white'>
              Simple Ways to Innovate Your Inner Creative Mind
            </h3>
            <p className='mt-6 text-gray-400 leading-relaxed'>
              Lorem ipsun dolor, sit amet consectetur adipisicing elit. Quisquam labourm vel debitis eaque, voluptas sed magnam tempora provident nesciunt rem repudiandae, nostrum nam deleniti blanditiis tempore non cum eos maiores
            </p>
          </div>
        </div>
      </div>
    </ContainerLayout>
  )
}

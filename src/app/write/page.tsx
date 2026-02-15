import React from 'react'

export default function WritePage() {
  return (
    <section className='max-w-3xl mx-auto py-20 px-6'>
         {/* page title */}
         <h1 className='text-3xl font-bold text-white mb-10'>
            Write a new article
         </h1>

         <form>
            {/* title */}
            <input type='text' placeholder='Article title' className='w-full bg-transparent text-4xl font-bold text-white placeholder-gray-500 outline-none mb-6'/>
         
         { /* excerpt */}
          <textarea 
          placeholder='Write a short excerpt (1-2 sentences)'
          rows={3}
          className='w-full bg-secondary-background text-gray-200 placeholder-gray-500 rounded-xl p-4 mb-8 outline-none resize-none border border-white/10 focus:border-indigo-500/50'
          />

          <div>
            
          </div>
         </form>
    </section>
  )
}

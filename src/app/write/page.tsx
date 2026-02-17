"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"





export default function WritePage() {

     const editor = useEditor( {
      extensions: [StarterKit],
      content: "<p>Start writing your blog...</p>",
      immediatelyRender: false,
     })

     

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
          {/* image upload */}
          <div className='mb-10'>
                <label className='block text-gray-400 mb-2'>Cover Image</label>
                <input type='file' accept='image/*' className='block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-primary file:text-white hover:file:bg-indigo-500'/>
          </div>
          { /* toolbar */}
         <div className="flex flex-wrap gap-2 mb-4 border p-3 rounded-lg bg-zinc-900">
           <button 
           type="button"
           onClick={() => editor?.chain().focus().toggleBold().run()}
           className="px-3 py-1 border rounded hover:bg-zinc-700"
           >
             Bold
           </button>

           <button
           type="button"
             onClick={() => editor?.chain().focus().toggleItalic().run()}
             className="px-3 py-1 border rounded hover:bg-zinc-700"
           >
            Italic
           </button>

           <button
           type="button"
           onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
           className="px-3 py-1 border rounded hover:bg-zinc-700"
           >
              H2
           </button>

           <button 
           type="button"
           onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
           className="px-3 py-1 border rounded hover:bg-zinc-700"
           >
               Code
           </button>
            </div>

          {/* editor */}
     {/*      <div className="rounded-2xl overflow-hidden border border-white/10"> */}
     <div className="border rounded-lg p-4 min-h-[300px] bg-black text-white">
            <EditorContent 
            editor={editor}
            className="outline-none" />
          </div>
          
         </form>
    </section>
  )
}

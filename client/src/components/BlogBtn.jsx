import React from 'react'

const BlogBtn = () => {
  return (
    <div>
        
        <button class="cursor-pointer font-semibold overflow-hidden relative z-100 active:scale-105 transform ease-in-out duration-100 rounded-lg border border-white group px-8 py-2">
            <span class="relative z-10 text-white group-hover:text-black  duration-500">READ MORE</span>
            <span class="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span class="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
    </div>
  )
}

export default BlogBtn
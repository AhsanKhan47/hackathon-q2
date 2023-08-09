import React from 'react'

export default function Heading({title, heading}:{title:string,heading:string}) {
  return (
    <div className='blockcenter my-20'>
               <h4 className="scroll-m-20 text-xs font-semibold tracking-tight text-[#0062f5] md:mb-2  ">{title}</h4>
               <h2 className="scroll-m-20 pb-2 text-3xl lg:text-4xl font-bold tracking-widest lg:tracking-wider transition-colors first:mt-0">
               {heading}
               </h2>
    </div>
  )
}

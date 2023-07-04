import Wrapper from '@/shared/Wrapper'
import React from 'react'

export default function Promotion() {
  return (
    <Wrapper>
    <div className='grid sm:grid-cols-1 gap-4 md:grid-cols-3 mx-auto my-40 ' >
        <div className='grid gap-2'>
        <div className='h-19 bg-cyan-500'>1</div>
        <div className='h-19 bg-cyan-500 '>2</div>
        </div>
        <div className='h-40 bg-cyan-500 '>3</div>
        <div className='h-40 bg-cyan-500'>4</div>

    </div>
    </Wrapper>
  )
}

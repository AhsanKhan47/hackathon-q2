import Wrapper from '@/shared/Wrapper'
import React from 'react'
import Image from 'next/image'
export default function Promotion() {
  return (
    <Wrapper>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-4  my-40 mx-4 ' >

        {/* child 1 */}
        <div className='grid gap-2 md:col-span-2'>

          <div className='flex justify-between h-[200px] bg-[#D6D6D8] '>
            {/* sub child 1 */}
          <div className='text-center h-fit my-auto mx-8 '><h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
            GET UP TO 60%
          </h2>
          <h4 className="scroll-m-20 text-xl font-medium tracking-tight">
              For the summer season
          </h4></div>
            {/* sub child 2 */}
            <Image src={"/promotionImg1.webp"} height={100} width={300} alt='img' ></Image>

          </div>

          <div className='h-[200px] bg-[#212121] '>2</div>
        </div>

        {/* child 2 */}

        <div className='h-[408px] bg-[#EFE1C7] '>
        <h1>Flex Sweatshirt <br /> <span className='line-through'> $100.00 </span> $75.00 </h1> 
<div>        <Image src={"/promotionImg2.webp"} height={50} width={300} alt='img' ></Image>
</div>
        </div>
        {/* child 3 */}

        <div className='h-[408px] bg-[#D7D7D9]'>4</div>

      </div>
    </Wrapper>
  )
}

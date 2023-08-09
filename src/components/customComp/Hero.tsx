import { Badge } from '../ui/badge'
import React from 'react'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { heroData } from '@/data'
import Wrapper from '@/shared/Wrapper'
export default function Hero() {
  return (
    <>
    <Wrapper>
    <div className='flex items-center justify-center  w-10/12  lg:w-11/12  mx-auto my-8'>
   {/* child 1 */}
        <div className='flex-1 flex flex-col justify-between gap-y-6 md:gap-y-10 lg:gap-y-4 xl:gap-y-8'>
            <Badge className='rounded-md text-lg text-blue-700 h-[40px] w-[140px]  '><p className='mx-auto'>Sale 70%</p></Badge>
            <h1 className="scroll-m-20 text-5xl lg:text-6xl font-extrabold tracking-tight leading-[4rem]">
            An Industrial Take on Streetwears</h1>
            <p className="leading-7 lg:[&:not(:first-child)]:mt-6 text-[#666666]">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <Button className='flex bg-[#212121] rounded-none gap-2 px-8 py-8 w-10/12 md:w-1/2 lg:w-1/2 cursor-pointer'><ShoppingCart/> Start Shopping </Button>

            <div className='flex  flex-wrap gap-y-2 lg:gap-y-0 justify-between items-center '>
            {heroData.map((img:string,i:number)=>(<Image key={i} src={img}  height={35} width={100} alt='hero img' ></Image>)) }    
            </div>
                </div>
                {/* child 2 */}

        <div className='flex-1 hidden  lg:flex '><Image src={"/heroImg.png"}  height={500} width={700} alt='hero img'  ></Image></div>
    </div>
    </Wrapper>
    </>
  )
}

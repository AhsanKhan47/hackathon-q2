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
    <div className='flex items-center justify-center w-11/12 mx-auto'>
   {/* child 1 */}
        <div className='flex-1 flex flex-col justify-between gap-y-10'>
            <Badge className='rounded-md text-lg text-blue-700 h-[40px] w-[140px]  '><p className='mx-auto'>Sale 70%</p></Badge>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            An Industrial Take on Streetwears</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <Button className='flex bg-[#212121] rounded-none gap-2 px-8 py-8 w-1/4'><ShoppingCart/> Start Shopping </Button>

            <div className='flex justify-between items-center '>
            {heroData.map((img:string,i:number)=>(<Image key={i} src={img}  height={35} width={100} alt='hero img' ></Image>)) }    
            </div>
                </div>
                {/* child 2 */}

        <div className='flex-1 '><Image src={"/heroImg.png"}  height={500} width={700} alt='hero img'  ></Image></div>
    </div>
    </Wrapper>
    </>
  )
}

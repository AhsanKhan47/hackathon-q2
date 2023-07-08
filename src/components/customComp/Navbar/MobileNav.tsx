import { navLinkType, navhLinksData } from '@/data'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function MobileNav() {
  return (
    <div className=' h-[100vh] w-full flex relative top-0'>
        <div className='flex items-center justify-center flex-col w-[8rem] m-auto  '>
                <div className='relative h-14 w-14 rounded-full bg-[#F1F1F1] flex items-center justify-center '>
                    <div className='relative'>
                        <ShoppingCart />
                        <div className='bg-red-600  text-white text-center h-5 w-5 rounded-full absolute top-[-15px] right-[-10px]'>2</div>

                    </div>
                </div>
        <ul className=" text-center grid  gap-4">
                    {navhLinksData.map((link: navLinkType, i) => (
                       <Link href={link.href}> <li key={i}>{link.label}</li></Link>
                    ))}
                </ul>
        </div>
    </div>
  )
}

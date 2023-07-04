import React from 'react'
import Image from 'next/image'
import { navLinkType, navLinksData } from '@/data'
import { Search, ShoppingCart } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'

export default function () {
    const cartVal = 2

    return (
        <>
            <nav className='w-10/12 mx-auto grid grid-cols-4 gap-20 my-5 items-center justify-center'>
                <Image className='' height={50} width={150} src={"/logo.png"} alt={'Logo image'}></Image>
                <ul className="flex items-center justify-between">
                    {navLinksData.map((link: navLinkType, i) => (
                        <li key={i}>{link.label}</li>
                    ))}
                </ul>
                <div className='relative my-auto'>
                    <Search className='absolute top-3 left-2 w-5 h-5	' />
                    <Input />
                </div>

                <div className='relative ml-auto h-14 w-14 rounded-full bg-[#F1F1F1] flex items-center justify-center'>
                    <div className='relative'>
                        <ShoppingCart />
                        <div className='bg-red-600  text-white text-center h-5 w-5 rounded-full absolute top-[-15px] right-[-10px]'>{cartVal}</div>

                    </div>
                </div>
            </nav>
        </>
    )
}

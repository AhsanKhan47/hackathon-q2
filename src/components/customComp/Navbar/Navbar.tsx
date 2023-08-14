"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { navLinkType, navhLinksData } from '@/data'
import { AlignRight, Plus, Search, ShoppingCart } from 'lucide-react'
import { Badge } from '../../ui/badge'
import { Input } from '../../ui/input'
import MobileNav from './MobileNav'
import Wrapper from '@/shared/Wrapper'
import Link from 'next/link'

export default function () {
    const cartVal = 2
    const [open, setOpen] = useState(false)



    return (
        <Wrapper>
            <nav className='grid grid-cols-3 items-center justify-between  lg:justify-center w-10/12 lg:w-11/12 mx-auto  lg:grid-cols-3 my-5 '>
                <Image className='' height={50} width={150} src={"/logo.png"} alt={'Logo image'}></Image>
                <ul className="lg:flex items-center justify-between lg:mx-1 gap-2 xl:mx-0 hidden">
                    {navhLinksData.map((link: navLinkType, i) => (
                        <Link href={link.href}> <li key={i}>{link.label}</li></Link>
                    ))}
                </ul>

                <div className='  hidden lg:flex'>
                    <div className='relative my-auto hidden lg:flex'>
                        <Search className='absolute top-3 left-2 w-5 h-5	' />
                        <Input />
                    </div>
                    <div className='relative ml-auto lg:m-auto h-14 w-14 rounded-full bg-[#F1F1F1] lg:flex items-center justify-center hidden'>
                        <ShoppingCart />
                        <div className='bg-red-600  text-white text-center h-5 w-5 rounded-full absolute top-[0px] left-[30px]'>{cartVal}</div>

                    </div>
                </div>
                {/* for sm screen to adjust nav */}
                <div></div>
                {/* Hamburger Icon */}
                {open ? <Plus className='ml-auto cursor-pointer lg:hidden' onClick={() => setOpen(!open)} /> : <AlignRight className='ml-auto cursor-pointer lg:hidden' onClick={() => setOpen(!open)} />}

            </nav>
            {open ? <MobileNav /> : ""}
        </Wrapper>
    )
}

import { productType } from '@/utils/types'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import AddToCard from './AddToCard'
import { Button } from '../ui/button'

const ProductCard = (props: {
    id: number,
    title: string,
    href: string,
    category: string,
    price: number,
    img: string | StaticImageData
}) => {
    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center '>
                <Link href={`/products/${props.id}`}>
                    <Image placeholder='empty' className="max-h-[200px] object-cover object-top" src={props.img} alt="product" width={300} height={200} />
                    <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
                    <h3 className='font-bold text-lg mt-3'> Category:  {props.category}</h3>
                    <p className='font-bold text-lg'>${props.price}</p>
                </Link>
                <Button className='mr-auto'> Add to Cart</Button>
            </div>
        </div>)
}

export default ProductCard
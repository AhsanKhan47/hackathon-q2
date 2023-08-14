import React from 'react'
import { allProducts } from '@/data'
import { productType } from '@/utils/types'
import ProductCard from '@/components/customComp/ProductCard'
import Heading from '@/components/shared/Heading'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const page = ({ params }: { params: { id: number } }) => {
    const products = allProducts.find((product: any) => product.id == params.id)
    return (
        // <div className='flex items-center justify-center gap-8 flex-wrap'>
        //     {products.length > 0 ? products.map((singleProduct: productType) => (
        //         <ProductCard id={singleProduct.id} img={singleProduct.img} title={singleProduct.title} price={singleProduct.price} category={singleProduct.category} href={singleProduct.href} />
        //     )) : <Heading title='' heading='No products Found' key={""} />}


        // </div>
        <div className=''>
            <div className='flex flex-col justify-center items-center w-fit '>
                <Image placeholder='empty' className="max-h-[200px] object-cover object-top" src={products?.img} alt="product" width={300} height={200} />
                <h3 className='font-bold text-lg mt-3'>{products?.title}</h3>
                <h3 className='font-bold text-lg mt-3'> Category:  {products?.category}</h3>
                <p className='font-bold text-lg'>${products?.price}</p>
                <Button className='mr-auto'> Add to Cart</Button>
            </div>
        </div>
    )
}

export default page
import ProductCard from '@/components/customComp/ProductCard'
import ProductList from '@/components/customComp/ProductList'
import { allProducts } from '@/data'
import { productType } from '@/utils/types'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='flex items-center justify-center flex-wrap gap-8'>
                {
                    allProducts.map((product: productType) => (
                        <div>
                            <ProductCard id={product.id} img={product.img} title={product.title} price={product.price} category={product.category} href={product.href} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default page
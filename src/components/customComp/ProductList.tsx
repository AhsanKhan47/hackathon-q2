import React from 'react'
import { allProducts } from '@/data'
import ProductCard from './ProductCard'
import { productType } from '@/utils/types'
export default function ProductList() {
    return (
        <div>
            {
                allProducts.map((product: productType) => (
                    <ProductCard key={product.id} img={product.img} title={product.title} price={product.price} category={product.category} href={product.href} />
                ))
            }

        </div>
    )
}

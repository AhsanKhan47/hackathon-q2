import React from 'react'
import { allProducts } from '@/data'
import { productType } from '@/utils/types'
import ProductCard from '@/components/customComp/ProductCard'
import Heading from '@/components/shared/Heading'

const page = ({ params }: { params: { slug: string } }) => {
    const filteredProductsFromCategory = allProducts.filter((product: any) => product.category === params.slug)
    return (
        <div className='flex items-center justify-center gap-8 flex-wrap'>
            {filteredProductsFromCategory.length > 0 ? filteredProductsFromCategory.map((singleProduct: productType) => (
                <ProductCard id={singleProduct.id} img={singleProduct.img} title={singleProduct.title} price={singleProduct.price} category={singleProduct.category} href={singleProduct.href} />
            )) : <Heading title='' heading='No products Found' key={""} />}

        </div>
    )
}

export default page
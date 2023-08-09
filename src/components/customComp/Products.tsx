"use client"
import React from 'react'
import Heading from '../shared/Heading'
import { productsCatalog } from '@/data'
import { productsCatalogType } from '@/lib/types'
import Image from 'next/image'
import Wrapper from '@/shared/Wrapper'

import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../app/globals.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { Button } from '../ui/button'

export default function Products() {
  return (
    <Wrapper>
              <Heading title='PRODUCTS' heading='Check What We Have'/>
        <div className=' w-10/12  lg:w-11/12  mx-auto flex justify-center items-center gap-20 '>
          <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
              {productsCatalog.map((product:productsCatalogType)=>(
                <SwiperSlide>
              <div className='text-start cursor-pointer '>
              <Image src={product.img}height={500} width={500}  className='h-[300px] w-[700px]' alt='product image'></Image>
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>
                </SwiperSlide>                
              ))}
      </Swiper>

        </div>

        {/* New Section */}\
        <h1  className="w-11/12 lg:w-1/2 my-12 ml-auto text-start scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    Unique and Authentic Vintage Designer Jewellery    </h1>
    {/* Parent */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-24 justify-center items-center w-11/12 mx-auto'>
          {/* child 1 */}
        <div className='grid grid-cols-2 justify-center items-center gap-6'>
         <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa, tenetur rerum optio sapiente hic molestiae dolore aliquam. Fuga, asperiores?</div>  
         <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa, tenetur rerum optio sapiente hic molestiae dolore aliquam. Fuga, asperiores?</div>  
         <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa, tenetur rerum optio sapiente hic molestiae dolore aliquam. Fuga, asperiores?</div>  
         <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa, tenetur rerum optio sapiente hic molestiae dolore aliquam. Fuga, asperiores?</div>  
        </div>
        
          {/* child 2 */}
          <div className='flex justify-center items-start'>
          <div>
            <Image src={"/productImg2.png"}height={500} width={500}  className='h-[300px] w-[700px]' alt='product image'></Image>
          </div>
          <div className='m-4'>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed nobis maxime veritatis vitae? Ad eaque enim assumenda dignissimos fugit?</div>
          <Button className='w-fit my-4  '>See all products</Button>
          </div>

          </div>
        </div>
       
       
      </Wrapper>
  )
}

import Wrapper from '@/shared/Wrapper'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Heading from '../shared/Heading'
export default function Promotion() {
  return (
    <Wrapper>
      <Heading title='PROMOTIONS' heading='Our Promotions Events'/>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 my-4  w-10/12  lg:w-11/12  mx-auto ' >

        {/* child 1 */}
        <div className=' gap-[1rem] col-span-2 flex flex-col justify-between'>

            {/* sub child 1 */}
          <div className='blockcenter md:flex md:flex-row md:justify-between h-[400px] md:h-[200px] bg-[#D6D6D8] flex-1 '>
          <div className=' text-center h-fit my-auto mx-8 '><h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
            GET UP TO 60%
          </h2>
          <h4 className="scroll-m-20 text-xl font-medium tracking-tight">
              For the summer season
          </h4></div>
            <Image src={"/promotionImg1.webp"} height={100} width={250} alt='img' ></Image>

          </div>
            {/* sub child 2 */}   

          <div className=' bg-[#212121] h-[200px] md:h-[200px]  md:flex-1 blockcenter p-3 md:p-6'>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-white">GET 30% Off</h1>
            <p className=" text-white leading-7 [&:not(:first-child)]:mt-6">USE PROMO CODE</p>
            <Button variant="default" className='w-9/12 lg:w-5/12 font-bold text-lg tracking-widest' >DINEWEEKENSALE</Button>     
          </div>
        </div>

        {/* child 2 */}

        <div className='col-span-2 md:col-span-1 h-full flex flex-col justify-between bg-[#EFE1C7] p-3 pb-0 md:p-6 md:pb-0 '>
           <h1>Flex Sweatshirt <br /> <span className='line-through'> $100.00 </span> $75.00 </h1> 
             <Image src={"/promotionImg2.webp"} height={50} width={300} alt='img' ></Image>
           </div>
        {/* child 3 */}

        <div className='col-span-2 md:col-span-1 flex flex-col justify-between p-3 pb-0 md:p-6 md:pb-0  h-full  bg-[#D7D7D9]'>
        <h1>Flex Push Button Bomber <br /> <span className='line-through'> $225.00 </span>$190.00 </h1> 
         <Image src={"/promotionImg3.webp"} className='mx-auto' height={250} width={250} alt='img' ></Image>
        </div>

      </div>
    </Wrapper>
  )
}




// import Wrapper from '@/shared/Wrapper'
// import React from 'react'
// import Image from 'next/image'
// import { Badge } from '../ui/badge'
// import { Button } from '../ui/button'
// export default function Promotion() {
//   return (
//     <Wrapper>
//       <div className='grid grid-cols-1  lg:grid-rows-[200px_minmax(200px,_2fr)_100px] gap-4 md:grid-cols-4  my-40 mx-4  lg:w-10/12 mx-auto' >

//         {/* child 1 */}

//           <div className='col-span-2 row-span-1 flex justify-between h-full bg-[#D6D6D8] '>
//           <div className=' text-center h-fit my-auto mx-8 '><h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
//             GET UP TO 60%
//           </h2>
//           <h4 className="scroll-m-20 text-xl font-medium tracking-tight">
//               For the summer season
//           </h4>
//           </div>
//             <Image src={"/promotionImg1.webp"} height={80} width={300} alt='img' ></Image>
//           </div>
           
//         {/* child 2 */}

//         <div className='col-span-2 row-span-2 h-full flex flex-col justify-between bg-[#EFE1C7]  p-6 pb-0'>
//         <h1>Flex Sweatshirt <br /> <span className='line-through'> $100.00 </span> $75.00 </h1> 
//           <Image src={"/promotionImg2.webp"} height={50} width={300} alt='img' ></Image>
//         </div>
//         {/* child 3 */}

//         <div className='row-span-2 flex flex-col justify-between  p-6 pb-0 h-full bg-[#D7D7D9]'>
//         <h1>Flex Push Button Bomber <br /> <span className='line-through'> $225.00 </span>$190.00 </h1> 
//           <Image src={"/promotionImg3.webp"} className='mx-auto' height={250} width={250} alt='img' ></Image>
//         </div>
//         {/*  child 4 */}

//         <div className='col-span-2 blockcenter h-full bg-[#212121] '>

//         <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-white">GET 30% Off</h1>
//         <p className=" text-white leading-7 [&:not(:first-child)]:mt-6">USE PROMO CODE</p>
//         <Button variant="default" className='w-5/12 font-bold text-lg tracking-widest' >DINEWEEKENSALE</Button>        
//         </div>

//       </div>
//     </Wrapper>
//   )
// }



// LATEST TRY WITH FLEX 
// import Wrapper from '@/shared/Wrapper'
// import React from 'react'
// import Image from 'next/image'
// import { Button } from '../ui/button'
// export default function Promotion() {
//   return (
//     <Wrapper>
//       <div className='grid grid-cols-1 grid-rows-[200px_minmax(200px,_2fr)_200px] gap-4 md:grid-cols-4  my-40 mx-4 ' >

//         {/* child 1 */}
//         <div className=' flex flex-col gap-2 md:col-span-2 h-full'>

//           <div className='flex justify-between h-full bg-[#D6D6D8] flex-1 '>
//             {/* sub child 1 */}
//           <div className=' text-center h-fit my-auto mx-8 '><h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
//             GET UP TO 60%
//           </h2>
//           <h4 className="scroll-m-20 text-xl font-medium tracking-tight">
//               For the summer season
//           </h4></div>
//             <Image src={"/promotionImg1.webp"} height={100} width={300} alt='img' ></Image>

//           </div>
//             {/* sub child 2 */}   

//             <div className='h-full w-full flex flex-col justify-between  bg-[#212121] flex-1'>

// <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-white">GET 30% Off</h1>
// <p className=" text-white leading-7 [&:not(:first-child)]:mt-6">USE PROMO CODE</p>
// <Button variant="default" className='w-5/12 font-bold text-lg tracking-widest' >DINEWEEKENSALE</Button>        
// </div>
//         </div>

//         {/* child 2 */}

//         <div className='h-full flex flex-col justify-between bg-[#EFE1C7] p-6 pb-0'>
//            <h1>Flex Sweatshirt <br /> <span className='line-through'> $100.00 </span> $75.00 </h1> 
//              <Image src={"/promotionImg2.webp"} height={50} width={300} alt='img' ></Image>
//            </div>
//         {/* child 3 */}

//         <div className='h-full bg-[#D7D7D9]'>4</div>

//       </div>
//     </Wrapper>
//   )
// }



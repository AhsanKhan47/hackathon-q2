import Hero from '@/components/customComp/Hero'
import MobileNav from '@/components/customComp/Navbar/MobileNav'
import Promotion from '@/components/customComp/Promotion'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
    <Hero/>
    <Promotion/>

   </div>
  )
}

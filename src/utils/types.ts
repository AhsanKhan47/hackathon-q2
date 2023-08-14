import { StaticImageData } from "next/image"

export type productType = {
    id: number,
    title: string,
    href: string,
    category: string,
    price: number,
    img: string | StaticImageData
}
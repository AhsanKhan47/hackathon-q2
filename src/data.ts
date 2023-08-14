import product1 from ".././../public/productImg1.png"
import { productType } from "./utils/types"

export type navLinkType = {
    label: string,
    href: string
}
export const navhLinksData = [
    {
        label: "Female",
        href: "/category/Female"
    }, {
        label: "Male",
        href: "/category/Male"
    }, {
        label: "Kids",
        href: "/category/Kids"
    }, {
        label: "All Products",
        href: "/products"
    },
]
export const allProducts: productType[] = [
    {
        id: 1,
        title: "Brushed Raglan SweatShirt",
        img: "/productImg1.png",
        href: "#",
        price: 95,
        category: "Male",

    }, {
        id: 2,
        title: "Cameryn Sash Tie Dress",
        img: "/productImg2.png",
        href: "#",
        price: 15,
        category: "Male",

    }, {
        id: 3,
        title: "Flex Sweatshirt",
        img: "/productImg3.png",
        href: "#",
        price: 145,
        category: "Male",

    }, {
        id: 4,
        title: "Flex Sweatpants",
        img: "/productImg4.png",
        href: "#",
        price: 195,
        category: "Female",

    },
    {
        id: 5,
        title: "Cameryn Sash Tie Dress",
        img: "/productImg2.png",
        href: "#",
        price: 50,
        category: "Female",

    }, {
        id: 6,
        title: "Flex Sweatshirt",
        img: "/productImg3.png",
        href: "#",
        price: 22,
        category: "Male",

    }, {
        id: 7,
        title: "Flex Sweatpants",
        img: "/productImg4.png",
        href: "#",
        price: 195,
        category: "Female",

    },
    {
        id: 8,
        title: "Cameryn Sash Tie Dress",
        img: "/productImg2.png",
        href: "#",
        price: 99,
        category: "male",

    }, {
        id: 9,
        title: "Flex Sweatshirt",
        img: "/productImg3.png",
        href: "#",
        price: 195,
        category: "Male",

    }, {
        id: 10,
        title: "Flex Sweatpants",
        img: "/productImg4.png",
        href: "#",
        price: 195,
        category: "Female",

    },
]
export const heroData = [
    "/Featured1.png",
    "/Featured2.png",
    "/Featured3.png",
    "/Featured4.png",
]


// export const Products: productType[] = [
//     {
//         id: 1,
//         name: "product 1",
//         price: 20,
//         image: product1,
//     },
//     {
//         id: 2,
//         name: "product 1",
//         category: "male",
//         price: 20,
//         image: product1,
//     },
//     {
//         id: 3,
//         name: "product 1",
//         category: "male",
//         price: 20,
//         image: product1,
//     },
//     {
//         id: 4,
//         name: "product 1",
//         category: "male",
//         price: 20,
//         image: product1,
//     },
//     {
//         id: 5,
//         name: "product 1",
//         category: "male",
//         price: 20,
//         image: product1,
//     },
//     {
//         id: 6,
//         name: "product 1",
//         category: "male",
//         price: 20,
//         image: product1,
//     },


// ]

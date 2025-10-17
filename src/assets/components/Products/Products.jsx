import React from 'react'
import Img1 from "/women.png"
import Img2 from "/women2.jpg"
import Img3 from "/women3.jpg"
import Img4 from "/women4.jpg"
import { FaStar } from "react-icons/fa";


const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Women Ethnic",
        rating:5.0,
        auther:"White",
        aosDelay:"0",
    },
    {
        id:2,
        img:Img2,
        title:"Women western",
        rating:4.5,
        auther:"Red",
        asosDelay:"200",
    },
    {
        id:3,
        img:Img3,
        title:"Googles",
        rating:4.7,
        auther:"brown",
        aosDelay:"400"

    },
    {
        id:4,
        img:Img4,
        title:"Printed T-Shirt",
        rating:4.4,
        auther:"Yellow",
        aosDelay:"600",

    },
    {
        id:5,
        img:Img2,
        title:"Fashion T-Shirt",
        rating:4.5,
        auther:"Pink",
        aosDelay:"800",
    },
];

function Products() {
  return (
    <div className='mt-14 mb-12'>
         <div className='container'>
            {/* HEADER SECTION */}
            <div className='text-center mb-10 max-w-[600px] mx-auto '>
                <p className='text-orange-400 text-sm' data-aos="fade-up">Top Selling Products for you</p>
                <h1 className='text-3xl font-bold text-orange-400' data-aos="fade-up">Products</h1>
                <p className='text-xs text-gray-400' data-aos="fade-up">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum soluta deserunt?Lorem ipsum dolor sit amet.Saepe cum soluta deserunt?Lorem ipsum dolor sit amet.
                </p>
            </div>

            {/* BODY SECTION */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>

                    {/* CARD SECTION */}
                    {
                        ProductsData.map((data)=>(
                            <div 
                             data-aos="fade-up"
                             data-aos-delay = {data.aosDelay}
                            key={data.id} className='space-y-3'>
                                <img src={data.img} alt="" 
                                className='h-[220px] w-[150px] object-cover rounded-md'
                                />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>{data.auther}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
         </div>
    </div>
  )
}

export default Products

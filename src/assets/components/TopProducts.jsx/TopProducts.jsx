import React from 'react'
import Img1 from "/shirt.png"
import Img2 from "/shirt2.png"
import Img3 from "/shirt3.png"
import { FaStar } from "react-icons/fa";


const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Casual Wear",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio laborum eligendi nisi earum eos ipsum sequi commodi? Maiores, repellat."
    },
     {
        id:2,
        img:Img2,
        title:"Printed Shirt",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio laborum eligendi nisi earum eos ipsum sequi commodi? Maiores, repellat."
    },
     {
        id:3,
        img:Img3,
        title:"Women Shirt",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio laborum eligendi nisi earum eos ipsum sequi commodi? Maiores, repellat."
    }, 
];

function TopProducts() {
  return (
    <div>
      <div className='container'>
        {/* HEADER SECTION */}
        <div className=' mb-10 text-center'>
                <p className='text-orange-400 text-sm' data-aos="fade-up">Top Rated  Products for you</p>
                <h1 className='text-3xl font-bold text-orange-400' >Best Products</h1>
                <p className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum soluta deserunt?Lorem ipsum dolor sit amet.Saepe cum soluta deserunt?Lorem ipsum dolor sit amet.
                </p>
            </div>


        {/* BODY SECTION */}
        <div 
        className='grid grid-cols-1  md:grid-cols-3 md:gap-5 sm:grid-cols-2 gap-20 place-items-center duration-500'
        data-aos="fade-up"
        >
            {
                ProductsData.map((data)=>(
                    <div className='rounded-2xl bg-white hover:bg-black/50 hover:text-white relative shadow-xl duration-500 group max-w-[300px] mt-16 mb-10'>
                        {/* IMAGE SECTION */}
                       <div className='h-[100px]'>
                        <img src={data.img} alt="" 
                        className='max-w-[150px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-500 drop-shadow-md'
                        />

                       </div>
                       {/* DETAILS SECTION */}
                       <div className='p-4 text-center'>
                        {/* STAR RATING */}
                        <div className='flex w-full justify-center items-center gap-1'>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                        </div>
                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                        <button 
                        className='bg-orange-400 text-white px-4 py-1 rounded mt-4 group-hover:bg-white group-hover:text-orange-400 cursor-pointer'
                        >
                            Order Now
                        </button>

                       </div>
                    </div>
                ))
            }
        </div>

      </div>
    </div>
  )
}

export default TopProducts

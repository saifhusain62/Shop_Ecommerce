import React from 'react'
import Img1 from "/shirt.png"
import Img2 from "/shirt2.png"
import Img3 from "/shirt3.png"


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
        <div className='text-left mb-10 '>
                <p className='text-orange-400 text-sm' data-aos="fade-up">Top Rated  Products for you</p>
                <h1 className='text-3xl font-bold text-orange-400' >Best Products</h1>
                <p className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum soluta deserunt?Lorem ipsum dolor sit amet.Saepe cum soluta deserunt?Lorem ipsum dolor sit amet.
                </p>
            </div>


        {/* BODY SECTION */}
        <div 
        className='grid grid-cols-1  md:grid-cols-3 md:gap-5 sm:grid-cols-2 gap-20 place-items-center'
        >
            {
                ProductsData.map((data)=>(
                    <div className='rounded-2xl bg-white hover:bg-orange-400 hover:text-white relative shadow-xl duration-500 group max-w-[300px] mt-16'>
                        {/* IMAGE SECTION */}
                       <div className='h-[100px]'>
                        <img src={data.img} alt="" 
                        className='max-w-[150px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-500 drop-shadow-md'
                        />

                       </div>
                       {/* DETAILS SECTION */}
                       <div className='p-4 text-center'>
                        {/* STAR RATING */}
                        
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

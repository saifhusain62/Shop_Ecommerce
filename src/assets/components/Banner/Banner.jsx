import React from 'react'
import Img from "/women2.jpg"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";

function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center '>
               {/* IMAGE SECTION */}
               <div
               data-aos="zoom-in"
               >
                  <img src={Img} alt="" 
                  className='max-w-[400px] h-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_black] object-cover rounded-2xl'
                  />
               </div>

               {/* TEXT DETAILS SECTION */}
               <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1
                className='text-3xl sm:text-4xl font-bold'
                >Winter Sale upto 50% Off</h1>
                <p 
                className='text-sm text-gray-500 tracking-wide leading-5'
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quos tempora obcaecati aut rem doloremque placeat aperiam commodi, provident aliquam.
                </p>
                <div >
                  <div className='flex items-center gap-4 py-2'>
                    <IoFastFood 
                    className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-300'
                    data-aos="zoom-in"
                    />
                    <p>Fast Delivary</p>
                  </div>
                  <div className='flex items-center gap-4 py-2'>
                    <GiFoodTruck 
                    className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200'
                    data-aos="zoom-in"
                    />
                    <p>Easy Payment Method</p>
                  </div>
                  <div className='flex items-center gap-4 py-2'>
                    <BiSolidOffer 
                    className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-200'
                    data-aos="zoom-in"
                    />
                    <p>Get Offers</p>
                  </div>
                  <div className='flex items-center gap-4 py-2'>
                    <GrSecure  
                    className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-200'
                    data-aos="zoom-in"
                    />
                    <p>Quality Products</p>
                  </div>
                </div>

               </div>
                    
            </div>

        </div>
      
    </div>
  )
}

export default Banner

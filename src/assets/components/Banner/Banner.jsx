import React from 'react'
import Img from "/women2.jpg"

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

               </div>
                    
            </div>

        </div>
      
    </div>
  )
}

export default Banner

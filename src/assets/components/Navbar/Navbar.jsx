import React from 'react'
import Logo from "/logo.png"
import { IoMdSearch } from "react-icons/io";

function Navbar() {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      {/* UPPER NAVBAR */}
      <div className='bg-orange-100 py-2'>
        <div className='container flex justify-between items-center '>
            <div>
                <a href="" className='font-bold text-2xl sm:text-3xl flex gap-1 text-orange-400'>
                    <img src={Logo} alt="" className='w-10'/>Shopsy
                </a>
            </div>

            {/* SEARCH BAR & OTHER BUTTON */}
            <div>
                <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='search'
                    className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 focus:border-primary bg-white dark:bg-white text-gray-500'/>
                      <IoMdSearch  className='text-gray-500 group-hover:text-orange-400 absolute top-1/2 -translate-y-1/2 right-3'/>

                </div>
            </div>

                {/* ORDER BUTTON */}
                <button
                 onClick={()=>alert("Ordering not avilable")}
                 className='bg-gradient-to-r from-orange-400 to-orange-300 transition-all duration-200 text-white py-1 px-4 
                 rounded-full flex items-center gap-3 group cursor-pointer'
                >
                    <span>Order Now</span>
                </button>
                
        </div>
      </div>
      {/* LOWER NAVBAR */}
      <div></div>
    </div>
  )
}

export default Navbar

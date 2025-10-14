import React from 'react'
import Logo from "/logo.png"
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";



const Menu =[
  {
    id:1,
    name:"Home",
    link:"/#",
  },
  {
    id:2,
    name:"Top Rated",
    link:"/#services",
  },
  {
    id:3,
    name:"Kids Wear",
    link:"/#"
  },
  {
    id:4,
    name:"Mens Wear",
    link:"/#",
  },
  {
    id:5,
    name:"Electronics",
    link:"/#",
  },
];

const Dropdownlinks = [
  {
    id:1,
    name:"Most Selling",
    link:"/#"
  },
  {
    id:2,
    name:"Best Selling",
    link:"/#",
  },
  {
    id:3,
    name:"Top Rated",
    link:"/#"
  },
];

function Navbar() {
  return (
    <div className=' bg-white  duration-200 relative z-40'>
      {/* UPPER NAVBAR */}
      <div className='bg-orange-100 py-2 shadow-md'>
        <div className='container flex justify-between items-center '>
            <div>
                <a href="" className='font-bold text-2xl sm:text-3xl flex gap-1 text-orange-400'>
                    <img src={Logo} alt="" className='w-10'/>Shopsy
                </a>
            </div>

            {/* SEARCH BAR & OTHER BUTTON */}
            <div className='flex justify-between items-center gap-4'>
                <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='search'
                    className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 focus:border-primary bg-white dark:bg-white text-gray-500'/>
                      <IoMdSearch  className='text-gray-500 group-hover:text-orange-400 absolute top-1/2 -translate-y-1/2 right-3'/>

                </div>
                 {/* ORDER BUTTON */}
                <button
                 onClick={()=>alert("Ordering not avilable")}
                 className='bg-gradient-to-r from-orange-400 to-orange-300 transition-all duration-200 text-white py-1 px-4 
                 rounded-full flex items-center gap-3 group cursor-pointer'
                >
                    <span >Order Now</span>
                    <FaCartShopping  className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                </button>
            </div>      
        </div>
      </div>
      {/* LOWER NAVBAR */}
      <div className='flex justify-center shadow-sm'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data)=>(
              <li key={data.id}>
                <a href={data.link} 
                 className='inline-block px-4 hover:text-orange-400 duration-200'
                >{data.name}</a>
              </li>
            ))
          }
          {/* SIMPLE DROP DOWN MENU */}
          <li className='group relative cursor-pointer'>
            <a href="#"
             className='flex items-center gap-[2px] py-2'
            >Trending Products
            <span>
              <FaSortDown  className='transition-all duration-200 group-hover:rotate-180'/>

              </span>
              </a>
              <div className='absolute z-[999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                <ul>
                  {Dropdownlinks.map((data)=>(
                    <li>
                      <a href={data.link}
                      className='inline-block w-full rounded-md hover:bg-orange-300 hover:text-white'
                      >{data.name}</a>

                  </li>
                  ))
                  }
                </ul>

              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

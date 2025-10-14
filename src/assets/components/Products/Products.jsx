import React from 'react'


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
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-orange-400 text-sm'>Top Selling Products for you</p>
                <h1 className='text-3xl font-bold text-orange-400'>Products</h1>
                <p className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum soluta deserunt?Lorem ipsum dolor sit amet.Saepe cum soluta deserunt?Lorem ipsum dolor sit amet.
                </p>
            </div>

            {/* BODY SECTION */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>

                    {/* CARD SECTION */}
                    {
                        ProductsData.map(()=>(
                            <div>

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

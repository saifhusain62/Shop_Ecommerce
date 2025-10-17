import React from 'react'
import Banner from "/orange-pattern.jpg"

const BannerImg = {
    backgroundImage:`url(${Banner})`,
    backgroundPosition:"center",
    backgroundRepear:"no-repear",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
}

function Subscribe() {
  return (
    <div
    data-aos="fade-up"
    className='bg-gray-100 text-white my-3'
    style={BannerImg}
    >
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1
            className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'
            >Get Notified About New Products</h1>
            <div className='flex justify-center'>
              <input type="text" placeholder='Enter Your Email' className='lg:w-2xl p-3 bg-white rounded-sm text-orange-400
            border-2 border-transparent focus:border-white focus:outline-none sm:w-12' />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Subscribe

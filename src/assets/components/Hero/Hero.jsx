import React from 'react'
import Image1 from "/women.png"
import Image2 from "/shopping.png"
import Image3 from "/sale.png"
import Slider from "react-slick";

const ImageList = [
    {
        id:1,
        img:Image1,
        title:"Upto 50% Off on all Men's Wear",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam ab unde rerum quod laborum molestiae quis cum officiis mollitia."
    },
     {
        id:2,
        img:Image2,
        title:"Upto 40% Off on all Girls's Wear",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam ab unde rerum quod laborum molestiae quis cum officiis mollitia."
    },
     {
        id:3,
        img:Image3,
        title:"Upto 20% Off on all Men's Wear",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam ab unde rerum quod laborum molestiae quis cum officiis mollitia."
    },
];

function Hero() {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center'>
        {/* BACKGROUND PATTERN */}
        <div className='h-[700px] w-[700px] bg-orange-200 absolute -top-1/2 right-0 rounded-3xl rotate-45'>

        </div>
        {/* HERO SECTION */}
        <div className='container pb-8 sm:pb-0 z-50'>
          <Slider {...settings}>
            {
              ImageList.map((data)=>(
                 <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              {/* TEXT CONTENT SECTION */}
              <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 to-orange-200 text-transparent bg-clip-text'
                 data-aos = "fade-left"
                >
                  {data.title}
                </h1>
                <p className='text-sm'>{data.description}</p>
                <div>
                  <button
                  className='bg-gradient-to-r from-orange-400 to-orange-300 transition-all duration-200 text-white py-1 px-4 
                 rounded-full flex items-center gap-3 group cursor-pointer font-semibold'
                 data-aos="fade-down"
                  >Order Now</button>
                </div>
              </div>
              {/* IMAGE SECTION */}
              <div className='order-1 sm:order-2'
              data-aos = "zoom-in"
              

              >
                <div>
                  <img src={data.img} alt=""
                  className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-120'
                  />
                </div>

              </div>

            </div>
          </div>
              ))
            }

          </Slider>
         

        </div>
      
    </div>
  )
}

export default Hero

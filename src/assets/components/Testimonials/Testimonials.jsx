import React from 'react'
import Slider from "react-slick"; 




const TestimonialData = [
  {
    id:1,
    name:"vector",
    text:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda recusandae commodi a sit ad vel neque numquam enim error fuga!",
    img:"https://picsum.photos/200/300"
  },
   {
    id:2,
    name:"Satya Nahli",
    text:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda recusandae commodi a sit ad vel neque numquam enim error fuga!",
    img:"https://picsum.photos/200/301"
  },
  {
    id:3,
    name:"Nala Sahli",
    text:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda recusandae commodi a sit ad vel neque numquam enim error fuga!",
    img:"https://picsum.photos/200/302"
  },
  
];

function Testimonials() {
   var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  
  return (
    <div className='py-10 mb-10'>
      <div className='max-w-3xl items-center mx-auto'>
             {/* HEADING SECTION */}
             <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-orange-400 text-sm' data-aos="fade-up">Top Client Rating</p>
                <h1 className='text-3xl font-bold text-orange-400' data-aos="fade-up">Testimonial</h1>
                <p className='text-xs text-gray-400' data-aos="fade-up">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum soluta deserunt?Lorem ipsum dolor sit amet.Saepe cum soluta deserunt?Lorem ipsum dolor sit amet.
                </p>
            </div >

            {/* TESTIMONIAL CARDS */}
            <div>
               <Slider {...settings}>

                {
                  TestimonialData.map((data)=>(
                     <div
                     key={data.id}
                     className='flex flex-col  shadow-lg py-8 px-6 mx-4 rounded-xl'
                     >

                      <div className='flex flex-col items-center py-2 '>
                           <img src={data.img} alt="" 
                           className='rounded-full w-20 h-20'
                           />
                      </div>
                      <div className='flex flex-col items-center gap-4 relative'>
                        <p className='text-xs text-gray-500'>{data.text}</p>
                        <h1 className='text-xl font-bold text-black/80'>{data.name}</h1>
                        <p className='text-black/20 text-9xl font-serif top-[-100%] right-0 absolute'>,,</p>
                      </div>
                     </div>
                  ))
                }

               </Slider>

            </div>
      </div>
    </div>
  )
}

export default Testimonials

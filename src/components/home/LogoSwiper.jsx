'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function LogoSwiper() {
  return (
    <div className=' w-full px-36 mb-20'>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        className='w-[1200px]'
      >
        <SwiperSlide>
          <div className='flex justify-center items-center'>
            <img src="cl_logo1.png" alt="cl_logo1" className='w-40 hover:brightness-0 duration-300'/> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center items-center'>
            <img src="cl_logo2.png" alt="cl_logo2" className='w-40  hover:brightness-0 duration-300' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center items-center'>
            <img src="cl_logo3.png" alt="cl_logo3" className='w-40  hover:brightness-0 duration-300' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center items-center'>
            <img src="cl_logo4.png" alt="cl_logo4" className='w-40  hover:brightness-0 duration-300' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center items-center'>
            <img src="cl_logo5.png" alt="cl_logo5" className='w-40  hover:brightness-0 duration-300' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center items-center'>
            <img src="cl_logo6.png" alt="cl_logo6" className='w-40  hover:brightness-0 duration-300' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function FurnitureSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        className="h-60 relative mb-24 max-xl:hidden"
      >
        <SwiperSlide className='overflow-hidden'>
          <img src="furniture_insta1.jpg" alt="furniture_insta1" className='w-full h-full hover:scale-110 hover:brightness-50 duration-300'/> 
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'>
          <img src="furniture_insta2.jpg" alt="furniture_insta2" className='w-full h-full hover:scale-110 hover:brightness-50 duration-300' />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'>
          <img src="furniture_insta3.jpg" alt="furniture_insta3" className='w-full h-full hover:scale-110 hover:brightness-50 duration-300' />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'>
          <img src="furniture_insta4.jpg" alt="furniture_insta4" className='w-full h-full hover:scale-110 hover:brightness-50 duration-300' />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'>
          <img src="furniture_insta5.jpg" alt="furniture_insta5" className='w-full h-full hover:scale-110 hover:brightness-50 duration-300' />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'> 
          <img src="furniture_insta6.jpg" alt="furniture_insta6" className='w-full h-full hover:scale-110 hover:brightness-50 duration-300' />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'>
          <img src="furniture_insta7.jpg" alt="furniture_insta7" className='w-full h-full hover:scale-110 hover:brightness-50 duration-300' />
        </SwiperSlide>
        <div className='absolute top-[27%] left-[37%] origin-center bg-white w-[400px] h-[114px] z-10 rounded-full
          flex justify-center items-center flex-col before:h-20 before:w-20 before:bg-cover 
          before:bg-[url(../../public/insta.png)] before:absolute before:top-5 before:z-20 before:brightness-[140%]' >
          <p className='text-center text-slate-600 text-3xl font-medium z-30 '>instagram</p>
          <p className='text-center text-slate-500 text-lg font-medium z-30'>@shoppingzone</p>
        </div>
      </Swiper>
    </>
  );
}

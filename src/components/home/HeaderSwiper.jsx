'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import HeaderButton_1 from '@/atoms/HeaderButton_1';
import HeaderButton_2 from '@/atoms/HeaderButton_2';
import Link from 'next/link';

export default function HeaderSwiper() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        effect={'fade'}
        speed={700}
        loop={true}
        modules={[Pagination,Autoplay,EffectFade]}
        className="mySwiper h-[650px]"
      >
        <SwiperSlide className=' w-full bg-teal-100' >
          <div className='p-36 flex justify-between items-center h-full'>
            <div className='flex flex-col w-1/2 gap-5'>
              <p className='font-semibold text-lg'>NEW TRENDING</p>
              <p className='font-bold text-7xl'>Sofa Collection</p>
              <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
              <Link href={"/#products"}><HeaderButton_2/></Link>
            </div>
            <img src="lounger.png" className='h-[600px] w-[600px]' />
          </div>
        </SwiperSlide>
        
        <SwiperSlide className=' w-full bg-[#f7e7d7]' >
          <div className='p-36 flex justify-between items-center h-full'>
            <div className='flex flex-col w-1/2 gap-7'>
              <p className='font-semibold text-lg'>Get up to 50% off Today Only!</p>
              <p className='font-bold text-7xl' >Wooden Chair Collection</p>
              <Link href={"/#products"}><HeaderButton_1/></Link>

            </div>
            <img src="chair2.png" className='h-[600px] w-[400px] mr-20' />
          </div>
        </SwiperSlide>
        
        <SwiperSlide className=' w-full bg-[#ffedd6]' >
          <div className='p-36 flex justify-between items-center h-full'>
            <div className='flex flex-col w-1/2 gap-7'>
              <p className='font-semibold text-lg'>Taking your Viewing Experience to Next Level</p>
              <p className='font-bold text-7xl'>Living Room Collection</p>
              <Link href={"/#products"}><HeaderButton_1/></Link>
            </div>
            <img src="chair1.png" className='h-[600px] w-[600px]' />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

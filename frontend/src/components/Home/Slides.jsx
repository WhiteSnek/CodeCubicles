import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Banner1,Banner2 } from '../../assets';
// import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Banner1} alt='banner-1' className='w-fit sm:w-full h-40 sm:h-80'/></SwiperSlide>
        <SwiperSlide><img src={Banner2} alt='banner-1' className='w-fit sm:w-full h-40 sm:h-80'/></SwiperSlide>
      </Swiper>
    </>
  );
}

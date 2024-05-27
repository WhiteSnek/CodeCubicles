import React from 'react'
import Slides from '../components/Home/Slides'
import Categories from '../components/Home/Categories'
import Studio from '../components/Home/Studio'
import HeroSection from '../components/Home/HeroSection'
import VideoCarousel from '../components/Home/VideoCarousel'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='h-44 sm:h-[90vh]'></div>
      <VideoCarousel />
      <Slides />
      <Categories />
      <Studio />
    </div>
  )
}

export default Home

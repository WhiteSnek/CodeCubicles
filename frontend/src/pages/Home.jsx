import React from 'react'
import Categories from '../components/Home/Categories'
import HeroSection from '../components/Home/HeroSection'
import VideoCarousel from '../components/Home/VideoCarousel'
import OurServices from '../components/Home/OurServices'
import FAQ from '../components/Home/FAQ'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='h-44 sm:h-[90vh]'></div>
      <OurServices />
      <VideoCarousel />
      <Categories />
      <FAQ />
    </div>
  )
}

export default Home

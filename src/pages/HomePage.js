import React from 'react'


import About from '../components/About'
import CarouselImg from '../components/CarouselImg'

import Features2 from '../components/Features2'
import Services from '../components/Services'
import MoreFeatures from '../components/MoreFeatures'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

import Employee from '../components/Employee'
import Offer from '../components/Offer'


const HomePage = () => {
  return (
    <>
    <div className='index-page'>
      
  <main className="main">
    {/* Hero Section */}
    
    <CarouselImg/>
    <Offer/>
   {/* <Hero/> */}
    {/* /Hero Section */}

    {/* About Section */}
    <About/>
    {/* /About Section */}
    {/* Clients Section */}
    {/* <Clients/> */}
    {/* /Clients Section */}
    {/* Features Section */}
    <Features2/>
    {/* /Features Section */}
   
    {/* /Features Details Section */}
    {/* Services Section */}
   <Services/>
  
    {/* /Services Section */}
    {/* More Features Section */}
    <MoreFeatures/>
    {/* /More Features Section */}
    {/* Pricing Section */}
    <Pricing/>
    {/* /Pricing Section */}
    <Employee/>
    {/* Faq Section */}
    <FAQ/>
    {/* /Faq Section */}
    {/* Testimonials Section */}
    <Testimonials/>
    {/* /Testimonials Section */}
    {/* Contact Section */}
    <Contact/>
    {/* /Contact Section */}
  </main>

  
</div>

    </>
  )
}

export default HomePage
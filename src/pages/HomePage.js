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
   
    
    <CarouselImg/>

    <Offer/>
  
    <About/>
  
    <Features2/>
  
   <Services/>
  
   
    <MoreFeatures/>
   
    {/* <Pricing/> */}
   
    <Employee/>
   
    <FAQ/>
  
    <Testimonials/>
    
    <Contact/>
   
  </main>

  
</div>

    </>
  )
}

export default HomePage
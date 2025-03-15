import Hero from '@/components/Hero'
import HeroSection from '@/components/HeroSection'
import Heroo from '@/components/Heroo';
import Chooseus from '@/components/Chooseus';
import React from 'react'
import Facts from '@/components/Facts';
import Clientsay from '@/components/Clientsay';
import Sample from '@/components/sample';
import Samplee from '@/components/samplee';

const page = () => {
  return (
    <main> 
      <HeroSection/>
      <Hero/>  
      <Heroo/> 
      <Sample/> 
      <Samplee/>
      {/* <Chooseus/>
      <Facts/>
      <Clientsay/> */}
      
      
    </main>
  )
}

export default page

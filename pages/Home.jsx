import React from 'react'
import NavBar from '../components/NavBar'
import HeroAnimation from '../components/HeroAnimation'
import FeaturedProducts from '../components/FeaturedProducts'
import UpcomingAuctions from '../components/UpcomingAuctions'
import TopCreator from '../components/TopCreator'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <NavBar id='mobile-menu' className=''/>

      <p className='text-3xl text-center mx-auto mt-10 w-[90%] md:text-6xl md:mt-32 md:w-[80%]'>
        Photography is poetry and beautiful untold stories
      </p>
      <p className='text-md text-center mx-auto mt-10 w-[90%] md:text-xl md:mt-16 md:w-[50%]'>
        Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.
      </p>
      <HeroAnimation />

      <p className='mt-[16em] text-2xl ml-2.5 mb-5 md:mt-10 md:ml-36'>Featured products</p>
      <hr className='hidden md:block md:mb-12 md:w-[80%] md:h-[0.1em] bg-black mx-auto'/>

      <FeaturedProducts image='/image/Rectangle 299.png' name="Boolean Egyptian"/>
      <hr className='w-[75%] h-[0.1em] bg-black mt-12 mb-5 md:mb-12 md:w-[80%] md:mx-auto'/>
      <FeaturedProducts image='/image/Rectangle 299 (1).png' name="Are We There Yet?" reverse={true}/>
      <hr className='w-[75%] h-[0.15em] bg-black mt-12 mb-5 md:mb-12 md:w-[80%] md:mx-auto'/>
      <FeaturedProducts image='/image/Rectangle 299(2).png' name="Oloibiri 1997"/>

      <UpcomingAuctions/>
      <hr className='h-[0.1em] mt-20 bg-[#000] mb-5'/>

      <div className='flex justify-between mx-2 md:mx-16'>
        <p className='text-xl self-center md:text-3xl'>Explore marketplace </p>
        <img src="/image/arrow.svg" alt="" />
      </div>
     <hr className='h-[0.1em] mt-8 bg-[#000] mb-5 md:mt-12'/>

     <div className='flex justify-between mx-2 md:mx-16'>
        <p className='text-xl self-center md:text-3xl'>Auction </p>
        <img src="/image/arrow.svg" alt="" />
      </div>

      <TopCreator/>

      <div className='mt-20 ml-3 md:border-2 md:p-5 md:w-[90%] md:mx-auto mb-10'>
        <p className='text-xl md:text-3xl md:text-center md:mt-10'>NEWSLETTER</p>
        <p className='text-[12px] mt-3 md:text-2xl md:text-center'>SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTER</p>
        <div className='md:flex md:justify-center md:mb-8'>
          <input className='block border-2 border-solid border-[#000] p-3 w-[90%] mt-5 placeholder:text-[12px] placeholder:text-[#000] md:inline md:w-[40%]' type="email" name="" id="" placeholder='ENTER YOUR EMAIL HERE' />
          <button className='px-5 py-3 bg-[#000] text-[#fff] mt-5 md:py-[0.85em] md:ml-3'>SUBSCRIBE</button>
        </div>
      </div>

      <Footer/>
    </>
  )
}

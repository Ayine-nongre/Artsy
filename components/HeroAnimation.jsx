import React from 'react'

export default function HeroAnimation() {
  return (
    <>
        <div className='mt-16 flex justify-center gap-2 md:hidden'>
        <img className='absolute h-80 w-80 -rotate-6'
        src="/image/Rectangle 230.png" alt="" />
        <img className='absolute h-80 w-80 rotate-6'
        src="/image/Rectangle 231.png" alt="" /> 
        <img className='absolute h-80 w-80 -rotate-12'
        src="/image/Rectangle 232.png" alt="" />
        <img className='absolute h-80 w-80 rotate-12'
        src="/image/Rectangle 233.png" alt="" />
        <img className='absolute h-80 w-80'
        src="/image/Rectangle 251.png" alt="" />
        <img className='absolute h-80 w-80'
        src="/image/Rectangle 242.png" alt="" />
      </div>

      <div className='hidden md:flex md:gap-2 md:mt-10 md:mb-10'>
        <div className='w-[20em] h-[15em] flex gap-1 my-auto overflow-hidden'>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img1 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img2 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img3 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img4 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img5 animate-slide-show"></div>
        </div>
        <div className='w-[25em] h-[20em] flex gap-1 my-auto overflow-hidden'>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img2 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img3 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img4 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img5 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img1 animate-slide-show"></div>
        </div>
        <div className='w-[30em] h-[25em] flex gap-1 my-auto overflow-hidden'>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img3 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img4 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img5 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img1 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img2 animate-slide-show"></div>
        </div>
        <div className='w-[25em] h-[20em] flex gap-1 my-auto overflow-hidden'>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img4 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img5 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img1 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img2 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img3 animate-slide-show"></div>
        </div>
        <div className='w-[20em] h-[15em] flex gap-1 my-auto overflow-hidden'>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img5 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img1 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img2 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img3 animate-slide-show"></div>
          <div className="w-[100%] flex-shrink-0 bg-cover bg-center bg-img4 animate-slide-show"></div>
        </div>
      </div>
    </>
  )
}

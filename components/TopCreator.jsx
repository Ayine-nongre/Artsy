import React from 'react'

export default function TopCreator() {
  return (
    <div className='bg-[#E2E2E2] mt-10 h-[16em] w-full py-2 md:h-[30em]'>
        <p className='text-xl font-bold w-[55%] md:text-4xl md:w-[25%] md:mt-24 md:ml-10'>TOP CREATORS OF THE WEEK</p>
        <p className='mt-2 text-[#000]/55 text-sm text-center md:mt-20 md:text-xl md:ml-10 md:w-[70%]'>“Everything always looked better in black and white. Everything always as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden</p>
        <p className='hidden md:block absolute text-6xl left-[15em]'>1890</p>
        <div className='animate-motion-slide delay-1000 w-[70%] h-[30%] absolute bg-cover ml-20 -mt-[125px] md:w-[40%] md:ml-[40em] md:-mt-[275px] md:h-[60%]'></div>
    </div>
  )
}

import React from 'react'

export default function ({ image, name, reverse }) {
 return (
    <div className='w-[95%] mx-auto md:w-[80%]'>
        <div className={`md:flex gap-8 md:gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className='relative md:w-[90%]'>
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#000000] opacity-[0.6] md:hidden'>Hi</div>
                <p className='absolute text-[#fafafa] text-2xl mt-5 left-[30%] md:hidden'>{name}</p>
                <img src={image} alt="" className='w-full z-0' />
            </div>
            <div className='md:flex-col'>
                <p className='hidden md:block md:text-2xl md:font-bold mt-6 md:mt-0 md:self-end'>{name}</p>
                <p className='text-sm w-[90%] mt-5 md:text-xl md:w-[80%] md:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                
                <div className='md:flex md:mt-3 md:w-[80%]'>
                    <div className='flex gap-1 md:gap-10'>
                        <div className='flex mt-5 w-[25%] md:self-center md:gap-2 md:w-[20%]'>
                            <img className='relative w-10' src="/image/Ellipse 18.png" alt="" />
                            <img className='relative w-10 -left-8' src="/image/Ellipse 18.png" alt="" />
                            <img className='relative w-10 -left-16' src="/image/Ellipse 18.png" alt="" />
                            <img className='relative w-10 -left-24' src="/image/Ellipse 18.png" alt="" />
                            <img className='relative w-10 -left-32' src="/image/Ellipse 18.png" alt="" />
                        </div>
                        <p className='md:static self-center mt-5'>64 major creators</p>
                    </div>
                    <img className='hidden md:block md:self-center' src="/image/arrow.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export default function Product({ img, name, price }) {
  return (
    <div className='w-[80%] mx-auto mt-5 md:shadow-xl md:shadow-[#000]/15 sha md:rounded-xl md:px-2 md:py-3 md:w-[90%]'>
        <img src={img} alt="" className='w-full md:h-[20em]' />
        <div className='flex justify-between mt-3 md:flex-col'>
            <p className='text-xl'>{name}</p>
            <p className='text-xl md:mt-2 md:font-bold'>{price}</p>
        </div>
    </div>
  )
}

import React from 'react'
import { CiMail, CiLocationOn } from "react-icons/ci"

export default function Footer() {
  return (
    <>
    <div className='ml-3 mb-5 md:flex md:justify-around md:mt-20'>
        <p className='md:hidden'>REACH US</p>
        <p className='hidden md:block text-2xl font-bold self-center'>ARSTY.</p>
        <div className='hidden md:flex flex-col gap-2'>
            <a href="#">Home</a>
            <a href="/products">Marketplace</a>
            <a href="#">Auctions</a>
            <a href="#">Drops</a>
        </div>
        <div className='hidden md:flex flex-col gap-2'>
            <a href="#">Blog</a>
            <a href="#">Wallets</a>
            <a href="#">Rates</a>
            <a href="#">High bids</a>
        </div>
        <div className='md:flex md:flex-col md:gap-5'>
            <div className='flex gap-2 mt-3 md:mt-0'>
                <CiMail size={30} />
                <p className='self-center'>artsystudios@gmail.com</p>
            </div>
            <div className='flex gap-2 mt-3 md:mt-0'>
                <CiLocationOn size={30} />
                <p className='self-center'>Accra, Ghana</p>
            </div>
        </div>
    </div>
    <p className='hidden md:block text-center text-[#000]/65 mt-12'>Artsystudios &copy; 2024. All Rights Reserved.</p>
    </>
  )
}

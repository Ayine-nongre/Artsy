import React from 'react'
import { IoCartOutline } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { FaRegBell } from "react-icons/fa"
import { IoMenuOutline } from "react-icons/io5"
import { IoMdClose } from "react-icons/io"

export default function NavBar() {
  function openNav() {
    document.getElementById('mobile-menu').className = 'fixed left-0 right-0 bottom-0 top-0 p-10 bg-[#fff] z-10 flex flex-col gap-5'
  }

  function closeNav() {
    document.getElementById('mobile-menu').className = 'hidden'
  }

  return (
    <header className='flex justify-around mt-10'>
      <IoMenuOutline size={30} className='block mt-1 md:hidden' onClick={() => openNav()}/>
      <a href='/'><p className='text-xl self-center'>ARTSY.</p></a>
      <div className='hidden md:flex md:gap-5'>
        <a href='/'>Home</a>
        <a href='/products'>MarketPlace</a>
        <a>Auction</a>
        <a>Drops</a>
      </div>
      <div className='flex gap-5 mt-1'>
        <CiSearch size={30} />
        <a href='/checkout'><IoCartOutline size={30} /></a>
        <FaRegBell size={30} className='hidden md:block'/>
      </div>
      <div id='mobile-menu' className='hidden'>
        <p className='mb-3 text-xl'>ARTSY.</p>
        <a href='/'>Home</a>
        <a href='/products'>MarketPlace</a>
        <a>Auction</a>
        <a>Drops</a>
        <IoMdClose className='absolute right-7' size={30} onClick={() => closeNav()}/>
      </div>
    </header>
  )
}

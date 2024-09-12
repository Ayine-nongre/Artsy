import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { RiArrowDropDownLine } from "react-icons/ri"
import Product from '../components/Product'
import axios from 'axios'

export default function Products() {
  const [art, setArt] = useState(null)
  const [visible, setVisible] = useState(6)

  useEffect(() => {
    let ignore = false
    axios.get('/dummyDB.json')
    .then((response) => {
      if (!ignore) {
        setArt(response.data.art)
      }
    })
    .catch(err => console.error(err))
    
    return () => {
      ignore = true
    }
  },[])

  console.log(art)

  return (
    <>
      <NavBar/>

      <p className='text-[#000]/60 mt-4 ml-5 md:hidden'>Home/ Marketplace/ <span className='text-[#000]'>Editorials</span></p>
      <p className='text-[#000]/60 mt-4 ml-5 md:hidden'>Showing 1-5 of 18 results</p>

      <div className='flex md:ml-28 md:mt-10'>
        <input className='hidden md:block w-[10%] self-center h-[3.2em] bg-[#F4F2F2] mt-4 px-5 py-1 rounded-xl' type="search" name="" id="" placeholder='Search' />
        <div className='rounded-xl w-[90%] ml-5 mt-4 shadow-sm shadow-[#000]/25 py-1 md:flex md:py-5 md:justify-between px-3 md:w-[75%] md:ml-12'>
          <p className='hidden md:block self-center'>See 1-6 of 15 results</p>
          <div className='flex justify-end'>
            <p className='self-center'>Sort by</p>
            <RiArrowDropDownLine size={30}/>
          </div>
        </div>
      </div>

      <div className='md:flex md:gap-4 mt-8'>
        <div className='hidden md:block ml-28 w-[10%] h-[20em]'>
          <div className='flex gap-2'>
            <img src="/image/filter.svg" className='h-[3em]' alt="" />
            <p className='text-xl self-center'>Filter</p>
          </div>
          <hr className='h-[1em]'/>
          <div className='flex'>
            <p className='ml-2 self-center'>By category</p>
            <RiArrowDropDownLine size={30}/>
          </div>
          <div className='ml-2'>
            <div className='flex gap-2 mt-2'>
              <input type="checkbox" name="category" id="" value="Editorials"/>
              <label>Editorials</label>
            </div>
            <div className='flex gap-2 mt-1'>
              <input type="checkbox" name="category" id="" value="Editorials"/>
              <label>Fashion</label>
            </div>
            <div className='flex gap-2 mt-1'>
              <input type="checkbox" name="category" id="" value="Editorials"/>
              <label>Optics</label>
            </div>
            <div className='flex gap-2 mt-1'>
              <input type="checkbox" name="category" id="" value="Editorials"/>
              <label>Art & musuem</label>
            </div>
            <div className='flex gap-2 mt-1'>
              <input type="checkbox" name="category" id="" value="Editorials"/>
              <label>Nature</label>
            </div>
          </div>
          <div className='flex mt-10'>
            <p className='ml-2 self-center'>By price</p>
            <RiArrowDropDownLine size={30}/>
          </div>
          <div className='ml-2'>
            <p className='underline mt-2'>All</p>
            <p className='mt-1'>$100 - $150</p>
            <p className='mt-1'>$150 - $200</p>
            <p className='mt-1'>Above $200</p>
          </div>
        </div>
        <div className='md:grid md:grid-cols-3 md:w-[69%] md:ml-5'>
          { art && art.slice(0, visible).map(item => <Product img={item.img} name={item.name} price={item.price}/>) }
        </div>
      </div>
      
      {art && visible != art.length && <div className='flex gap-5 float-right mr-8 mt-5 md:hidden'>
        <p className='text-xl self-center'>Load more</p>
        <img onClick={() => setVisible(art.length)} src="/image/arrow.svg" alt="" />
      </div>}

      {art && visible != art.length && <button className='hidden md:block border-2 px-12 py-3 rounded-xl mx-auto mt-20 mb-20' onClick={() => setVisible(art.length)}>See more</button>}

      <div className='mt-32 ml-3 md:border-2 md:p-5 md:w-[90%] md:mx-auto mb-10 md:hidden'>
        <p className='text-xl md:text-3xl md:text-center md:mt-10'>NEWSLETTER</p>
        <p className='text-[12px] mt-3 md:text-2xl md:text-center'>SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTER</p>
        <div className='md:flex md:justify-center md:mb-8'>
          <input className='block border-2 border-solid border-[#000] p-3 w-[90%] mt-5 placeholder:text-[12px] placeholder:text-[#000] md:inline md:w-[40%]' type="email" name="" id="" placeholder='ENTER YOUR EMAIL HERE' />
          <button className='px-5 py-3 bg-[#000] text-[#fff] mt-5 md:py-[0.85em] md:ml-3'>SUBSCRIBE</button>
        </div>
      </div>

      <div className='md:hidden'><Footer /></div>
    </>
  )
}

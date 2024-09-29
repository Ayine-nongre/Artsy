import React from 'react'
import NavBar from '../components/NavBar'
import { IoIosCloseCircleOutline } from "react-icons/io"
import useCartStore from '../Store/cartStore.js'

export default function Checkout() {
  const { cartItems, updateCart, removeFromCart, totalPrice } = useCartStore()

  return (
    <div>
        <NavBar />

        {cartItems.length === 0 ? <div className='absolute flex top-[45%] left-[44%] justify-center items-center'>Cart is empty</div> : cartItems.map(item => <div key={item.name} className='flex gap-6 ml-10 mt-5 md:ml-36 md:justify-between md:w-[78%]'>
          <div className='md:w-[100%] flex gap-2'>
            <img className='w-[9em] h-[7em] md:w-[15%] md:h-[9em]' src={item.img} alt="" />
            <div className='flex flex-col justify-between w-[11em]'>
              <p className='text-[#000]/45'>Editorials</p>
              <p>{item.name}</p>
              <p className='hidden md:block'>Size: <span className='text-[#000]/45'>200ft</span></p>
              <div className='flex border-2 rounded-md justify-between px-2 md:border-0 w-[70%]'>
                <p className='text-xl mr-2 md:text-3xl' onClick={() => updateCart(item, item.quantity - 1)}>-</p>
                <div className='border-x-2 px-2 md:border-0 md:mt-1 md:text-2xl'>{item.quantity}</div>
                <p className='text-xl ml-2 md:text-3xl' onClick={() => updateCart(item, item.quantity + 1)}>+</p>
              </div>
            </div>
            <div className='flex flex-col justify-between md:hidden mr-4'>
              <IoIosCloseCircleOutline size={34} color='gray' className='ml-8' onClick={() => removeFromCart(item.name)} />
              <p className='text-xl'>{item.price}</p>
            </div>
          </div>
          <div className='hidden md:flex flex-col justify-between'>
            <IoIosCloseCircleOutline size={34} color='gray' className='ml-6' onClick={() => removeFromCart(item.name)} />
            <p className='text-xl'>$36.50</p>
          </div>
        </div>)}

        <div className='mb-60 md:mb-40'></div>

        {cartItems.length > 0 && <div className='fixed bg-[#fff] bottom-0 px-10 w-full md:py-5 shadow-xl shadow-[#000]/65 md:flex md:flex-row-reverse md:justify-between md:pl-36'>
          <div className='md:w-[50%] md:mr-36'>
            <section className='flex justify-between mt-2'>
              <p className='text-[#000]/65 md:text-xl'>Products in cart:</p>
              <p className='md:text-xl'>1 item</p>
            </section>
            <section className='flex justify-between mt-2'>
              <p className='text-[#000]/65 md:text-xl'>Shipping:</p>
              <p className='md:text-xl'>$2.50</p>
            </section>
            <section className='flex justify-between mt-2'>
              <p className='text-[#000]/65 md:text-xl'>Total:</p>
              <p className='md:text-xl'>$114.00</p>
            </section>
            <section className='flex justify-between mt-2 md:hidden'>
              <p className='text-[#000]/65'>Grand total:</p>
              <p>$116.50</p>
            </section>
          </div>
          <div className='flex flex-col w-full md:w-[25%]'>
            <button className='bg-[#000] text-[#fff] px-8 py-3 mt-3 mb-2 rounded-md md:rounded-none md:py-4 md:mb-3 block'>Proceed to Checkout</button>
            <a href="/products" className='underline text-center'>Continue shopping</a>
          </div>
        </div>}
    </div>
  )
}

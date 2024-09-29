import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
import { IoIosHeartEmpty } from "react-icons/io"
import { FaHeart } from "react-icons/fa"
import useCartStore from '../Store/cartStore'

export default function ProductPage() {
    const { id } = useParams()
    const [art, setArt] = useState([])
    const [liked, setLiked] = useState(false)
    const { addToCart, updateCart } = useCartStore()

    useEffect(() => {
        let ignore = false
        axios.get('/dummyDB.json')
        .then((response) => {
            if (!ignore) {
                const artsy = (response.data.art).filter((art) => art.name == id)
                setArt(artsy[0])
            }
        })
        .catch(err => console.log(err))

        return () => {
            ignore = true
        }
    } ,[])

    return (
       <>
            <NavBar />
            <p className='text-[#000]/60 mt-4 ml-5 md:ml-36'>Home/ Marketplace/Products/ <span className='text-[#000]'>{id}</span></p>
            <div className='md:border-2 md:w-[78%] md:mt-5 md:ml-36 md:flex md:justify-around md:py-3'>
                <div className='w-[80%] mx-auto mt-5 md:w-[40%] md:flex md:content-center md:mt-0 md:mx-0'>
                    <a><img src={art.img} alt="" className='w-full md:h-[30em]' /></a>
                    <div className='flex justify-between mt-3 md:flex-col md:hidden'>
                        <p className='text-xl'>{art.name}</p>
                        <p className='text-xl md:mt-2 md:font-bold'>{art.price}</p>
                    </div>
                </div>

                <div className='md:w-[40%]'>
                    <div className='hidden md:flex md:justify-between px-2 py-5'>
                        <p className='text-xl self-center'>{art.name}</p>
                        <p className='text-xl md:font-bold md:self-center'>{art.price}</p>
                    </div>
                    <p className='text-[#000] ml-10 md:ml-3'>Creator <a className=''>Ali Dawa</a></p>
                    <p className='text-[#000]/65 mt-3 ml-10 md:ml-3'>Made in Italy</p>
                    <p className='text-[#000]/65 mt-3 ml-10 md:ml-3'>Total views: 1.7k</p>

                    <div className='ml-10 mt-5 flex gap-2 md:ml-3'>
                        <button className='rounded-md border-2 py-3 px-8 bg-[#000] text-[#fff] md:px-16 md:py-4' onClick={() => addToCart(art)}>Add to cart</button>
                        <div className='flex self-center border-2 px-2 py-1 rounded-md md:px-3 md:py-[0.6em]' onClick={() => setLiked(!liked)}>
                            {liked ? (<FaHeart size={30} color='red' />) : (<IoIosHeartEmpty size={30} />)}
                        </div>
                    </div>
                </div>
            </div>  
       </>
    )
}

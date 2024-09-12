import React from 'react'
import { useRouteError } from 'react-router-dom';

export default function 
() {
  const error = useRouteError()
  console.error(error)
  
  return (
    <div className=' absolute flex flex-col top-0 right-0 left-0 bottom-0 justify-center items-center'>
        <h1 className='font-bold'>Oops!</h1>
        <p>An unexpected error has occur</p>
        <p><i>{error.statusText || error.message}</i></p>
    </div>
  )
}

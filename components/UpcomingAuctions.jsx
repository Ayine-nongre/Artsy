import React from 'react'

export default function UpcomingAuctions() {
  return (
    <div className='w-[100%] h-[18em] md:h-[43em] flex flex-col bg-gradient-to-r from-start from-33% via-middle via-33% to-end to-34% mt-16'>
        <p className='hidden md:block text-[#fff] text-3xl pl-20 mt-5'>See Upcoming Auctions and Exhibitions</p>
        <hr className='hidden md:block h-[0.1em] w-[37%] ml-24 text-[#fff] mt-2 mb-3'/>
        <div className="w-[90%] h-[80%] mx-auto my-auto bg-cover bg-upcoming-bg md:flex">
            <div>
                <div className='flex gap-5 h-[2em] md:mt-64 md:ml-12'>
                    <p className='text-8xl text-[#fff] self-center md:mt-8 md:ml-5'>.</p>
                    <p className='text-[#fff] text-xl self-center mt-[4.5em] w-[80%] md:text-2xl md:mt-[5.3em] md:w-[30%]'>MONALISA REDEFINED IN STYLE</p>
                </div>
                <div className='mt-16 flex gap-3 md:gap-5 md:mt-24 md:ml-10'>
                    <p className='text-[#fff] text-3xl md:text-5xl'>01</p>
                    <div className='mt-2'>
                        <p className='text-[#fff] text-sm mb-3 md:text-md'>START ON 08:00 GTS.MONDAY</p>
                        <p className='text-[#fff] text-[10px] w-[80%] md:text-[11px] md:w-[43%]'>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex h-fit gap-5 self-end mb-20'>
                <p className='self-end text-[#fff] underline'>See more</p>
                <button className='text-[#fff] p-2 border-[1px] rounded-md'>Set a reminder</button>
            </div>
        </div>
        <div className='hidden md:flex mb-5 mt-5 ml-20 mr-20 justify-between'>
            <div className='h-[0.5em] w-[15%] bg-[#AEAEAE] rounded-md self-center'>
                <div className='h-[0.5em] w-[30%] rounded-md bg-[#fff]'></div>
            </div>
            <div className='flex gap-3'>
                <div className='px-4 py-2 text-[#fff] text-xl rounded-full shadow-xl shadow-[#000]/30 bg-gradient-to-r from-[#AEAEAE] from-10% to-end to-90%'>&lt;</div>
                <div className='px-4 py-2 text-[#fff] text-xl rounded-full shadow-xl shadow-[#000]/30 bg-gradient-to-r from-[#AEAEAE] from-20% to-end to-80%'>&gt;</div>
            </div>
        </div>
    </div>
  )
}

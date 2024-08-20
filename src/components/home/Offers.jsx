'use client'
import React, { useState } from 'react'
import "../../app/globals.css"
import Link from 'next/link'

const Offers = () => {
  const [check1 , setCheck1] = useState(false)
  const [check2 , setCheck2] = useState(false)
  return (
    <div className='flex justify-center items-center h-[355px] w-full px-36 mb-20'>
      <div className='flex justify-between items-center h-[355px] w-[1250px] '>
        <div className='flex flex-col justify-around items-start bg-teal-100 w-[450px] h-full rounded-lg p-6 overflow-hidden'
          onMouseEnter={()=>setCheck1(true)}
          onMouseLeave={()=>setCheck1(false)}
          >
          <div className='flex flex-col justify-around items-start gap-3'>
            <p className='font-semibold text-2xl'>Super Sale</p>
            <p className='font-bold text-4xl'>New Collection</p>
            <Link href={"/#products"}>
              <button className='text-base hover:text-rose-600 ease-in-out duration-300 Offers'>Shop Now</button>
            </Link>
          </div>
          <img src="furniture1.png" alt="furniture1" className = { `relative left-32 bottom-16 
          ease-in-out duration-500 ${ check1 && " scale-110 " } `} />
        </div>
        <div className='flex  justify-around items-center bg-yellow-100 w-[750px] h-full rounded-lg p-6 overflow-hidden'
          onMouseEnter={()=>setCheck2(true)}
          onMouseLeave={()=>setCheck2(false)}
          >
          <div className='flex flex-col justify-around items-start gap-3'>
            <p className='font-bold text-4xl'>New Season</p>
            <p className='font-semibold text-2xl'>Sale 40% Off</p>
            <Link href={"/#products"}>
              <button className='text-base hover:text-rose-600 ease-in-out duration-300 Offers'>Shop Now</button>
            </Link>
          </div>
          <img src="furniture2.png" alt="furniture1" className = { `
          ease-in-out duration-500 ${ check2 && " scale-110 " } `} />
        </div>
      </div>
    </div>
  )
}

export default Offers

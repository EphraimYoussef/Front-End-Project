"use client"
import React, { useState } from 'react'
import Rating from './Rating'
import CardOption from './CardOption'
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineZoomIn } from "react-icons/ai";
import { IoIosShuffle } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addItem } from '@/redux/Cart/cartSlice';

const ProductCard = ( {item} ) => {
  const dispatch = useDispatch()
  const [check , setCheck] = useState(false)
  return (
    <div className='border border-slate-300 rounded-xl w-[270px] h-[430px] flex flex-col justify-start items-center overflow-hidden'
      key = { item.id }
      onMouseEnter={ () => { setCheck(true) } }
      onMouseLeave={ () => { setCheck(false) } }
      >
      <div className='h-[260px] w-[270px] relative border-b '>
        <div className=' h-[260px] w-[270px] flex justify-center items-center p-5'>
          <img src={item.image} className=' max-h-[75%] max-w-[75%] ' alt="" />
        </div>
        <div className={` ${ check ? " opacity-100" : "opacity-0" } flex justify-center gap-3 items-center
          bg-[rgba(0,0,0,0.2)] h-full w-full absolute top-0 ease-in-out duration-300 ` }>
          <CardOption check={check} option={1} > <IoIosShuffle size = {"18"} /> </CardOption>
          <CardOption check={check} option={2} > <AiOutlineZoomIn size = {"18"} /> </CardOption>
          <CardOption check={check} option={3} > <IoMdHeartEmpty size = {"18"} /> </CardOption>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center m-3' >
        <div className='h-24 flex justify-center items-center'>
          <Link href={`/${item.id}`}>
            <button className='font-semibold text-base text-slate-700 hover:text-rose-500 duration-300'> {item.title} </button>
          </Link>
        </div>
        <div className='flex justify-around items-center '>
          <p className='text-rose-500 font-bold text-base'>${ (item.price).toFixed(2) }</p>
          <p className='text-slate-500 font-normal text-base ml-2 line-through'> ${ (item.price * 1.25).toFixed(2) } </p>
        </div>
        <div className='flex justify-around items-center'>
          <Rating rate={item.rating.rate}/>
          <p className='ml-2 font-normal text-slate-500'>{`(${item.rating.count})`}</p>
        </div>
        <button className={`CardBtn ${check ? " -translate-y-12 " : " translate-y-5 "} 
          border border-rose-500  ease-in-out duration-300 
          flex justify-center items-center gap-2`}
          onClick={()=>{dispatch(addItem({product : item, quantity : 1}))}}>
          <IoCartOutline size={"20"} /> Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard

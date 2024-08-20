"use client"
import Rating from '@/atoms/Rating'
import React, { useState } from 'react'
import { IoCartOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiLoopRightFill } from "react-icons/ri";
import { PiMoneyWavy } from "react-icons/pi";
import ColorSelect from '@/atoms/ColorSelect';
import SizeSelect from '@/atoms/SizeSelect';
import Quantity from '@/atoms/Quantity';
import "../../app/globals.css";
import { IoIosShuffle, IoMdHeartEmpty } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addItem } from '@/redux/Cart/cartSlice';
import { FaMinus ,FaPlus } from "react-icons/fa";

const ProductDetails = ({product}) => {
	const [quantity, setQuantity] = useState(1)
	const dispatch = useDispatch()
return (
	<div className='h-[800px] mx-32 my-16 flex justify-between items-center '>
		<div className='flex justify-center items-center w-[48%]  border border-slate-300 rounded-md h-[100%]'>
			<img src={product.image} alt="" className='max-w-[75%] max-h-[65%]' />
		</div>
		<div className='flex flex-col h-[100%] w-[48%] justify-between items-start gap-4'>
			<div className='flex flex-col justify-start items-start gap-4'>
				<p className='font-semibold text-2xl'>{product.title}</p>
				<div className='flex justify-between items-center w-full'>
					<div className='flex justify-start items-center gap-3'>
						<p className='text-rose-500 font-bold text-2xl'>${ (product.price).toFixed(2) }</p>
						<p className='text-slate-500 font-normal text-base line-through'> ${ (product.price * 1.25).toFixed(2) } </p>
						<p className='text-green-700 font-normal text-base'> 25% off </p>
					</div>
					<div className='flex justify-around items-center '>
						<Rating rate={product.rating.rate}/>
						<p className='font-normal mx-4 text-slate-500'>{`${product.rating.rate} Out of 5`}</p>
						<p className='font-normal text-slate-500'>{`(${product.rating.count}) Ratings`}</p>
					</div>
				</div>
				<p className='text-slate-500 text-lg capitalize	'>Category : {product.category}</p>
				<p className='text-slate-500 text-lg'>{product.description}</p>
				<div className='flex flex-col justify-start items-start gap-2'>
					<p className='flex justify-start items-center gap-2 text-base text-slate-600'> 
						< IoShieldCheckmarkOutline className='text-rose-500' size={20} /> 1 Year Shopwise Warranty.
					</p>
					<p className='flex justify-start items-center gap-2 text-base text-slate-600'> 
						< RiLoopRightFill className='text-rose-500' size={20} /> 30 Day Return Policy.
					</p>
					<p className='flex justify-start items-center gap-2 text-base text-slate-600'> 
						< PiMoneyWavy className='text-rose-500' size={20} /> Cash on Delivery available.
					</p>
				</div>
			</div>
			<hr className='w-full border border-slate-300' />
			<ColorSelect/>
			<hr className='w-full border border-slate-300' />
			<SizeSelect/>
			<hr className='w-full border border-slate-300' />
			<div className='flex justify-center items-center gap-5'>
				{/* ======================================================================================================================= */}
				<div className='flex justify-between items-center gap-2'>
					<button className={`bg-gray-100 border border-slate-300 w-8 h-8 rounded-full
					font-medium duration-300 flex justify-center items-center ${quantity>1 && 'hover:bg-slate-300'}
					${quantity<=1 && 'opacity-30'}`} disabled={quantity<=1}
					onClick={() => { quantity>1 && setQuantity(quantity-1) }}>
					<FaMinus size={12} /></button>
					<input type="text" className='w-12 h-8 text-center border rounded border-slate-300 outline-none' value={quantity}
					onChange={(e) => setQuantity(e.target.value)} />
					<button className={`bg-gray-100 border border-slate-300 w-8 h-8 rounded-full
					font-medium duration-300 flex justify-center items-center hover:bg-slate-300`}
					onClick={() => setQuantity(parseInt(quantity)+1)}>
					<FaPlus size={12} /></button>
				</div>
				{/* ======================================================================================================================= */}
				<button className={`LoginBtn h-12 w-44 rounded-md
					border border-rose-500  ease-in-out duration-300 
					flex justify-center items-center gap-2`}
					onClick={ () => dispatch( addItem ( {product, quantity} ) ) }
					>
					<IoCartOutline size={"20"}/> Add To Cart 
				</button >
				<button className='hover:text-rose-500 duration-300'>
					<IoIosShuffle size={25}/>
				</button>
				<button className='hover:text-rose-500 duration-300'>
					<IoMdHeartEmpty size={25}/>
				</button>
			</div>
		</div>
	</div>
  )
}

export default ProductDetails

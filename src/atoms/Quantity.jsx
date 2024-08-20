'use client'
import React, { useState } from 'react'
import { FaMinus ,FaPlus } from "react-icons/fa";

const Quantity = () => {
	const [quantity, setQuantity] = useState(1)
  return (
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
  )
}

export default Quantity

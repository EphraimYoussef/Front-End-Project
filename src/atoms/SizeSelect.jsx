"use client"
import React, { useState } from 'react'

const 	SizeSelect = () => {
	const [size, setSize] = useState('M')
  return (
    <div className='flex justify-between items-center gap-3'>
      <p className='text-slate-500'>Size :</p>
			<button className={` w-8 h-8 border text-slate-600 text-sm font-medium duration-100
			${size === 'XS' && 'border-rose-500 bg-rose-500 text-white'}` }
			onClick={() => setSize('XS')}>XS</button>
			<button className={` w-8 h-8 border text-slate-600 text-sm font-medium duration-100
			${size === 'S' && 'border-rose-500 bg-rose-500 text-white'}` }
			onClick={() => setSize('S')}>S</button>
			<button className={` w-8 h-8 border text-slate-600 text-sm font-medium duration-100
			${size === 'M' && 'border-rose-500 bg-rose-500 text-white'}` }
			onClick={() => setSize('M')}>M</button>
			<button className={` w-8 h-8 border text-slate-600 text-sm font-medium duration-100
			${size === 'L' && 'border-rose-500 bg-rose-500 text-white'}` }
			onClick={() => setSize('L')}>L</button>
			<button className={` w-8 h-8 border text-slate-600 text-sm font-medium duration-100
			${size === 'XL' && 'border-rose-500 bg-rose-500 text-white'}` }
			onClick={() => setSize('XL')}>XL</button>

    </div>
  )
}

export default SizeSelect
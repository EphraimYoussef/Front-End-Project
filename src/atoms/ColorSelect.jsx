"use client"
import React, { useState } from 'react'

const ColorSelect = () => {
	const [color, setColor] = useState('black')
  return (
    <div className='flex justify-between items-center gap-3'>
      <p className='text-slate-500'>Color :</p>
			<button className={`bg-gray-950 w-4 h-4 rounded-full duration-200
			${color === 'black' && 'ring-[6px] ring-slate-300'}`}
			onClick={() => setColor('black')}></button>
			<button className={`bg-blue-900 w-4 h-4 rounded-full duration-200
			${color === 'blue' && 'ring-[6px] ring-slate-300'}`} 
			onClick={() => setColor('blue')}></button>
			<button className={`bg-white w-4 h-4 rounded-full border border-slate-500 duration-200
			${color === 'white' && 'ring-[6px] ring-slate-300'}`} 
			onClick={() => setColor('white')}></button>
    </div>
  )
}

export default ColorSelect

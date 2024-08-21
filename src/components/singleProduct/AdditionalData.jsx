"use client"
import React, { useState } from 'react'

const AdditionalData = ({data}) => {
	const [option, setOption] = useState(1)
  return (
    <div className=' flex w-full justify-start items-start flex-col px-28 my-16 max-lg:px-5'>
      <div className='relative flex justify-start items-center w-full'>
        <button className={`uppercase font-semibold hover:text-rose-500 transition duration-300 hover:bg-gray-50 px-4 py-2 border-b-[3px] 
        ${option === 1 && "text-rose-500"}`}
        onClick={() => setOption(1)}>
          description
        </button>
        <button className={`uppercase font-semibold hover:text-rose-500 transition duration-300 hover:bg-gray-50 px-4 py-2 border-b-[3px]
        ${option === 2 && "text-rose-500"}`} 
        onClick={() => setOption(2)}>
          additional info
        </button>
        <div
          className={`absolute h-0.5 bottom-0 w-full bg-gray-300`}>
        </div>
        <div
          className={`absolute h-0.5 bottom-0 bg-red-500 transition-all duration-300`}
          style={
            option === 1 ? {left: '0%',width: '133px'} 
            : 
            {left: '133px',width: '167px'}
          }>
        </div>
      </div>
      
      {
        option == 1 ? 
        <div className='text-slate-500 font-normal my-4 text-xl leading-10 max-md:text-base'>
          {data}
        </div> 
        : 
        <div className='text-slate-600  font-normal my-8 text-lg w-full max-md:text-base'>
          <table className="table-auto border border-slate-300 w-full ">
            <tbody  >
              <tr className='border  border-slate-300 p-3'>
                <td  className='border border-slate-300 p-3 w-1/4'>Capacity</td>
                <td className='border  border-slate-300 p-3' >5 Kg</td>
              </tr>
              <tr className='border  border-slate-300 p-3'>
                <td className='border  border-slate-300 p-3'>Color</td>
                <td className='border border-slate-300  p-3'>Black , Blue and White.</td>
              </tr>
              <tr className='border'>
                <td className='border  border-slate-300 p-3'>Water Resistant</td>
                <td className='border border-slate-300  p-3'>Yes</td>
              </tr>
              <tr className='border'>
                <td className='border  border-slate-300 p-3'>Material</td>
                <td className='border border-slate-300  p-3'>Artificial Leather</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default AdditionalData

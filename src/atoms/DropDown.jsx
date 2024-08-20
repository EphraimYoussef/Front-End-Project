'use client'
import React, { useState } from 'react'
import { IoChevronDownOutline } from "react-icons/io5";

const DropDown = ( { title , content , withImg = false , img , mainImage} ) => {
  const [check,setCheck] = useState(false)
  const [Title,setTitle] = useState(title)
  const [image,setImage] = useState(mainImage)
  return (
    <div className=' flex'>
      <div className="relative">
      <div className="inline-flex items-center overflow-hidden ">
        <button href="#" className="text-black font-semibold px-4 py-2 text-sm/none hover:bg-gray-50 flex gap-2 hover:text-rose-500 transition duration-300" 
        onClick={()=>{setCheck(!check)}}
        >
          <img src={`${image}`} className={withImg ? "w-4 h-4 rounded-full" : "hidden"} alt="" />
          {Title}
          <IoChevronDownOutline size={16} className={`${check && "-rotate-180"} duration-300`}/>
        </button>
        {
          check ?
          <div className={`absolute end-0 top-10 z-50 mt-2 divide-y divide-gray-100 
          rounded-md border border-gray-100 bg-white shadow-lg ${withImg && "w-[160px]"}`} role="menu">
            {
              withImg ?( 
                content.map((x,i=0)=>
                  <div className="p-2">
                    <button type='button' className="flex justify-start items-center w-full gap-2 rounded-lg px-4 py-2 text-sm text-black font-semibold hover:bg-gray-50 hover:text-rose-500 transition duration-300" role="menuitem"
                      onClick={()=>{
                        setTitle(x);
                        setCheck(false);
                        setImage(img[i]);
                      }}
                    >
                      <img src={`${img[i]}`} className="w-4 h-4 rounded-full" alt="" />
                      {x}
                    </button>
                </div>
                )
            )
              :
              content.map((x)=>
                <div className="p-2">
                  <button type='button' className="block rounded-lg px-4 py-2 text-sm text-center text-black font-semibold hover:bg-gray-50 hover:text-rose-500 transition duration-300" role="menuitem"
                    onClick={()=>{
                      setTitle(x);
                      setCheck(false);
                    }}
                  >
                    {x}
                  </button>
              </div>
              )
            }
          </div>:
          null
        }
      </div>
    </div>
    </div>
  )
}

export default DropDown

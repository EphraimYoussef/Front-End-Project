import React from 'react'

const CardOption = ( { children , check , option } ) => {
  return (
    <div>
      <button className={` ${check ? " translate-y-2 " : " translate-y-7 "} 
        flex justify-center items-center text-2xl h-11 w-11 rounded-full
        bg-white hover:bg-rose-600 hover:text-white ease-in-out 
        ${ option == 1 && "duration-[200ms]" }
        ${ option == 2 && "duration-[300ms]" }
        ${ option == 3 && "duration-[400ms]" }
        `}>
        {children}
      </button>
    </div>
  )
}

export default CardOption

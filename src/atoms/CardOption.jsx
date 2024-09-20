import React from 'react'

const CardOption = ( { children , check , option } ) => {
  return (
    <div>
      <button className={` ${check ? " translate-y-2 " : " translate-y-7 "} 
        flex justify-center items-center text-2xl h-11 w-11 rounded-full
        bg-white hover:bg-rose-600 hover:text-white ease-in-out 
        ${ option == 1 && "duration-300 " }
        ${ option == 2 && "duration-300 delay-75" }
        ${ option == 3 && "duration-300 delay-150" }
        `}
        title = {option == 1 ? "compare" : option == 2 ? "Zoom in" : "Add to wishlist"} >
        {children}
      </button>
    </div>
  )
}

export default CardOption

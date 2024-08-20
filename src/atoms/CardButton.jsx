import React from 'react'
import "../app/globals.css";

const CardButton = ( {children , check} ) => {
	return (
		<button className={`CardBtn ${check ? " -translate-y-12 " : " translate-y-5 "} 
			border border-rose-500  ease-in-out duration-300 
			flex justify-center items-center gap-2`}>
			{children}
		</button>
	)
}

export default CardButton
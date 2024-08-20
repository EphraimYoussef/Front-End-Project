import SingleProduct from '@/components/singleProduct/SingleProduct'
import React from 'react'
import { Roboto } from 'next/font/google';
import { getSingleProductData } from '@/services/getSingleProductData';

const roboto = Roboto({
  subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

export const metadata = {
  title: "Shopwise - Products",
};


const page = async ( props ) => {
	const { productID } = props.params
  const product = await getSingleProductData(productID)
  return (
    <div className={roboto.className}>
      <SingleProduct product={product}/>
    </div>
  )
}

export default page

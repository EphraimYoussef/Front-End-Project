import CartList from '@/components/cart/CartList'
import { Roboto } from 'next/font/google';
import React from 'react'
import { ToastContainer } from 'react-toastify';

const roboto = Roboto({
  subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

export const metadata = {
  title: "Shopwise - Cart",
};
const page = () => {
  return (
    <div className={roboto.className}>
      <CartList/>
      <ToastContainer />
    </div>
  )
}

export default page

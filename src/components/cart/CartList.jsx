'use client'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { clearCart, removeItem } from '@/redux/Cart/cartSlice';
const CartList = () => {
  const { cartItems , amount , total} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    amount === 0 ? // ? Cart is empty
      <div className='flex justify-center items-center h-[550px] flex-col gap-10'>
        <p className='font-bold text-5xl uppercase text-slate-600'> there is no items </p> 
        <p className='text-2xl text-slate-600 font-semibold'>
          Please, Go back to 
          <Link href={"/"}>
            <span className='text-slate-600 underline p-2'>Home</span> 
          </Link>
          and Add some items. </p>
      </div>
    : 
    <div className='flex justify-center items-center flex-col gap-10 min-h-[550px] my-20'>
      <table className='w-[80%]'>
        <thead className='text-slate-600'>
          <tr className='text-slate-600 border-b border-slate-300 text-lg'>
            <th className='p-5'>Product</th>
            <th className='p-5'>Price</th>
            <th className='p-5'>Quantity</th>
            <th className='p-5'>Total</th>
            <th className='p-5'>Remove</th>
          </tr>
        </thead>
        <tbody className='text-slate-600'>
          {
            cartItems.map((item) => {
              return(
                <tr className='border-b border-slate-300 font-semibold h-[150px]'>
                  <td className='p-5'>
                    <div className="flex justify-start items-center gap-5">
                      <img src={item.image} className="w-20 rounded border p-2" alt="" />
                      <p>{item.title}.</p>
                    </div>
                  </td>
                  <td className='p-5  text-center '>${(item.price).toFixed(2)}</td>
                  <td className='p-5  text-center '>{item.quantity}</td>
                  <td className='p-5  text-center '>${(item.price * item.quantity).toFixed(2)}</td>
                  <td className='p-5  text-center '>
                    <button className='hover:text-rose-600 duration-300'
                    onClick={() => dispatch(removeItem(item.id))}><TiDeleteOutline size={30} /></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className='w-[80%] flex justify-between items-center gap-5'>
        <p className='text-slate-600 font-bold text-xl'>Total Price : ${total.toFixed(2)}</p>
        <button className='border border-rose-600 text-white p-3 rounded HeaderBtn1 uppercase'
        onClick={() => dispatch(clearCart())} >Clear Cart</button>
      </div>
    </div>
  )
}

export default CartList

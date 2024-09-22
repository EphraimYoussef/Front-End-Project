'use client'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { clearCart, removeItem } from '@/redux/Cart/cartSlice';
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CartList() {
  const { cartItems , amount , total} = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  if (amount === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <div className="space-x-4">
          <Link href="/">
            <Button variant="default" className="bg-rose-500 hover:bg-rose-600">Go Home</Button>
          </Link>
          <Link href="/#products">
            <Button variant="outline" className="border-rose-600 text-rose-600 duration-300 hover:bg-slate-100 hover:text-rose-600">Add Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-24 max-md:px-4">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-8">
        {
        cartItems.map((product) => (
          <div key={product.id} className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md border">
            <img
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
              className="rounded-md mb-4 sm:mb-0 sm:mr-6"
            />
            <div className="flex-grow space-y-2">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">Quantity: {product.quantity}</p>
              <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
              <p className="font-semibold">Total: ${(product.price * product.quantity).toFixed(2)}</p>
            </div>
            <Button
              variant="destructive"
              size="icon"
              className="mt-4 sm:mt-0"
              onClick={() => dispatch(removeItem(product.id))}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Remove product</span>
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xl font-bold mb-4 sm:mb-0">Total: ${total.toFixed(2)}</p>
        <Button variant="destructive" onClick={() => dispatch(clearCart())}>Clear Cart</Button>
      </div>
    </div>
  )
}
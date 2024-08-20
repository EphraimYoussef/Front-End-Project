import LoginForm from '@/components/login/LoginForm'
import React from 'react'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

export const metadata = {
  title: "Shopwise - Login",
};

const page = () => {
  return (
    <div className={roboto.className}>
      <LoginForm/>
    </div>
  )
}

export default page

import Image from "next/image";
import Head from 'next/head';
import HeaderSwiper from '../components/home/HeaderSwiper'
import Features from "@/components/home/Features";
import ProductsList from "@/components/home/ProductsList";
import Offers from "@/components/home/Offers";
import { Roboto } from 'next/font/google';
import FurnitureSwiper from "@/components/home/FurnitureSwiper";
import LogoSwiper from "@/components/home/LogoSwiper";
import { ToastContainer } from 'react-toastify';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata = {
  title: "Shopwise - Home",
};

export default function Home() {
  return (
    <main className={roboto.className} >
      <HeaderSwiper/>
      <Features/>
      <ProductsList/>
      <Offers/>
      <FurnitureSwiper/>
      <LogoSwiper/>
      <ToastContainer />
    </main>
  );
}

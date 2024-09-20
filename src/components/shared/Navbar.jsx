'use client'
import DropDown from '../../atoms/DropDown'
import Link from 'next/link'
import { BsCart3 } from "react-icons/bs";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { IoIosShuffle } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlLogin } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
const Navbar = ({path}) => {
  const { amount } = useSelector(state => state.cart)
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='px-36 flex justify-between font-semibold border-b max-md:flex-col max-lg:p-2 max-md:items-center'>
        <div className='flex justify-center items-center '>
          <DropDown title={"English"} mainImage={"eng.png"} content={["English","France","United States","Egypt"]}
            withImg={true} img={["eng.png","fn.png","us.png","eg.png"]}/>
          <DropDown title={"USD"} content={["USD","EUR","GBR","EGP"]}/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="26" width="26" className=' align-sub'>
            <g data-name="Smart Phone 04">
            <path d="M326.852 74.206H185.158a42.285 42.285 0 0 0-42.242 42.24v279.112a42.29 42.29 0 0 0 42.242 42.236h141.694a42.282 42.282 0 0 0 42.232-42.236V116.442a42.285 42.285 0 0 0-42.232-42.236zm22.126 321.352a22.162 22.162 0 0 1-22.126 22.13H185.158a22.164 22.164 0 0 1-22.136-22.13v-30.65h185.956v30.65zm0-50.765H163.022v-196.07h185.956v196.07zm0-216.175H163.022v-12.171a22.157 22.157 0 0 1 22.136-22.126h141.694a22.155 22.155 0 0 1 22.126 22.126z"/>
            <path d="M242.314 104.869h27.377v13.41h-27.377zM227.913 380.573h56.175v20.111h-56.175z"/></g>
          </svg>
          <p className='max-md:text-sm'>123-456-7890</p>
        </div>
        <div className='flex w-80 justify-between items-center '>
          <button className='flex justify-center items-center gap-1 hover:text-rose-500 transition duration-300 hover:bg-gray-50 px-4 py-2'
            title='Compare'>
            <IoIosShuffle size={20}/>
            Compare
          </button>
          <button className='flex justify-center items-center gap-1 hover:text-rose-500 transition duration-300 hover:bg-gray-50 px-4 py-2'
            title='Wishlist'>
            <IoMdHeartEmpty size={20}/>
            Wishlist
          </button>
          <Link href={"/login"} title='Login'>
            <button className={`flex justify-center items-center gap-2 hover:text-rose-500 transition duration-300 px-4 py-2
            ${path == '/login' && "text-rose-500" } hover:bg-gray-50 `}>
              <SlLogin size={16} />
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className='px-36 flex justify-between items-center font-semibold h-[67px] border-b sticky top-0 z-40 bg-white shadow-md max-lg:p-2'>
        <Link href={"/"} title='Shopwise'>
          <img src="logo.png" alt="logo" className='h-11' />
        </Link>
        <div className='flex justify-between items-center max-md:hidden'>
          <Link href={"/"} title='Home'>
            <button className={`text-black font-semibold px-4 py-2 text-sm/none hover:bg-gray-50 
            hover:text-rose-500 transition duration-300 
            ${path == '/' && "text-rose-500" }`}>HOME</button>
          </Link>
          <Link href={"/#products"} title='Products'>
            <button className="text-black font-semibold px-4 py-2 text-sm/none hover:bg-gray-50 
              hover:text-rose-500 transition duration-300" >PRODUCTS</button>
          </Link>
          <button className="text-black font-semibold px-4 py-2 text-sm/none hover:bg-gray-50 
          hover:text-rose-500 transition duration-300" title='About Us' >ABOUT US</button>          
          <button className="text-black font-semibold px-4 py-2 text-sm/none hover:bg-gray-50 
            hover:text-rose-500 transition duration-300" title='Contact Us' >CONTACT US</button>
          <button className='flex w-10 h-10 justify-center items-center hover:text-rose-500 transition hover:bg-gray-50 duration-300'
            title='Search'> 
            <IoSearchOutline size={22} />
          </button>
          <Link href={"/cart"}>
            <button className={`flex w-10 h-10 justify-center items-center hover:text-rose-500 transition hover:bg-gray-50 duration-300
              ${path == '/cart' && "text-rose-500" }`}
              title='Cart'>
              <div className='relative '>
                <BsCart3 size={22} />
                <div  className='absolute -top-2 left-3 px-[5px] h-4 flex justify-center items-center rounded-full
                bg-rose-500 text-white text-xs font-semibold'>{amount}</div>
              </div>
            </button>
          </Link>
        </div>
        
        {/* // * Mobile Navbar Menu */}
        <div className='md:hidden flex '>
          <button className='flex w-10 h-10 justify-center items-center hover:text-rose-500 transition hover:bg-gray-50 duration-300'> 
            <IoSearchOutline size={22} />
          </button>
          <Link href={"/cart"}>
            <button className={`flex w-10 h-10 justify-center items-center hover:text-rose-500 transition hover:bg-gray-50 duration-300
              ${path == '/cart' && "text-rose-500" }`}>
              <div className='relative '>
                <BsCart3 size={22} />
                <div  className='absolute -top-2 left-3 px-[5px] h-4 flex justify-center items-center rounded-full
                bg-rose-500 text-white text-xs font-semibold'>{amount}</div>
              </div>
            </button>
          </Link>
          <button onClick={() => setOpen(!open)} className='border rounded-md p-2'>
            {
              open ? <IoClose size={24}/>  : <IoMenu size={24} /> 
            }
          </button>
          <div className={`flex flex-col w-full border-b-2 justify-start items-start bg-white gap-4 p-4
            absolute top-16 left-0 z-50 md:hidden
            scale-y-0 scale-x-100 origin-top transition-all duration-300 ${open ? "scale-y-100" : "scale-0"}`}>
            <Link href={"/"}>
                <button className={`text-black font-semibold px-4 py-2 text-sm/none hover:bg-gray-50 
                hover:text-rose-500 transition duration-300 
                ${path == '/' && "text-rose-500" }`}
                onClick={() => setOpen(false)}>HOME</button>
            </Link>
            <Link href={"/#products"}>
              <button className="text-black font-semibold px-4 py-2 text-sm/none hover:bg-gray-50 
                hover:text-rose-500 transition duration-300" onClick={() => setOpen(false)} >PRODUCTS</button>
            </Link>
            <button className="text-black font-semibold px-4 py-2 text-sm/none hover:bg-gray-50 
            hover:text-rose-500 transition duration-300" onClick={() => setOpen(false)}>ABOUT US</button>          
            <button className="text-black font-semibold px-4 py-2 text-sm/none hover:bg-gray-50 
              hover:text-rose-500 transition duration-300" onClickCapture={() => setOpen(false)}>CONTACT US</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

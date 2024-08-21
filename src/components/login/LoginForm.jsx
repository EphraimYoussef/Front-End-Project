'use client'
import React from 'react'
import '../../app/globals.css'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/redux/Cart/cartSlice';

const LoginForm = () => {
  function notifySuccess() {
    toast.success('User logged in successfully!', {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  function notifyFailure() {
    toast.error('Login failed. Please try again.', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  const { register, handleSubmit , formState: { errors , isSubmitting } } = useForm()
  const { push } = useRouter();
  const dispatch = useDispatch()
  const onSubmit = async (data) => {
    
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            username: data.username,
            password: data.password
        })
    })
    const result = await response.json()
    if (response.ok && result.token) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("user-info", JSON.stringify(result));
      notifySuccess();
      dispatch(clearCart());
      setTimeout(() => {
        push('/'); 
        }, 2300);
      } 
    } 
    catch (error) {
      notifyFailure();
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-full my-28'>
      <div className='flex flex-col justify-center items-left w-[570px] h-[550px] border gap-4 px-5 py-10 max-md:w-[350px]'
        style={{
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        }}>
        <p className='font-semibold text-3xl ml-5'>Login</p>
        <form className='flex flex-col justify-center items-center w-full h-full gap-3' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-between items-start flex-col gap-1'>
            <input {...register("username",{
              required: "Username is required.",
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters."
              }
            })} 
              type="text" placeholder="Username" className="border w-[490px] mx-5 h-12 px-4 outline-none rounded-md 
              placeholder:text-md placeholder:text-slate-500 focus:border-sky-500 transition duration-300
              max-md:w-[300px]" />
              <p className="text-red-600 text-sm h-3 px-7">{errors.username && errors.username.message}</p>
          </div>
          <div className='flex justify-between items-start flex-col gap-1'>
            <input {...register("password",{
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters."
              }
            })} type="password" placeholder="Password" className="border w-[490px] mx-5 h-12 px-4 outline-none rounded-md 
              placeholder:text-md placeholder:text-slate-500 focus:border-sky-500 transition duration-300
              max-md:w-[300px]"  />
              <p className="text-red-600 text-sm h-3 px-7 ">{errors.password && errors.password.message}</p>
          </div>
          <div className='flex justify-between items-center w-[490px] max-md:w-[300px]'>
            <label className="flex cursor-pointer items-start gap-4">
              <div className="flex items-center">
                &#8203;
                <input type="checkbox" className="size-4"/>
              </div>
              <div>
                <p className="text-slate-600"> Remember me </p>
              </div>
            </label>
            <button type="button" className='text-slate-600 hover:text-rose-500 duration-300'>Forgot Password?</button>
          </div>
          <button type='submit' disabled={isSubmitting} className={`w-[490px] h-12 border border-rose-500 
          rounded-md text-rose-500 text-lg duration-300 ${!isSubmitting && "LoginBtn"} ${isSubmitting && "opacity-50"}
          max-md:w-[300px]`}>
            {isSubmitting ? "Logging In..." : "Log In"}</button>
          <ToastContainer />
        </form>
        <div className="flex items-center justify-center w-full">
            <hr className="flex-grow border-t border-gray-300"/>
            <span className="px-4 text-gray-500">OR</span>
            <hr className="flex-grow border-t border-gray-300"/>
        </div>
        <div className='flex justify-center items-center gap-8'>
          <button type="button" className="text-white h-12 w-36 bg-[#3b5998] hover:bg-[#364d80] font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 duration-300">
            <FaFacebookF className='me-2' />
            Facebook
          </button>
          <button type="button" className="text-slate-500 h-12 w-36 border border-slate-300 bg-slate-50 hover:bg-slate-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 duration-300">
            <FcGoogle className='me-2' size={25}/>
            Google
          </button>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <p className='text-slate-500 text-lg'>Don't have an account ?</p>
          <button className='text-slate-500 text-lg hover:text-rose-500 duration-300' >Sign up now</button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm

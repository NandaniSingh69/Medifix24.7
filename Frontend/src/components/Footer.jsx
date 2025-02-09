import React from 'react'
import {assets} from '../assets/assets_frontend/assets'

 const Footer = () => {
  return (
    <div className='md:mx-16'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
    {/*  left section */}
        <div>
            <img className='mb-4 w-20' src={assets.logo} alt='logoimage' />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>At Medifix, we make it easy for you to find and book appointments with the best doctors near you. Whether you need a general checkup, specialist consultation, or emergency medical care, we connect you with top-rated healthcare professionals at your convenience.</p>
        </div>
    {/* center section */}
        <div>
          <p className='text-xl font-medium mb-3'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

    {/* right section */}
      <div>
        <p className='text-xl font-medium mb-3'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-21-435-8888</li>
          <li>medifix@gamil.com</li>
        </ul>
      </div>
   </div>
    <div>
      {/* ----Copyright Text ------ */ }
      <hr />
      <p className='py-5 text-sm text-center'>Copyright 2025@ Medifix - All Right Reserved.</p>
    </div>
  </div>
   
  )
}
export default Footer 
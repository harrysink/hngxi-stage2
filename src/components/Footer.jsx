import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faPinterest  } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/Logo.png'
import './Footer.css'

export const Footer = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);

  return (
<div className='footer relative w-full bottom-0'>
        {/* above the dividing line */}
        <div className='grid grid-cols-4 gap-4 text-white bg-footer-gray p-10'>
            <div className='0' data-aos='fade-in'>
                <img src={logo} className='w-40 mb-4'/>
                <p className='font-thin text-sm text-gray-400 mb-4'>This is your best spot for aesthetic <br />vintage furniture of all time</p>
                <p className='font-bold text-sm text-white mb-5 leading-6'>123 HNG.ng Street, Nigeria<br />+12 3 1234 1234 <br />contact@tinbuexpress.com</p>
                <div className='flex bg-footer-gray justify'>
                    <FontAwesomeIcon icon={faFacebook} className='icons text-white mr-5 cursor-pointer hover:text-hero-blue ease-in-out duration-300 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTwitter} className='icons text-white mr-5 cursor-pointer hover:text-amber-400 transition-ease-in-out duration-300'/>
                    <FontAwesomeIcon icon={faPinterest} className='icons text-white mr-6 cursor-pointer hover:text-amber-400 transition-ease-in-out duration-300'/>
                    <FontAwesomeIcon icon={faInstagram} className='icons text-white cursor-pointer hover:text-amber-400 transition-ease-in-out duration-300' />
                </div>
            </div>
            <div className='1' data-aos='fade-in'>
                <p className='font-bold text-sm mb-4'>SHOPPING</p>
                <p className='font-thin text-xs mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Your cart</p>
                <p className='font-thin text-xs mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Your orders</p>
                <p className='font-thin text-xs mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Compared items</p>
                <p className='font-thin text-xs mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Wishlist items</p>
                <p className='font-thin text-xs mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Shipping detail</p>
            </div>
            <div className='2' data-aos='fade-in'>
                <p className='font-bold text-sm mb-4'>MORE LINK</p>
                <p className='font-thin text-xs mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Blog</p>
                <p className='font-thin text-xs mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Gift Center</p>
                <p className='font-thin text-xs mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Buying guides</p>
                <p className='font-thin text-xs mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>New Arrivals</p>
                <p className='font-thin text-xs mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Clearance</p>
            </div>
            <div className='3' data-aos='fade-in'>
                <p className='font-bold text-sm mb-4'>FROM THE BLOG</p>
                <p className='flex items-center font-thin text-lg text-gray-400 mb-1'>26 <span className='text-xs ml-1'>May</span></p>
                <p className='font-thin text-sm text-white mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>New Collection drops July 16, Get your<br />notifications on</p>
                <p className='font-thin text-xs text-gray-400 mb-2'>3 comments</p>

                {/* dividing line */}
                <div className='mt-6 mb-4'><hr className='text-gray-400 w-[80%]' /></div>

                <p className='flex items-center font-thin text-lg text-gray-400 mb-1'>27 <span className='text-xs ml-1'>May</span></p>
                <p className='font-thin text-sm text-white mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Emily becomes the largest purchase of<br />all time</p>
                <p className='font-thin text-xs text-gray-400 mb-2'>3 comments</p>
            </div>
        </div>

        {/* copyright section below the dividing line */}
        <div className='flex items-center bg-black px-10 py-3'>
            <p className='text-xs text-center text-white w-[100%] '>Yetunde.io & Harrison Olufemi © - All rights reserved</p>
        </div>
    </div>
  )
}

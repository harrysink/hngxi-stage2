import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import chair1 from '../assets/chair1.png'
import chair2 from '../assets/chair2.png'
import '../components/Cart.css'

export const Cart = () => {
  return (
    <div className='px-10 mb-5'>
        <NavBar />
        <hr className='mb-5'/>
        <div className='flex'>
          {/* cart left */}
          <div className='w-[65%] mr-16'>
            <h2 className='font-bold text-3xl mb-5'>Cart <span className='font-semibold text-sm text-zinc-400'>2 ITEMS</span></h2>

            {/* chairs */}
            <div>
              {/* osmond */}
              <div className='flex'>
                <div className='flex mb-5 w-[70%]'>
                  <div className='mr-5'>
                    <img src={chair2}/>
                  </div>
                  <div>
                    <p className='font-bold leading-9'>Osmond Armchair</p>
                    <p className='text-zinc-400 text-sm'>Color <span className='font-semibold text-black'>Gunnared biege</span></p>
                    <div className='flex items-center'>
                      <div className='border-1 border-zinc-300 px-2 py-2 mt-3 text-center font-semibold'>
                        <span className='cursor-pointer'>-</span><span className='mx-4'>1</span><span className='cursor-pointer'>+</span>
                      </div>
                      <p className='mt-3 ml-5 cursor-pointer text-sm text-red-500 font-semibold'>Remove</p>
                    </div>
                  </div>
                </div>
                <div className='w-[30%] font-bold flex justify-end'>$149.99</div>
              </div>

              <hr className='mb-5'/>

              {/* meryl */}
              <div className='flex'>
                <div className='flex mb-5 w-[70%]'>
                  <div className='mr-5'>
                    <img src={chair1}/>
                  </div>
                  <div>
                    <p className='font-bold leading-9'>Meryl Lounge Chair</p>
                    <p className='text-zinc-400 text-sm'>Color <span className='font-semibold text-black'>Lysed bright green</span></p>
                    <div className='flex items-center'>
                      <div className='border-1 border-zinc-300 px-2 py-2 mt-3 text-center font-semibold'>
                        <span className='cursor-pointer'>-</span><span className='mx-4'>1</span><span className='cursor-pointer'>+</span>
                      </div>
                      <p className='mt-3 ml-5 cursor-pointer text-sm text-red-500 font-semibold'>Remove</p>
                    </div>
                  </div>
                </div>
                <div className='w-[30%] font-bold flex justify-end'>$169.99</div>
              </div>

              <div className='text-sm border-1 border-hero-blue p-3 flex'>
                <span className='text-2xl pr-2 text-hero-blue font-semibold'>%</span> <span className='my-auto'>10% instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA</span>
              </div>
            </div>
          </div>

          {/* cart right */}
          <div className='w-[35%] border-1 border-zinc-300 p-4'>
            <h2 className='font-bold text-2xl mb-4'>Order Summary</h2>
            <p className='mb-4 text-sm flex'>
              <div className='w-[50%]'>Price</div>
              <div className='w-[50%] flex justify-end'>$319.8</div>
            </p>
            <p className='mb-4 text-sm flex'>
              <div className='w-[50%]'>Discount</div>
              <div className='w-[50%] flex justify-end'>$31.9</div>
            </p>
            <p className='mb-4 text-sm flex'>
              <div className='w-[50%]'>Shipping</div>
              <div className='w-[50%] flex justify-end text-hero-blue'>Free</div>
            </p>
            <p className='mb-4 text-sm flex'>
              <div className='w-[50%]'>Coupon Applied</div>
              <div className='w-[50%] flex justify-end'>$0.00</div>
            </p>
            <hr className='mb-4'/>
            <p className='mb-4 text-sm flex'>
              <div className='w-[50%]'>TOTAL</div>
              <div className='w-[50%] flex justify-end font-bold'>$288.08</div>
            </p>
            <p className='mb-4 text-sm flex'>
              <div className='w-[50%]'>Estimated Delivery by</div>
              <div className='w-[50%] flex justify-end font-bold'>01 Jun, 2024</div>
            </p>
            <form action="">
              <input type="text" placeholder='Coupon Code' className='border-1 border-zinc-400 text-sm mb-4 px-4 py-3 w-full'/>
              <Link to=''>
                <button className="btn bg-hero-blue text-white rounded-none fw-medium justify-left px-4 py-3 w-full text-sm">Proceed to Checkout</button>
              </Link>
            </form>
          </div>
        </div>
    </div>
  )
}


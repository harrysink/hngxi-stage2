import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { NavBar } from '../components/NavBar'
import { ContactHero } from '../components/ContactHero'
import { Footer } from '../components/Footer'

export const Contact = () => {
  const location = <FontAwesomeIcon icon={faLocationDot} className="text-black" />
  const phone = <FontAwesomeIcon icon={faPhoneVolume} className="text-black" />

  return (
    <div className='mb-10'>
        <NavBar />
        <ContactHero />
        <div className='flex px-10 pt-24'>
          {/* contact left */}
          <div className='w-[40%] mr-12'>
            <div className='border border-zinc-300 bg-zinc-300 px-4 py-5 mb-10 rounded-xl'>
              <p className='font-bold mb-3'>Nigeria</p>
              <p className='mb-3'><span className='mr-2'>{location}</span>123 HNG.ng Street, Nigeria</p>
              <p><span className='mr-2'>{phone}</span>08070000000</p>
            </div>
            <div className='border border-zinc-300 bg-zinc-300 px-4 py-5 rounded-xl'>
              <p className='font-bold mb-3'>USA</p>
              <p className='mb-3'><span className='mr-2'>{location}</span>123 HNG.ng Street, Philadelphia, USA</p>
              <p><span className='mr-2'>{phone}</span>+91 70000000</p>
            </div>
          </div>

          {/* contact right */}
          <div className='w-[60%] px-4 py-5'>
            <p>Send Us Message</p>
            <form action="">
              <input type="text" className='border-1 border-hero-blue rounded-xl'/>
              <input type="email" />
              <input type="text" />
              <textarea name="" id=""></textarea>
            </form>
          </div>
        </div>
        <Footer />
    </div>
  )
}




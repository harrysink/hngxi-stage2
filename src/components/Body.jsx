// import React from 'react'
// import { useEffect } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import { SideBar } from "./SideBar"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bed from "../assets/Bed.png"
import rec43 from "../assets/Rectangle 43.png"
import rec44 from "../assets/Rectangle 44.png"
import rec45 from "../assets/Rectangle 45.png"
import rec46 from "../assets/Rectangle 46.png"
import rec47 from "../assets/Rectangle 47.png"
import rec62 from "../assets/Rectangle 62.png"
import rec48 from "../assets/Rectangle 48.png"
import rec49 from "../assets/Rectangle 49.png"
import rec65 from "../assets/Rectangle 65.png"
import rec66 from "../assets/Rectangle 66.png"
import rec67 from "../assets/Rectangle 67.png"
import rec70 from "../assets/Rectangle 70.png"
import rec71 from "../assets/Rectangle 71.png"
import rec72 from "../assets/Rectangle 72.png"
import rec75 from "../assets/Rectangle 75.png"
import rec76 from "../assets/Rectangle 76.png"
import rec77 from "../assets/Rectangle 77.png"
import "./Body.css"


export const Body = () => {
    // useEffect(() => {
    //     AOS.init({
    //       disable: "phone",
    //       duration: 900,
    //       easing: "ease-out-cubic",
    //     });
    // }, []);

  return (
      <div className='relative body mt-5 mb-5'>
        {/* popular collection */}
        <h1 className='text-center font-bold text-2xl'>Browse Our Popular Collection</h1>
        <p className='text-center text-sm mb-5'>These are the most purchased products from our collections you dont want to miss out</p>
        <div className='grid grid-cols-5 gap-4 pl-10 pr-10 mb-5'>
            <div className='0'>
                <img src={rec43} className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                <p className='text-center text-sm font-bold mt-3'>Arc Duke Flur</p>
            </div>
            <div className='2'>
                <img src={rec44} className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                <p className='text-center text-sm font-bold mt-3'>Fluffy Accent</p>
            </div>
            <div className='3'>
                <img src={rec45} className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                <p className='text-center text-sm font-bold mt-3'>Emily</p>
            </div>
            <div className='4'>
                <img src={rec46} className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                <p className='text-center text-sm font-bold mt-3'>Dracula Horn</p>
            </div>
            <div className='5'>
                <img src={rec47} className='hover:scale-110 ease-in-out duration-300 cursor-pointer rounded-b-lg' />
                <p className='text-center text-sm font-bold mt-3'>Antique Barrel</p>
            </div>
        </div>

        <div className='last-grid mb-5'>
          <h1 className='text-center font-bold text-2xl mb-5'>Our Products</h1>
          <div className='flex'>
            {/* side menu */}
            <div className='side-menu'>
              {<SideBar />}
            </div>

            {/* products */}
            <div className='our-products'>
              <div className='flex'>
                  <div className='grid grid-cols-3 gap-4'>
                      <div className='01'>
                        <img src={rec62} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer' />
                      </div>
                      <div className='02'>
                        <img src={rec48} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                      <div className='03'>
                        <img src={rec49} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                      <div className='04'>
                        <img src={rec65} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                      <div className='05'>
                        <img src={rec66} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                      <div className='06'>
                        <img src={rec67} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                      <div className='07'>
                        <img src={rec70} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                      <div className='08'>
                        <img src={rec71} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                      <div className='09'>
                        <img src={rec72} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                      <div className='10'>
                        <img src={rec75} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                      <div className='11'>
                        <img src={rec76} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                      <div className='12'>
                        <img src={rec77} alt="" className='hover:scale-110 ease-in-out duration-300 cursor-pointer'/>
                      </div>
                  </div>
              </div>
              <button className="text-hero-blue text-xs fw-bold border-1 border-hero-blue justify-left px-3 py-2 mt-3 rounded-md hover:bg-hero-blue hover:text-white ease-in-out duration-300">Show More</button>
            </div>
        </div>
      </div>

      <div className='mt-2'>
        <Carousel className='carousel carousel-fade'> 
          <Carousel.Item interval={50000} className='carousel-item'> 
            <div className='hero-img-div'>
              <img 
                className="hero" 
                src={bed}
                alt="Image One"
              /> 
            </div>
            <Carousel.Caption className='top-15 mt-5 pt-0 d-md-block' data-aos="fade-right"> 
            <div className='bed w-[40%] mb-5'>
                <h3 className='text-start text-hero-blue fw-bold mt-0'>BEDSHEET SETS</h3> 
                <p className='flex items-center text-start text-lg text-black font-extrabold mt-3 mb-1'>$50.00 <span className='text-xs ml-2 line-through'>$220.00</span></p> 
                <p className='text-start text-black fw-light mt-0 mb-2 text-xs'>Comfort, Fluffy, cotton with set of 6 pillow <br />cases in different color sets</p> 
                <div className='button-div flex justify-left'>
                    <button className="text-hero-blue text-xs fw-bold border-1 border-hero-blue justify-left px-3 py-2 mt-3 hover:bg-hero-blue hover:text-white ease-in-out duration-300">VIEW DETAILS</button>
                </div>
            </div>
            </Carousel.Caption> 
          </Carousel.Item> 
        </Carousel> 
      </div>
    </div>
  )
}

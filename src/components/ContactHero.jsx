import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import hero from '../assets/Mask group.png'
import './Hero.css'

export const ContactHero = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 900,
          easing: "ease-out-cubic",
        });
    }, []);

  return (
    <div style={{ display: 'block', position: 'relative'}}> 
      <Carousel className='carousel carousel-fade mt-16'> 
        <Carousel.Item interval={50000} className='carousel-item'> 
          <div className='hero-img-div'>
            <img 
              className="hero" 
              src={hero}
              alt="Image One"
            /> 
          </div>
          <Carousel.Caption className='flex justify-end top-15 mt-5 d-md-block' data-aos="fade-left"> 
           <div className='new-arrival w-[50%] p-4 rounded-lg'>
            <h3 className='text-start text-hero-blue display-5 fw-semibold mt-0'>Contact</h3> 
           </div>
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
    </div> 
  );
};


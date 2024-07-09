import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import hero from '../assets/Mask group.png'
import './Hero.css'

export const Hero = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 900,
          easing: "ease-out-cubic",
        });
    }, []);

  return (
    <div style={{ display: 'block', position: 'relative'}}> 
      <Carousel className='carousel carousel-fade mt-0'> 
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
              <p className='text-start text-black fw-semibold mb-0'>New Arrival</p> 
              <h3 className='text-start text-hero-blue display-5 fw-semibold mt-0'>Discover Our <br />New Collection</h3> 
              <p className='text-start text-black fw-light mt-0 mb-2'>Cheaper than you ever expect</p> 
              <div className='button-div flex justify-left'>
                  <button className="btn bg-hero-blue text-white fw-medium justify-left px-3 py-2 mt-3">Add to Cart</button>
              </div>
           </div>
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
    </div> 
  );
};


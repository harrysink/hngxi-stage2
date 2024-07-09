import React from 'react'
import { useState, useEffect, useRef  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const SideBar = () => {
    const [open, setOpen] = useState(false);

    // for open
    const contentRef = useRef(null);
    useEffect(() => {
        contentRef.current.style.maxHeight = open
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, open]);
    const toggleAccordion = () => {
        setOpen(!open);
    }
    
    return (
      <div className='pl-10'>
        {/* new arrivals */}
        <div className='mb-5'>
          <h2 className='font-bold'>New Arrivals</h2>
          <p className='text-sm'>New Arrivals</p>
        </div>

        {/* shop by room */}
        <h2 className='font-bold'>Shop By Room</h2>
        <button
          className='question-section pr-4 py-2 w-full mb-3 {`question-section ${open}'
          onClick={toggleAccordion}
        >
          <div>
              {/* question */}
              <div className='question-align flex items-center text-left'>
                  <h4 className='question-style text-sm text-red-500 w-full font-normal'>Bedroom</h4>
                  <FontAwesomeIcon 
                      icon={faPlus} 
                      className={open ? `question-icon text-xs rotate rotate-45 text-black` : `question-icon text-xs text-black`} 
                  />
              </div>

              <div
                  ref={contentRef}
                  className={open ? `answer answer-divider transition-all ease-in-out duration-500 pt-1 mt-0` : `answer ml-2 mr-2 max-h-0px overflow-hidden transition-all ease-in-out duration-500`}
              >
                  <p className='text-left text-sm ml-4 mr-4 mb-1'>Duvet Cover Sets</p>
                  <p className='text-left text-sm ml-4 mr-4 mb-1'>Sheets</p>
                  <p className='text-left text-sm ml-4 mr-4 mb-1'>Bedspreads & Blankets</p>
                  <p className='text-left text-sm ml-4 mr-4 mb-1'>Blankets</p>
                  <p className='text-left text-sm ml-4 mr-4 mb-1'>Curtains</p>
                  <p className='text-left text-sm ml-4 mr-4 mb-1'>Pillowcases</p>
                  <p className='text-left text-sm ml-4 mr-4 pb-1'>Rugs</p>
              </div>
              <p className='text-left text-sm ml-0 mr-4 mb-1'>Living Room</p>
              <p className='text-left text-sm ml-0 mr-4 mb-1'>Child Room</p>
              <p className='text-left text-sm ml-0 mr-4 mb-1'>Bathroom</p>
              <p className='text-left text-sm ml-0 mr-4 mb-1'>Outdoor</p>
          </div>
        </button>

        {/* shop buy concept */}
        <h2 className='font-bold mb-1'>Shop By Concept</h2>
        <p className='text-left text-sm ml-0 mr-4 mb-1'>Living Room</p>
        <p className='text-left text-sm ml-0 mr-4 mb-1'>Child Room</p>
        <p className='text-left text-sm ml-0 mr-4 mb-4'>Bathroom</p>

        {/* price */}
        <h2 className='font-bold mb-1'>Price</h2>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1" className='text-sm ml-2 cursor-pointer'> 0$ - 40$</label><br></br>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1" className='text-sm ml-2 cursor-pointer'> 40$ - 100$</label><br></br>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1" className='text-sm ml-2 cursor-pointer'> 100$ - 150$</label><br></br>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1" className='text-sm ml-2 cursor-pointer'> 150$ - 175$</label><br></br>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1" className='text-sm ml-2 cursor-pointer'> 175$ - 250$</label><br></br>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1" className='text-sm ml-2 cursor-pointer'> 250$ - 350$</label><br></br>
        
      </div>
    );
}

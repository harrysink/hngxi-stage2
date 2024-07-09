import { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/Logo.png'


export const NavBar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const hamburger = <FontAwesomeIcon icon={faBars} className="text-black" />
  const shoppingcart = <FontAwesomeIcon icon={faCartShopping} className="text-black" />
  const search = <FontAwesomeIcon icon={faSearch} className="text-black" />

  return (
    <nav className="fixed-top flex flex-wrap items-center justify-between px-2 py-3 bg-white">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to='Home' className="leading-relaxed inline-block mr-4">
            <img src={logo} alt="" />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span>{hamburger}</span>
          </button>
        </div>

        <div
          className={
            "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link to='/Home' className="pr-3 mr-5 py-2 flex items-center text-xs font-extrabold leading-snug hover:opacity-75 ease-in-out duration-300">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to='/About' className="pr-3 mr-5 py-2 flex items-center text-xs font-extrabold leading-snug hover:opacity-75 ease-in-out duration-300">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link to='/Contact' className="pr-3 mr-5 py-2 flex items-center text-xs font-extrabold leading-snug hover:opacity-75 ease-in-out duration-300">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link to='#' className="pr-3 py-2 mr-5 flex items-center text-xs  font-bold leading-snug hover:opacity-75 ease-in-out duration-300">
                {search}
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/Cart' className="pr-3 py-2 flex items-center text-xs  font-bold leading-snug hover:opacity-75 ease-in-out duration-300">
                {shoppingcart}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

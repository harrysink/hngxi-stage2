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
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to='Home' className="leading-relaxed inline-block mr-4">
            <img src={logo} alt="" />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded-bg block lg:hidden outline-none focus:outline-none"
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
              <Link to='/Home' className="pr-3 py-2 flex items-center text-xs  font-bold leading-snug hover:opacity-75">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to='/About' className="pr-3 py-2 flex items-center text-xs  font-bold leading-snug hover:opacity-75">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link to='/Contact' className="pr-3 py-2 flex items-center text-xs  font-bold leading-snug hover:opacity-75">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link to='#' className="pr-3 py-2 flex items-center text-xs  font-bold leading-snug hover:opacity-75">
                {search}
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/Cart' className="pr-3 py-2 flex items-center text-xs  font-bold leading-snug hover:opacity-75">
                {shoppingcart}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
// import React from 'react'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../assets/Logo.png'
// import './NavBar.css'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { Contact } from '../pages/Contact';

// export const NavBar = () => {
//    /*const [toggle, setToggle] = useState(false);*/
//    const hamburger = <FontAwesomeIcon icon={faBars} />

//    return (
//        <nav className="navbar fixed-top navbar-expand-lg bg-white navbar-white">
//           <a className="navbar-brand" href="/">
//             <img src={logo} alt="steakholder logo"/>
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler">{hamburger}</span>
//           </button>

//           <div className="collapse navbar-collapse" id="collapsibleNavbar">
//                 <ul class="navbar-nav mb-auto">
//                     <li class="nav-item active"><a class="nav-link active" aria-current="page" href="">HOME</a></li>
//                     <li class="nav-item"><a class="nav-link" href="">ABOUT US</a></li>
//                     <li class="nav-item"><a class="nav-link" href="">PROJECTS</a></li>
//                     <li class="nav-item"><a class="nav-link" href="">CONTACT</a></li>
//                 </ul>
//           </div>
//        </nav>
//    )
// }


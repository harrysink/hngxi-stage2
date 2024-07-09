import React from 'react'
import { NavBar } from "../components/NavBar"
import { Hero } from "../components/Hero"
import { Body } from "../components/Body"
import { Footer } from "../components/Footer"

export const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Body />
        <Footer />
    </div>
  )
}

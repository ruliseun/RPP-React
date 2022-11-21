import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import { HomeHeroStyle } from '../styles/HomeHeroStyle'

const Homepage = () => {
  return (
    <div>
        <HomeHeroStyle>
            {/* <img src={'/Logo.svg'} alt={'Background Image'}/> */}
            <Navbar />
            <Hero />
        </HomeHeroStyle>
    </div>
  )
}

export default Homepage
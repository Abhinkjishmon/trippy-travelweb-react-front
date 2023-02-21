import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import './About.css'


const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/981936/pexels-photo-981936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="About"
      />
    </>
  )
}

export default About
import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import './About.css'
import Footer from './Footer'
import AboutUs from './AboutUs'


const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/4577387/pexels-photo-4577387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="About"
      />
      <AboutUs />
      <Footer />
    </>
  )
}

export default About
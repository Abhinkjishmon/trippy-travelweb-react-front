import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Trip from './Trip'


const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/3769118/pexels-photo-3769118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Service"
      />
      <Trip />
      <Footer />
    </>
  )
}

export default Service
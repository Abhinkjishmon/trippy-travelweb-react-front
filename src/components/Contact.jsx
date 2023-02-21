import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid-contact"
        heroImg="https://images.pexels.com/photos/4718088/pexels-photo-4718088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Contact"
      />
    </>
  )
}

export default Contact
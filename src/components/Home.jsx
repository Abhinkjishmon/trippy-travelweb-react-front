import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero"
        heroImg="https://images.pexels.com/photos/1816711/pexels-photo-1816711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
         buttonText="Travel Plan"
         url="/"
         btnClass="show"
      />
    </>
  )
}

export default Home
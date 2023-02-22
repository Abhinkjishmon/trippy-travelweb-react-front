import React from 'react';
import Destination from './Destination';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Trip from './Trip';

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
      <Destination />
      <Trip />
      <Footer />
    </>
  )
}

export default Home
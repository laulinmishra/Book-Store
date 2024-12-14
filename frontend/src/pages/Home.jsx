import React from 'react'
import Hero from '../Components/Hero'
import NewArrivals from '../Components/NewArrivals'
import About from '../Components/About'
import PopularBooks from '../Components/PopularBooks'
import Features from '../Components/Features'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <NewArrivals/>
    <About/>
    <PopularBooks/>
    <Features/>
    <div className='max-padd-container bg-white'><Footer/></div>

    </>
  )
}

export default Home

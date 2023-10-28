import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
const Hero = () => {
  return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Growing towards a better and healthier future for everyone
                </h1>
                <p className="mb-8 leading-relaxed">Our basic purpose is to provide better healthcare facilities for your utmost comfort.We want to make healthcare trusted, reliable and convenient. Healthcare is a very essential sector all over the world, however it has sadly been neglected in Pakistan over the years. It is also one of the world's largest and fastest-growing industries. We are here to make a difference and thrive in beneficial ways which will hopefully serve not only us, but all future generations. </p>
                <div className="flex justify-center">
                    <Link to='/sign-in'>
                    <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Log In</button>
                    </Link>
                    <Link to='/sign-up'>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sign Up</button>
                    </Link>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src={heroImg}/>
                </div>
            </div>
        </section>
  )
}

export default Hero
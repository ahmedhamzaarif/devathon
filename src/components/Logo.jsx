import React from 'react'
import logo from '../assets/logo.png'
const Logo = ({showText = true}) => {
  return (
    <div id='logo' className="inline-flex items-center space-x-2">
    <span>
        <img src={logo} alt="Find Doctor" />
    </span>
    {
      showText && <span className="font-bold text-lg">Find <br /> Doctor</span>
    }
  </div>
  )
}

export default Logo
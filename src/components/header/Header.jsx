import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../images/home1.png'
import Headersocials from './Headersocials'
import Slide from 'react-reveal/Slide'
import Pulse from 'react-reveal/Pulse'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <Slide left>
        <h5>Hello I'm</h5>
        </Slide>
        <Slide right >
        <h1>Abdul Basit</h1>
        </Slide>
        <Slide left>
        <h5 className="text-light">Fullstack Developer</h5>
        </Slide>
        
        <CTA/>
        <Headersocials/>
        <div className="me">
        <Pulse>
          <img src={ME} alt="" />
          </Pulse>
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './about.css'
import ME from '../../images/about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {HiOutlineFolderOpen} from 'react-icons/hi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me_img">
            <img src={ME}  alt="About img" />
          </div>
        </div>
        <div className="about-content">
          <div className="about_cards">
            <article className="about-card">
                <FaAward className='about_icons'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about-card">
                <FiUsers className='about_icons'/>
              <h5>Clients</h5>
              <small>5+ clients</small>
            </article>
            <article className="about-card">
                <HiOutlineFolderOpen className='about_icons'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repellendus sint sit aperiam nostrum autem minus nesciunt eveniet consequatur, culpa vel incidunt qui fugit dolore tenetur totam facere saepe unde.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
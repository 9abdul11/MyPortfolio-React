import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service-container">
        <article className="services">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service-list'>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className='service-list'>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service-head">
            <h3>Graphics Design</h3>
          </div>
          <ul className='service-list'>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BsCheck className='service-icon'/>
            <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
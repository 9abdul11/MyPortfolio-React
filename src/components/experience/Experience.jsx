import React from 'react'
import './experience.css'
import {BiSolidBadgeCheck } from 'react-icons/bi'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
            <h3>Frontend Development</h3>
            <div className="experience-content">
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons' />
              <div>
              <h5>Html</h5>
              <small className='text-light'>Experienced</small>
              </div>              
              </article>              
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons'/>
              <div>
              <h5>CSS</h5>
              <small className='text-light'>Intermediate</small>
              </div>              
              </article>            
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons'/>
              <div>
              <h5>JavaScript</h5>
              <small className='text-light'>Intermediate</small>
              </div>              
              </article>            
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons'/>
              <div>
              <h5>Bootstrap</h5>
              <small className='text-light'>Experienced</small>
              </div>              
              </article>                        
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons'/>
              <div>
              <h5>Wordpress</h5>
              <small className='text-light'>Experienced</small>
              </div>              
              </article>                        
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons'/>
              <div>
              <h5>React</h5>
              <small className='text-light'>Experienced</small>
              </div>              
              </article>            
            </div>
            
        </div>
        <div className="experience-backend">
        <h3>Backend Development</h3>
            <div className="experience-content">
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons'/>
              <div>
              <h5>Node JS</h5>
              <small className='text-light'>Experienced</small>
              </div>             
              </article>
            
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons'/>
              <div>
              <h5>MongoDB</h5>
              <small className='text-light'>Basic</small>
              </div>              
              </article>
            
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons'/>
              <div>
              <h5>PHP</h5>
              <small className='text-light'>Intermediate</small>
              </div>              
              </article>
            
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons'/>
              <div>
              <h5>MySQL</h5>
              <small className='text-light'>Basic</small>
              </div>              
              </article>
            
              <article className='experience-skils'>
              <BiSolidBadgeCheck className='experience-icons'/>
              <div>
              <h5>Python</h5>
              <small className='text-light'>Basic</small>
              </div>
              
              </article>            
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience
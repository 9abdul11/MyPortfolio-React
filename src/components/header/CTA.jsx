import React from 'react'
import CV from '../../images/cv.pdf'
import Zoom from 'react-reveal/Zoom'
const CTA = () => {
  return (
    <div className="cta">
        <Zoom>
        <a href={CV}download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </Zoom>
    </div>
  )
}

export default CTA
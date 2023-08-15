import React from 'react'
import './portfolio.css'
import Port1 from '../../images/portfolio1.jpg'
import Port2 from '../../images/portfolio2.jpg'
import Port3 from '../../images/portfolio3.jpg'
import Port4 from '../../images/portfolio4.jpg'
import Port5 from '../../images/portfolio5.jpg'
import Port6 from '../../images/portfolio6.jpg'

const data = [
  {
    id: 1,
    Image: Port1,
    title: 'Day Break Gaming Site',
    github: 'https://github.com',
    demo: 'https://9abdul11.github.io/DayBreak/'
  },
  {
    id: 2,
    Image: Port2,
    title: 'Basic Portfolio Using HTML and CSS',
    github: 'https://github.com',
    demo: 'https://9abdul11.github.io/Basic-Portfolio-using-html-Css-/'
  },
  {
    id: 3,
    Image: Port3,
    title: 'Portfolio Using HTML CSS and JS',
    github: 'https://github.com',
    demo: 'https://9abdul11.github.io/Portfolio/'
  },
  {
    id: 4,
    Image: Port4,
    title: 'Portfolio Using React',
    github: 'https://github.com',
    demo: 'https://9abdul11.github.io/Portfolio/'
  },
  {
    id: 5,
    Image: Port5,
    title: 'Graphic Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22205664-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps?utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Eclipse%20-%20Figma%20dashboard%20UI%20kit%20for%20data%20design%20web%20apps&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Eclipse%20-%20Figma%20dashboard%20UI%20kit%20for%20data%20design%20web%20apps&utm_medium=Social_Share'
  },
  {
    id: 6,
    Image: Port6,
    title: 'Digital Marketing',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22205626-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma?utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Orion%20UI%20kit%20%E2%80%93%20data%20visualization%20and%20charts%20templates%20for%20Figma&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Orion%20UI%20kit%20%E2%80%93%20data%20visualization%20and%20charts%20templates%20for%20Figma&utm_medium=Social_Share'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
          data.map(({ id, Image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio-item">
                <div className="portfolio-item-images">
                  <img src={Image} className='img-port' alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>

            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

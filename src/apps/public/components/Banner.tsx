import { Link } from 'react-router-dom'

import './Banner.scss'

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>
            Welcome to <br></br>the <span className="highlight">Jukebox</span>{' '}
            Project
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="banner-buttons">
          <Link to="#" className="cta-button get-started">
            Get Started
          </Link>
        </div>
        <div className="illustration-wrapper">
          {' '}
          <div className="banner-illustration"></div>
        </div>
      </div>
    </section>
  )
}

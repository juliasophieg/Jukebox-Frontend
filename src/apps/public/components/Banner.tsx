import { Link } from 'react-router-dom'
import './Banner.scss'

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Welcome to the Jukebox Project</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="banner-buttons">
          <Link to="#" className="cta-button get-started">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

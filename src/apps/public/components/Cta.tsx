import { Link } from 'react-router-dom'
import './Cta.scss'

export const Cta = () => {
  return (
    <section className="cta">
      <h2>
        Ready to get coding? <br></br>Pick a repo and get Started!
      </h2>
      <Link to="#" className="cta-button get-started">
        Get Started
      </Link>
    </section>
  )
}

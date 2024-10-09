import { Link } from 'react-router-dom'
import './Cta.scss'

export const Cta = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to get coding? Pick a repo and get Started!</h2>
        <Link to="#" className="cta-button get-started">
          Get Started
        </Link>
      </div>
    </section>
  )
}

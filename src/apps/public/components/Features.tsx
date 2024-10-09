import { Link } from 'react-router-dom'
import './Features.scss'

export const Features = () => {
  const featuresData = [
    { title: 'Topic title', isBlue: true },
    { title: 'Topic title', isBlue: false },
    { title: 'Topic title', isBlue: true },
    { title: 'Topic title', isBlue: false },
    { title: 'Topic title', isBlue: true },
    { title: 'Topic title', isBlue: false },
  ]
  return (
    <section className="features">
      <div className="features-content">
        <h2>Notable Features</h2>
        <div className="features-row col-12 grid">
          {featuresData.map((feature, index) => (
            <div
              className={`feature ${feature.isBlue ? 'blue' : ''}`}
              key={index}
            >
              <div className="ellipse"></div>
              <h3>{feature.title}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link to="#" className="button">
                Inline CTA
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

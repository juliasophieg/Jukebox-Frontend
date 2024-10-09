import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Repositories.scss'

export const Repositories = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const sections = [
    {
      title: 'Some Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    },
    {
      title: 'Another Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    },
    {
      title: 'Example Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    },
  ]

  return (
    <section className="repositories">
      <div className="repositories-content">
        <div className="repositories-header">
          <h2>Repositories</h2>
          <Link to="#" className="cta-button signup">
            Sign Up
          </Link>
        </div>
        <div className="accordion">
          {sections.map((section, index) => (
            <div key={index}>
              <button
                onClick={() => toggleSection(index)}
                className="accordion-header"
              >
                {section.title}
              </button>
              {activeIndex === index && (
                <div className="accordion-content">{section.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

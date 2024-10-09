import { Link } from 'react-router-dom'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <nav className="public-navbar">
      <div className="navbar-logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Features</Link>
        </li>
        <li>
          <Link to="#">Docs</Link>
        </li>
        <li>
          <Link to="#">Contribute</Link>
        </li>
        <li>
          <Link to="#">Login</Link>
        </li>
        <Link to="#" className="cta-button signup">
          Sign Up
        </Link>
      </ul>
    </nav>
  )
}

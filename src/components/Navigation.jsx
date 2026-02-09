import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <aside className="nav-wrapper" aria-label="Primary">
      <nav className="nav__menu">
        <div className="nav__menu-group">
          <Link to="/" aria-label="Home" title="Home">
            Home
          </Link>
          <Link to="/about" aria-label="About" title="About">
            About
          </Link>
          <a href="/works" aria-label="Works" title="Works">
            Works
          </a>
        </div>
        <div className="nav__menu-group">
          <a href="#resume" aria-label="Resume" title="Resume">
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/patcharida-sricome/"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            LinkedIn
          </a>
          <a href="mailto:pat.sricome@gmail.com" aria-label="Email" title="Email">
            Email
          </a>
        </div>
      </nav>

    </aside>
  )
}

export default Navigation

import './Navigation.css'
import { Link } from 'react-router-dom'
import aboutIcon from '../assets/nav/contact_about.svg'
import emailIcon from '../assets/nav/contact_email.svg'
import homeIcon from '../assets/nav/contact_home.svg'
import linkedinIcon from '../assets/nav/contact_linkedin.svg'
import resumeIcon from '../assets/nav/contact_resume.svg'
import workIcon from '../assets/nav/contact_work.svg'

const Navigation = () => {
  return (
    <aside className="nav-wrapper" aria-label="Primary">
      <nav className="nav__menu">
        <div className="nav__menu-group">
          <Link to="/" aria-label="Home" title="Home">
            <span
              className="nav__icon"
              aria-hidden="true"
              style={{
                WebkitMaskImage: `url("${homeIcon}")`,
                maskImage: `url("${homeIcon}")`,
              }}
            />
            Home
          </Link>
          <Link to="/about" aria-label="About" title="About">
            <span
              className="nav__icon"
              aria-hidden="true"
              style={{
                WebkitMaskImage: `url("${aboutIcon}")`,
                maskImage: `url("${aboutIcon}")`,
              }}
            />
            About
          </Link>
          <a href="/works" aria-label="Works" title="Works">
            <span
              className="nav__icon"
              aria-hidden="true"
              style={{
                WebkitMaskImage: `url("${workIcon}")`,
                maskImage: `url("${workIcon}")`,
              }}
            />
            Works
          </a>
        </div>
        <div className="nav__menu-group">
          <a href="#resume" aria-label="Resume" title="Resume">
            <span
              className="nav__icon"
              aria-hidden="true"
              style={{
                WebkitMaskImage: `url("${resumeIcon}")`,
                maskImage: `url("${resumeIcon}")`,
              }}
            />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/patcharida-sricome/"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <span
              className="nav__icon"
              aria-hidden="true"
              style={{
                WebkitMaskImage: `url("${linkedinIcon}")`,
                maskImage: `url("${linkedinIcon}")`,
              }}
            />
            LinkedIn
          </a>
          <a href="mailto:pat.sricome@gmail.com" aria-label="Email" title="Email">
            <span
              className="nav__icon"
              aria-hidden="true"
              style={{
                WebkitMaskImage: `url("${emailIcon}")`,
                maskImage: `url("${emailIcon}")`,
              }}
            />
            Email
          </a>
        </div>
      </nav>

    </aside>
  )
}

export default Navigation

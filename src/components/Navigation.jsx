import './Navigation.css'
import { Link } from 'react-router-dom'
import aboutIcon from '../assets/nav/contact_about.svg'
import emailIcon from '../assets/nav/contact_email.svg'
import homeIcon from '../assets/nav/contact_home.svg'
import linkedinIcon from '../assets/nav/contact_linkedin.svg'
import resumeIcon from '../assets/nav/contact_resume.svg'
import workIcon from '../assets/nav/contact_work.svg'
import { trackEvent } from "../utils/analytics";


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
          <Link to="/projects" aria-label="Works" title="Works">
            <span
              className="nav__icon"
              aria-hidden="true"
              style={{
                WebkitMaskImage: `url("${workIcon}")`,
                maskImage: `url("${workIcon}")`,
              }}
            />
            Works
          </Link>
        </div>
        <div className="nav__menu-group">
          <a
            href="/Pat Sricome_Resume2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            title="Resume"
            download
            onClick={() =>
              trackEvent("resume_download", {
                event_category: "engagement",
                event_label: "Resume PDF",
              })
            
          }
          >
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
            onClick={() =>
              trackEvent("linkedin_click", {
                event_category: "outbound",
                event_label: "LinkedIn Profile",
              })
            }
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

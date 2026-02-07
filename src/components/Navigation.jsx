import './Navigation.css'

const Navigation = () => {
  return (
    <aside className="nav-wrapper" aria-label="Primary">
      <div className="nav__logo">
        <img src="/src/assets/logo.svg" alt="Pat Sricome logo" />
      </div>
      <nav className="nav__menu">
        <a href="./App.jsx" aria-label="Home" title="Home">
          Home
        </a>
        <a href="./About.jsx" aria-label="About" title="About">
          About
        </a>
        <a href="#works" aria-label="Works" title="Works">
          Works
        </a>
        <a href="#resume" aria-label="Resume" title="Resume">
          Resume
        </a>
        <a href="#contact" aria-label="LinkedIn" title="LinkedIn">
          LinkedIn
        </a>
      </nav>

    </aside>
  )
}

export default Navigation

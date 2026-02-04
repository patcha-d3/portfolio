import './Navigation.css'
import Button from './Button'

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <header className="nav-bar nav-bar--logo">
        <div className="nav__logo">
          <img src="/src/assets/logo.svg" alt="Pat Sricome logo" />
        </div>
      </header>
      <header className="nav-bar nav-bar--menu">
        <nav className="nav__menu">
          <a href="./App.jsx">Home</a>
          <a href="./About.jsx">About</a>
          <a href="#works">Works</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
        <Button className="nav__cta">Let's work together!</Button>
      </header>
    </div>
  )
}

export default Navigation

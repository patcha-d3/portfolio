import { useState } from 'react'
import './Bubble.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import logo02 from '../assets/head/logo-02.svg'
import logo03 from '../assets/head/logo-03.svg'
import logo04 from '../assets/head/logo-04.svg'
import logo05 from '../assets/head/logo-05.svg'
import logo06 from '../assets/head/logo-06.svg'


const HEAD_LOGOS = [logo02, logo03, logo04, logo05, logo06]

const shuffleLogo = () =>
  HEAD_LOGOS[Math.floor(Math.random() * HEAD_LOGOS.length)]

const Bubble = ({ children }) => {
  const [currentLogo, setCurrentLogo] = useState(logo)

  const handleMouseEnter = () => {
    setCurrentLogo(shuffleLogo())
  }

  const handleMouseLeave = () => {
    setCurrentLogo(logo)
  }

  return (
    <div className="header">
      <div
        className="header__logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/" aria-label="Go to home">
          <img key={currentLogo} src={currentLogo} alt="Pat Sricome logo" />
        </Link>
      </div>
      <span className="bubble" role="note" aria-label="Greeting bubble">
        {children}
      </span>
    </div>
  )
}

export default Bubble

import './Bubble.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Bubble = ({ children }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" aria-label="Go to home">
          <img src={logo} alt="Pat Sricome logo" />
        </Link>
      </div>
      <span className="bubble" role="note" aria-label="Greeting bubble">
        {children}
      </span>
    </div>
  )
}

export default Bubble

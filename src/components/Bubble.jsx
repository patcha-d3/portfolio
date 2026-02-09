import './Bubble.css'
import logo from '../assets/logo.svg'

const Bubble = ({ children }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Pat Sricome logo" />
      </div>
      <span className="bubble" role="note" aria-label="Greeting bubble">
        {children}
      </span>
    </div>
  )
}

export default Bubble

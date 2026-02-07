import './Bubble.css'

const Bubble = ({ children }) => {
  return (
    <div className="header">
      <span className="bubble" role="note" aria-label="Greeting bubble">
        {children}
      </span>
    </div>
  )
}

export default Bubble

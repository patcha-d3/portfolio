const FadeInHero = ({ children, className = '' }) => {
  return <div className={`fade-in-hero ${className}`.trim()}>{children}</div>
}

export default FadeInHero

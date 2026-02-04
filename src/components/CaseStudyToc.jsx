import './CaseStudyToc.css'

const CaseStudyToc = ({ title = 'Table of Contents', items = [] }) => {
  return (
    <nav className="case-toc" aria-label={title}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  )
}

export default CaseStudyToc

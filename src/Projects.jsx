import { useEffect } from 'react'
import './Projects.css'
import Navigation from './components/Navigation'
import Bubble from './components/Bubble'
import FeaturedWorks from './components/FeaturedWorks'
import { workBlocks } from './data/content'

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="projects-page">
      <Navigation />
      <Bubble>
        Take your time to look at my <span className="bubble__accent">projects gallery!</span> 
      </Bubble>
      <main className="projects-main">
        <FeaturedWorks workBlocks={workBlocks} />
      </main>
    </div>
  )
}

export default Projects

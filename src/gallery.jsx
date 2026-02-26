import { useEffect } from 'react'
import './gallery.css'
import Navigation from './components/Navigation'
import Bubble from './components/Bubble'
import IGStory from './components/IGStory'
import usersStories from './data/stories'

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="gallery-page">
      <Navigation />
      <Bubble>
        Have no time? Check out my <span className="bubble__accent">projects gallery!</span> 
      </Bubble>
      <main className="gallery-main">
        <section className="gallery-section">
          <h2>Instagram Stories</h2>
          <IGStory usersStories={usersStories} />
        </section>
      </main>
    </div>
  )
}

export default Gallery

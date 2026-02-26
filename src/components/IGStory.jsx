import { useEffect, useState, useCallback } from 'react'
import './IGStory.css'

const STORY_DURATION_MS = 4 * 1000

const IGStory = ({ usersStories = [] }) => {
  const [userIndex, setUserIndex] = useState(0)
  const [storyIndex, setStoryIndex] = useState(0)

  const user = usersStories[userIndex]
  const story = user?.stories?.[storyIndex]

  const goToPrevStory = useCallback(() => {
    setStoryIndex((idx) => {
      if (idx === 0) {
        setUserIndex((ui) => (ui === 0 ? usersStories.length - 1 : ui - 1))
        const prevUser = usersStories[userIndex === 0 ? usersStories.length - 1 : userIndex - 1]
        return prevUser?.stories?.length ? prevUser.stories.length - 1 : 0
      }
      return idx - 1
    })
  }, [userIndex, usersStories])

  const goToNextStory = useCallback(() => {
    setStoryIndex((idx) => {
      if (idx >= user.stories.length - 1) {
        setUserIndex((ui) => (ui >= usersStories.length - 1 ? 0 : ui + 1))
        return 0
      }
      return idx + 1
    })
  }, [user, usersStories])

  useEffect(() => {
    if (!story) return
    const timer = setTimeout(goToNextStory, STORY_DURATION_MS)
    return () => clearTimeout(timer)
  }, [storyIndex, userIndex, goToNextStory, story])

  if (!usersStories.length || !user || !story) {
    return (
      <div className="ig-story ig-story--empty">
        <p>No stories to display.</p>
      </div>
    )
  }

  return (
    <div className="ig-story">
      <div className="ig-story__container">
        <img
          src={story.uri}
          alt={`Story ${storyIndex + 1} from ${user.username}`}
          className="ig-story__image"
        />

        <button
          type="button"
          className="ig-story__nav ig-story__nav--prev"
          onClick={goToPrevStory}
          aria-label="Previous story"
        />
        <button
          type="button"
          className="ig-story__nav ig-story__nav--next"
          onClick={goToNextStory}
          aria-label="Next story"
        />

        <header className="ig-story__header">
          <div className="ig-story__gradient" aria-hidden="true" />
          <div className="ig-story__indicators">
            {user.stories.map((_, idx) => (
              <div key={`${user.userId}-${idx}`} className="ig-story__indicator-bg">
                <div
                  className={`ig-story__indicator-fill ${
                    idx === storyIndex ? 'ig-story__indicator-fill--active' : ''
                  } ${idx < storyIndex ? 'ig-story__indicator-fill--done' : ''}`}
                  style={idx === storyIndex ? { animationDuration: `${STORY_DURATION_MS}ms` } : {}}
                />
              </div>
            ))}
          </div>
          <span className="ig-story__username">{user.username}</span>
        </header>
      </div>
    </div>
  )
}

export default IGStory

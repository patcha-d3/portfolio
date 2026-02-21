import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import "./FeaturedWorks.css"
import Button from "./Button"
import gotitHero from "../case-study/uiux/gotit_hero.png"
import uberThumbnail from "../case-study/motion/uber/banner.png"
import qookedThumbnail from "../case-study/graphics/qooked/banner.png"
import castleReadThumbnail from "../case-study/graphics/castle-read/thumbnail.png"
import bacchussThumbnail from "../case-study/graphics/bacchuss/banner.png"
import logo from "../assets/logo.svg"

const CARD_IMAGES = {
  gotit: gotitHero,
  uber: uberThumbnail,
  qooked: qookedThumbnail,
  castleread: castleReadThumbnail,
  bacchuss: bacchussThumbnail,
}

const getLabelVariant = (cardLabel) => {
  if (!cardLabel) return "primary"
  if (cardLabel === "UI/UX Project") return "primary"
  if (cardLabel === "Graphic Design") return "secondary"
  if (cardLabel === "Motion Graphics" || cardLabel === "Motion Design") return "tertiary"
  return "primary"
}

const FeaturedWorks = ({ workBlocks = [] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const tabs = useMemo(() => {
    const list = [{ id: "selected", label: "Selected Works" }]
    workBlocks.forEach((block) => {
      list.push({
        id: block.tabLabel || block.title,
        label: block.tabLabel || block.title,
      })
    })
    return list
  }, [workBlocks])

  const { items, cardLabel } = useMemo(() => {
    if (activeTabIndex === 0) {
      const combined = workBlocks.flatMap((block) =>
        block.items.map((item) => ({
          ...item,
          _cardLabel: block.cardLabel || block.title,
        }))
      )
      return { items: combined, cardLabel: null }
    }
    const block = workBlocks[activeTabIndex - 1]
    if (!block) return { items: [], cardLabel: "" }
    return {
      items: block.items,
      cardLabel: block.cardLabel || block.title,
    }
  }, [workBlocks, activeTabIndex])

  return (
    <section className="home-works" id="works">
      <div className="home-works__header">
        <div className="section-heading">
          <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
          <div className="section-heading__label">
            <h2>Featured Works</h2>
          </div>
        </div>
        <div className="home-works__tabs" role="tablist" aria-label="Work categories">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              className={activeTabIndex === index ? "is-active" : ""}
              onClick={() => setActiveTabIndex(index)}
              role="tab"
              aria-selected={activeTabIndex === index}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="home-works__list">
        {items.map((item, index) => {
          const CardContent = () => (
            <>
              <div
                className={`home-work-card__label home-work-card__label--${getLabelVariant(
                  cardLabel !== null ? cardLabel : item._cardLabel
                )}`}
              >
                {cardLabel !== null ? cardLabel : item._cardLabel}
              </div>
              <div className="home-work-card__body">
                <div className="home-work-card__image" aria-hidden="true">
                  {CARD_IMAGES[item.id] && (
                    <img
                      src={CARD_IMAGES[item.id]}
                      alt={item.name}
                      className="home-work-card__image-img"
                    />
                  )}
                </div>
                <div className="home-work-card__content">
                  <div className="home-work-card__meta">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </>
          )
          return (
            <article className="home-work-card" key={`${item.name}-${index}`}>
              {item.link ? (
                <Link to={item.link} className="home-work-card__link">
                  <CardContent />
                </Link>
              ) : (
                <CardContent />
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedWorks

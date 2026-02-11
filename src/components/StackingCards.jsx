"use client"

import { createContext, useContext, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import "./StackingCards.css"
import { cn } from "../lib/utils"
import imgCoffeeDefault from "../assets/about/01.svg"
import imgCoffeeHover from "../assets/about/02.svg"
import imgReading from "../assets/about/reading.svg"
import imgGaming from "../assets/about/gaming.svg"
import TextHighlighter from "../components/TextHilight"

const StackingCardsContext = createContext(null)

const STACKING_CONTENT = [
  {
    id: 1,
    title: "Specialty Coffee",
    heading: "Specialty Coffee",
    image: { default: imgCoffeeDefault, hover: imgCoffeeHover },
    body: (
      <>
<p>
  When I'm not designing, I’m immersed in third-wave coffee. <TextHighlighter>Pour-over is my daily ritual — a quiet moment where I slow down, focus on what’s right in front of me, and enjoy the process as much as the result.</TextHighlighter> It reminds me that good experiences are crafted with intention and care.
</p>
<p>
  I’d love to make you a cup someday.
</p>

      </>
    ),
  },
  {
    id: 2,
    title: "Tech Gadgets",
    heading: "The Joy of Distraction-Free Design",
    image: { default: imgReading, hover: imgReading },
    body: (
      <>
        <p>
          I've loved reading since I was young, but carrying books everywhere hurt my back—so I fell in love with <TextHighlighter>e-readers.</TextHighlighter> I'm <TextHighlighter>fascinated by how their simple, distraction-free UX/UI creates such a calm, focused experience.</TextHighlighter> Over time, I started collecting different brands and sizes, each serving a unique reading purpose!
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "For My Inner Child",
    heading: "For My Inner Child",
    image: { default: imgGaming, hover: imgGaming },
    body: (
      <>
        <p>
        No matter how busy I am, I always make time for video games.<TextHighlighter> I’m drawn to game design, mechanics, and interfaces</TextHighlighter> — and I see every game as a lesson in crafting meaningful experiences. I don't mind about pixel art or 3D models, as long as the game is fun to play.
        </p>
      </>
    ),
  },
]

const StackingCards = ({
  totalCards = 0,
  scaleMultiplier = 0.03,
  scrollOptions = { offset: ["start start", "end end"] },
  className,
  children,
  ...props
}) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    ...scrollOptions,
  })

  const contextValue = useMemo(
    () => ({
      scrollYProgress,
      totalCards,
      scaleMultiplier,
    }),
    [scrollYProgress, totalCards, scaleMultiplier]
  )

  return (
    <div
      ref={containerRef}
      className={cn("stacking-cards", className)}
      {...props}
    >
      <StackingCardsContext.Provider value={contextValue}>
        {children}
      </StackingCardsContext.Provider>
    </div>
  )
}

const StackingCardItem = ({
  index,
  topPosition,
  className,
  children,
  ...props
}) => {
  const context = useContext(StackingCardsContext)

  if (!context) {
    throw new Error("StackingCardItem must be used within StackingCards")
  }

  const { scrollYProgress, totalCards, scaleMultiplier } = context

  const targetScale =
    totalCards > 0
      ? 1 - Math.max(0, totalCards - index - 1) * scaleMultiplier
      : 1

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])
  const resolvedTop = topPosition ?? `${5 + index * 3}px`

  return (
    <motion.div
      className={cn("stacking-card-item", className)}
      style={{ scale, top: resolvedTop }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { StackingCards, StackingCardItem }
export const StackingCardsDemo = () => {
  return (
    <StackingCards totalCards={STACKING_CONTENT.length} className="hobby-stack">
      {STACKING_CONTENT.map((tab, index) => (
        <StackingCardItem key={tab.title} index={index} className="hobby-stack__item">
          <article className="hobby-stack__card">
            <div className="hobby-stack__text">
              <h3>{tab.heading ?? tab.title}</h3>
              {tab.body ? (
                typeof tab.body === "string" ? (
                  tab.body.split("\n\n").map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))
                ) : (
                  tab.body
                )
              ) : (
                <ul className="hobby-stack__files">
                  {tab.files.map((file) => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="hobby-stack__image" aria-hidden="true">
              {tab.image ? (
                <>
                  <img src={tab.image.default} alt="" className="hobby-stack__img-default" />
                  <img src={tab.image.hover} alt="" className="hobby-stack__img-hover" />
                </>
              ) : null}
            </div>
          </article>
        </StackingCardItem>
      ))}
    </StackingCards>
  )
}

export default StackingCards

"use client"

import { createContext, useContext, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import "./StackingCards.css"
import { cn } from "../lib/utils"

const StackingCardsContext = createContext(null)

const STACKING_CONTENT = [
  {
    id: 1,
    title: "Specialty Coffee",
    heading: "Specialty Coffee",
    body:
      "When I’m not designing, you’ll probably find me immersed in the world of third-wave coffee. Making pour-over coffee has become a daily ritual for me—almost like a form of meditation. It’s a quiet moment where I slow down, focus on what’s right in front of me, and enjoy the process as much as the result. I love taking in the aroma and exploring the delicate aftertaste of light-roast beans.\n\nIf we ever get the chance, I’d love to make a cup of coffee for you.",
  },
  {
    id: 2,
    title: "Tech Gadgets",
    heading: "Learning new tech gadgets",
    body: "Learning new tech gadgets",
  },
  {
    id: 3,
    title: "Video Games",
    heading: "Video Games",
    body: "XXXXX",
    
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
                tab.body.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))
              ) : (
                <ul className="hobby-stack__files">
                  {tab.files.map((file) => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="hobby-stack__image" aria-hidden="true" />
          </article>
        </StackingCardItem>
      ))}
    </StackingCards>
  )
}

export default StackingCards

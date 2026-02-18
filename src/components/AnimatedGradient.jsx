import { useMemo } from "react"
import "./AnimatedGradient.css"

/**
 * Animated gradient background using SVG circles and blur.
 * Inspired by https://www.fancycomponents.dev/docs/components/background/animated-gradient-svg
 *
 * @param {Object} props
 * @param {string[]} props.colors - Array of hex colors for the gradient orbs
 * @param {number} [props.speed=8] - Animation duration in seconds
 * @param {number} [props.delay=0] - Animation delay (for flow mode: stagger per ball)
 * @param {boolean} [props.flow=false] - If true, single set of balls flows left→right across container
 * @param {"light"|"medium"|"heavy"} [props.blur="medium"] - Blur intensity
 */
const AnimatedGradient = ({ colors, speed = 8, delay = 0, flow = false, blur = "medium" }) => {
  const circles = useMemo(
    () =>
      colors.map((_, i) => ({
        top: flow ? 20 + Math.random() * 60 : Math.random() * 50,
        left: flow ? 0 : Math.random() * 50,
        size: 0.8 + Math.random() * 0.7,
        tx1: flow ? undefined : Math.random() - 0.5,
        ty1: flow ? undefined : Math.random() - 0.5,
        tx2: flow ? undefined : Math.random() - 0.5,
        ty2: flow ? undefined : Math.random() - 0.5,
        tx3: flow ? undefined : Math.random() - 0.5,
        ty3: flow ? undefined : Math.random() - 0.5,
        tx4: flow ? undefined : Math.random() - 0.5,
        ty4: flow ? undefined : Math.random() - 0.5,
        flowDelay: flow ? i * 0.8 : 0,
      })),
    [colors, flow]
  )

  return (
    <div className={`animated-gradient ${flow ? "animated-gradient--flow" : ""}`} aria-hidden="true">
      <div className={`animated-gradient__blur animated-gradient__blur--${blur}`}>
        {colors.map((color, i) => {
          const c = circles[i]
          const size = 240 * c.size
          return (
            <svg
              key={i}
              className={`animated-gradient__circle ${flow ? "animated-gradient__circle--flow" : ""}`}
              width={size}
              height={size}
              viewBox="0 0 100 100"
              style={
                flow
                  ? {
                      top: `${c.top}%`,
                      left: "0%",
                      animationDuration: `${speed}s`,
                      animationDelay: `${(delay || 0) + c.flowDelay}s`,
                    }
                  : {
                      top: `${c.top}%`,
                      left: `${c.left}%`,
                      animationDuration: `${speed}s`,
                      animationDelay: `${delay}s`,
                      "--tx-1": c.tx1,
                      "--ty-1": c.ty1,
                      "--tx-2": c.tx2,
                      "--ty-2": c.ty2,
                      "--tx-3": c.tx3,
                      "--ty-3": c.ty3,
                      "--tx-4": c.tx4,
                      "--ty-4": c.ty4,
                    }
              }
            >
              <circle cx="90" cy="90" r="90" fill={color} />
            </svg>
          )
        })}
      </div>
    </div>
  )
}

export default AnimatedGradient

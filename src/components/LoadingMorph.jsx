import { useEffect, useMemo, useRef } from 'react'
import { interpolate } from 'flubber'
import { useReducedMotion } from 'framer-motion'
import './LoadingMorph.css'
import logo01 from '../assets/loading/logo-01.svg?raw'
import logo02 from '../assets/loading/logo-02.svg?raw'
import logo03 from '../assets/loading/logo-03.svg?raw'
import logo04 from '../assets/loading/logo-04.svg?raw'
import logo05 from '../assets/loading/logo-05.svg?raw'
import logo06 from '../assets/loading/logo-06.svg?raw'

const DEFAULT_BASE_PATH =
  'M406.9,790.5l-15.6-60.3s236.3,9.9,107.7-275.3l-236.3,20.4,26.1,315.2c-5.3,14.8,119.3,10.3,118.2,0Z'

const TINY_PATH =
  'M400 400 m-1 0 a 1 1 0 1 0 2 0 a 1 1 0 1 0 -2 0'

const ellipseToPath = (cx, cy, rx, ry) =>
  `M ${cx - rx} ${cy} a ${rx} ${ry} 0 1 0 ${rx * 2} 0 a ${rx} ${ry} 0 1 0 ${-rx * 2} 0`

const pointsToPath = (points) => {
  const values = points.trim().split(/\s+/).map(Number)
  if (values.length < 4) return TINY_PATH
  const coords = []
  for (let i = 0; i < values.length; i += 2) {
    coords.push([values[i], values[i + 1]])
  }
  const [start, ...rest] = coords
  return `M ${start[0]} ${start[1]} ${rest
    .map(([x, y]) => `L ${x} ${y}`)
    .join(' ')} Z`
}

const LOGOS = [logo01, logo02, logo03, logo04, logo05, logo06]

const extractLogoParts = (svgText) => {
  const paths = [...svgText.matchAll(/<path[^>]*d="([^"]+)"/g)].map((match) => match[1])
  const polygons = [...svgText.matchAll(/<polygon[^>]*points="([^"]+)"/g)].map(
    (match) => match[1]
  )
  const ellipses = [
    ...svgText.matchAll(
      /<ellipse[^>]*cx="([^"]+)"[^>]*cy="([^"]+)"[^>]*rx="([^"]+)"[^>]*ry="([^"]+)"[^>]*>/g
    ),
  ].map((match) => ({
    cx: Number(match[1]),
    cy: Number(match[2]),
    rx: Number(match[3]),
    ry: Number(match[4]),
  }))

  const basePath = paths.find((path) => path.startsWith('M406.9,790.5'))
  const bodyPath =
    paths.find((path) => path.startsWith('M307.4,388.6')) ||
    paths.find((path) => path.startsWith('M290.5,393'))
  const leftEyePath =
    paths.find((path) => path.startsWith('M358.7,549')) ||
    paths.find((path) => path.startsWith('M358.8,549'))
  const rightEyePath = paths.find((path) => path.startsWith('M460.8,536.6'))
  const mouthPath =
    paths.find((path) => path.startsWith('M429,632.6')) ||
    paths.find((path) => path.startsWith('M412.4,658.6')) ||
    paths.find((path) => path.startsWith('M421.3,662.5'))
  const nosePath =
    paths.find((path) => path.startsWith('M444.3,604.8')) ||
    paths.find((path) => path.startsWith('M444.3,604.6'))
  const hatPoints = polygons.find(
    (points) => points.startsWith('262 364.7') || points.startsWith('260 362.7')
  )
  const hatShadowPoints = polygons.find((points) => points.startsWith('241.2 332.9'))

  return {
    basePath,
    bodyPath,
    leftEyePath,
    rightEyePath,
    mouthPath,
    nosePath,
    hatPoints,
    hatShadowPoints,
    ellipses,
  }
}

const LOGO_PARTS = LOGOS.map(extractLogoParts)
const FINAL_ELLIPSES = [...(LOGO_PARTS[5]?.ellipses ?? [])].sort((a, b) => a.cx - b.cx)
const [LEFT_EYE_ELLIPSE, RIGHT_EYE_ELLIPSE] = FINAL_ELLIPSES.filter(
  (ellipse) => ellipse.rx === 10.2 && ellipse.ry === 14.2
)
const MOUTH_ELLIPSE = FINAL_ELLIPSES.find((ellipse) => ellipse.rx === 20.4 && ellipse.ry === 28.4)

const BASE_PATH = LOGO_PARTS.find((parts) => parts.basePath)?.basePath ?? DEFAULT_BASE_PATH

const BODY_PATHS = [
  TINY_PATH,
  TINY_PATH,
  LOGO_PARTS[2]?.bodyPath ?? TINY_PATH,
  LOGO_PARTS[3]?.bodyPath ?? TINY_PATH,
  LOGO_PARTS[4]?.bodyPath ?? TINY_PATH,
  LOGO_PARTS[5]?.bodyPath ?? TINY_PATH,
]

const HAT_PATHS = [
  TINY_PATH,
  TINY_PATH,
  TINY_PATH,
  TINY_PATH,
  LOGO_PARTS[4]?.hatPoints ? pointsToPath(LOGO_PARTS[4].hatPoints) : TINY_PATH,
  LOGO_PARTS[5]?.hatPoints ? pointsToPath(LOGO_PARTS[5].hatPoints) : TINY_PATH,
]

const HAT_SHADOW_PATHS = [
  TINY_PATH,
  TINY_PATH,
  TINY_PATH,
  TINY_PATH,
  TINY_PATH,
  LOGO_PARTS[5]?.hatShadowPoints ? pointsToPath(LOGO_PARTS[5].hatShadowPoints) : TINY_PATH,
]

const LEFT_EYE_PATHS = [
  LOGO_PARTS[0]?.leftEyePath ?? TINY_PATH,
  LOGO_PARTS[1]?.leftEyePath ?? TINY_PATH,
  LOGO_PARTS[2]?.leftEyePath ?? TINY_PATH,
  LOGO_PARTS[3]?.leftEyePath ?? TINY_PATH,
  LOGO_PARTS[4]?.leftEyePath ?? TINY_PATH,
  LEFT_EYE_ELLIPSE
    ? ellipseToPath(LEFT_EYE_ELLIPSE.cx, LEFT_EYE_ELLIPSE.cy, LEFT_EYE_ELLIPSE.rx, LEFT_EYE_ELLIPSE.ry)
    : TINY_PATH,
]

const RIGHT_EYE_PATHS = [
  LOGO_PARTS[0]?.rightEyePath ?? TINY_PATH,
  LOGO_PARTS[1]?.rightEyePath ?? TINY_PATH,
  LOGO_PARTS[2]?.rightEyePath ?? TINY_PATH,
  LOGO_PARTS[3]?.rightEyePath ?? TINY_PATH,
  LOGO_PARTS[4]?.rightEyePath ?? TINY_PATH,
  RIGHT_EYE_ELLIPSE
    ? ellipseToPath(RIGHT_EYE_ELLIPSE.cx, RIGHT_EYE_ELLIPSE.cy, RIGHT_EYE_ELLIPSE.rx, RIGHT_EYE_ELLIPSE.ry)
    : TINY_PATH,
]

const MOUTH_PATHS = [
  TINY_PATH,
  TINY_PATH,
  LOGO_PARTS[2]?.mouthPath ?? TINY_PATH,
  LOGO_PARTS[3]?.mouthPath ?? TINY_PATH,
  LOGO_PARTS[4]?.mouthPath ?? TINY_PATH,
  MOUTH_ELLIPSE
    ? ellipseToPath(MOUTH_ELLIPSE.cx, MOUTH_ELLIPSE.cy, MOUTH_ELLIPSE.rx, MOUTH_ELLIPSE.ry)
    : TINY_PATH,
]

const NOSE_PATHS = [
  LOGO_PARTS[0]?.nosePath ?? TINY_PATH,
  LOGO_PARTS[1]?.nosePath ?? TINY_PATH,
  LOGO_PARTS[2]?.nosePath ?? TINY_PATH,
  LOGO_PARTS[3]?.nosePath ?? TINY_PATH,
  LOGO_PARTS[4]?.nosePath ?? TINY_PATH,
  LOGO_PARTS[5]?.nosePath ?? TINY_PATH,
]

const makeInterpolators = (paths) =>
  paths.map((from, index) => {
    const to = paths[(index + 1) % paths.length]
    return interpolate(from, to, { maxSegmentLength: 2 })
  })

const LoadingMorph = ({ className = '' }) => {
  const prefersReducedMotion = useReducedMotion()
  const canvasRef = useRef(null)
  const bodyInterpolators = useMemo(() => makeInterpolators(BODY_PATHS), [])
  const hatInterpolators = useMemo(() => makeInterpolators(HAT_PATHS), [])
  const hatShadowInterpolators = useMemo(() => makeInterpolators(HAT_SHADOW_PATHS), [])
  const leftEyeInterpolators = useMemo(() => makeInterpolators(LEFT_EYE_PATHS), [])
  const rightEyeInterpolators = useMemo(() => makeInterpolators(RIGHT_EYE_PATHS), [])
  const mouthInterpolators = useMemo(() => makeInterpolators(MOUTH_PATHS), [])
  const noseInterpolators = useMemo(() => makeInterpolators(NOSE_PATHS), [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    const viewBox = { x: 0, y: 0, width: 800, height: 800 }
    const duration = 720
    const pause = 160
    const steps = BODY_PATHS.length
    const cycle = duration + pause
    const total = cycle * steps
    let frameId
    let start = performance.now()

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawPath = (pathString, fillStyle) => {
      if (!pathString || pathString === TINY_PATH) return
      ctx.fillStyle = fillStyle
      ctx.fill(new Path2D(pathString))
    }

    const render = (now) => {
      const elapsed = prefersReducedMotion ? 0 : (now - start) % total
      const index = prefersReducedMotion ? 0 : Math.floor(elapsed / cycle)
      const segmentTime = elapsed - index * cycle
      const t = prefersReducedMotion ? 0 : Math.min(segmentTime / duration, 1)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      const scale = Math.min(
        canvas.clientWidth / viewBox.width,
        canvas.clientHeight / viewBox.height
      )
      const offsetX = (canvas.clientWidth - viewBox.width * scale) / 2
      const offsetY = (canvas.clientHeight - viewBox.height * scale) / 2
      ctx.translate(offsetX, offsetY)
      ctx.scale(scale, scale)

      drawPath(BASE_PATH, '#ffffff')
      drawPath(bodyInterpolators[index](t), '#0b0b0b')
      drawPath(hatInterpolators[index](t), '#0b0b0b')
      drawPath(hatShadowInterpolators[index](t), '#0b0b0b')
      drawPath(leftEyeInterpolators[index](t), '#0b0b0b')
      drawPath(rightEyeInterpolators[index](t), '#0b0b0b')
      drawPath(mouthInterpolators[index](t), '#0b0b0b')
      drawPath(noseInterpolators[index](t), '#0b0b0b')
      ctx.restore()

      frameId = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    frameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameId)
    }
  }, [
    bodyInterpolators,
    hatInterpolators,
    hatShadowInterpolators,
    leftEyeInterpolators,
    rightEyeInterpolators,
    mouthInterpolators,
    noseInterpolators,
    prefersReducedMotion,
  ])

  return (
    <canvas
      ref={canvasRef}
      className={`loading-morph ${className}`.trim()}
      role="img"
      aria-label="Loading logo morph"
    />
  )
}

export default LoadingMorph

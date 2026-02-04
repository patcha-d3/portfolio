import { useEffect, useMemo, useRef } from 'react'
import { interpolate } from 'flubber'
import { useReducedMotion } from 'framer-motion'
import './LoadingMorph.css'

const BASE_PATH =
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

const BODY_PATHS = [
  TINY_PATH,
  TINY_PATH,
  'M307.4,388.6c-24.1,5.7-46.2,18.1-62.9,36.4-7.2,7.9-14.2,17.6-19.9,29.3-37.8,86.9-8,222.7-76.4,276.4,45.2,25.9,92.8,38.2,139.1,42.2l-24.6-297.6,236.3-20.4c128.6,285.2-107.7,275.3-107.7,275.3l9.7,37.3c92.4-15.6,160.9-52.2,160.9-52.2,0,0,32.8-394.6-254.4-326.7Z',
  'M290.5,393c-9.9,2.8-20.5,1.1-26.5-7.2l-5.2-7.3-42.3,34.6,8.8,25.2c1.8,5.2,1.6,10.9-.6,16-37.8,86.9-8,222.7-76.4,276.4,45.2,25.9,92.8,38.2,139.1,42.2l-24.6-297.6,236.3-20.4c128.6,285.2-107.7,275.3-107.7,275.3l9.7,37.3c92.4-15.6,160.9-52.2,160.9-52.2,0,0,34.1-409.9-271.3-322.3Z',
  'M290.5,393c-9.9,2.8-20.5,1.1-26.5-7.2l-5.2-7.3-42.3,34.6,8.8,25.2c1.8,5.2,1.6,10.9-.6,16-37.8,86.9-8,222.7-76.4,276.4,45.2,25.9,92.8,38.2,139.1,42.2l-24.6-297.6,236.3-20.4c128.6,285.2-107.7,275.3-107.7,275.3l9.7,37.3c92.4-15.6,160.9-52.2,160.9-52.2,0,0,34.1-409.9-271.3-322.3Z',
  'M290.5,393c-9.9,2.8-20.5,1.1-26.5-7.2l-5.2-7.3-42.3,34.6,8.8,25.2c1.8,5.2,1.6,10.9-.6,16-37.8,86.9-8,222.7-76.4,276.4,45.2,25.9,92.8,38.2,139.1,42.2l-24.6-297.6,236.3-20.4c128.6,285.2-107.7,275.3-107.7,275.3l9.7,37.3c92.4-15.6,160.9-52.2,160.9-52.2,0,0,34.1-409.9-271.3-322.3Z',
]

const HAT_PATHS = [
  TINY_PATH,
  TINY_PATH,
  TINY_PATH,
  TINY_PATH,
  pointsToPath('262 364.7 249.3 344.5 194.6 392.1 206.5 412 262 364.7'),
  pointsToPath('260 362.7 247.3 342.5 192.6 390.1 204.5 410 260 362.7'),
]

const HAT_SHADOW_PATHS = [
  TINY_PATH,
  TINY_PATH,
  TINY_PATH,
  TINY_PATH,
  TINY_PATH,
  pointsToPath('241.2 332.9 154 169.8 50 251.5 185.7 380.1 241.2 332.9'),
]

const LEFT_EYE_PATHS = [
  'M358.7,549c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  'M358.7,549c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  'M358.8,549c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  'M358.8,549c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  'M358.8,549c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  ellipseToPath(373.1, 523.7, 10.2, 14.2),
]

const RIGHT_EYE_PATHS = [
  'M460.8,536.6c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  'M460.8,536.6c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  'M460.8,536.6c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  'M460.8,536.6c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  'M460.8,536.6c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  ellipseToPath(467.2, 514.2, 10.2, 14.2),
]

const MOUTH_PATHS = [
  TINY_PATH,
  TINY_PATH,
  'M429,632.6c8.4,2.7,16.1,8.6,23,17.6,2.5,3.3,1.9,8-1.4,10.5-3.3,2.5-8,1.9-10.5-1.4-6.4-8.3-13.1-12.8-20.1-13.3-9.9-.8-17.8,6.6-17.9,6.6-3,2.8-7.7,2.7-10.6-.2-2.8-3-2.8-7.7.2-10.5.5-.5,12.6-12,29.2-10.8,2.7.2,5.4.7,8,1.5Z',
  'M412.4,658.6c-7.1-5.2-12.5-13.3-16.2-24.1-1.3-3.9.8-8.2,4.7-9.5,3.9-1.3,8.2.8,9.5,4.7,3.4,9.9,8.3,16.3,14.7,19.1,9.1,3.9,19-.5,19.1-.6,3.7-1.7,8.2-.1,9.9,3.6,1.7,3.7.2,8.2-3.5,9.9-.6.3-15.8,7.3-31.2.9-2.5-1.1-4.8-2.4-7-4Z',
  'M421.3,662.5c-8.8,0-17.9-3.3-27.3-9.8-3.4-2.4-4.2-7-1.9-10.4,2.4-3.4,7-4.2,10.4-1.9,8.6,6,16.4,8.2,23.2,6.6,9.7-2.2,15-11.6,15-11.7,2-3.6,6.5-4.9,10.1-3,3.6,2,5,6.5,3,10.1-.3.6-8.4,15.3-24.6,19.1-2.6.6-5.3.9-8,.9Z',
  ellipseToPath(436.5, 649.9, 20.4, 28.4),
]

const NOSE_PATHS = [
  'M444.3,604.6c-2.2,0-4.4-1-5.7-3-2.2-3.2-1.4-7.5,1.7-9.7l5.9-4.1c6.5-4.5,8.8-13.1,5.4-20.3l-20.4-43.4c-1.6-3.5-.1-7.7,3.4-9.3,3.5-1.6,7.7-.1,9.3,3.4l20.4,43.4c6.3,13.4,2.1,29.2-10.1,37.7l-5.9,4.1c-1.2.9-2.6,1.3-4,1.3Z',
  'M444.3,604.6c-2.2,0-4.4-1-5.7-3-2.2-3.2-1.4-7.5,1.7-9.7l5.9-4.1c6.5-4.5,8.8-13.1,5.4-20.3l-20.4-43.4c-1.6-3.5-.1-7.7,3.4-9.3,3.5-1.6,7.7-.1,9.3,3.4l20.4,43.4c6.3,13.4,2.1,29.2-10.1,37.7l-5.9,4.1c-1.2.9-2.6,1.3-4,1.3Z',
  'M444.3,604.6c-2.2,0-4.4-1-5.7-3-2.2-3.2-1.4-7.5,1.7-9.7l5.9-4.1c6.5-4.5,8.8-13.1,5.4-20.3l-20.4-43.4c-1.6-3.5-.1-7.7,3.4-9.3,3.5-1.6,7.7-.1,9.3,3.4l20.4,43.4c6.3,13.4,2.1,29.2-10.1,37.7l-5.9,4.1c-1.2.9-2.6,1.3-4,1.3Z',
  'M444.3,604.6c-2.2,0-4.4-1-5.7-3-2.2-3.2-1.4-7.5,1.7-9.7l5.9-4.1c6.5-4.5,8.8-13.1,5.4-20.3l-20.4-43.4c-1.6-3.5-.1-7.7,3.4-9.3,3.5-1.6,7.7-.1,9.3,3.4l20.4,43.4c6.3,13.4,2.1,29.2-10.1,37.7l-5.9,4.1c-1.2.9-2.6,1.3-4,1.3Z',
  'M444.3,604.6c-2.2,0-4.4-1-5.7-3-2.2-3.2-1.4-7.5,1.7-9.7l5.9-4.1c6.5-4.5,8.8-13.1,5.4-20.3l-20.4-43.4c-1.6-3.5-.1-7.7,3.4-9.3,3.5-1.6,7.7-.1,9.3,3.4l20.4,43.4c6.3,13.4,2.1,29.2-10.1,37.7l-5.9,4.1c-1.2.9-2.6,1.3-4,1.3Z',
  'M444.3,604.8c-2.2,0-4.4-1-5.7-3-2.2-3.2-1.4-7.5,1.7-9.7l5.9-4.1c6.5-4.5,8.8-13.1,5.4-20.3l-20.4-43.4c-1.6-3.5-.1-7.7,3.4-9.3,3.5-1.6,7.7-.1,9.3,3.4l20.4,43.4c6.3,13.4,2.1,29.2-10.1,37.7l-5.9,4.1c-1.2.9-2.6,1.3-4,1.3Z',
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

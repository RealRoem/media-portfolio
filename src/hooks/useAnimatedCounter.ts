import { useEffect, useRef, useState, type RefObject } from 'react'

import { COUNTER_DURATION_MS, COUNTER_FRAME_MS } from '@/constants'

interface UseAnimatedCounterOptions {
  readonly target: number
  readonly durationMs?: number
}

interface UseAnimatedCounterResult {
  readonly value: number
  readonly ref: RefObject<HTMLSpanElement | null>
}

export const useAnimatedCounter = ({
  target,
  durationMs = COUNTER_DURATION_MS,
}: UseAnimatedCounterOptions): UseAnimatedCounterResult => {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    const animate = (): void => {
      if (hasAnimatedRef.current) {
        return
      }

      hasAnimatedRef.current = true
      const startedAt = performance.now()

      const tick = (): void => {
        const elapsed = performance.now() - startedAt
        const progress = Math.min(elapsed / durationMs, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        setValue(Math.round(target * eased))

        if (progress < 1) {
          window.setTimeout(tick, COUNTER_FRAME_MS)
        }
      }

      tick()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [durationMs, target])

  return { value, ref }
}

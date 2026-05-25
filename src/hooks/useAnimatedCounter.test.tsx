import { render, renderHook, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useAnimatedCounter } from './useAnimatedCounter'

const targetValue = 100

const CounterHarness = (): React.JSX.Element => {
  const { ref, value } = useAnimatedCounter({ target: targetValue, durationMs: 1 })

  return <span ref={ref}>{value}</span>
}

describe('useAnimatedCounter', (): void => {
  describe('when the observed element is visible', (): void => {
    it('should animate toward the target value', async (): Promise<void> => {
      render(<CounterHarness />)

      await waitFor((): void => {
        expect(screen.getByText(String(targetValue))).toBeInTheDocument()
      })
    })
  })

  describe('when no element is attached yet', (): void => {
    it('should keep the initial value', (): void => {
      const { result } = renderHook(() =>
        useAnimatedCounter({ target: targetValue, durationMs: 1 })
      )

      expect(result.current.value).toBe(0)
    })
  })
})

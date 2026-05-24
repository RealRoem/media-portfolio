import { describe, expect, it } from 'vitest'

import { formatCompactNumber } from './format'

describe('formatCompactNumber', (): void => {
  describe('when formatting sponsor stats', (): void => {
    it('should abbreviate millions and thousands', (): void => {
      expect(formatCompactNumber(11_200_000)).toBe('11.2M')
      expect(formatCompactNumber(35_200)).toBe('35K')
    })

    it('should keep small values readable', (): void => {
      expect(formatCompactNumber(85)).toBe('85')
    })
  })
})

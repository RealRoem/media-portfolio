import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'

import { ErrorBoundary } from './ErrorBoundary'

const ThrowingChild = (): React.JSX.Element => {
  throw new Error('Render failed')
}

describe('ErrorBoundary', (): void => {
  describe('when a child fails during render', (): void => {
    it('should show a fallback and report the error', (): void => {
      renderWithProviders(
        <ErrorBoundary>
          <ThrowingChild />
        </ErrorBoundary>
      )

      expect(screen.getByRole('main')).toBeInTheDocument()
      expect(globalThis.reportError).toHaveBeenCalled()
    })
  })
})

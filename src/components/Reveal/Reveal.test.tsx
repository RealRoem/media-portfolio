import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'

import { Reveal } from './Reveal'

describe('Reveal', (): void => {
  describe('when content enters the viewport', (): void => {
    it('should render its children', (): void => {
      const childContent = 'Renderable child content'

      renderWithProviders(<Reveal>{childContent}</Reveal>)

      expect(screen.getByText(childContent)).toBeInTheDocument()
    })
  })
})

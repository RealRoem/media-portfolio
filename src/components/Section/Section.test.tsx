import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'

import { Section } from './Section'

describe('Section', (): void => {
  describe('when rendered with semantic labelling', (): void => {
    it('should expose a labelled section landmark', (): void => {
      renderWithProviders(
        <Section id="test-section" labelledBy="test-heading">
          <h2 id="test-heading">Sponsor proof</h2>
        </Section>
      )

      expect(screen.getByRole('region', { name: 'Sponsor proof' })).toHaveAttribute(
        'id',
        'test-section'
      )
    })
  })
})

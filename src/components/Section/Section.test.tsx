import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'

import { Section } from './Section'

describe('Section', (): void => {
  describe('when rendered with semantic labelling', (): void => {
    it('should expose a labelled section landmark', (): void => {
      const sectionId = 'test-section'
      const headingId = 'test-heading'
      const headingText = 'Section heading'

      renderWithProviders(
        <Section id={sectionId} labelledBy={headingId}>
          <h2 id={headingId}>{headingText}</h2>
        </Section>
      )

      expect(screen.getByRole('region', { name: headingText })).toHaveAttribute('id', sectionId)
    })
  })
})

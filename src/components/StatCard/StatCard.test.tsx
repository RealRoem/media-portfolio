import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'
import type { StatItem } from '@/types'

import { StatCard } from './StatCard'

const stat: StatItem = {
  label: 'Discord members',
  value: 10247,
  suffix: '',
  description: 'A sponsor-ready community touchpoint.',
  highlight: true,
}

const standardStat: StatItem = {
  label: 'YouTube subscribers',
  value: 35200,
  suffix: '+',
  description: 'Growing Roblox strategy audience.',
}

describe('StatCard', (): void => {
  describe('when rendered with a highlighted stat', (): void => {
    it('should show the label and sponsor-facing description', (): void => {
      renderWithProviders(<StatCard stat={stat} />)

      expect(screen.getByText('Discord members')).toBeInTheDocument()
      expect(screen.getByText('A sponsor-ready community touchpoint.')).toBeInTheDocument()
    })

    it('should render standard stats without the highlight treatment', (): void => {
      renderWithProviders(<StatCard stat={standardStat} />)

      expect(screen.getByText('YouTube subscribers')).toBeInTheDocument()
      expect(screen.getByText('Growing Roblox strategy audience.')).toBeInTheDocument()
    })
  })
})

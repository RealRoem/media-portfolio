import type { ReactNode } from 'react'

import type { FeaturedVideo, StatItem } from './creator'

export interface ErrorBoundaryProps {
  readonly children: ReactNode
}

export interface ErrorBoundaryState {
  readonly hasError: boolean
}

export interface PageLayoutProps {
  readonly children: ReactNode
}

export interface ButtonProps {
  readonly children: ReactNode
  readonly href: string
  readonly ariaLabel: string
  readonly variant?: 'primary' | 'secondary' | 'ghost'
  readonly className?: string
}

export interface SectionProps {
  readonly children: ReactNode
  readonly id: string
  readonly className?: string
  readonly labelledBy?: string
}

export interface RevealProps {
  readonly children: ReactNode
  readonly className?: string
  readonly delay?: number
}

export interface StatCardProps {
  readonly stat: StatItem
}

export interface VideoCardProps {
  readonly video: FeaturedVideo
}

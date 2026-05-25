export interface HeroMetric {
  readonly label: string
  readonly value: string
}

export interface AboutPoint {
  readonly eyebrow: string
  readonly title: string
  readonly body: string
}

export interface StatItem {
  readonly label: string
  readonly value: number
  readonly suffix: string
  readonly description: string
  readonly highlight?: boolean
}

export interface FeaturedVideo {
  readonly id: string
  readonly title: string
  readonly theme: string
  readonly thumbnailAlt: string
  readonly thumbnailUrl: string
  readonly thumbnailWebpUrl: string
  readonly watchUrl: string
}

export interface SponsorshipValue {
  readonly title: string
  readonly body: string
}

export interface ContactLink {
  readonly label: string
  readonly href: string
  readonly ariaLabel: string
  readonly brand: 'email' | 'discord' | 'youtube'
}

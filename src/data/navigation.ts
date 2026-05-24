import { MAILTO_SPONSORSHIP_URL } from '@/constants'
import { SECTION_IDS } from '@/constants/sections'
import type { NavigationItem } from '@/types'

export const navigationItems: readonly NavigationItem[] = [
  { label: 'About', href: `#${SECTION_IDS.about}` },
  { label: 'Stats', href: `#${SECTION_IDS.stats}` },
  { label: 'Videos', href: `#${SECTION_IDS.videos}` },
  { label: 'Sponsors', href: `#${SECTION_IDS.sponsorship}` },
  { label: 'Contact', href: `#${SECTION_IDS.contact}` },
]

export const sponsorshipNavItem: NavigationItem = {
  label: 'Contact for sponsorship',
  href: MAILTO_SPONSORSHIP_URL,
}

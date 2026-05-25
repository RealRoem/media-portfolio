import { MAILTO_SPONSORSHIP_URL, SPONSORSHIP_CTA_LABEL } from '@/constants'
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
  label: SPONSORSHIP_CTA_LABEL,
  href: MAILTO_SPONSORSHIP_URL,
}

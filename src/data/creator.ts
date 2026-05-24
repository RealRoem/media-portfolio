import { DISCORD_URL, MAILTO_SPONSORSHIP_URL, YOUTUBE_URL } from '@/constants'
import type {
  AboutPoint,
  ContactLink,
  FeaturedVideo,
  HeroMetric,
  SponsorshipValue,
  StatItem,
} from '@/types'

export const heroMetrics: readonly HeroMetric[] = [
  { label: 'Subscribers', value: '35K+' },
  { label: 'Views', value: '11.2M+' },
  { label: 'Discord', value: '10,247' },
]

export const aboutPoints: readonly AboutPoint[] = [
  {
    eyebrow: 'Guides',
    title: 'I make Roblox systems easier to understand.',
    body: 'I like taking a game that feels messy at first and turning it into something simple: what to build, what to avoid, and what actually makes money.',
  },
  {
    eyebrow: 'Pace',
    title: 'I try to keep videos quick, clear, and useful.',
    body: 'Some videos are fast tip lists. Some are longer guides. Some are more entertainment-focused. The goal is always that viewers leave with something they can use.',
  },
  {
    eyebrow: 'Community',
    title: 'I stay close to the people watching.',
    body: 'The Discord is a big part of the channel. People ask questions, share builds, test ideas, and keep the conversation going after the video ends.',
  },
]

export const stats: readonly StatItem[] = [
  {
    label: 'YouTube subscribers',
    value: 35200,
    suffix: '+',
    description: 'Players who come to me for Roblox tycoon guides, tips, and progression.',
  },
  {
    label: 'Lifetime views',
    value: 11200000,
    suffix: '+',
    description: 'Most of my best videos keep getting found because people search for help.',
  },
  {
    label: 'Discord members',
    value: 10247,
    suffix: '',
    description: 'A direct place where I can talk with the most active viewers.',
    highlight: true,
  },
  {
    label: 'Published videos',
    value: 85,
    suffix: '',
    description: 'Mostly Roblox tycoon, simulator, guide, and challenge content.',
  },
]

export const featuredVideos: readonly FeaturedVideo[] = [
  {
    id: 'AhosYM8azmw',
    title: 'Get Rich ABSURDLY Fast in Ultimate Mining Tycoon',
    theme: 'Fast-paced tip video',
    thumbnailAlt: 'Thumbnail for Roem Ultimate Mining Tycoon money guide',
    thumbnailUrl: 'https://i.ytimg.com/vi/AhosYM8azmw/maxresdefault.jpg',
    thumbnailWebpUrl: 'https://i.ytimg.com/vi_webp/AhosYM8azmw/maxresdefault.webp',
    watchUrl: 'https://www.youtube.com/watch?v=AhosYM8azmw',
  },
  {
    id: 'A8fsf_pHNfc',
    title: 'I Spent 100 Days Building a MASSIVE Restaurant in Roblox',
    theme: 'Long guide / challenge format',
    thumbnailAlt: 'Thumbnail for Roem 100 days Restaurant Tycoon 3 video',
    thumbnailUrl: 'https://i.ytimg.com/vi/A8fsf_pHNfc/maxresdefault.jpg',
    thumbnailWebpUrl: 'https://i.ytimg.com/vi_webp/A8fsf_pHNfc/maxresdefault.webp',
    watchUrl: 'https://www.youtube.com/watch?v=A8fsf_pHNfc',
  },
  {
    id: 'QYOVAB7dAzw',
    title: '12 GENIUS Tips to Get Rich FAST in Restaurant Tycoon 3',
    theme: 'Useful guide with entertainment pace',
    thumbnailAlt: 'Thumbnail for Roem Restaurant Tycoon 3 genius tips video',
    thumbnailUrl: 'https://i.ytimg.com/vi/QYOVAB7dAzw/maxresdefault.jpg',
    thumbnailWebpUrl: 'https://i.ytimg.com/vi_webp/QYOVAB7dAzw/maxresdefault.webp',
    watchUrl: 'https://www.youtube.com/watch?v=QYOVAB7dAzw',
  },
]

export const sponsorshipValues: readonly SponsorshipValue[] = [
  {
    title: 'I can explain the product naturally',
    body: 'The best sponsor fit is something I can actually show, test, or explain inside a Roblox/gaming context.',
  },
  {
    title: 'I know how to make the message feel useful',
    body: 'A sponsor mention works best when it helps the viewer understand why something matters, not when it feels pasted on.',
  },
  {
    title: 'I can continue the campaign in Discord',
    body: 'If it makes sense, I can follow up with links, questions, announcements, or extra context for the people who are most engaged.',
  },
  {
    title: 'I keep the process simple',
    body: 'Send me the goal, the message, the deadline, and the links. I can help shape it into something that fits the channel.',
  },
]

export const contactLinks: readonly ContactLink[] = [
  {
    label: 'Email for sponsorship',
    href: MAILTO_SPONSORSHIP_URL,
    ariaLabel: 'Email Roem for sponsorship inquiries',
  },
  {
    label: 'Join Discord',
    href: DISCORD_URL,
    ariaLabel: 'Open Roem Discord community',
  },
  {
    label: 'Visit YouTube',
    href: YOUTUBE_URL,
    ariaLabel: 'Open Roem YouTube channel',
  },
]

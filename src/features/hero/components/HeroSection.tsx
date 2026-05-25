import { ArrowDownRight, CheckCircle2 } from 'lucide-react'
import { memo } from 'react'

import { Button, Reveal, Section } from '@/components'
import { CHANNEL_AVATAR_URL, CREATOR_HANDLE, MAILTO_SPONSORSHIP_URL } from '@/constants'
import type { HeroSectionProps } from '@/features/hero/types'
import { theme } from '@/styles/theme'

export const HeroSection = memo(
  ({ metrics }: HeroSectionProps): React.JSX.Element => (
    <Section
      className="flex min-h-screen items-center pb-16 pt-32"
      id="hero"
      labelledBy="hero-title"
    >
      <div className="grid items-center gap-16 lg:grid-cols-[1.04fr_0.96fr]">
        <Reveal>
          <p className={theme.text.eyebrow}>{CREATOR_HANDLE} creator portfolio</p>
          <h1 className={theme.hero.title} id="hero-title">
            Roblox videos people want to see
          </h1>
          <p className={theme.hero.body}>
            I make fast tips, longer guides, and challenge-style videos around Roblox tycoon and
            simulator games. My audience watch the videos because they want to play smarter and be
            more efficient.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button ariaLabel="Contact Roem for sponsorship" href={MAILTO_SPONSORSHIP_URL}>
              Contact for sponsorship
            </Button>
            <Button
              ariaLabel="Scroll to featured videos"
              href="#featured-videos"
              variant="secondary"
            >
              See my formats
              <ArrowDownRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <ul className="mt-10 grid gap-3 text-sm text-frost-300 sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className={`h-4 w-4 ${theme.icon.accent}`} />
              High quality videos
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className={`h-4 w-4 ${theme.icon.accent}`} />
              Active Community
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className={`h-4 w-4 ${theme.icon.accent}`} />
              Big ambitions for growth
            </li>
          </ul>
        </Reveal>
        <Reveal className="relative" delay={0.12}>
          <div className={theme.hero.ambient} />
          <div className={theme.hero.ambientSecondary} />
          <div className={theme.hero.profilePanel}>
            <div className={theme.hero.profileBar} />
            <div className="mx-auto flex max-w-md flex-col items-center text-center">
              <div className={theme.hero.avatarFrame}>
                <img
                  alt="Real Roem channel avatar"
                  className="h-44 w-44 rounded-full border border-obsidian-950 object-cover sm:h-52 sm:w-52"
                  src={CHANNEL_AVATAR_URL}
                />
              </div>
              <p className={`mt-7 ${theme.text.eyebrow}`}>Youtube profile</p>
              <h2 className={theme.hero.profileTitle}>Real_Roem</h2>
              <p className={theme.hero.profileBody}>
                Welcome! I love to learn, especially if it involves Roblox Tycoons and money. If you
                want to get rich in Roblox Tycoons, this is the place for you!
              </p>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div className={theme.hero.metricCard} key={metric.label}>
                  <p className={theme.hero.metricValue}>{metric.value}</p>
                  <p className={theme.hero.metricLabel}>{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
)

HeroSection.displayName = 'HeroSection'

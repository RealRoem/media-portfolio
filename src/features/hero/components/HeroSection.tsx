import { ArrowDownRight, CheckCircle2 } from 'lucide-react'
import { memo } from 'react'

import { Button, Reveal, Section } from '@/components'
import { CHANNEL_AVATAR_URL, CREATOR_HANDLE, MAILTO_SPONSORSHIP_URL } from '@/constants'
import type { HeroSectionProps } from '@/features/hero/types'

export const HeroSection = memo(
  ({ metrics }: HeroSectionProps): React.JSX.Element => (
    <Section
      className="flex min-h-screen items-center pb-16 pt-32"
      id="hero"
      labelledBy="hero-title"
    >
      <div className="grid items-center gap-16 lg:grid-cols-[1.04fr_0.96fr]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-champagne-300">
            {CREATOR_HANDLE} creator portfolio
          </p>
          <h1
            className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-frost-100 sm:text-7xl lg:text-8xl"
            id="hero-title"
          >
            Roblox videos people want to see
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-frost-300">
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
              <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-champagne-300" />
              High quality videos
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-champagne-300" />
              Active Community
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-champagne-300" />
              Big ambitions for growth
            </li>
          </ul>
        </Reveal>
        <Reveal className="relative" delay={0.12}>
          <div className="absolute inset-8 rounded-full bg-youtube-500/12 blur-3xl" />
          <div className="absolute -right-8 top-16 h-40 w-40 rounded-full bg-champagne-300/18 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-8 shadow-panel backdrop-blur-xl sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-youtube-500 via-champagne-300 to-youtube-500" />
            <div className="mx-auto flex max-w-md flex-col items-center text-center">
              <div className="rounded-full bg-gradient-to-br from-youtube-500 via-champagne-300 to-youtube-500 p-1 shadow-redglow">
                <img
                  alt="Real Roem channel avatar"
                  className="h-44 w-44 rounded-full border border-obsidian-950 object-cover sm:h-52 sm:w-52"
                  src={CHANNEL_AVATAR_URL}
                />
              </div>
              <p className="mt-7 text-sm font-medium uppercase tracking-[0.18em] text-champagne-300">
                Youtube profile
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-frost-100">
                Real_Roem
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-frost-300">
                Welcome! I love to learn, especially if it involves Roblox Tycoons and money. If you
                want to get rich in Roblox Tycoons, this is the place for you!
              </p>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div
                  className="rounded-md border border-white/10 bg-obsidian-950/50 p-4 text-center"
                  key={metric.label}
                >
                  <p className="text-2xl font-semibold tracking-tight text-frost-100">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-frost-500">{metric.label}</p>
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

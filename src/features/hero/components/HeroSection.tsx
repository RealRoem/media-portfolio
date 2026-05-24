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
          <p className="text-sm font-medium text-ember-300">{CREATOR_HANDLE} creator portfolio</p>
          <h1
            className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-frost-100 sm:text-7xl lg:text-8xl"
            id="hero-title"
          >
            I make Roblox videos people use while they play.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-frost-300">
            I make fast tips, longer guides, and challenge-style videos around Roblox tycoon and
            simulator games. My audience usually shows up because they want to get better, build
            smarter, or figure out what to play next.
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
              See the work
              <ArrowDownRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <ul className="mt-10 grid gap-3 text-sm text-frost-300 sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-ember-300" />
              Fast tips
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-ember-300" />
              Long guides
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-ember-300" />
              Entertainment formats
            </li>
          </ul>
        </Reveal>
        <Reveal className="relative" delay={0.12}>
          <div className="absolute inset-10 rounded-full bg-ember-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-panel">
            <img
              alt="Real Roem channel avatar"
              className="mx-auto h-32 w-32 rounded-full border border-white/15 object-cover"
              src={CHANNEL_AVATAR_URL}
            />
            <div className="mt-8 grid grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div className="rounded-md bg-obsidian-950/55 p-4 text-center" key={metric.label}>
                  <p className="text-2xl font-semibold tracking-tight text-frost-100">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-frost-500">{metric.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm leading-6 text-frost-300">
              I work best with sponsors when the product can be explained in a way that actually
              helps the viewer, not just placed in the middle of a video.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
)

HeroSection.displayName = 'HeroSection'

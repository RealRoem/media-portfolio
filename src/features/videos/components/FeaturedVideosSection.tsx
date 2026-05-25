import { memo } from 'react'

import { Reveal, Section, VideoCard } from '@/components'
import { SECTION_IDS, STAGGER_DELAY_SECONDS } from '@/constants'
import type { FeaturedVideosSectionProps } from '@/features/videos/types'

export const FeaturedVideosSection = memo(
  ({ videos }: FeaturedVideosSectionProps): React.JSX.Element => (
    <Section id={SECTION_IDS.videos} labelledBy="featured-videos-title">
      <Reveal className="max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-champagne-300">
          Featured videos
        </p>
        <h2
          className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-frost-100 sm:text-6xl"
          id="featured-videos-title"
        >
          3 different video formats
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video, index) => (
          <Reveal delay={index * STAGGER_DELAY_SECONDS} key={video.id}>
            <VideoCard video={video} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
)

FeaturedVideosSection.displayName = 'FeaturedVideosSection'

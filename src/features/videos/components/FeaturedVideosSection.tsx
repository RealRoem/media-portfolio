import { memo } from 'react'

import { Reveal, Section, VideoCard } from '@/components'
import { SECTION_IDS, STAGGER_DELAY_SECONDS } from '@/constants'
import type { FeaturedVideosSectionProps } from '@/features/videos/types'
import { theme } from '@/styles/theme'

export const FeaturedVideosSection = memo(
  ({ videos }: FeaturedVideosSectionProps): React.JSX.Element => (
    <Section id={SECTION_IDS.videos} labelledBy="featured-videos-title">
      <Reveal className="max-w-4xl">
        <p className={theme.text.eyebrow}>Featured videos</p>
        <h2 className={theme.text.sectionTitle} id="featured-videos-title">
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

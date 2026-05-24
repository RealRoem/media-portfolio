import { Play } from 'lucide-react'
import { memo } from 'react'

import type { VideoCardProps } from '@/types'

export const VideoCard = memo(
  ({ video }: VideoCardProps): React.JSX.Element => (
    <article className="group overflow-hidden rounded-lg border border-line/80 bg-surface/75 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-elevated">
      <a
        aria-label={`Watch ${video.title} on YouTube`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        href={video.watchUrl}
        rel="noreferrer"
        target="_blank"
      >
        <div className="relative aspect-video overflow-hidden">
          <picture>
            <source srcSet={video.thumbnailWebpUrl} type="image/webp" />
            <img
              alt={video.thumbnailAlt}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              height={720}
              loading="lazy"
              src={video.thumbnailUrl}
              width={1280}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-shadow/70 via-shadow/10 to-transparent" />
          <div className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-strong text-canvas shadow-glow">
            <Play aria-hidden="true" className="h-5 w-5 fill-current" />
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm font-medium text-accent">{video.theme}</p>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-ink group-hover:text-accent-strong">
            {video.title}
          </h3>
        </div>
      </a>
    </article>
  )
)

VideoCard.displayName = 'VideoCard'

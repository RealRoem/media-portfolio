import { Play } from 'lucide-react'
import { memo } from 'react'

import { theme } from '@/styles/theme'
import type { VideoCardProps } from '@/types'

export const VideoCard = memo(
  ({ video }: VideoCardProps): React.JSX.Element => (
    <article className={theme.surface.videoCard}>
      <a
        aria-label={`Watch ${video.title} on YouTube`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-300"
        href={video.watchUrl}
        rel="noreferrer"
        target="_blank"
      >
        <div className="relative aspect-video overflow-hidden">
          <picture>
            <source srcSet={video.thumbnailWebpUrl} type="image/webp" />
            <img
              alt={video.thumbnailAlt}
              className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.025]"
              height={720}
              loading="lazy"
              src={video.thumbnailUrl}
              width={1280}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-obsidian-950/10 to-transparent" />
          <div className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-champagne-200 text-obsidian-950 shadow-glow transition duration-300 group-hover:bg-champagne-100">
            <Play aria-hidden="true" className="h-5 w-5 fill-current" />
          </div>
        </div>
        <div className="p-6">
          <p className={`text-sm font-medium ${theme.icon.accent}`}>{video.theme}</p>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-frost-100 transition-colors duration-300 group-hover:text-champagne-100">
            {video.title}
          </h3>
        </div>
      </a>
    </article>
  )
)

VideoCard.displayName = 'VideoCard'

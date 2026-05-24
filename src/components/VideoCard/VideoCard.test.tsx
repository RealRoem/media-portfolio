import { screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'
import type { FeaturedVideo } from '@/types'

import { VideoCard } from './VideoCard'

const testVideo: FeaturedVideo = {
  id: 'video-id',
  title: 'Sponsor ready video',
  theme: 'Campaign fit',
  thumbnailAlt: 'Sponsor ready video thumbnail',
  thumbnailUrl: 'https://i.ytimg.com/vi/video-id/maxresdefault.jpg',
  thumbnailWebpUrl: 'https://i.ytimg.com/vi_webp/video-id/maxresdefault.webp',
  watchUrl: 'https://www.youtube.com/watch?v=video-id',
}

describe('VideoCard', (): void => {
  describe('when rendered for a featured video', (): void => {
    it('should link to YouTube with descriptive media', (): void => {
      renderWithProviders(<VideoCard video={testVideo} />)

      expect(screen.getByRole('link', { name: /watch sponsor ready video/i })).toHaveAttribute(
        'href',
        testVideo.watchUrl
      )
      expect(screen.getByRole('img', { name: testVideo.thumbnailAlt })).toBeInTheDocument()
    })

    it('should not have obvious accessibility violations', async (): Promise<void> => {
      const { container } = renderWithProviders(<VideoCard video={testVideo} />)

      await expect(axe(container)).resolves.toHaveNoViolations()
    })
  })
})

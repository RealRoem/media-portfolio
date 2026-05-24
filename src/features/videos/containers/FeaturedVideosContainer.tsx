import { featuredVideos } from '@/data'
import { FeaturedVideosSection } from '@/features/videos/components'

const FeaturedVideosContainer = (): React.JSX.Element => (
  <FeaturedVideosSection videos={featuredVideos} />
)

export default FeaturedVideosContainer

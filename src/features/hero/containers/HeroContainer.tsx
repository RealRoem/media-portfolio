import { heroMetrics } from '@/data'
import { HeroSection } from '@/features/hero/components'

const HeroContainer = (): React.JSX.Element => <HeroSection metrics={heroMetrics} />

export default HeroContainer

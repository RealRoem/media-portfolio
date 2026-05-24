import { lazy, Suspense } from 'react'

import { ErrorBoundary, LoadingFallback } from '@/app/components'
import { PageLayout } from '@/layouts'

const HeroContainer = lazy(() => import('@/features/hero/containers/HeroContainer'))
const AboutContainer = lazy(() => import('@/features/about/containers/AboutContainer'))
const StatsContainer = lazy(() => import('@/features/stats/containers/StatsContainer'))
const FeaturedVideosContainer = lazy(
  () => import('@/features/videos/containers/FeaturedVideosContainer')
)
const SponsorshipContainer = lazy(
  () => import('@/features/sponsorship/containers/SponsorshipContainer')
)
const ContactContainer = lazy(() => import('@/features/contact/containers/ContactContainer'))

export const App = (): React.JSX.Element => (
  <ErrorBoundary>
    <PageLayout>
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <HeroContainer />
          <AboutContainer />
          <StatsContainer />
          <FeaturedVideosContainer />
          <SponsorshipContainer />
          <ContactContainer />
        </Suspense>
      </main>
    </PageLayout>
  </ErrorBoundary>
)

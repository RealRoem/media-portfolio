import { Navbar } from '@/layouts/Navbar'
import type { PageLayoutProps } from '@/types'

export const PageLayout = ({ children }: PageLayoutProps): React.JSX.Element => (
  <div className="min-h-screen bg-cinematic-radial text-frost-100 antialiased">
    <Navbar />
    {children}
  </div>
)

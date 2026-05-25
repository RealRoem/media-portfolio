import { Navbar } from '@/layouts/Navbar'
import { theme } from '@/styles/theme'
import type { PageLayoutProps } from '@/types'

export const PageLayout = ({ children }: PageLayoutProps): React.JSX.Element => (
  <div className={theme.layout.page}>
    <Navbar />
    {children}
  </div>
)

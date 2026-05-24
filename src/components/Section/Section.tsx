import { memo } from 'react'

import { NAVIGATION_OFFSET_CLASS } from '@/constants'
import type { SectionProps } from '@/types'
import { cx } from '@/utils'

export const Section = memo(
  ({ children, id, className, labelledBy }: SectionProps): React.JSX.Element => (
    <section
      aria-labelledby={labelledBy}
      className={cx(NAVIGATION_OFFSET_CLASS, 'px-5 py-section-sm sm:px-8 lg:py-section', className)}
      id={id}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  )
)

Section.displayName = 'Section'

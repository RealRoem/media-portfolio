import { motion } from 'framer-motion'
import { memo } from 'react'

import { REVEAL_DISTANCE_PX, REVEAL_DURATION_SECONDS, VIEWPORT_ONCE_AMOUNT } from '@/constants'
import type { RevealProps } from '@/types'

export const Reveal = memo(
  ({ children, className, delay = 0 }: RevealProps): React.JSX.Element => (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: REVEAL_DISTANCE_PX }}
      transition={{ duration: REVEAL_DURATION_SECONDS, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: VIEWPORT_ONCE_AMOUNT }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
)

Reveal.displayName = 'Reveal'

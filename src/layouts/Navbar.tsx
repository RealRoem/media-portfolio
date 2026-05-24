import { Menu } from 'lucide-react'
import { memo, useState } from 'react'

import { Button } from '@/components'
import { CREATOR_NAME } from '@/constants'
import { navigationItems, sponsorshipNavItem } from '@/data'
import { cx } from '@/utils'

export const Navbar = memo((): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian-950/82 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a className="text-sm font-semibold tracking-wide text-frost-100" href="#hero">
          {CREATOR_NAME}
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              className="text-sm text-frost-300 transition duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-300"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <Button ariaLabel={sponsorshipNavItem.label} href={sponsorshipNavItem.href}>
            {sponsorshipNavItem.label}
          </Button>
        </div>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-frost-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-300 lg:hidden"
          onClick={() => {
            setIsOpen((current) => !current)
          }}
          type="button"
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>
      </nav>
      <div
        aria-label="Mobile navigation"
        className={cx('border-t border-white/10 px-5 py-5 lg:hidden', isOpen ? 'block' : 'hidden')}
        id="mobile-navigation"
        role="navigation"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          {navigationItems.map((item) => (
            <a
              className="rounded-md py-2 text-frost-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-300"
              href={item.href}
              key={item.href}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              {item.label}
            </a>
          ))}
          <Button ariaLabel={sponsorshipNavItem.label} href={sponsorshipNavItem.href}>
            {sponsorshipNavItem.label}
          </Button>
        </div>
      </div>
    </header>
  )
})

Navbar.displayName = 'Navbar'

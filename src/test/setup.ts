import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/react'
import { toHaveNoViolations } from 'jest-axe'
import { afterEach, expect, vi } from 'vitest'

class MockIntersectionObserver implements IntersectionObserver {
  public readonly root: Element | Document | null = null
  public readonly rootMargin: string = '0px'
  public readonly thresholds: readonly number[] = [0]

  public constructor(private readonly callback: IntersectionObserverCallback) {}

  public disconnect(): void {
    // Intentionally empty mock.
  }

  public observe(target: Element): void {
    this.callback([{ isIntersecting: true, target } as IntersectionObserverEntry], this)
  }

  public takeRecords(): IntersectionObserverEntry[] {
    return []
  }

  public unobserve(): void {
    // Intentionally empty mock.
  }
}

expect.extend(toHaveNoViolations)

Object.defineProperty(globalThis, 'IntersectionObserver', {
  configurable: true,
  value: MockIntersectionObserver,
})

Object.defineProperty(globalThis, 'reportError', {
  configurable: true,
  value: vi.fn(),
})

afterEach((): void => {
  cleanup()
  vi.clearAllMocks()
})

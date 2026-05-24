import { Component, type ErrorInfo, type ReactNode } from 'react'

import type { ErrorBoundaryProps, ErrorBoundaryState } from '@/types'

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    globalThis.reportError(
      new Error(`Application render failure: ${error.message}`, { cause: info })
    )
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-obsidian-950 px-6 text-center text-frost-100">
          <section aria-labelledby="error-title" className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.36em] text-ember-300">
              Portfolio unavailable
            </p>
            <h1 id="error-title" className="mt-4 text-4xl font-semibold">
              Something failed while loading Roem&apos;s portfolio.
            </h1>
            <p className="mt-4 text-frost-300">
              Refresh the page or contact the sponsorship team directly by email.
            </p>
          </section>
        </main>
      )
    }

    return this.props.children
  }
}

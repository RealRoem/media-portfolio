export const LoadingFallback = (): React.JSX.Element => (
  <div
    aria-label="Loading portfolio section"
    className="flex min-h-40 items-center justify-center bg-obsidian-950 text-frost-300"
  >
    <span className="h-3 w-3 animate-ping rounded-full bg-ember-400" />
  </div>
)

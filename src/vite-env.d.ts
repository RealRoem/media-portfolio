/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPONSORSHIP_EMAIL?: string
  readonly VITE_DISCORD_URL?: string
  readonly VITE_YOUTUBE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

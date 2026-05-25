export const SITE_NAME = 'Real_Roem Creator Portfolio'
export const CREATOR_HANDLE = '@Roem'
export const CREATOR_NAME = 'Real_Roem'
export const DEFAULT_SPONSORSHIP_EMAIL = 'sponsor@realroem.com'
/* v8 ignore next */
const configuredSponsorshipEmail = import.meta.env.VITE_SPONSORSHIP_EMAIL
export const SPONSORSHIP_EMAIL =
  configuredSponsorshipEmail && !configuredSponsorshipEmail.includes('example.com')
    ? configuredSponsorshipEmail
    : DEFAULT_SPONSORSHIP_EMAIL
/* v8 ignore next */
export const DISCORD_URL = import.meta.env.VITE_DISCORD_URL ?? 'https://discord.gg/roem'
/* v8 ignore next */
export const YOUTUBE_URL = import.meta.env.VITE_YOUTUBE_URL ?? 'https://www.youtube.com/@Roem'
export const MAILTO_SPONSORSHIP_URL = `mailto:${SPONSORSHIP_EMAIL}?subject=Roem%20Sponsorship%20Inquiry`
export const YOUTUBE_CHANNEL_ID = 'UCY0HP5PO3Dg3YY4Hkb-sVuA'
export const CHANNEL_AVATAR_URL =
  'https://yt3.ggpht.com/4sMSPwwRegeLlFt8PRYYBuPSJbiQ4Y0_KswfX4f0ph6cW8_iSqSqb7rL-ZXMzDm-YWqBDCROTg=s240-c-k-c0x00ffffff-no-rj'

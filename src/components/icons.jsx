// Seven inline glyphs, in place of two Material-UI packages. They inherit
// colour and sizing from whatever they sit in.
const base = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export const GitHubIcon = () => (
  <svg {...base} fill='currentColor' stroke='none'>
    <path d='M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z' />
  </svg>
)

export const LinkedInIcon = () => (
  <svg {...base} fill='currentColor' stroke='none'>
    <path d='M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05A4.17 4.17 0 0 1 17.6 8.7c4 0 4.73 2.63 4.73 6.05V21h-4v-5.44c0-1.3-.02-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88V21h-3.95V9Z' />
  </svg>
)

export const MenuIcon = () => (
  <svg {...base}>
    <path d='M3 7h18M3 12h18M3 17h18' />
  </svg>
)

export const CloseIcon = () => (
  <svg {...base}>
    <path d='M6 6l12 12M18 6L6 18' />
  </svg>
)

export const MoonIcon = () => (
  <svg {...base}>
    <path d='M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z' />
  </svg>
)

export const SunIcon = () => (
  <svg {...base}>
    <circle cx='12' cy='12' r='4' />
    <path d='M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.5 1.5m11.2 11.2 1.5 1.5M19.1 4.9l-1.5 1.5M6.4 17.6l-1.5 1.5' />
  </svg>
)

export const ArrowUpIcon = () => (
  <svg {...base}>
    <path d='M12 19V5M5 12l7-7 7 7' />
  </svg>
)

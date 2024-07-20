import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['src/components/**/*.tsx', 'src/app/**/*.tsx'],
  theme: {
    colors: {
      purple: 'hsl(259, 100%, 65%)',
      'light-red': 'hsl(0, 100%, 67%)',
      white: 'hsl(0, 0%, 100%)',
      'off-white': 'hsl(0, 0%, 94%)',
      'light-grey': 'hsl(0, 0%, 86%)',
      'smokey-grey': 'hsl(0, 1%, 44%)',
      'off-black': 'hsl(0, 0%, 8%)',
    },
    fontSize: {
      sm: ['0.75rem', '1.125rem'],
      base: ['0.875rem', '1.25rem'],
      lg: ['1.25rem', '1.875rem'],
      xl: ['2rem', '3rem'],
      '2xl': ['3.5rem', '1.1'],
      '3xl': ['6.5rem', '1.1'],
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0em',
      wide: '0.01em',
      widest: '0.25em',
    },
    extend: {},
  },
  plugins: [],
}

export default config

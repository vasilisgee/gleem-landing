import { DM_Sans, Playfair_Display } from 'next/font/google'

// Configure Inter font to match exactly what Next.js optimizes for
export const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

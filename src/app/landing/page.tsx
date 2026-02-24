import type { Metadata } from 'next'
import { LandingPageContent } from './landing-page-content'

export const metadata: Metadata = {
  title: 'gleed-landing',
  description: 'Landing page template built with React, Next.js, TypeScript, and shadcn/ui.',
  keywords: ['landing page', 'react', 'nextjs', 'typescript', 'shadcn/ui', 'tailwind css'],
  openGraph: {
    title: 'gleed-landing',
    description: 'Landing page template built with React, Next.js, TypeScript, and shadcn/ui.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gleed-landing',
    description: 'Landing page template built with React, Next.js, TypeScript, and shadcn/ui.',
  },
}

export default function LandingPage() {
  return <LandingPageContent />
}

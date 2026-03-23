import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Does the Earth Dream? — A Whimsical Children\'s Picture Book',
  description: 'A playful, poetic children\'s picture book that invites young readers to imagine our planet as a dreaming, feeling being.',
  keywords: ['children book', 'picture book', 'earth', 'dream', 'bedtime story', 'nature', 'empathy'],
  openGraph: {
    title: 'Does the Earth Dream?',
    description: 'A poetic journey into the dreaming heart of our planet.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

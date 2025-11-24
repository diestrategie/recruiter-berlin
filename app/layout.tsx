import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://recruiter.berlin'),
  title:
    'recruiter.berlin – Premium-Domain für Recruiting, Headhunting & Personalberatung in Berlin',
  description:
    'recruiter.berlin – Premium-Domain für Recruiting, Headhunting & Personalberatung in Berlin. Ideal für HR-Agenturen, Personalberatungen, Headhunter & HR-Startups.',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'recruiter.berlin – Premium-Domain für Recruiting, Headhunting & Personalberatung in Berlin',
    description:
      'Sichere dir recruiter.berlin als starke Marke für Recruiting, Headhunting & HR in Berlin – perfekt für Personalberatung, HR-Agenturen & HR-Startups.',
    url: 'https://recruiter.berlin',
    siteName: 'recruiter.berlin',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560930950-5cc20e80e392?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Berlin-Skyline – recruiter.berlin Premium-Domain für Recruiting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'recruiter.berlin – Premium-Domain für Recruiting & Headhunting in Berlin',
    description:
      'Premium-Domain für Recruiting, Headhunting & Personalberatung in Berlin. Ideal für HR-Agenturen, Headhunter & HR-Startups.',
    images: [
      'https://images.unsplash.com/photo-1560930950-5cc20e80e392?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

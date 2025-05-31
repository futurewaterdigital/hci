import React from 'react'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'

export const metadata = {
  title: 'Foot and Ankle Surgery',
  description: 'Healthcare International.',
  metadataBase: new URL('https://healthcareinternational.in/'),
  openGraph: {
    url: 'https://healthcareinternational.in/',
    title: 'Healthcare International',
    description: 'Healthcare International',
    images: [
      {
        url: 'images/homeBanner.jpg',
        width: 800,
        height: 600,
        alt: 'Healthcare International',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
    other: {
      rel: 'manifest',
      url: '/favicon_io/site.webmanifest',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

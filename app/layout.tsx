import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Healthcare International',
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
    icon: 'favicon_io/favicon-32x32.png',
    shortcut: 'favicon_io/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css"
          rel="stylesheet"
        />
        <Script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></Script>
        {children}
      </body>
    </html>
  )
}

// layout.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'

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
    icon: '/favicon_io/favicon-32x32.png',
    shortcut: '/favicon_io/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <ScrollToTop />
        <Script id="scroll-to-top">
          {`
            if (typeof window !== 'undefined') {
              window.history.scrollRestoration = 'manual';
              window.onbeforeunload = function () {
                window.scrollTo(0, 0);
              };
            }
          `}
        </Script>
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

// layout.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import ScrollHandler from '@/components/ScrollHandler';
import React, { Suspense } from 'react';

// layout.tsx

export const metadata: Metadata = {
  title: 'Healthcare International | Trusted Medical Tourism Services',
  description: 'Explore Healthcare International, your trusted partner for medical tourism, offering top-notch healthcare services across India. Connect with leading hospitals and expert doctors to access quality treatments tailored to your needs',
  metadataBase: new URL('https://healthcareinternational.in/'),
  openGraph: {
    url: 'https://healthcareinternational.in/',
    title: 'Healthcare International | Trusted Medical Tourism Services',
    description: 'Explore Healthcare International, your trusted partner for medical tourism, offering top-notch healthcare services across India. Connect with leading hospitals and expert doctors to access quality treatments tailored to your needs',
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
    other: [
      {
        rel: 'manifest',
        url: '/favicon_io/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        url: '/favicon_io/favicon.ico',
        color: '#5bbad5'
      }
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Healthcare International | Trusted Medical Tourism Services',
  },

}

// ✅ Separate export
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        {/* ✅ Google Tag Manager Script */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMXV7DNS');
          `}
        </Script>

        {/* Favicon & Meta */}
        <link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {/* ✅ GTM NoScript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMXV7DNS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <ScrollToTop />
        <Suspense fallback={<div></div>}>
          <ScrollHandler />
        </Suspense>
        <Script id="scroll-to-top">
          {`
            if (typeof window !== 'undefined') {
              window.history.scrollRestoration = 'manual';
              window.onbeforeunload = function () {
                if (!window.location.hash) {
                  window.scrollTo(0, 0);
                }
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

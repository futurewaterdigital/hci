import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Healthcare International',
  description: 'Healthcare International.',
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
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
        {children}
      </body>
    </html>
  )
}

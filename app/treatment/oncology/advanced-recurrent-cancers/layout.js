import React from 'react'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'

export const metadata = {
  title: 'Advanced & Recurrent Cancer Treatment in India | HCI',
  description:
    'Specialized treatment for advanced and recurrent cancers using cutting-edge therapies and personalized approaches. Expert care for complex cancer cases.',
  keywords:
    'advanced cancer treatment, recurrent cancer, cancer treatment India, metastatic cancer, complex cancer cases, targeted therapy, immunotherapy',
  openGraph: {
    title: 'Advanced & Recurrent Cancer Treatment in India | HCI',
    description:
      'Specialized treatment for advanced and recurrent cancers using cutting-edge therapies and personalized approaches. Expert care for complex cancer cases.',
    url: 'https://hci.care/treatment/oncology/advanced-recurrent-cancers',
    type: 'website',
  },
  twitter: {
    title: 'Advanced & Recurrent Cancer Treatment in India | HCI',
    description:
      'Specialized treatment for advanced and recurrent cancers using cutting-edge therapies and personalized approaches. Expert care for complex cancer cases.',
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

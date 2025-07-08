import React from 'react'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'

export const metadata = {
  title: 'Gynecological Cancers Treatment in India | HCI',
  description:
    'Get comprehensive treatment for gynecological cancers including endometrial, ovarian, and cervical cancers. Expert care with advanced diagnostic and therapeutic options.',
  keywords:
    'gynecological cancer treatment, endometrial cancer, ovarian cancer, cervical cancer, cancer treatment India, gynecologic oncology, women cancer care',
  openGraph: {
    title: 'Gynecological Cancers Treatment in India | HCI',
    description:
      'Get comprehensive treatment for gynecological cancers including endometrial, ovarian, and cervical cancers. Expert care with advanced diagnostic and therapeutic options.',
    url: 'https://hci.care/treatment/oncology/gynecological-cancers',
    type: 'website',
  },
  twitter: {
    title: 'Gynecological Cancers Treatment in India | HCI',
    description:
      'Get comprehensive treatment for gynecological cancers including endometrial, ovarian, and cervical cancers. Expert care with advanced diagnostic and therapeutic options.',
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

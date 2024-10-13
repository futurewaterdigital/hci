import React from 'react'
import Header from '../../components/Header/page'
import Banner from '../../components/ContactUs/Banner/page'
import ContactUs from '../../components/ContactUs/Contact/page'
import Footer from '../../components/Footer/page'

export const metadata = {
  title: 'Contact Us - Healthcare International',
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

export default function About() {
  return (
    <>
      <Header />
      <Banner />
      <ContactUs />
      <Footer />
    </>
  )
}

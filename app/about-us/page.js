import React from 'react'
import Header from '../../components/Header/page'
import Banner from '../../components/AboutUs/Banner/page'
import AboutUs from '../../components/AboutUs/About/page'
import WhoHCI from '../../components/AboutUs/HCI/page'
import Partnership from '../../components/AboutUs/Partnership/page'
import OurValue from '../../components/AboutUs/OurValues/page'
import EdgeHCI from '../../components/AboutUs/EdgeHCI/page'
import Footer from '../../components/Footer/page'

export const metadata = {
  title: 'About Us - Healthcare International',
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
      <AboutUs />
      <WhoHCI />
      <Partnership />
      <OurValue />
      <EdgeHCI />
      <Footer />
    </>
  )
}

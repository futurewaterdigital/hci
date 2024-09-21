import React from 'react'
import Header from '../../../components/Header/page'
import Banner from '../../../components/Networks/Banner/page'

import Footer from '../../../components/Footer/page'

export default function City({ params }) {
  return (
    <>
      <Header />
      {/* {params.slug} */}
      <Banner city={params.slug} />
      <Footer />
    </>
  )
}

import React from 'react'
import Header from '../components/Header/page'
import Banner from '../components/HomePage/Banner/page'
import Partners from '@/components/HomePage/Partners/Partners'
import WhoWeAre from '../components/HomePage/WhoWeAre/page'
import Network from '../components/HomePage/HCInetwork/pageScroll'
import Patients from '../components/HomePage/Patients/page'
import Testimonials from '../components/HomePage/Testimonials/page'
import Subscribe from '../components/HomePage/Subscribe/page'
import Blogs from '../components/HomePage/MedicalUpdates/page'
import Faqs from '../components/HomePage/Faqs/page'
// import Appointment from '../components/HomePage/Appointment/page'
import Footer from '../components/Footer/page'
import ConsultantFormHome from '../components/HomePage/ContactPage/ConsultantForm'
import PriceComparison from '../components/HomePage/PriceComparison/page'

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      {/* <Partners /> */}
      <PriceComparison />
      {/* <ConsultantFormHome /> */}
      <WhoWeAre />
      <Network />
      <Patients />
      <Testimonials />
      <Subscribe />
      <Blogs />
      <Faqs />
      
     
      <Footer /> 
    </main>
  )
}

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
import ConsultantForm from '../components/HomePage/ContactPage/ConsultantForm'

export default function Page() {
  return (
    <>
      <Header />
      <Banner />
      <Partners />
      <ConsultantForm />
      <WhoWeAre />
      <Network />
      <Patients />
      <Testimonials />
      <Subscribe />
      <Blogs />
      <Faqs /> 
      {/* <Appointment /> */}
      <Footer />
    </>
  )
}

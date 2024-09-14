import React from 'react'
import Banner from '../components/HomePage/Banner/page'
import ConsultantForm from '../components/HomePage/ContactPage/page'
import Header from '../components/Header/page'
import WhoWeAre from '../components/HomePage/WhoWeAre/page'
import Network from '../components/HomePage/HCInetwork/page'
import Patients from '../components/HomePage/Patients/page'
import Testimonials from '../components/HomePage/Testimonials/page'
import Subscribe from '../components/HomePage/Subscribe/page'
import Blogs from '../components/HomePage/Blogs/page'
import Faqs from '../components/HomePage/Faqs/page'
import Appointment from '../components/HomePage/Appointment/page'
import Footer from '../components/Footer/page'

export default function page() {
  return (
    <>
      <Header />
      <Banner />
      <ConsultantForm />
      <WhoWeAre />
      <Network />
      <Patients />
      <Testimonials />
      <Subscribe />
      <Blogs />
      <Faqs />
      <Appointment />
      <Footer />
    </>
  )
}

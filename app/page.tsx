import React from 'react'
import Script from 'next/script';
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is Healthcare International?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare International (HCI) is a global medical tourism platform, connecting patients with many leading hospitals and hundreds of  top clinicians across various countries. We provide personalized care, cutting-edge treatments, and comprehensive support, ensuring access to world-class healthcare and expertise for a transformative medical journey."
        }
      },{
        "@type": "Question",
        "name": "How do I choose the right doctor for my specific condition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is how you go about selecting  the right doctor for your condition. First, ensure their expertise in treating your condition. Check patient reviews and hospital affiliations as well. Then, it will also be worthwhile to seek a consultation with our medical team here at Healthcare International for recommendations bespoked to your individual healthcare needs."
        }
      },{
        "@type": "Question",
        "name": "What should I look for in a reputed hospital or clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When selecting a reputed hospital or clinic, consider the following factors:\\n\\nAccreditations by HCI: The hospital should be accredited by HCI or any other recognized medical boards or organizations.\\n\\nExpertise & Technology: Advanced medical technologies and specialists experienced in your condition are some of the things to look for.\\n\\nPatient Care & Reviews: Check patient reviews and ratings, the success rate of the treatment, and the quality of care provided.\\n\\nInternational Standards: Most of the hospitals affiliated with international medical organizations often show higher levels of standards in both care and safety."
        }
      },{
        "@type": "Question",
        "name": "How can I ensure I receive personalized care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For personalized care, ensure the health professional is patient-oriented in treatment matters. Ensure that the hospital or clinic you address has a care team that designs treatment according to your needs and medical history. At Healthcare International, we will be able to provide you with personalized consultations and refer you to specialists who are concerned with personalized treatment, ensuring that every aspect of your treatment is about you."
        }
      },{
        "@type": "Question",
        "name": "What are the options for managing the cost of High-Quality medical care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Managing the cost of high-quality medical care can be achieved through several options:\\n\\nInsurance Cover: Verify whether one's insurance covers treatments overseas or any particular procedure.\\n\\nPayment plans: Many hospitals will give you a flexible payment plan or financing.\\n\\nMedical Tourism Packages: View detailed packages that include travel, accommodation, and medical treatment costs.\\n\\nFinancial Aid: Most the institutions provide grants or an off-setting towards the cost of a variety of medical treatments. We at Healthcare International can help you find one and ensure that the best possible treatment is affordable."
        }
      }]
    }
    `
        }}
      />
      <Header />
      <Banner />
      <Partners />
      <PriceComparison />
      <ConsultantFormHome />
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

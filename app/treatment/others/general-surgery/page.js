// generalSurgery.js
import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'

import FlexBox from '@/components/cardiacComponents/FlexBox'
import ListBox from '@/components/cardiacComponents/ListBox'
import CTaButton from '@/components/cardiacComponents/CtaButton'

const data = {
  bannerImage: '/others/general-surgery.png',
  title: 'General Surgery',
  description: `Expert Care for Comprehensive Surgical Needs`,
  overview: `At Healthcare International (HCI), we understand that surgical interventions require expertise, precision, and compassionate care. Our network of experienced general surgeons provides comprehensive care for a wide range of conditions, ensuring optimal outcomes and a smooth recovery journey for every patient.`,
  sections: [
    {
      title: 'What is General Surgery?',
      content: `General surgery is a medical discipline that involves performing various surgical procedures to treat a wide range of conditions. Our general surgeons are skilled in diagnosing and treating conditions that require surgical intervention, ensuring the best possible outcomes for our patients.`,
      bgColor: 'bg-hciSecondary',
    },
    {
      title: 'Specialties in General Surgery',
      content: `HCI’s network of general surgeons is proficient in managing surgical procedures for a variety of conditions, including:`,
      bullets: [
        'Minimally invasive procedures',
        'Emergency surgical care',
        'Oncological surgery',
        'Hernia repair',
        'Gallbladder surgery',
      ],
      bgColor: 'bg-hciPrimary',
    },
  ],
  complications: [
    {
      heading: 'Potential Complications',
      aneurysmSymptoms: [
        { description: 'Hernias (inguinal, umbilical, and incisional)' },
        { description: 'Gallbladder issues, including gallstones' },
        { description: 'Appendicitis' },
        { description: 'Gastrointestinal conditions' },
        { description: 'Thyroid and parathyroid disorders' },
        {
          description:
            'Skin and soft tissue conditions, including cysts and abscesses',
        },
        { description: 'Benign and malignant tumors' },
      ],
    },
  ],
  benefits: [
    { title: 'Reduced pain and scarring' },
    { title: 'Faster recovery times' },
    { title: 'Shorter hospital stays' },
  ],
  contact: {
    title: 'Contact Us Today',
    head: 'Connect with HCI',
    content:
      'To learn more about our general surgery services and find the best surgical care in India for your needs.',
  },
}

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <Title title={data.title} />
        <H2
          title={data.description}
          className="text-start font-semibold text-xl"
        />
        <p className="font-light">{data.overview}</p>
        <FlexBox data={data} />
        <H2
          title="Conditions We Treat"
          className="text-2xl font-bold text-pink-600 mt-8 text-center"
        />

        <p className="text-center font-light">
          Our general surgery services encompass a broad range of conditions,
          including:
        </p>
        <DataLists data={data.complications} />
        <H2
          title="Why Choose General Surgery Through HCI?"
          className="text-2xl font-bold mb-4"
        />
        <p className="font-light">
          HCI&apos;s expert surgeons and specialists utilize advanced surgical
          techniques, including minimally invasive and robotic-assisted
          procedures. These techniques result in:
        </p>
        <ListBox data={data} />

        <CTaButton data={data} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default GeneralSurgery

// generalSurgery.js
import React from 'react'
import Banner from '@/components/Common/Banner'
import Image from 'next/image'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'

import FlexBox from '@/components/cardiacComponents/FlexBox'
import ListBox from '@/components/cardiacComponents/ListBox'
import CTaButton from '@/components/cardiacComponents/CtaButton'

const data = {
  bannerImage: '/others/plastic-surgery-banner.png',
  title: 'Aesthetic, Cosmetic, and Plastic Surgery',
  description: `Redefining Beauty and Confidence`,
  overview: `At Healthcare International (HCI), we recognize the power of aesthetic and reconstructive procedures in enhancing both appearance and quality of life. Our network of skilled surgeons combines expertise with advanced techniques to deliver exceptional results tailored to your unique needs, helping you look and feel your best.`,
  sections: [
    {
      title: 'What is Aesthetic, Cosmetic, and Plastic Surgery?',
      content: `Aesthetic, cosmetic, and plastic surgery encompass procedures aimed at enhancing physical appearance or restoring functionality and form following trauma, illness, or congenital conditions. These surgeries may focus on improving self-confidence, correcting abnormalities, or addressing specific aesthetic concerns.`,
      bgColor: 'bg-hciSecondary',
    },
    {
      title: 'Specialists in Aesthetic and Plastic Surgery',
      content: `HCI’s network includes leading cosmetic and plastic surgeons who provide personalized treatment plans. These specialists are experts in performing a wide range of procedures, blending artistry with precision to achieve natural and satisfying results.`,
      // bullets: [
      //   'Minimally invasive procedures',
      //   'Emergency surgical care',
      //   'Oncological surgery',
      //   'Hernia repair',
      //   'Gallbladder surgery',
      // ],
      bgColor: 'bg-hciPrimary',
    },
  ],
  complications: [
    {
      heading: 'Cosmetic Surgery',
      aneurysmSymptoms: [
        { description: 'Rhinoplasty (nose reshaping)' },
        { description: 'Facelifts and neck lifts' },
        { description: 'Liposuction' },
        { description: 'Tummy tuck (abdominoplasty)' },
        { description: 'Breast augmentation, reduction, or reconstruction' },
        { description: 'Eyelid surgery (blepharoplasty)' },
      ],
    },
  ],
  reconstructive: [
    {
      heading: 'Reconstructive Surgery',
      aneurysmSymptoms: [
        { description: 'Post-trauma reconstruction (burns, injuries)' },
        { description: 'Cleft lip and palate repair' },
        { description: 'Hand and microsurgery' },
        { description: ' Scar revision surgery' },
      ],
    },
  ],
  invasive: [
    {
      heading: 'Minimally Invasive and Non-Surgical Procedures',
      aneurysmSymptoms: [
        { description: 'Botox and dermal fillers' },
        { description: 'Chemical peels' },
        { description: 'Laser treatments for skin rejuvenation' },
        { description: 'Fat grafting and contouring' },
      ],
    },
  ],

  benefits: [
    {
      title: 'Customized Care:',
      desc: 'Every procedure is tailored to individual needs and expectations.',
    },
    {
      title: 'Expertise:',
      desc: 'Our surgeons have extensive experience in both cosmetic and reconstructive procedures.',
    },
    {
      title: 'State-of-the-art Facilities:',
      desc: 'Partner hospitals are equipped with the latest technology to ensure patient safety and comfort.',
    },
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
          className="text-start font-semibold text-2xl"
        />
        <p className="font-light">{data.overview}</p>
        <FlexBox data={data} />
        <H2
          title="Procedures We Offer"
          className="text-2xl font-semibold text-pink-600 mt-8 text-center"
        />
        <p className="text-center font-light">
          Our aesthetic, cosmetic, and plastic surgery services include:
        </p>
        <div className="grid lg:grid-cols-2 gap-4">
          <DataLists data={data.complications} />
          <div>
            <Image
              src="/others/plastic-surgery.png"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <DataLists data={data.reconstructive} />
          <DataLists data={data.invasive} />
        </div>

        <H2
          title="Why Choose Aesthetic and Plastic Surgery through HCI?"
          className="text-2xl font-semibold mb-4"
        />
        <p className="font-light">
          HCI’s partner hospitals and surgeons use cutting-edge technology and
          advanced techniques to deliver precise, safe, and effective outcomes.
          Here’s why patients trust us:
        </p>
        <ListBox data={data} />
        <div>
          <H2
            title="Comprehensive Care for Women’s Health"
            className="text-2xl font-semibold mb-4 text-center"
          />
          <p className="font-light">
            If you’re looking to enhance your appearance, correct physical
            imperfections, or recover your natural look after an injury or
            medical condition, our specialists can guide you through the
            process. Whether your goal is aesthetic improvement or functional
            restoration, HCI is here to support your journey.
          </p>
        </div>
        <div>
          <H2
            title="Committed to Your Transformation"
            className="text-2xl font-semibold mb-4 text-center"
          />
          <p className="font-light">
            At HCI, we prioritize patient satisfaction and safety. Our network
            of specialists works closely with you to understand your goals,
            provide clear information about procedures, and ensure a smooth
            recovery. With a focus on achieving natural results, we help you
            embrace the best version of yourself.
          </p>
        </div>
        <CTaButton data={data} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default GeneralSurgery

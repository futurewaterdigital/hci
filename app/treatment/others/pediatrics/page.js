// generalSurgery.js
import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'

// import FlexBox from '@/components/cardiacComponents/FlexBox'
// import ListBox from '@/components/cardiacComponents/ListBox'
// import CTaButton from '@/components/cardiacComponents/CtaButton'
// import Conclusion from '@/components/cardiacComponents/Conclusion'

const data = {
  bannerImage: '/others/pediatrics_banner.png',
  title: 'Pediatrics',
  description: ``,
  overview: ` <p class="text-lg text-center mb-6">
     At HCI, our pediatrics department is dedicated to providing compassionate, comprehensive healthcare for children from infancy through adolescence. We offer a wide range of services, from routine check-ups and vaccinations to the diagnosis and treatment of more complex pediatric conditions. Our team of experienced pediatricians, specialists, and nursing staff are committed to ensuring that every child receives personalized, expert care in a safe and nurturing environment.
    </p>
    <p class="text-lg text-center mb-6">
     We understand that children's healthcare requires a unique approach that is sensitive to their physical, emotional, and developmental needs. Whether managing chronic conditions, addressing acute illnesses, or supporting child development, we strive to create positive healthcare experiences for both the child and their family.
    </p>`,
  sections: [
    {
      title: 'What is organ donation and transplantation?',
      content: `Organ donation and transplantation is a surgical intervention aimed at replacing a failing organ with a healthy one from a donor. Donors may be individuals who have recently passed away and consented to donate their organs during their lifetime or whose families made the decision posthumously. Alternatively, living donors can contribute certain organs or tissues, such as a kidney or a part of their liver, without compromising their own health.
This life-saving procedure often offers a second chance to individuals in critical need, but the availability of suitable donor organs remains a significant challenge. Many patients face prolonged waits, underscoring the importance of organ donation.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      title: 'Why is organ donation important?',
      content: `Organ donation represents a significant medical breakthrough, giving hope to individuals of all ages suffering from life-threatening conditions. While solid organ transplants save lives, tissue donations can restore vital functions, such as sight and mobility. Despite the demand for organ transplants, the supply remains insufficient.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      title: 'What organs and tissues can be donated and transplanted?',
      content: `Organs that can be donated include the liver, kidneys, pancreas, heart, lungs, intestines, and uterus. Tissues such as corneas, bone marrow, skin, tendons, ligaments, cartilage, and blood vessels can also be donated. Living donors can offer one kidney, a portion of the liver, gestational tissues, and in rare cases, segments of the lungs or pancreas.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      title: 'Who can be an organ donor?',
      content: `Anyone from the patient’s family (a first degree relative like the father, mother, son,  daughter, sister or brother) regardless of age, has the potential to be an organ donor. Medical evaluations at the time of donation determine the suitability of organs and tissues. Living donors undergo a thorough assessment to ensure their safety and the viability of the organ being donated.`,
      bgColor: 'bg-hciPrimary text-white',
    },
  ],
  complications: [
    {
      heading: 'Our pediatric services also include:',
      aneurysmSymptoms: [
        {
          description:
            'Neonatal care and intensive care for premature or critically ill newborns.',
        },
        { description: 'Growth and development assessments.' },
        {
          description:
            'Management of childhood diseases and disorders, including asthma, diabetes, and infections.',
        },
        {
          description:
            'Nutritional guidance and support for optimal child development.',
        },
        {
          description:
            'Specialized care for children with complex medical needs, including genetic disorders and congenital conditions',
        },
      ],
    },
  ],
  services: [
    {
      heading: 'Transplant Services Offered',
      aneurysmSymptoms: [
        { description: 'Kidney transplantation' },
        { description: 'Liver transplantation' },
        { description: 'Heart transplantation' },
        { description: 'Lung transplantation' },
        { description: 'Pancreas transplantation' },
        { description: 'Intestinal transplantation' },
      ],
    },
  ],

  benefits: [
    {
      title: 'Directed Donation',
      desc: 'Donation to a specific recipient, often a family member or friend.',
    },
    {
      title: 'Paired Donation',
      desc: 'Swapping of organs between donor-recipient pairs to ensure compatibility.',
    },
    {
      title: 'Non-Directed Donation',
      desc: 'Anonymous donations to individuals in need, facilitated by transplant programs.',
    },
    {
      title: 'Tissue Donation',
      desc: 'Gestational tissues donated post-childbirth for medical use.',
    },
  ],
  additionalInfo: [
    {
      title: 'Why Choose HCI for Transplantation?',
      content: `HCI ensures ethical, safe, and efficient organ transplantation with a team of dedicated specialists and cutting-edge medical technology.`,
    },
    {
      title: 'Who Needs an Organ Transplant?',
      content: `Patients experiencing end-stage organ failure due to chronic illnesses, genetic conditions, or acute injuries may require transplantation.`,
      bullets: [
        'Chronic kidney disease (CKD)',
        'Liver cirrhosis and failure',
        'Heart failure',
        'Lung disease',
        'Type 1 diabetes requiring pancreas transplant',
      ],
    },
    {
      title: 'Post-Transplant Care and Recovery',
      content: `After a successful transplant, patients require ongoing monitoring, medication management, and lifestyle adjustments to ensure long-term health and organ function.`,
    },
  ],
  contact: {
    title: 'Contact Us Today',
    head: 'Take the First Step Towards Saving Lives',
    content:
      'Reach out to HCI for expert guidance on organ donation and transplantation. Our specialists are here to support you every step of the way.',
  },
  footerData: [
    {
      header: 'Conclusion',
      paragraph: `Organ donation and transplantation save countless lives each year. With advancements in medical science and expert care, HCI strives to make this life-saving process accessible and successful for all eligible patients.`,
    },
  ],
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
        <div
          dangerouslySetInnerHTML={{ __html: data.overview }}
          className="font-light "
        />
        <div>
          <DataLists data={data.complications} />
        </div>

        <p className="font-light">
          Our goal is to promote the overall well-being of children, ensuring
          they grow into healthy adults with the best possible start in life.
        </p>

        {/* <Conclusion data={data.footerData} /> */}
        {/* <CTaButton data={data} /> */}

        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default GeneralSurgery

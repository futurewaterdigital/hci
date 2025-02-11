import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/main-banner.png'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import BookButton from '@/components/cardiacComponents/BookButton'
import DataBoxes from '@/components/cardiacComponents/Box'
import Title from '@/components/cardiacComponents/Title'
import H2title from '@/components/cardiacComponents/H2'

function page() {
  const title = 'Angioplasty'
  const conditionsData = [
    {
      category: 'Atherectomy:',
      description: `Sometimes, the plaque is removed using a rotating catheter.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Brachytherapy:',
      description: `In rare cases, radiation therapy is used to treat scar tissue within the stent.`,
      bgColor: 'bg-hciPrimary text-white',
    },
  ]

  const angioplastyData = [
    {
      title: 'Why is Angioplasty needed?',
      description: 'Angioplasty is recommended for conditions such as:',
      list: [
        'Blocked coronary arteries causing chest pain or reduced blood flow',
        'Heart attack requiring immediate intervention',
        'Significant narrowing detected during coronary angiography',
      ],
    },
    {
      title: 'Risks associated with Angioplasty',
      description:
        'While generally safe, angioplasty carries some risks, including:',
      list: [
        'Bleeding or infection at the catheter insertion site',
        'Blood clots or damage to blood vessels',
        'Allergic reactions to the contrast dye',
        'Abnormal heart rhythms, heart attack, or stroke',
        'Kidney damage from the dye used',
      ],
    },
    {
      title: 'Preparing for Angioplasty',
      description: 'Preparation involves:',
      list: [
        'Informing your healthcare team about allergies, medications, or existing conditions',
        'Fasting for several hours before the procedure',
        'Stopping certain medications, if advised',
        'Ensuring arrangements for post-procedure transportation',
      ],
    },
    {
      title: 'What happens during Angioplasty?',
      description:
        'The procedure typically takes 1-2 hours, and most patients spend one night in the hospital for observation.',
      list: [
        "Sedation: You'll receive medication to help you relax but remain awake.",
        'Insertion: A catheter is inserted through a sheath into the blood vessel.',
        'Imaging and Inflation: Contrast dye is used to locate the blockage, and the balloon is inflated to open the artery.',
        'Stent Placement: A stent is deployed, if necessary, to maintain blood flow.',
      ],
    },
    {
      title: 'Recovery after Angioplasty',
      description: 'Post-procedure care includes:',
      list: [
        'Monitoring for bleeding or complications at the insertion site',
        'Avoiding strenuous activities or heavy lifting for a few days',
        'Taking prescribed antiplatelet medications to prevent blood clots',
        'Drinking plenty of fluids to flush out the contrast dye',
      ],
      extra:
        'Patients can usually resume normal activities within a week, but driving and heavy exertion should be avoided until cleared by the healthcare provider.',
    },
    {
      title: 'When to seek Medical Attention',
      description: 'Contact your healthcare team if you experience:',
      list: [
        'Fever, chills, or signs of infection',
        'Persistent bleeding or swelling at the insertion site',
        'Chest pain or other heart-related symptoms reactions to the contrast dye',
      ],
    },
  ]

  return (
    <>
      <Banner image={bannerImage} />
      {/* <!-- Content --> */}
      <div className="lg:container mx-auto mt-6 space-y-12">
        <Title title={title} />
        <p className="text-start font-light">
          Angioplasty, also known as{' '}
          <strong>percutaneous coronary intervention (PCI)</strong>, is a
          minimally invasive procedure designed to open blocked or narrowed
          coronary arteries caused by coronary artery disease (CAD). By
          restoring blood flow to the heart, it alleviates symptoms such as
          chest pain and reduces the risk of a heart attack. Angioplasty can be
          performed in emergency cases like heart attacks or scheduled as
          elective surgery for diagnosed heart conditions.
        </p>
        <H2title text="How is Angioplasty Performed?" />
        <div className="space-y-4">
          <p className="font-light">
            During angioplasty, a thin tube (catheter) with a small balloon at
            its tip is inserted into a blood vessel, usually in the groin or
            wrist. Using X-ray imaging called <strong>fluoroscopy</strong>, the
            catheter is guided to the blocked artery. The balloon is then
            inflated to push the plaque against the artery walls, creating more
            space for blood flow.
          </p>
          <p className="font-light">
            In most cases, a <strong>stent</strong> (a small, expandable metal
            mesh) is placed to keep the artery open and prevent re-narrowing.
            Stents may be coated with medication (
            <strong>drug-eluting stents</strong>) to minimize scar tissue
            formation or may be bare metal stents without medication.
          </p>
        </div>
        <div className="">
          <DataBoxes
            title="Additional Techniques"
            titleCss="font-semibold text-xl text-center"
            data={conditionsData}
            text=""
            header=""
            myclass="grid lg:grid-cols-2 font-light"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {angioplastyData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-hciSecondary p-4 rounded shadow-lg"
            >
              <h3 className="font-bold text-hciPrimary mb-2">{item.title}</h3>
              <p className="text-hciSecondary py-1 font-semibold">
                {item.description}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {item.list.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              {item.extra && <p className="pt-2">{item.extra}</p>}
            </div>
          ))}
        </div>
        <FooterLinks head={title} />
        <BookButton />
      </div>
    </>
  )
}

export default page

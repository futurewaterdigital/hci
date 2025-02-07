import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/DeepVeinThrombosis.png'
import DataBoxes from '@/components/cardiacComponents/Box'
import SingleLink from '@/components/cardiacComponents/SinlgeLink'
import DataSurgery from '@/components/cardiacComponents/Button'

import TreatmentBox from '@/components/cardiacComponents/TreatmentBox'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import BookButton from '@/components/cardiacComponents/BookButton'
import Conclusion from '@/components/cardiacComponents/Conclusion'

const conditionsData = [
  {
    category: '',
    description: `<strong>Genetic Predisposition</strong> (family history of clots)`,
    bgColor: 'bg-hciLightBlue text-hciPrimary',
  },
  {
    category: '',
    description: `<strong>Obesity or older age</strong> (over 60 years)`,
    bgColor: 'bg-hciLightBlue text-hciPrimary',
  },
  {
    category: '',
    description:
      '<strong>Prolonged Immobility</strong> (long travel, surgery recovery, bed rest)',
    bgColor: 'bg-hciLightBlue text-hciPrimary',
  },
  {
    category: '',
    description: `<strong>Use of Hormonal Therapies</strong> such as birth control pills`,
    bgColor: 'bg-hciLightBlue text-hciPrimary',
  },
  {
    category: '',
    description: `<strong>Trauma</strong> or injury to veins`,
    bgColor: 'bg-hciLightBlue text-hciPrimary',
  },
  {
    category: '',
    description: `<strong>Smoking</strong> or tobacco use`,
    bgColor: 'bg-hciLightBlue text-hciPrimary',
  },
  {
    category: '',
    description: `<strong>Pregnancy</strong> and <strong>postpartum period</strong>`,
    bgColor: 'bg-hciLightBlue text-hciPrimary',
  },
  {
    category: '',
    description:
      'Autoimmune Conditions like <strong>lupus</strong> or <strong>inflammatory bowel disease</strong>',
    bgColor: 'bg-hciLightBlue text-hciPrimary',
  },
  {
    category: '',
    description: `<strong>Cancer</strong> or <strong>chemotherapy treatments</strong>`,
    bgColor: 'bg-hciLightBlue text-hciPrimary',
  },
  {
    category: '',
    description: `<strong>COVID-19</strong> infection`,
    bgColor: 'bg-hciLightBlue text-hciPrimary',
  },
]

const symptomsDVT = [
  {
    category: '',
    description: `Swelling in the affected leg or arm`,
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: '',
    description: `Pain or tenderness when standing or walking`,
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: '',
    description: `Warmth in the affected area`,
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: '',
    description: `Redness or discoloration of the skin`,
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: '',
    description: `Enlarged surface veins`,
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: '',
    description: `If the clot affects other areas, such as the abdomen or brain, it can cause abdominal pain, severe headaches, or seizures.`,
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: '',
    description: `<p><strong>When a clot moves to the lungs, signs of pulmonary embolism (PE) can develop, including:</strong></p>
    <ul class="list-disc list-inside">
    <li>Chest pain and shortness of breath</li>
    <li>Lightheadedness or fainting</li>
    <li>Coughing up blood</li>
    </ul>
    `,
    bgColor: 'bg-hciSecondary text-white',
  },
]
const diagnosisDVT = [
  {
    category: '',
    description: `<strong>Duplex ultrasound:</strong> Non-invasive test to detect blood clots in veins using sound waves.`,
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: `<strong>Venography:</strong> An invasive test using dye injection to visualize vein blockages.`,
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: `<strong>MRI/MRV:</strong> Offers detailed images of veins and organs for further diagnosis.`,
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: `<strong>CT Scan:</strong> Often used to identify clots in deep veins or to detect pulmonary embolism.`,
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: `If a clotting disorder is suspected, blood tests may also be conducted.`,
    bgColor: 'bg-hciYellow',
  },
]
const surgeryData = [
  {
    title: '',
    description: `<strong>Stay active:</strong> Avoid sitting or lying down for long periods.`,
  },
  {
    title: '',
    description: `<strong>Use compression stockings</strong> after surgery if recommended.`,
  },
  {
    title: '',
    description: `<strong>Quit smoking</strong> and manage conditions like obesity and hypertension.`,
  },
  {
    title: '',
    description: `<strong>Hydrate</strong> during long flights or car rides.`,
  },
  {
    title: '',
    description: `<strong>Take medications as prescribed</strong> to prevent clotting.`,
  },
]

const treatmentData = [
  {
    heading: 'Anticoagulants (blood thinners):',
    aneurysmSymptoms: [
      {
        title: '',
        description:
          'These medications prevent further clotting and help the body break down existing clots over time. Common examples include warfarin, heparin, and oral Xa inhibitors.',
      },

      {
        title: '',
        description:
          'Duration of anticoagulation depends on individual risk factors, typically ranging from 3-6 months or indefinitely in some cases.',
      },
    ],
  },
  {
    heading: 'Compression Stockings:',
    aneurysmSymptoms: [
      {
        title: '',
        description:
          'Worn to reduce swelling and improve blood circulation. These help prevent the recurrence of DVT and alleviate symptoms like pain and leg heaviness.',
      },
    ],
  },
  {
    heading: 'Inferior Vena Cava (IVC) Filter:',
    aneurysmSymptoms: [
      {
        title: '',
        description:
          'A filter may be placed in the large vein (vena cava) if blood thinners cannot be used or are ineffective. This prevents clots from reaching the lungs.',
      },
    ],
  },
  {
    heading: 'Lifestyle Recommendations:',
    aneurysmSymptoms: [
      {
        title: '',
        description: 'Elevating legs periodically to reduce swelling',
      },
      {
        title: '',
        description: 'Wearing compression stockings daily',
      },
      {
        title: '',
        description:
          'Staying hydrated and avoiding activities that increase the risk of injury',
      },
      {
        title: '',
        description:
          'Moving frequently during long journeys to prevent clot formation',
      },
    ],
  },
  {
    heading: 'Hospitalization or Outpatient Care:',
    aneurysmSymptoms: [
      {
        title: '',
        description:
          'Treatment may vary based on the severity of DVT. Some patients require hospital care, while others are treated at home with blood thinners.',
      },
    ],
  },
]
const footerData = [
  {
    header: 'Conclusion',
    paragraph: `
      DVT is a manageable condition if timely diagnosis and proper treatment.
      However, delayed or inadequate treatment can lead to complications,
      including pulmonary embolism or post-thrombotic syndrome. By adhering to
      treatment plans, using preventive strategies, and maintaining regular
      follow-ups with healthcare providers, individuals can minimize the risks
      and improve their quality of life.`,
  },
]

function page() {
  return (
    <div>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      <div className="container mx-auto p-6">
        <section className="relative py-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-pink-500">
              Deep Vein Thrombosis (DVT)
            </h1>
          </div>
        </section>
      </div>
      <section className="container mx-auto px-6">
        <p className="mt-4 text-gray-700">
          Deep Vein Thrombosis (DVT) is a medical condition where a blood clot
          (thrombus) forms in a vein located deep inside the body, typically in
          the legs, thighs, or pelvis. However, it can also occur in other areas
          such as the arms, brain, or abdominal organs. When blood flow is
          sluggish or there is damage, clots may form obstructing blood
          circulation. While DVT cases may not always be life-threatening, it
          can result in severe issues if the clot travels to the lungs, causing
          pulmonary embolism (PE), a potentially fatal condition.
        </p>
        <p>
          <strong>Post-thrombotic syndrome</strong> may develop in some
          individuals, causing chronic pain and swelling and leading to skin
          ulcers or other skin damage to veins.
        </p>
        <div className="py-4">
          <h2 className="text-lg font-semibold">
            Key characteristics of DVT include:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Chronic Swelling and Pain</li>
            <li>Skin Discoloration or Pigmentation Changes</li>
            <li>Development of Venous Ulcers</li>
          </ul>
        </div>

        <div>
          <DataBoxes
            title="Causes"
            data={conditionsData}
            text="Several factors increase the risk of developing DVT, including:"
            header=""
            myclass="grid grid-cols-2"
          />
        </div>
        <SingleLink head="Deep Vein Thrombosis (DVT)" />
      </section>

      <section className="container mx-auto py-8">
        <div className="grid grid-cols-2 gap-4">
          <DataBoxes
            title="Symptoms"
            data={symptomsDVT}
            text="Many people with DVT do not experience symptoms. However, when present, symptoms may include:"
            header=""
            myclass="grid grid-cols-1"
          />
          <DataBoxes
            title="Diagnosis"
            data={diagnosisDVT}
            text="A healthcare provider will conduct a physical exam, review medical history, and use imaging tests to diagnose DVT. The primary diagnostic tests include:"
            header=""
            myclass="grid grid-cols-1"
          />
        </div>
      </section>
      <section className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Prevention</h2>
        <p className="text-center">To reduce the risk of DVT:</p>
        <DataSurgery data={surgeryData} />
      </section>
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Treatment And Management
        </h2>
        {/* <DataLists data={heartEvaluationTests} /> */}
        <TreatmentBox
          data={treatmentData}
          heading="The primary goals of DVT treatment are to prevent the clot from
            getting bigger, avoid clot migration to the lungs, and reduce the
            risk of future clots. Treatments include:"
        />
      </section>
      <section className="container mx-auto py-8">
        <Conclusion data={footerData} />
        <FooterLinks head="Deep Vein Thrombosis (DVT)" />
        <BookButton />
      </section>
    </div>
  )
}

export default page

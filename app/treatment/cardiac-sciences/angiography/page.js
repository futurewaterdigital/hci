import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/angiography.png'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import DataBoxes from '@/components/cardiacComponents/Box'
import DataLists from '@/components/cardiacComponents/Bullets'
import DataSurgery from '@/components/cardiacComponents/Button'
import BookButton from '@/components/cardiacComponents/BookButton'

const symptomsData = [
  {
    category: 'Chest Pain or Pressure (Angina)',
    description: 'Indicative of coronary artery issues.',
    bgColor: 'bg-hciPrimary text-white',
  },

  {
    category: 'Shortness of Breath',
    description: 'May point to heart or lung-related vascular problems.',
    bgColor: 'bg-hciPrimary text-white',
  },

  {
    category: 'Pain or Cramping in Legs or Arms',
    description: 'Especially during physical activity (claudication).',
    bgColor: 'bg-hciPrimary text-white',
  },

  {
    category: 'Dizziness or Fainting Spells',
    description: 'Could indicate insufficient blood supply to the brain.',
    bgColor: 'bg-hciPrimary text-white',
  },
  {
    category: 'Swelling or Numbness in Limbs',
    description: 'May suggest blockages or vascular damage.',
    bgColor: 'bg-hciPrimary text-white',
  },
  {
    category: 'Unexplained Fatigue',
    description: 'Often linked to poor blood circulation.',
    bgColor: 'bg-hciPrimary text-white',
  },
]
const diagnosisData = [
  {
    category: 'Patient Evaluation',
    description:
      'Reviewing medical history, symptoms, and preliminary test results such as ECG, echocardiography, or stress tests.',
    bgColor: 'bg-hciSecondary text-white',
  },

  {
    category: 'Imaging Technology',
    description:
      'Using X-rays, CT scans, or MRI combined with injected contrast dye to observe blood flow and detect obstructions.',
    bgColor: 'bg-hciSecondary text-white',
  },

  {
    category: 'Blood Tests',
    description:
      'To ensure kidney function and blood clotting ability before the procedure.',
    bgColor: 'bg-hciSecondary text-white',
  },
]

const conditionsData = [
  {
    category: 'Coronary Artery Disease (CAD):',
    description:
      'Narrowing or blockage of arteries supplying blood to the heart.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: 'Peripheral Artery Disease (PAD):',
    description: 'Blockage in the blood vessels of the legs or arms.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: 'Aneurysms:',
    description: 'Weakening and bulging of artery walls.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: 'Congenital Abnormalities:',
    description: 'Structural defects in blood vessels present from birth.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: 'Blood Clots:',
    description: 'Obstructions in blood vessels that may impede blood flow.',
    bgColor: 'bg-hciYellow',
  },
]

const treatmentOptions = [
  {
    heading: '',
    aneurysmSymptoms: [
      {
        title: 'Angioplasty',
        description:
          'A balloon is inserted and inflated to open up narrowed or blocked arteries.',
      },
      {
        title: 'Stent Placement',
        description:
          'A tiny mesh tube is inserted to keep the artery open after angioplasty.',
      },
      {
        title: 'Medication',
        description:
          'Depending on findings, your provider may prescribe blood thinners, cholesterol-lowering drugs, or medications to improve blood flow.',
      },
      {
        title: 'Lifestyle Modifications',
        description:
          'Dietary changes, exercise, and smoking cessation are often recommended to improve vascular health.',
      },
      {
        title: 'Surgical Intervention',
        description:
          'In severe cases, procedures like bypass surgery may be necessary to restore blood flow.',
      },
    ],
  },
]

const surgeryData = [
  {
    title: 'Coronary Artery Disease',
    description: '(Narrowing or blockages in heart arteries.)',
  },
  {
    title: 'Peripheral Artery Disease',
    description: '(Blockages in leg arteries.)',
  },
  {
    title: 'Blood Clots',
    description: '',
  },
  {
    title: 'Aneurysms',
    description: '(Weakened arterial walls that can bulge and rupture.)',
  },
]

function page() {
  return (
    <>
      <Banner image={bannerImage} />
      <div className="container mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-pink-500">Angiography</h1>
        <p className="text-center">
          An angiogram is a minimally invasive diagnostic procedure used to
          assess the condition of blood vessels and identify blockages or
          abnormalities. By injecting a contrast material into the bloodstream,
          healthcare providers can observe blood flow through an X-ray or by
          using advanced imaging techniques.
        </p>

        {/* <!-- Content --> */}
        <div className="container mx-auto p-6">
          <section className="relative py-8">
            <div className="absolute inset-0 flex items-center justify-center"></div>
          </section>
          {/* <!-- Content Section --> */}
          <section className="container mx-auto px-6">
            <p className="mb-8">
              Angiograms are instrumental in diagnosing and planning treatment
              for conditions such as:
            </p>
            <div className="mb-10">
              <DataSurgery data={surgeryData} />
            </div>
            <DataBoxes
              title="Causes"
              data={conditionsData}
              text="Angiography is typically performed to investigate and address issues caused by:"
              header=""
              myclass="grid grid-cols-2"
            />
            <div className="grid grid-cols-2 gap-4">
              <DataBoxes
                title="Symptoms"
                text="Healthcare providers may recommend angiography if you experience symptoms that suggest blood vessel problems, including:"
                header=""
                data={symptomsData}
                myclass="grid grid-cols-1"
              />
              <DataBoxes
                title="Diagnosis"
                text="Angiography is a definitive diagnostic tool used to identify blockages, abnormalities, or damages in blood vessels. The procedure includes:"
                header=""
                data={diagnosisData}
                myclass="grid grid-cols-1"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">Treatment</h2>
            <p className="mb-8">
              Angiography not only diagnoses conditions but also facilitates
              treatment:
            </p>
            <DataLists data={treatmentOptions} />

            <p className="mb-8">
              Angiography is a vital diagnostic and interventional procedure
              that plays a critical role in identifying and treating blood
              vessel abnormalities. By providing detailed imaging of blood flow,
              it helps healthcare providers pinpoint issues such as blockages,
              aneurysms, or clots and develop effective treatment plans. Whether
              through minimally invasive techniques like angioplasty and stent
              placement or by offering insights for surgical interventions,
              angiography ensures better outcomes for patients. With
              advancements in medical technology, this procedure has become
              safer and more precise, making it an indispensable tool in modern
              cardiovascular and vascular care.
            </p>

            <FooterLinks head="Angiography" />
            <BookButton />
          </section>
        </div>
      </div>
    </>
  )
}

export default page

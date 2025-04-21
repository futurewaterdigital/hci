import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/CongenitalHeartDisease.png'
import DataBoxes from '@/components/cardiacComponents/Box'
import DataLists from '@/components/cardiacComponents/Bullets'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import BookButton from '@/components/cardiacComponents/BookButton'
import KnowMore from '@/components/ui/KnowMore'    
import DataSurgery from '@/components/cardiacComponents/Button'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import H1 from '@/components/ui/h1'
import H2 from '@/components/ui/h2'




const title = 'Congenital Heart Disease (CHD)'
const symptomsData = [
  {
    category: 'Cyanosis',
    description: 'Bluish tint to skin, lips, or nails due to low oxygen.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: 'Heart murmurs',
    description: 'Abnormal heart sounds detected during examination.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: 'Rapid breathing or difficulty breathing',
    description: 'During activity.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: 'Poor feeding and growth',
    description: 'In infants.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: 'Fatigue',
    description: 'And shortness of breath with physical activity.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: 'Swelling',
    description: 'In the legs, abdomen, or around the eyes.',
    bgColor: 'bg-hciYellow',
  },
]
const heartEvaluationTests = [
  {
    heading: '',
    aneurysmSymptoms: [
      {
        title: 'Fetal Echocardiogram',
        description: 'Detects heart abnormalities in the womb.',
      },

      {
        title: 'Physical Examination',
        description: 'Listening for murmurs or abnormal heart rhythms.',
      },

      {
        title: 'Pulse Oximetry',
        description: 'Measures oxygen levels in the blood.',
      },

      {
        title: 'Chest X-ray',
        description: 'Provides images of the heart and surrounding structure.',
      },
    ],
  },
]
const heartEvaluation = [
  {
    heading: '',
    aneurysmSymptoms: [
      {
        title: 'Electrocardiogram (ECG)',
        description: "Records the heart's electrical activity.",
      },
      {
        title: 'Echocardiogram',
        description: 'Uses ultrasound to create detailed images of the heart.',
      },
      {
        title: 'Heart Catheterization',
        description: 'Involves inserting a thin tube to assess heart function.',
      },
      {
        title: 'MRI',
        description: 'Produces detailed images to identify heart defects.',
      },
    ],
  },
]
const heartTreatmentOptions = [
  {
    category: 'Medications',
    description:
      'To regulate heart function, lower blood pressure, or prevent blood clots.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Surgery',
    description:
      'To repair structural defects or improve blood flow. In some cases, a heart transplant may be necessary.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Catheter Procedures',
    description:
      'Non-surgical techniques to close holes or widen blood vessels.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Oxygen Therapy',
    description: 'Increases oxygen levels in the blood.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Prostaglandin E1',
    description: 'Keeps certain heart passages open in newborns until surgery.',
    bgColor: 'bg-hciSecondary text-white',
  },
]
const surgeryData = [
  {
    title: 'Genetic factors',
    description:
      'Inherited mutations or chromosomal abnormalities, such as Down Syndrome.',
    minHeight: 'min-h-[100px] text-center text-black',
  },
  {
    title: 'Maternal health',
    description:
      'Conditions like diabetes, viral infections (e.g., rubella), or phenylketonuria.',
    minHeight: 'min-h-[100px] text-center',
  },
  {
    title: 'Medications',
    description:
      'Exposure to certain drugs for high blood pressure, cholesterol, or acne during pregnancy.',
    minHeight: 'min-h-[100px] text-center',
  },
  {
    title: 'Lifestyle factors',
    description:
      'Smoking, alcohol consumption, or exposure to secondhand smoke.',
    minHeight: 'min-h-[100px] text-center',
  },
  {
    title: 'Environmental influences',
    description: 'Exposure to toxins during pregnancy.',
    minHeight: 'min-h-[100px] text-center',
  },
]
const footerData = [
  {
    header: 'Conclusion',
    paragraph: `
       Congenital heart disease is a lifelong condition, but advances in
            medical care have significantly improved survival and quality of
            life for those affected. While CHD cannot be entirely prevented,
            expecting mothers can reduce risks by avoiding harmful substances,
            managing chronic conditions, and following medical advice during
            pregnancy. Regular check-ups with a cardiologist are essential to
            monitor the condition and prevent complications. With appropriate
            care, many people with CHD live fulfilling lives.`,
  },
]

function page() {
  return (
    <div>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      <main className="lg:container mx-auto py-8 px-6">
        <section className="space-y-4">
          <H1 title={title} />
          <p className="text-gray-700 mb-6 font-light">
            Congenital Heart Disease (CHD) refers to structural abnormalities in
            the heart that are present at birth. These defects disrupt the
            normal flow of blood through the heart, ranging from minor
            conditions that may not show symptoms to severe cases requiring
            immediate medical attention. Recent advancements in medical care
            allow many individuals with CHD to live healthy lives into
            adulthood, with some requiring treatment later in life.
          </p>
          <p className="text-gray-700 mb-6 font-light">
            CHD can affect various parts of the heart, including walls, valves,
            and arteries. The two primary categories of CHD are <strong className='text-black font-medium'>cyanotic CHD </strong>
             (low oxygen levels in the blood) and <strong className='text-black font-medium'>acyanotic CHD</strong> (where oxygen
            levels remain normal, but the heart&apos;s function is impaired).
          </p>
        </section>
        <div className="space-y-4 py-4">
          <h2 className='font-medium text-2xl text-center'>Causes</h2>
          <p className='font-light'>CHD occurs due to improper development of the fetal heart during pregnancy. While the exact causes are often unknown, several factors can increase the risk:</p>
          <DataSurgery data={surgeryData} />
          <KnowMore title={title} />
        </div>

        <div className="space-y-4">
          <DataBoxes
            title="Symptoms"
            data={symptomsData}
            text="Symptoms of CHD vary depending on the type and severity of the condition. Some defects present symptoms at birth, while others may become evident later in childhood or adulthood. Common symptoms include:"
            header=""
            myclass="grid lg:grid-cols-2"
            textCss="font-light py-4"
            titleCss="text-2xl font-medium text-center mt-8"
          />
          <KnowMore title={title} />
        </div>
        <div className="py-8">
          <H2 title="Diagnosis" className="text-center mb-4 text-2xl font-medium"/>
          <p className="mb-2 font-light">
            Healthcare providers diagnose CHD using various methods during
            pregnancy, infancy, or later in life:
          </p>

          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <DataLists data={heartEvaluationTests} />
            </div>
            <div>
              <DataLists data={heartEvaluation} />
            </div>
          </div>
          <KnowMore title={title} />
        </div>
        <div>
          <DataBoxes
            title="Treatment"
            textCss="font-light py-4"
            titleCss="text-2xl font-medium text-center mt-8"
            data={heartTreatmentOptions}
            text="Treatment depends on the type and severity of CHD. Options include:"
            header=""
            myclass="grid lg:grid-cols-2"
          />
          <p className="font-light py-4">Complications from treatment may include bleeding, infection, arrhythmias, or scar tissue formation. Recovery time varies based on the procedure, with some patients needing several days to months for full recovery.</p>
        </div>
        <div className="container mx-auto py-8 space-y-6">
          <Conclusion data={footerData} />
          <FooterLinks head={title} />
          <BookButton />
        </div>
      </main>
    </div>
  )
}

export default page

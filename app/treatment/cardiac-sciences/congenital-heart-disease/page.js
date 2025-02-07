import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/CongenitalHeartDisease.png'
import DataBoxes from '@/components/cardiacComponents/Box'
import DataLists from '@/components/cardiacComponents/Bullets'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import BookButton from '@/components/cardiacComponents/BookButton'
import SingleLink from '@/components/cardiacComponents/SinlgeLink'
import DataSurgery from '@/components/cardiacComponents/Button'

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
  },
  {
    title: 'Maternal health',
    description:
      'Conditions like diabetes, viral infections (e.g., rubella), or phenylketonuria.',
  },
  {
    title: 'Medications',
    description:
      'Exposure to certain drugs for high blood pressure, cholesterol, or acne during pregnancy.',
  },
  {
    title: 'Lifestyle factors',
    description:
      'Smoking, alcohol consumption, or exposure to secondhand smoke.',
  },
  {
    title: 'Environmental influences',
    description: 'Exposure to toxins during pregnancy.',
  },
]

function page() {
  return (
    <div>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      <main className="container mx-auto py-8 px-6">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-pink-600 mb-4">
            Congenital Heart Disease (CHD)
          </h1>
          <p className="text-gray-700 mb-6">
            Congenital Heart Disease (CHD) refers to structural abnormalities in
            the heart that are present at birth. These defects disrupt the
            normal flow of blood through the heart, ranging from minor
            conditions that may not show symptoms to severe cases requiring
            immediate medical attention. Recent advancements in medical care
            allow many individuals with CHD to live healthy lives into
            adulthood, with some requiring treatment later in life.
          </p>
          <p className="text-gray-700 mb-6">
            CHD can affect various parts of the heart, including walls, valves,
            and arteries. The two primary categories of CHD are cyanotic CHD
            (low oxygen levels in the blood) and acyanotic CHD (where oxygen
            levels remain normal, but the heart&apos;s function is impaired).
          </p>
        </section>
        <div className="space-y-4 py-12">
          <DataSurgery data={surgeryData} />
          <SingleLink head="Congenital Heart Disease (CHD)" />
        </div>
        {/* <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Causes</h2>
          <p className="text-gray-700 mb-6">
            CHD occurs due to improper development of the fetal heart during
            pregnancy. While the exact causes are often unknown, several factors
            can increase the risk:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-pink-100 p-4 rounded-lg">
              <h3 className="text-pink-600 font-bold mb-2">Genetic factors:</h3>
              <p className="text-gray-700">
                Inherited mutations or chromosomal abnormalities, such as Down
                Syndrome.
              </p>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg">
              <h3 className="text-pink-600 font-bold mb-2">Maternal health:</h3>
              <p className="text-gray-700">
                Conditions like diabetes, viral infections (e.g., rubella), or
                phenylketonuria.
              </p>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg">
              <h3 className="text-pink-600 font-bold mb-2">Medications:</h3>
              <p className="text-gray-700">
                Exposure to certain drugs for high blood pressure, cholesterol,
                or acne during pregnancy.
              </p>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg">
              <h3 className="text-pink-600 font-bold mb-2">
                Lifestyle factors:
              </h3>
              <p className="text-gray-700">
                Smoking, alcohol consumption, or exposure to secondhand smoke.
              </p>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg">
              <h3 className="text-pink-600 font-bold mb-2">
                Environmental influences:
              </h3>
              <p className="text-gray-700">
                Exposure to toxins during pregnancy.
              </p>
            </div>
          </div>
          <SingleLink head="Congenital Heart Disease (CHD)" />
        </section> */}
        <div>
          <DataBoxes
            title="Symptoms"
            data={symptomsData}
            text="Symptoms of CHD vary depending on the type and severity of the condition. Some defects present symptoms at birth, while others may become evident later in childhood or adulthood. Common symptoms include:"
            header=""
            myclass="grid grid-cols-2"
          />
          <SingleLink head="Congenital Heart Disease (CHD)" />
        </div>
        <div className="py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Diagnosis</h2>
          <p className="mb-8">
            Healthcare providers diagnose CHD using various methods during
            pregnancy, infancy, or later in life:
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <DataLists data={heartEvaluationTests} />
            </div>
            <div>
              <DataLists data={heartEvaluation} />
            </div>
          </div>
        </div>
        <div>
          <DataBoxes
            title="Treatment"
            data={heartTreatmentOptions}
            text="Treatment depends on the type and severity of CHD. Options include:"
            header=""
            myclass="grid grid-cols-2"
          />
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Congenital heart disease is a lifelong condition, but advances in
            medical care have significantly improved survival and quality of
            life for those affected. While CHD cannot be entirely prevented,
            expecting mothers can reduce risks by avoiding harmful substances,
            managing chronic conditions, and following medical advice during
            pregnancy. Regular check-ups with a cardiologist are essential to
            monitor the condition and prevent complications. With appropriate
            care, many people with CHD live fulfilling lives.
          </p>
        </section>
        <FooterLinks head="Congenital Heart Disease (CHD)" />
        <BookButton />
      </main>
    </div>
  )
}

export default page

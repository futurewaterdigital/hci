import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/aortic.png'
import DataBoxes from '@/components/cardiacComponents/Box'
import DataLists from '@/components/cardiacComponents/Bullets'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import BookButton from '@/components/cardiacComponents/BookButton'
import KnowMore from '@/components/cardiacComponents/KnowMore'

const title = 'Heart Valve Disease'
const valveMalfunction = [
  {
    category: 'Stenosis',
    description:
      'Valve leaflets thicken, stiffen, or fuse together, narrowing the valve opening and restricting blood flow.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Regurgitation',
    description:
      'The valve does not close tightly, causing blood to leak backward.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Prolapse',
    description:
      'Floppy valve flaps bulge backward, sometimes leading to regurgitation.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Atresia:',
    description:
      'A valve fails to form properly,creating a solid sheet of tissue that blocks blood flow (commonly affects the pulmonary valve).',
    bgColor: 'bg-hciSecondary text-white',
  },
]
const commonCauses = [
  {
    category: 'Congenital defects',
    description: 'Present at birth',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Infections',
    description: 'Rheumatic fever, infective endocarditis',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Age-related degeneration',
    description: 'Calcification or stiffening of valves',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Heart conditions',
    description: 'Heart attack, coronary artery disease',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Chronic diseases',
    description: 'Hypertension, diabetes, or high cholesterol',
    bgColor: 'bg-hciSecondary text-white',
  },
]
const valveConditionsData = [
  {
    heading: `Symptoms`,
    aneurysmSymptoms: [
      {
        title: '',
        description:
          'Shortness of breath, especially during activity or lying down',
      },
      {
        title: '',
        description: 'Fatigue and weakness',
      },
      {
        title: '',
        description: 'Chest pain or discomfort',
      },
      {
        title: '',
        description: 'Dizziness or fainting (syncope)',
      },
      {
        title: '',
        description: 'Swelling in the ankles, feet, or abdomen (edema)',
      },
      {
        title: '',
        description: 'Palpitations or irregular heartbeat',
      },
    ],
  },
]
const adviceData = [
  {
    title: `When to Seek Medical Advice`,
    paragraph: `If you experience any of these symptoms, it's important to consult a healthcare professional. A cardiologist - specializing in heart diseases can conduct a thorough evaluation to diagnose the condition and recommend treatment.`,
  },
]
const medicationsData = [
  {
    heading: `Treatment Options`,
    aneurysmSymptoms: [
      {
        title: '',
        description: 'Diuretics to reduce fluid build-up',
      },
      {
        title: '',
        description: 'Blood pressure medications to manage hypertension',
      },
      {
        title: '',
        description: 'Anticoagulants to prevent blood clots',
      },
      {
        title: '',
        description: 'Beta-blockers to regulate heart rate',
      },
    ],
  },
]
const lifestyleChangesData = [
  {
    heading: `Lifestyle Changes`,
    aneurysmSymptoms: [
      {
        title: '',
        description: 'Eating a heart-healthy diet',
      },
      {
        title: '',
        description: 'Exercising regularly (under medical supervision)',
      },
      {
        title: '',
        description: 'Avoiding tobacco and limiting alcohol',
      },
    ],
  },
]
const surgicalProceduresData = [
  {
    heading: `Surgical Procedures`,
    aneurysmSymptoms: [
      {
        title: 'Valve Repair',
        description:
          'Preferred when the valve structure can be preserved. Techniques include reshaping leaflets or repairing tears.',
      },
      {
        title: 'Valve Replacement',
        description:
          "If repair isn't feasible, the valve is replaced with a mechanical valve or a bioprosthetic valve (from animal tissue).",
      },
      {
        title: 'Transcatheter Aortic Valve Replacement (TAVR)',
        description: 'A less invasive procedure for high-risk patients.',
      },
    ],
  },
]
const cardiacTests = [
  {
    category: 'Echocardiogram',
    description: 'An ultrasound of the heart to assess valve function',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Electrocardiogram (ECG)',
    description: 'Detects irregular heart rhythms',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Chest X-ray',
    description: "Shows the heart's size and condition of the lungs",
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Cardiac MRI or CT scan',
    description: 'Provides detailed images of the heart',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Cardiac catheterization',
    description:
      'Measures pressures within the heart chambers and evaluates blood flow',
    bgColor: 'bg-hciSecondary text-white',
  },
]
const heartConditions = [
  {
    category: 'Heart failure',
    description: 'Reduced ability of the heart to pump blood efficiently',
    bgColor: 'bg-hciLightBlue ',
  },
  {
    category: 'Stroke',
    description: 'Blood clots forming in the heart may travel to the brain',
    bgColor: 'bg-hciLightBlue ',
  },
  {
    category: 'Arrhythmias',
    description: 'Irregular heartbeats, including atrial fibrillation',
    bgColor: 'bg-hciLightBlue ',
  },
  {
    category: 'Infective endocarditis',
    description: "Infections affecting the heart's inner lining",
    bgColor: 'bg-hciLightBlue ',
  },
  {
    category: 'Death',
    description: 'In severe cases, untreated valve disease can be fatal',
    bgColor: 'bg-hciLightBlue ',
  },
]

export default function page() {
  return (
    <div>
      <Banner image={bannerImage} />
      <main className="lg:container mx-auto py-8 px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-center text-hciSecondary">
            {title}
          </h1>
          <p className="text-start">
            Heart Valve Disease occurs when one or more valves in the heart fail
            to function properly, disrupting the flow of blood through the heart
            and to the rest of the body. The heart contains four valves—aortic,
            mitral, pulmonary, and tricuspid—which ensure that blood flows in
            the correct direction. However, valve malfunction may involve
            incomplete opening or closing, affecting circulation and potentially
            leading to serious complications. Depending on the severity and the
            affected valve, treatment options may range from lifestyle
            modifications to surgical interventions, such as valve repair or
            replacement.
          </p>
        </div>
        <div className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold text-center text-hciSecondary">
            Causes
          </h2>
          <p className="text-start">
            Heart valve disease can occur due to congenital defects, infections,
            or age-related changes. Understanding the anatomy and function of
            the heart&apos;s valves helps clarify how these conditions develop.
            Each valve has leaflets (or cusps) that open and close with every
            heartbeat to maintain proper blood flow.
          </p>
          <div className="grid lg:grid-cols-2 lg:gap-4">
            <DataBoxes
              title=""
              text=""
              header="Key types and causes of valve malfunction include:"
              data={valveMalfunction}
              myclass="grid grid-cols-1"
            />
            <DataBoxes
              title=""
              text=""
              header="Common causes:"
              data={commonCauses}
              myclass="grid grid-cols-1"
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <DataLists
              desc="Heart valve disease may remain asymptomatic for many years, but as the condition progresses, symptoms can emerge, including:"
              data={valveConditionsData}
            />
          </div>
          <div className="">
            {adviceData.map((items, index) => (
              <div className="border border-[#D84498] rounded-lg shadow-lg flex flex-col p-4">
                <h2 className="font-semibold">{items.title}</h2>
                <p className="font-light">{items.paragraph}</p>
              </div>
            ))}
          </div>
          <KnowMore title={title} />
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="py-12">
            <DataBoxes
              title="Diagnosis"
              titleCss="font-semibold text-xl"
              text="The diagnostic process involves a combination of physical examinations, imaging, and other tests to determine the extent and nature of the valve disease. Common diagnostic tools include:"
              header=""
              data={cardiacTests}
              myclass="grid grid-cols-1"
            />

            <KnowMore title={title} />
            <DataBoxes
              title="Complications"
              titleCss="font-semibold text-xl"
              text="If untreated, heart valve disease may lead to severe complications, such as:"
              header=""
              data={heartConditions}
              myclass="grid grid-cols-1"
            />
          </div>

          <div className="py-2">
            <h2 className={`font-semibold text-xl`}>Treatment</h2>
            <p>
              Treatment depends on the severity, the affected valve, and the
              patient’s overall health. Options include:
            </p>
            <div className="grid grid-cols-1 gap-4">
              <DataLists
                desc="Heart valve disease may remain asymptomatic for many years, but as the condition progresses, symptoms can emerge, including:"
                data={medicationsData}
              />
              <DataLists
                desc="Heart valve disease may remain asymptomatic for many years, but as the condition progresses, symptoms can emerge, including:"
                data={lifestyleChangesData}
              />
              <DataLists
                desc="Heart valve disease may remain asymptomatic for many years, but as the condition progresses, symptoms can emerge, including:"
                data={surgicalProceduresData}
              />
            </div>
          </div>
        </div>

        <div className="py-0">
          <h2 className="text-2xl font-bold text-center text-hciSecondary mt-8">
            Conclusion
          </h2>
          <p className="mt-4 text-start">
            Aortic aneurysms are serious conditions that may develop silently
            but pose life-threatening risks if they rupture. Early detection
            through regular screening and monitoring is essential for
            individuals with risk factors. With medical management, lifestyle
            changes, and timely surgical interventions, patients can effectively
            manage an aneurysm and reduce the risk of complications. Seeking
            immediate care for any signs of rupture is critical for survival and
            improved outcomes.
          </p>
        </div>

        <FooterLinks head="Heart Valve Disease" />
        <BookButton />
      </main>
    </div>
  )
}

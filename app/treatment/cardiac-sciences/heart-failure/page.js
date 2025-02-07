import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/aortic.png'
import DataBoxes from '@/components/cardiacComponents/Box'
import DataLists from '@/components/cardiacComponents/Bullets'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import BookButton from '@/components/cardiacComponents/BookButton'

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

const symptomsData = [
  {
    heading: `Symptoms`,
    aneurysmSymptoms: [
      {
        title: '',
        description: 'Chest, back, or abdominal pain',
      },
      {
        title: '',
        description:
          'Difficulty swallowing or shortness of breath (for thoracic aneurysms)',
      },
      {
        title: '',
        description:
          'Feeling of fullness after eating small meals (abdominal aneurysms)',
      },
      {
        title: '',
        description: 'Swelling in the face, arms, or neck',
      },
    ],
  },
]

const diagnosticTests = [
  {
    category: 'Ultrasound',
    description: 'Frequently used to detect abdominal aneurysms.',
    bgColor: 'bg-hciPrimary text-white',
  },
  {
    category: 'MRI and MRI Angiography',
    description:
      'Help detect aneurysms and examine their impact on nearby structures.',
    bgColor: 'bg-hciPrimary text-white',
  },
  {
    category: 'CT Scan and CT Angiography',
    description:
      'Provide detailed images of the aorta to detect aneurysms and assess their size.',
    bgColor: 'bg-hciPrimary text-white',
  },
  {
    category: 'X-rays',
    description: 'May incidentally reveal thoracic aneurysms.',
    bgColor: 'bg-hciPrimary text-white',
  },
]
const medicalManagement = [
  {
    category: 'Blood pressure management',
    description:
      'Use of medications to control hypertension and reduce strain on the aorta.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Cholesterol management',
    description:
      'Statins to help lower cholesterol levels, reducing plaque buildup.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Lifestyle changes',
    description:
      'Quitting smoking, eating heart-healthy foods, and exercising regularly can slow aneurysm growth.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Monitoring',
    description:
      'Routine imaging tests are recommended to track aneurysm size and progression.',
    bgColor: 'bg-hciSecondary text-white',
  },
]
const surgicalTreatment = [
  {
    category: 'Open Aneurysm Repair:',
    description:
      'The damaged section of the aorta is removed and replaced with a synthetic graft. This approach is more invasive but effective, especially for ruptured aneurysms.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: 'Endovascular Aneurysm Repair (EVAR or TEVAR):',
    description:
      'A minimally invasive procedure where a catheter is used to insert a stent graft into the aorta. The graft reinforces the artery wall and prevents further bulging',
    bgColor: 'bg-hciSecondary text-white',
  },
]

const complications = [
  {
    heading: 'Potential Complications',
    aneurysmSymptoms: [
      {
        title: 'Endoleak',
        description:
          'Leakage of blood around the graft used during endovascular repair.',
      },
      {
        title: 'Blood clots',
        description: 'Formation of clots around the graft or within the aorta.',
      },
      {
        title: 'Infections',
        description: 'Infections at the surgical site or graft infection.',
      },
      {
        title: 'Graft migration',
        description: 'The graft may shift from its original position.',
      },
    ],
  },
]
const prevention = [
  {
    heading: '',
    aneurysmSymptoms: [
      {
        title: 'Control blood pressure and cholesterol',
        description:
          'Medications and lifestyle adjustments can reduce arterial damage and lower the risk of aneurysms.',
      },
      {
        title: 'Quit smoking',
        description:
          'Tobacco use is a major risk factor for cardiovascular diseases and aneurysms.',
      },
      {
        title: 'Eat a balanced diet',
        description:
          'A heart-healthy diet helps prevent atherosclerosis and supports vascular health.',
      },
      {
        title: 'Exercise regularly',
        description:
          'Physical activity improves cardiovascular health, strengthens the heart, and lowers blood pressure.',
      },
      {
        title: 'Routine screenings',
        description:
          'High-risk individuals, such as those with family history or pre-existing conditions, should undergo regular testing to monitor vascular health.',
      },
    ],
  },
]

export default function page() {
  return (
    <div>
      <Banner image={bannerImage} />
      <main className="container mx-auto py-8 px-6">
        <h1 className="text-3xl font-bold text-center text-pink-600 mt-8">
          Heart Valve Disease
        </h1>
        <div className="py-8">
          <p className="mt-4 text-start">
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
        <div>
          <h2 className="text-2xl font-bold text-center text-pink-600 mt-8">
            Causes
          </h2>
          <p className="mt-4 text-start">
            Heart valve disease can occur due to congenital defects, infections,
            or age-related changes. Understanding the anatomy and function of
            the heart&apos;s valves helps clarify how these conditions develop.
            Each valve has leaflets (or cusps) that open and close with every
            heartbeat to maintain proper blood flow.
          </p>
          <div className="grid grid-cols-2 gap-4">
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
        <p className="mt-4 text-start text-hciPrimary underline">
          <a href="#">
            To know more about Heart valve disease and its treatment, click
            here.
          </a>
        </p>

        <div className="grid grid-cols-1 gap-4 mt-4">
          <DataLists
            desc="Heart valve disease may remain asymptomatic for many years, but as the condition progresses, symptoms can emerge, including:"
            data={symptomsData}
          />
          {/* <DataLists data={symptomsRData} /> */}
        </div>
        <p className="mt-4 text-start">
          If an aneurysm ruptures, it requires immediate medical attention, as
          internal bleeding can be fatal without prompt intervention.
        </p>
        <div className="py-12">
          <DataBoxes
            title="Diagnosis"
            text="Since many aneurysms are asymptomatic, they are often discovered during routine check-ups or imaging tests conducted for other conditions."
            header="Common diagnostic tests include:"
            data={diagnosticTests}
            myclass="grid grid-cols-2"
          />
          <p className="">
            Regular screening is recommended for individuals with high-risk
            factors, such as smokers or those with a family history of
            aneurysms.
          </p>
          <p className="mt-4 text-start text-hciPrimary underline">
            <a href="#">
              To Get The Best Diagnosis Of Aortic Aneurysms And Related Issues,
              Click Here.
            </a>
          </p>
        </div>

        <div className="py-2">
          <h2
            className={`text-2xl font-bold text-center text-hciSecondary py-1`}
          >
            Treatment
          </h2>
          <p>
            The treatment approach depends on the aneurysm&apos;s size,
            location, and risk of rupture.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <DataBoxes
              title=""
              text=""
              header="Medical Management (for small, unruptured aneurysms):"
              data={medicalManagement}
              myclass="grid grid-cols-1"
            />
            <DataBoxes
              title=""
              text=""
              header="Surgical Treatment (for large or at-risk aneurysms):"
              data={surgicalTreatment}
              myclass="grid grid-cols-1"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-start text-pink-600 mt-8">
              Recovery and Complications after Surgery
            </h2>
            <p>
              Recovery from aneurysm surgery can take several weeks to months,
              depending on the procedure type. Patients receive close follow-up
              to monitor for complications and ensure the aneurysm does not
              recur or grow.
            </p>
            <DataLists data={complications} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-start text-pink-600 mt-8">
              Prevention
            </h2>
            <p>
              While not all aortic aneurysms can be prevented, adopting healthy
              habits can reduce the risk of developing them:
            </p>
            <DataLists data={prevention} />
          </div>
        </div>

        <div className="py-0">
          <h2 className="text-2xl font-bold text-center text-pink-600 mt-8">
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

        <FooterLinks head="Aortic Aneurysm" />
        <BookButton />
      </main>
    </div>
  )
}

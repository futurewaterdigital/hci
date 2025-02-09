import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/peripheral-artery-disease.png'
import DataBoxes from '@/components/cardiacComponents/Box'
import DataLists from '@/components/cardiacComponents/Bullets'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import BookButton from '@/components/cardiacComponents/BookButton'
import KnowMore from '@/components/cardiacComponents/KnowMore'

const padConditionsList = [
  {
    category: '',
    description: 'Smoking Increases PAD risk by 400%.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: 'Age 50 years and above.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: 'Diabetes',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: 'Family or Personal History Includes vascular diseases',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: 'High Cholesterol & High Blood Pressure',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: 'African American ethnicity',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: 'Obesity and poor diet',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description: 'Sedentary Lifestyle & Chronic Kidney Disease',
    bgColor: 'bg-hciYellow',
  },
]

const procedureDetails = [
  {
    heading: `Pacemaker Implantation Procedures`,
    aneurysmSymptoms: [
      {
        title: 'Catheter-based approach (for leadless pacemakers)',
        description: 'Inserted via a catheter through a vein.',
        bgColor: 'bg-purple-100 p-4 rounded-md',
      },
      {
        title: 'Transvenous approach',
        description:
          'Leads are threaded through a vein to the heart, with the device placed under the chest skin.',
        bgColor: 'bg-purple-100 p-4 rounded-md',
      },
      {
        title: 'Surgical approach',
        description:
          'Leads are attached directly to the heart during open surgery, with the device implanted in the abdomen or chest.',
        bgColor: 'bg-purple-100 p-4 rounded-md',
      },
    ],
  },
]
const padSymptoms = [
  {
    heading: 'Symptoms',
    aneurysmSymptoms: [
      {
        title: 'Intermittent claudication',
        description:
          'Pain or cramping in the legs during activity, which subsides with rest',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Cold feet or legs',
        description: 'Cold feet or legs',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Skin colour changes',
        description: 'Skin colour changes (red or bluish discoloration)',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Sores or ulcers',
        description: 'Sores or ulcers on the feet or toes that do not heal',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Numbness or tingling',
        description: 'Numbness or tingling in the legs or feet',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Weak or absent pulses',
        description: 'Weak or absent pulses in the affected limbs',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'In severe cases: Gangrene',
        description: 'In severe cases: Gangrene (tissue death)',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
    ],
  },
]
const padDiagnosis = [
  {
    heading: 'Diagnosis',
    aneurysmSymptoms: [
      {
        title: 'Ankle-Brachial Index (ABI)',
        description:
          'Measures blood pressure differences between the arms and legs',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Vascular ultrasound',
        description: 'Checks for blockages in blood vessels',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Pulse Volume Recording (PVR)',
        description: 'Assesses blood flow',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Angiography',
        description: 'Involves injecting dye to identify arterial blockages',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
    ],
  },
]

const adviceData = [
  {
    title: `Pacemakers vs. Implantable Cardioverter Defibrillators (ICDs)`,
    paragraph: `While pacemakers regulate heart rhythms, ICDs are designed to detect and correct life-threatening arrhythmias by delivering a shock to reset the heart's rhythm. Some ICDs also function as pacemakers.`,
  },
]
const riskDetails = [
  {
    heading: `Risks and Complications`,
    aneurysmSymptoms: [
      {
        title: 'Allergic reactions',
        description: 'Allergic reactions to materials or medications.',
        bgColor: 'bg-red-100 p-4 rounded-md',
      },
      {
        title: 'Lead displacement',
        description: 'Lead displacement or malfunction.',
        bgColor: 'bg-red-100 p-4 rounded-md',
      },
      {
        title: 'Blood clots or infections',
        description: 'Blood clots or infections.',
        bgColor: 'bg-red-100 p-4 rounded-md',
      },
      {
        title: 'New arrhythmias',
        description: 'Rarely, new arrhythmias.',
        bgColor: 'bg-red-100 p-4 rounded-md',
      },
    ],
  },
]
const benfitsDetails = [
  {
    heading: `Benefits of Pacemakers`,
    aneurysmSymptoms: [
      {
        title: 'Improved heart rhythm',
        description: 'Improved heart rhythm and functionality.',
        bgColor: 'bg-green-100 p-4 rounded-md',
      },
      {
        title: 'Symptom relief',
        description:
          'Alleviation of symptoms like chest pain, fainting, and fatigue.',
        bgColor: 'bg-green-100 p-4 rounded-md',
      },
      {
        title: 'Reduced heart-related risks',
        description:
          'Reduced risk of heart-related complications and sudden cardiac arrest.',
        bgColor: 'bg-green-100 p-4 rounded-md',
      },
    ],
  },
]
const recoveryDetails = [
  {
    heading: `Recovery and Maintenance`,
    aneurysmSymptoms: [
      {
        title: 'Battery life',
        description:
          'Pacemakers typically last 10–15 years. Replacement involves a less-invasive procedure.',
        bgColor: 'bg-gray-100 p-4 rounded-md',
      },
      {
        title: 'Life expectancy',
        description:
          'Many patients with pacemakers enjoy normal or near-normal life spans, depending on their overall health.',
        bgColor: 'bg-gray-100 p-4 rounded-md',
      },
      {
        title: 'Follow-up care',
        description:
          'Regular check-ups are essential to monitor device function and battery levels.',
        bgColor: 'bg-gray-100 p-4 rounded-md',
      },
    ],
  },
]

const lifestyleChanges = [
  {
    heading: 'Lifestyle Changes',
    aneurysmSymptoms: [
      {
        title: 'Quit smoking',
        description: 'This is the most important step in managing PAD',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Exercise',
        description:
          'Regular walking can improve circulation and ease symptoms',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Healthy diet',
        description: 'Focus on high-fiber, low-fat foods, and avoid trans fats',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Manage chronic conditions',
        description: 'Control diabetes, hypertension, and cholesterol levels',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
    ],
  },
]
const medicationsData = [
  {
    heading: 'Medications',
    aneurysmSymptoms: [
      {
        title: 'Antiplatelet drugs',
        description: 'e.g., aspirin, clopidogrel to reduce blood clot risk',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Statins',
        description: 'To control cholesterol',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Cilostazol',
        description: 'To improve walking distance and reduce leg pain',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Medications for high blood pressure and diabetes',
        description: 'Helps in managing PAD-related conditions',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
    ],
  },
]
const minimallyInvasiveSurgery = [
  {
    heading: 'Minimally Invasive Procedures or Surgery',
    aneurysmSymptoms: [
      {
        title: 'Angioplasty',
        description: 'Opens narrowed arteries using a balloon',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Stent placement',
        description: 'Keeps arteries open',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Atherectomy',
        description: 'Removes plaque buildup',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Peripheral artery bypass surgery',
        description: 'Creates a bypass around blocked arteries',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Recovery time',
        description:
          'Minimally invasive treatments may require only a few days, while bypass surgery might need six to eight weeks.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
    ],
  },
]

export default function page() {
  return (
    <div className="pt-12">
      <Banner image={bannerImage} />
      <main className="lg:container mx-auto py-0 px-6">
        <h1 className="lg:text-4xl font-bold text-center text-hciSecondary">
          Peripheral Artery Disease (PAD)
        </h1>
        <div className="lg:py-8">
          <p className="mt-4 text-start">
            Peripheral Artery Disease (PAD) is a circulatory condition
            characterized by the narrowing or blockage of arteries, primarily in
            the legs and arms, due to plaque buildup. This plaque consists of
            fats, cholesterol, and other substances. As arteries narrow,
            oxygen-rich blood struggles to reach tissues, leading to pain,
            tissue damage, and other complications. PAD not only affects
            mobility but also increases the risk of cardiovascular events like
            heart attacks and strokes.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-4 pt-12">
            <DataBoxes
              titleCss=""
              title="Causes"
              text="PAD occurs primarily due to atherosclerosis, where fatty deposits
            build up on arterial walls. Over time, this plaque narrows the
            arteries, impeding blood flow. Some key risk factors for PAD
            include:"
              header=""
              data={padConditionsList}
              myclass="grid lg:grid-cols-2"
            />
          </div>
          <KnowMore title="Peripheral Artery Disease (PAD)" />
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          <div>
            <DataLists
              desc="Many individuals with PAD experience no symptoms initially. However, as the disease progresses, the following symptoms may appear:"
              data={padSymptoms}
              footerdata="Complications can arise if PAD is untreated, such as non-healing wounds or even the need for amputation in advanced stages."
            />
            <KnowMore title="Peripheral Artery Disease (PAD)" />
          </div>
          <div>
            <DataLists
              desc="Diagnosing PAD involves a combination of medical history, physical examination, and diagnostic tests, such as:"
              data={padDiagnosis}
              footerdata=""
            />
            <KnowMore title="Peripheral Artery Disease (PAD)" />
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 gap-4 pt-12">
            <DataLists
              desc="Diagnosing PAD involves a combination of medical history, physical examination, and diagnostic tests, such as:"
              data={lifestyleChanges}
              footerdata=""
            />
            <DataLists
              desc="Diagnosing PAD involves a combination of medical history, physical examination, and diagnostic tests, such as:"
              data={medicationsData}
              footerdata=""
            />
            <DataLists
              desc="Diagnosing PAD involves a combination of medical history, physical examination, and diagnostic tests, such as:"
              data={minimallyInvasiveSurgery}
              footerdata=""
            />
          </div>
        </div>

        <div className="py-0">
          <h2 className="text-2xl font-bold text-center text-pink-600 mt-8">
            Conclusion
          </h2>
          <p className="mt-4 text-start">
            Peripheral Artery Disease (PAD) is a lifelong condition, but with
            early detection and proper management, patients can significantly
            improve their quality of life and reduce the risk of complications.
            Quitting smoking, exercising regularly, following a healthy diet,
            and controlling chronic conditions are essential to slowing disease
            progression. Timely medical interventions, including medications or
            surgical procedures, can help maintain mobility and prevent severe
            outcomes like gangrene or amputation. Regular follow-ups with
            healthcare providers are crucial for ongoing care and preventing
            cardiovascular events associated with PAD.
          </p>
        </div>

        <FooterLinks head=" Peripheral Artery Disease (PAD)" />
        <BookButton />
      </main>
    </div>
  )
}

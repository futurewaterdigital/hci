import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/transcatheter-aortic-valve-replacement.png'
import DataBoxes from '@/components/cardiacComponents/Box'
import DataLists from '@/components/cardiacComponents/Bullets'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import BookButton from '@/components/cardiacComponents/BookButton'

const title = 'Transcatheter Aortic Valve Replacement (TAVR)'
const WhyDone = [
  {
    heading: 'Why is it Done',
    aneurysmSymptoms: [
      {
        title: '',
        description:
          'Severe aortic stenosis with symptoms like chest pain or shortness of breath.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: '',
        description:
          'A malfunctioning biological tissue valve from a previous replacement.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: '',
        description:
          'Health conditions (e.g., lung or kidney disease) that make open-heart surgery too risky.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: '',
        description:
          'TAVR offers a shorter hospital stay and quicker recovery compared to open-heart surgery.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
    ],
  },
]
const RiskDone = [
  {
    heading: 'Post-TAVR Care',
    aneurysmSymptoms: [
      {
        title: '',
        description: 'Bleeding or blood vessel complications.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: '',
        description: 'Valve malfunction or displacement.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: '',
        description: 'Stroke or heart rhythm issues requiring a pacemaker.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: '',
        description: 'Infection, kidney problems, or, in rare cases, death.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
    ],
  },
]
const postTAVRCare = [
  {
    heading: 'Post-TAVR Care',
    aneurysmSymptoms: [
      {
        title: 'Blood',
        description: 'thinners to prevent clots.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Antibiotics',
        description: ' to avoid infections, especially for artificial valves.',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
    ],
  },
]
const resultsData = [
  {
    heading: 'Results',
    aneurysmSymptoms: [
      {
        title: 'Avoid smoking.',
        description: '',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title:
          'Eat a diet rich in fruits, vegetables, and low in salt and unhealthy fats.',
        description: '',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: "Exercise regularly with your doctor's guidance.",
        description: '',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
      {
        title: 'Maintain a healthy weight.',
        description: '',
        bgColor: 'bg-blue-100 p-4 rounded-md',
      },
    ],
  },
]
const medicationsAndFasting = [
  {
    category: '',
    description:
      'Inform your doctor about all medications, including supplements.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: '',
    description:
      'Follow instructions regarding when to stop eating or drinking before the procedure.',
    bgColor: 'bg-hciSecondary text-white',
  },
]
const personalPreparations = [
  {
    category: '',
    description:
      'Inform your doctor about all medications, including supplements.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    category: '',
    description:
      'Follow instructions regarding when to stop eating or drinking before the procedure.',
    bgColor: 'bg-hciSecondary text-white',
  },
]
const duringProcedure = [
  {
    category: '',
    description:
      'A catheter is inserted through a blood vessel in the groin or chest to access the heart.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description:
      'A new valve made from biological tissue (e.g., cow or pig) is guided into position using advanced imaging.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description:
      'The valve is expanded (using a balloon or self-expanding mechanism) to replace the damaged valve.',
    bgColor: 'bg-hciYellow',
  },
]
const afterProcedure = [
  {
    category: '',
    description:
      'Most patients stay in the hospital for 1–2 days, with monitoring in an intensive care unit initially.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description:
      'Follow care instructions for catheter site wounds and watch for signs of infection like redness, swelling, or fever.',
    bgColor: 'bg-hciYellow',
  },
]

export default function page() {
  return (
    <div className="pt-12">
      <Banner image={bannerImage} />
      <main className="lg:container mx-auto py-0 px-6">
        <h1 className="lg:text-4xl font-bold text-center text-hciSecondary">
          {title}
        </h1>
        <div className="lg:py-8">
          <p className="mt-4 text-start">
            Transcatheter Aortic Valve Replacement (TAVR) is a minimally
            invasive procedure to replace a narrowed aortic valve that restricts
            blood flow, a condition known as aortic stenosis. This life-saving
            procedure offers an alternative to traditional open-heart surgery,
            using a catheter-based technique to implant a new valve without the
            need for large surgical incisions.
          </p>
          <p className="mt-4 text-start">
            TAVR is especially beneficial for patients who are at high risk or
            unsuitable for open-heart surgery. The procedure alleviates symptoms
            like chest pain, shortness of breath, and fatigue, improving both
            heart function and quality of life.
          </p>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 gap-4">
            <DataLists
              desc="TAVR is recommended for patients suffering from severe aortic stenosis, a condition where the aortic valve becomes thickened, stiff, or narrowed, limiting blood flow from the heart to the rest of the body."
              head="You may be a candidate for TAVR if you experience:"
              data={WhyDone}
              footerdata="TAVR offers a shorter hospital stay and quicker recovery compared to open-heart surgery."
            />
            <DataLists
              desc="As with any medical procedure, TAVR has potential risks, which include:"
              head=""
              data={RiskDone}
              footerdata="However, studies show comparable risks of severe complications between TAVR and traditional surgery."
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <DataBoxes
              title="How to Prepare"
              titleCss="font-semibold"
              text="Medications and Fasting"
              header=""
              data={medicationsAndFasting}
              myclass="grid grid-cols-1"
            />
            <DataBoxes
              title=""
              text=""
              header="Personal Preparations"
              data={personalPreparations}
              myclass="grid grid-cols-1"
            />
          </div>
          <div>
            <DataBoxes
              title="Procedure Overview"
              titleCss="font-semibold"
              text="During the Procedure"
              header=""
              data={duringProcedure}
              myclass="grid grid-cols-1"
              footerData="The entire process involves smaller incisions compared to open-heart surgery, reducing recovery time and risks."
            />
            <DataBoxes
              title=""
              text=""
              header="After the Procedure"
              data={afterProcedure}
              myclass="grid grid-cols-1"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <DataLists
            desc=""
            head="After TAVR, you may be prescribed:"
            data={postTAVRCare}
            footerTitle="Follow-Up"
            footerdata="Regular check-ups and imaging tests ensure the new valve is functioning correctly. Notify your doctor of symptoms like swelling, dizziness, or sudden weight gain."
          />
          <DataLists
            desc="TAVR effectively reduces symptoms of aortic stenosis and enhances quality of life. Adopting a heart-healthy lifestyle after the procedure further supports recovery and long-term heart health:"
            head=""
            data={resultsData}
            footerTitle=""
            footerdata="TAVR provides a promising solution for those with severe aortic stenosis, enabling them to regain an active and fulfilling life."
          />
        </div>

        <FooterLinks head={title} />
        <BookButton />
      </main>
    </div>
  )
}

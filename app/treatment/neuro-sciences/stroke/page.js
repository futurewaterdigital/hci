import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/cardiacComponents/H2'
import KnowMore from '@/components/cardiacComponents/KnowMore'
// import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'

const data = {
  title: 'Stroke',
  bannerImage: '/neuro-sciences/stroke.png',
  description: `A stroke, often referred to as a brain attack, occurs when the blood flow to the brain is interrupted, causing an emergency situation. The brain requires a constant supply of oxygen and nutrients to function properly. Even a brief loss of blood supply can cause brain cells to die, leading to loss of brain function. This can affect your ability to move, speak, think, remember, and perform other vital functions. A stroke can happen to anyone, at any time.`,
  overview: ``,

  section_1: [
    {
      title: 'Ischemic Stroke:',
      description: `The most common type, caused by a blockage in a brain artery due to a blood clot or plaque buildup.`,
    },
    {
      title: 'Hemorrhagic Stroke:',
      description: `Caused by a ruptured blood vessel in the brain, leading to bleeding in the surrounding tissues.`,
    },
  ],

  complications: [
    {
      heading: 'Ischemic Stroke:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'TPA (Tissue Plasminogen Activator): A clot-busting drug given within 3-4.5 hours of stroke onset.',
        },
        {
          description:
            'Endovascular thrombectomy: A catheter-based procedure to remove clots.',
        },
      ],
    },

    {
      heading: 'Hemorrhagic Stroke:',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Surgical interventions  like aneurysm clipping or craniotomy to stop bleeding and reduce brain pressure.`,
        },
        {
          description: `Medications to manage blood pressure and prevent seizures.`,
        },
      ],
    },
  ],

  contact: {
    title: 'Contact Us Today',
    head: 'Contact HCI for Expert Urological Care',
    content:
      'Take the first step towards better urological health. Reach out to HCI today to schedule a consultation with one of our skilled urologists and begin your path to recovery and better quality of life.',
  },

  conclusion: [
    {
      header: 'Conclusion',
      paragraph: `
     Post-stroke rehabilitation involving physical therapy, occupational therapy, and speech therapy is vital for recovery.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description: `Cognitive Impairment: Difficulties with memory, attention, or concentration.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Physical Symptoms: Headaches, dizziness, nausea, and vomiting may occur.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Emotional Changes: Mood swings, anxiety, and depression can be prevalent in individuals with TBI.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Loss of Consciousness: Varying from brief moments to prolonged periods, depending on the severity of the injury.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Balance Issues: Difficulty with coordination and balance can be indicative of brain injury.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Sensitivity to Light and Noise: Increased sensitivity can occur, causing discomfort.`,
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description: `Neurological Examination: An evaluation of cognitive function, coordination, and reflexes to assess the extent of brain injury.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Imaging Studies: CT scans or MRI scans are crucial for visualising brain structures and identifying bleeding, swelling, or other abnormalities.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Glasgow Coma Scale (GCS): This scale assesses a patient's level of consciousness and can help determine the severity of the injury.`,
      bgColor: 'bg-hciSecondary text-white',
    },
  ],
}

console.log(data.complications[0].heading)

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <Title title={data.title} />
        <H2 text={data.description} textClass="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2 text="Causes" textClass="text-2xl font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          A stroke occurs due to a disruption in the blood flow to the brain and
          is classified into two main types:
        </p>
        {/* <H2 text="Types" textClass="text-2xl font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          Peripheral nerve tumours can grow within the nerves (intra-neural
          tumours) or press on them from outside (extra-neural tumours). The
          following are common types of benign peripheral nerve tumours:
        </p> */}
        {/* <DataSurgery data={data.section_1} /> */}
        <div className="grid grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>
        <H2
          text=" Risk Factors"
          textClass="text-2xl font-semibold mb-4 text-center"
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              Certain risk factors can increase your chances of having a stroke,
              including:
            </p>
            <ul className="list-disc list-inside">
              <li>High blood pressure</li>
              <li>Heart disease</li>
              <li>Diabetes</li>
              <li>Smoking</li>
              <li>High cholesterol</li>
              <li>Obesity</li>
              <li>Lack of physical activity</li>
              <li>Excessive alcohol consumption</li>
              <li>Family history of stroke</li>
            </ul>
          </div>
          <div>
            <img src="/neuro-sciences/ischemic-stroke.png" alt="stroke" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-4 ">Symptoms of a Stroke</h3>
            <p>
              Recognizing stroke symptoms early is critical to ensuring prompt
              treatment. Common symptoms include:
            </p>
            <div className="bg-[#B8DEFF80] p-4 rounded-lg">
              <ul className="list-disc list-inside">
                <li>
                  Weakness or numbness in the face, arm, or leg, usually on one
                  side of the body
                </li>
                <li>Difficulty speaking or understanding speech</li>
                <li>Sudden vision problems in one or both eyes</li>
                <li>Sudden dizziness or loss of balance</li>
                <li>Severe headache with no known cause</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Remember FAST:</h3>
            <div className="bg-[#FFE7B6] p-4 rounded-lg">
              <ul className="flex flex-col gap-2">
                <li>F: Face drooping</li>
                <li>A: Arm weakness</li>
                <li>S: Speech difficulty</li>
                <li>T: Time to call for emergency help</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <p>
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p> */}
        <KnowMore title={data.title} />
        <H2
          text="Diagnosis"
          textClass="text-2xl font-semibold mb-4 text-center"
        />
        <p className="font-light" text="">
          Diagnosing a stroke involves CT scans, MRI, and ultrasound imaging of
          the brain and blood vessels. Heart tests like an ECG and
          echocardiography are also used to detect heart problems contributing
          to the stroke.
        </p>
        <KnowMore title={data.title} />
        {/* <div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="Symptoms of TBI can vary widely depending on the severity of the injury and can manifest immediately or may develop over time. Common symptoms include:"
                titleCss="text-black font-semibold text-center"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-1"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                text="Diagnosing TBI typically involves a comprehensive assessment that includes:"
                header=""
                titleCss="text-black font-semibold text-center"
                data={data.diagnosis}
                myclass="grid grid-cols-1 h-full"
              />
              
            </div>
          </div>
        </div> */}
        <div>
          <H2
            text="Treatment"
            textClass="text-2xl font-semibold mb-4 text-center"
          />

          <p className="font-light">
            Treatment varies depending on the type of stroke:
          </p>
          <DataLists
            desc={data.complications[0].description}
            data={data.complications}
          />
        </div>
        {/* <div className="space-y-4">
          <H2 text="When to Consider Robotic Knee Replacement?" />
          <p className="font-light text-center">
            Consult a doctor if you experience:
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {data.consideration.slice(0, 3).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.consideration.slice(3, 5).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
          </div>
        </div> */}

        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default GeneralSurgery

import React from 'react'
const bannerImage = '/cardio/Heart-and-Lung-Transplants.png'
import Banner from '@/components/Common/Banner'
import DataSurgery from '@/components/cardiacComponents/Button'
import DataBoxes from '@/components/cardiacComponents/Box'
import DataLists from '@/components/cardiacComponents/Bullets'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import BookButton from '@/components/cardiacComponents/BookButton'

const title = 'Heart and Lung Transplants'
const surgeryData = [
  {
    title: 'Heart transplant',
    description:
      'A procedure that replaces a diseased heart with a healthy donor heart to restore normal cardiac function.',
  },
  {
    title: 'Lung transplant',
    description:
      'A surgical intervention to replace one or both diseased lungs with donor lungs, enabling better oxygenation and respiratory function.',
  },
  {
    title: 'Heart-lung transplant',
    description:
      'For some severe cases, both organs are transplanted together to address combined cardiac and respiratory failure.',
  },
]
const heartTransplantData = [
  {
    category: '',
    description: 'End-stage heart failure.',
    bgColor: 'bg-hciLightBlue',
  },
  {
    category: '',
    description: 'Severe coronary artery disease.',
    bgColor: 'bg-hciLightBlue',
  },
  {
    category: '',
    description: 'Cardiomyopathy (weakened or stiffened heart muscle).',
    bgColor: 'bg-hciLightBlue',
  },
  {
    category: '',
    description: 'Congenital heart defects unresponsive to other surgeries.',
    bgColor: 'bg-hciLightBlue',
  },
  {
    category: '',
    description: 'Life-threatening arrhythmias.',
    bgColor: 'bg-hciLightBlue',
  },
]
const lungTransplantData = [
  {
    category: '',
    description: 'Chronic obstructive pulmonary disease (COPD).',
    bgColor: 'bg-hciLightBlue',
  },
  {
    category: '',
    description: 'Idiopathic pulmonary fibrosis (IPF).',
    bgColor: 'bg-hciLightBlue',
  },
  {
    category: '',
    description: 'Pulmonary hypertension.',
    bgColor: 'bg-hciLightBlue',
  },
  {
    category: '',
    description: 'Cystic fibrosis.',
    bgColor: 'bg-hciLightBlue',
  },
  {
    category: '',
    description: 'Bronchiectasis.',
    bgColor: 'bg-hciLightBlue',
  },
]
const heartLungTransplantData = [
  {
    category: '',
    description: 'Severe congenital heart and lung conditions.',
    bgColor: 'bg-hciLightBlue',
  },
  {
    category: '',
    description: 'Advanced pulmonary hypertension with heart failure.',
    bgColor: 'bg-hciLightBlue',
  },
]
const transplantSymptoms = [
  {
    id: 1,
    category: '',
    description: 'Severe shortness of breath, even at rest.',
    bgColor: 'bg-hciYellow',
  },
  {
    id: 2,
    category: '',
    description: 'Fatigue and inability to perform daily activities.',
    bgColor: 'bg-hciYellow',
  },
  {
    id: 3,
    category: '',
    description: 'Persistent chest pain or discomfort',
    bgColor: 'bg-hciYellow',
  },
  {
    id: 4,
    category: '',
    description: 'Cyanosis (bluish skin due to low oxygen).',
    bgColor: 'bg-hciYellow',
  },
  {
    id: 4,
    category: '',
    description: 'Frequent hospitalizations for heart or lung issues.',
    bgColor: 'bg-hciYellow',
  },
  {
    id: 4,
    category: '',
    description: 'Swelling in the legs or abdomen.',
    bgColor: 'bg-hciYellow',
  },
]
const transplantEvaluation = [
  {
    heading: 'Pre-Transplant Evaluation',
    aneurysmSymptoms: [
      {
        title: '',
        description:
          'Comprehensive tests to assess the severity of the condition and suitability for transplantation.',
      },
      {
        title: '',
        description:
          'Psychological evaluation to ensure patients can cope with the rigorous post-transplant care.',
      },
    ],
  },
]
const SurgeryEvaluation = [
  {
    heading: 'Surgery',
    aneurysmSymptoms: [
      {
        title: 'Heart transplant',
        description:
          'The diseased heart is removed, and the donor heart is stitched into place.',
      },
      {
        title: 'Lung transplant',
        description:
          'Diseased lungs are removed, and donor lungs are carefully connected to the airway and blood vessels.',
      },
      {
        title: 'Heart-lung transplant',
        description:
          'Both procedures are performed together in a highly coordinated manner.',
      },
    ],
  },
]
const risksComplications = [
  {
    id: 1,
    category: 'Rejection',
    description:
      'The body’s immune system may attack the donor organ. Immunosuppressive medications are required to prevent this.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    id: 2,
    category: 'Infections',
    description:
      'Due to the need for immunosuppressants, patients are more vulnerable to infections.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    id: 3,
    category: 'Bleeding or blood clots',
    description: 'May occur during or after surgery.',
    bgColor: 'bg-hciSecondary text-white',
  },
  {
    id: 4,
    category: 'Organ dysfunction',
    description: 'Rarely, the donor organ may not function as expected.',
    bgColor: 'bg-hciSecondary text-white',
  },
]
const recoveryOutlook = [
  {
    heading: '',
    aneurysmSymptoms: [
      {
        title: 'Hospital stay',
        description:
          'Patients usually spend a few weeks in the hospital for recovery and monitoring.',
      },
      {
        title: 'Medications',
        description:
          'Lifelong immunosuppressants are necessary to prevent organ rejection.',
      },
      {
        title: 'Follow-up care',
        description:
          'Regular check-ups and tests are essential to monitor organ function and overall health.',
      },
      {
        title: 'Quality of life',
        description:
          'With proper care, most transplant recipients can return to daily activities, with many enjoying an improved quality of life.',
      },
    ],
  },
]
const longTermOutlooks = [
  {
    heading: '',
    aneurysmSymptoms: [
      {
        title: '',
        description: 'Restores normal heart and lung function.',
      },
      {
        title: '',
        description:
          'Alleviates severe symptoms like breathlessness and fatigue.',
      },
      {
        title: '',
        description:
          'Extends life expectancy for patients with end-stage organ failure.',
      },
      {
        title: '',
        description: 'Enables recipients to lead active and fulfilling lives.',
      },
    ],
  },
]

function page() {
  return (
    <div>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      <div className="lg:container mx-auto p-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-center text-hciSecondary">
            {title}
          </h1>
          <p className="text-start">
            Heart and lung transplants are complex surgical procedures that
            replace diseased or failing organs with healthy ones from a donor.
            These life-saving surgeries are often the last resort for
            individuals with severe heart or lung diseases that do not respond
            to other treatments.
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">
          What are Heart and Lung Transplants?
        </h3>
        <DataSurgery data={surgeryData} />
      </div>
      <div className="space-y-4 container mx-auto py-8">
        <h3 className="text-2xl font-bold text-center mb-6">
          When are these Procedures Needed?
        </h3>
        <p>
          Transplants are considered for patients whose conditions cannot be
          managed with medications or other interventions. Common reasons
          include:
        </p>
        <div className="grid lg:grid-cols-3 gap-4 ">
          <DataBoxes
            title="Heart Transplant"
            text=""
            data={heartTransplantData}
            myclass="grid grid-cols-1"
          />
          <DataBoxes
            title="Lung Transplant"
            text=""
            data={lungTransplantData}
            myclass="grid grid-cols-1"
          />
          <DataBoxes
            title="Heart-Lung Transplant"
            text=""
            data={heartLungTransplantData}
            myclass="grid grid-cols-1"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center">
          Symptoms Indicating the Need for a Transplant
        </h3>
        <div>
          <DataBoxes
            title=""
            text="Several factors can contribute to the weakening of the aortic wall, leading to an aneurysm. Common causes include:"
            data={transplantSymptoms}
            myclass="grid lg:grid-cols-2"
          />
        </div>
      </div>
      <div className="container mx-auto py-8">
        <h3 className="text-2xl font-bold text-center mb-6">
          The Transplant Process
        </h3>
        <div className="grid lg:grid-cols-2 gap-4">
          <DataLists data={transplantEvaluation} />
          <DataLists data={SurgeryEvaluation} />
        </div>
      </div>

      <div className="py-8 container mx-auto">
        <h3 className="text-2xl font-bold text-center">
          Risks and Complications
        </h3>
        <div>
          <DataBoxes
            title=""
            text="Transplant procedures are complex and come with potential risks, including:"
            data={risksComplications}
            myclass="grid lg:grid-cols-2"
          />
        </div>
      </div>

      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">
          Recovery and Long-Term Outlook
        </h3>
        <div className="grid lg:grid-cols-2 gap-4">
          <DataLists data={recoveryOutlook} />
          <div className="space-y-8">
            <DataLists data={longTermOutlooks} />
            <p>
              Heart and lung transplants offer a second chance at life for
              patients with critical heart or lung diseases, making them among
              the most remarkable advancements in modern medicine.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto space-y-6">
        <FooterLinks head={title} />
        <BookButton />
      </div>
    </div>
  )
}

export default page

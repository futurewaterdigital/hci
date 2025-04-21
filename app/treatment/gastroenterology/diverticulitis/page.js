import React from 'react'
import Banner from '@/components/Common/Banner'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import H1 from '@/components/ui/h1'
import IssuesLinks from '@/components/ui/IssuesLinks'

const data = {
  title: 'Diverticulitis',
  bannerImage: '/gastroenterology/diverticulitis.png',
  description: `Diverticulitis occurs when small pouches called diverticula, formed along the inner lining of the colon, become inflamed or infected. This condition develops from diverticulosis, where these pouches exist without inflammation. Diverticulitis can cause intense abdominal pain and digestive issues and may range from mild to severe. It is more common in older adults and can result in complications if untreated.`,
  overview: '',

  section_1: [
    {
      title: '',
      description:
        '<span class="font-semibold ">Tear or injury to the diverticula:</span> This can trigger inflammation or infection.',
    },
    {
      title: '',
      description:
        '<span class="font-semibold ">Straining during bowel movements:</span> Hard stools may stretch and injure the diverticula.',
    },
    {
      title: '',
      description:
        '<span class="font-semibold ">Colitis or viral infections:</span> Chronic colon inflammation may predispose diverticula to rupture.',
    },
    {
      title: '',
      description:
        '<span class="font-semibold ">Bacterial infection:</span> Fecal matter trapped in the diverticula can provide a breeding ground for bacteria.',
    },
    {
      title: '',
      description:
        '<span class="font-semibold ">Low-fibre diet:</span> A lack of dietary fibre can lead to constipation, increasing pressure on the colon.',
    },
  ],

  data_1: [
    {
      heading: 'Pain Management:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Medications may be prescribed to relieve any discomfort after surgery or treatment.',
        },
      ],
    },
    {
      heading: 'Follow-Up Appointments:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Regular visits to monitor recovery and address any concerns.',
        },
      ],
    },
    {
      heading: 'Dietary Adjustments:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Your healthcare provider may recommend a low-fat diet temporarily to aid digestion.',
        },
      ],
    },
    {
      heading: 'Activity Restrictions:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Light activities can usually be resumed within a few days after minimally invasive procedures. However, heavy lifting or strenuous exercises should be avoided until full recovery.',
        },
      ],
    },
  ],

  complications: [
    {
      heading: 'Home Treatment for Mild Cases:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            '<span class="font-semibold text-hciSecondary">Rest and liquid diet:</span> Allows the digestive tract to heal.',
        },
        {
          description: '<span class="font-semibold text-hciSecondary">Antibiotics:</span> Prescribed if there is an infection.',
        },
        {
          description:
            '<span class="font-semibold text-hciSecondary">Over-the-counter pain relief:</span> Extends survival in ALS patients by slowing the progression of the disease.',
        },
        {
          description:
            '<span class="font-semibold text-hciSecondary">Antidepressants/Anxiolytics:</span> Paracetamol/acetaminophen is recommended over NSAIDs to reduce the risk of GI bleeding.',
        },
      ],
    },

    {
      heading: 'Hospitalization for Severe or Complicated Cases:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            '<span class="font-semibold text-hciSecondary">Intravenous antibiotics or antivirals:</span> For infections that need immediate care.',
        },
        {
          description:
            '<span class="font-semibold text-hciSecondary">Fluid and electrolyte management:</span> Through IV drips to maintain hydration.',
        },
        {
          description:
            '<span class="font-semibold text-hciSecondary">Endoscopic procedures:</span> To manage complications like bleeding or abscess drainage.',
        },
        {
          description:
            '<span class="font-semibold text-hciSecondary">Surgery:</span> In chronic or recurrent cases, a bowel resection may be necessary to remove the affected part of the colon.',
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
      Most cases of diverticulitis resolve with early medical intervention, particularly if the condition is mild and uncomplicated. Lifestyle changes such as a high-fibre diet, regular hydration, and exercise can help prevent flare-ups. However, untreated or severe cases can lead to complications such as perforations, abscesses, or fistulas. Early detection and treatment ensure a favourable prognosis, allowing most people to recover fully without long-term consequences.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description:   
        `<span class="font-semibold ">Severe abdominal pain:</span> Typically felt on the lower left side, though it can vary based on ethnicity (e.g., upper right pain in some populations).`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Bloating and tenderness in the abdomen.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        '<span class="font-semibold ">Fever:</span> Indicating possible infection.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Nausea and vomiting.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Constipation or, occasionally, diarrhoea.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Rectal bleeding or blood in stool.',
      bgColor: 'bg-hciPrimary text-white',
    },

  ],

  diagnosis: [
    {
      category: '',
      description:
        '<span class="font-semibold ">Medical history and physical exam:</span> A healthcare provider may suspect diverticulitis based on symptoms and abdominal tenderness.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `
      <span class="font-semibold ">CT Scan:</span> This imaging test helps identify inflammation, infections, or complications.
      `,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        '<span class="font-semibold ">Blood tests:</span> To check for signs of infection or inflammation.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        '<span class="font-semibold ">Colonoscopy:</span> Sometimes used to assess the colon directly, though it is avoided during acute flare-ups to reduce the risk of perforation.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        '<span class="font-semibold ">Stool and urine tests:</span> Used to rule out other conditions like infections or gastrointestinal bleeding.',
      bgColor: 'bg-hciSecondary text-white',
    },
  ],
}
const footerData = [
  {
    header: 'Conclusion',
    paragraph: `
     Most cases of diverticulitis resolve with early medical intervention, particularly if the condition is mild and uncomplicated. Lifestyle changes such as a high-fibre diet, regular hydration, and exercise can help prevent flare-ups. However, untreated or severe cases can lead to complications such as perforations, abscesses, or fistulas. Early detection and treatment ensure a favourable prognosis, allowing most people to recover fully without long-term consequences.

          `,
  },
]

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        
        <H1 title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
       
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />
        
        <div className="grid grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="w-full min-h-[60px] bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>
        <KnowMore title={data.title} />

        <div className="grid lg:grid-cols-1 gap-4 pt-8">
          <div className="space-y-4">
            <DataBoxes
              title="Symptoms"
              // text="Gallstones may not always cause symptoms, but when they obstruct the bile ducts, they can trigger noticeable discomfort, including:"
              textCss="font-light py-4"
              titleCss="text-black font-medium text-center text-2xl py-4"
              header=""
              data={data.symptoms}
              myclass="grid grid-cols-2"
            />
            <KnowMore title={data.title} />
          </div>
          <div className="space-y-4">
            <DataBoxes
              title="Diagnosis"
              // text="Proper diagnosis is crucial to determine the right treatment plan. Healthcare providers may use the following methods:"
              header=""
              textCss="font-light py-4"
              titleCss="text-black font-medium text-center text-2xl py-4"
              data={data.diagnosis}
              myclass="grid grid-cols-2"
            />
            <IssuesLinks head={data.title} />
          </div>
        </div>

        <div className="pt-12">
          <H2
            title="Treatment"
            className="font-medium mb-4 text-center text-2xl"
          />
          <p className="font-light py-4">
            The treatment approach depends on the severity of the symptoms and
            the size or location of the stones. Options include:
          </p>
          <div className="mb-8">
            <DataLists
              divClass="grid grid-cols-1 gap-4"
              // key={index}
              // desc={data.complications[0].description}
              data={data.complications}
              ulClass="list-none list-outside"
              // boxClass="grid grid-cols-2"
            />
          </div>
        
        </div>

        <Conclusion data={footerData} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default GeneralSurgery

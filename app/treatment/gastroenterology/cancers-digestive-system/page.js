import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import H2 from '@/components/ui/h2'

const data = {
  title: 'Cancers of the Digestive System',
  bannerImage: '/gastroenterology/cancers-digestive-system.png',
  description: `Cancers of the digestive system affect key organs involved in digestion and nutrient absorption. These cancers originate in the gastrointestinal (GI) tract or nearby organs like the gallbladder and pancreas. Early detection can significantly improve survival outcomes, but in many cases, symptoms develop only in advanced stages.`,
  overview: '',

  section_1: [
    {
      title: 'Genetic mutations',
      description: 'leading to abnormal cell growth',
    },
    {
      title: 'Chronic conditions',
      description: 'GERD, inflammatory bowel disease, pancreatitis',
    },
    {
      title: 'Dietary factors',
      description: 'High-fat, low-fibre, and processed foods',
    },
    {
      title: 'Family history',
      description: 'Family history of GI cancers',
    },
    {
      title: '',
      description: 'Smoking and alcohol consumption',
    },
    {
      title: 'Infections',
      description: 'Helicobacter pylori or Hepatitis viruses',
    },
    {
      title: '',
      description: 'Obesity and sedentary lifestyle',
    },
  ],

  complications: [
    {
      heading: 'Surgery:',
      description:
        'Surgery aims to remove the tumour and any affected surrounding tissues, often the first line of treatment if the cancer is localized.',
      aneurysmSymptoms: [
        {
          description:
            'Gastrectomy: Partial or complete removal of the stomach (used for stomach cancer).',
        },
        {
          description:
            'Colectomy: Removal of a section or the entire colon (for colon cancer).',
        },
        {
          description:
            'Pancreatectomy: Removal of the pancreas or part of it (used for pancreatic cancer).',
        },
        {
          description: `Whipple Procedure: A complex surgery that removes parts of the pancreas, bile duct, and stomach (for advanced pancreatic or bile duct cancer).`,
        },
        {
          description:
            'Esophagectomy: Removal of a portion of the oesophagus (used in oesophageal cancer).',
        },
      ],
      footer:
        'Surgeries may also include lymph node removal to check for cancer spread. Laparoscopic or robotic surgeries are often used to minimize recovery time.',
    },

    {
      heading: 'Chemotherapy',
      description:
        'Chemotherapy uses drugs to destroy or inhibit cancer cells. It can be administered before surgery (neoadjuvant therapy) to shrink tumours or after surgery (adjuvant therapy) to prevent recurrence.',
      aneurysmSymptoms: [
        {
          description:
            'Systemic Chemotherapy: Drugs travel through the bloodstream to attack cancer cells throughout the body.',
        },
        {
          description:
            'Regional Chemotherapy: Targets cancer cells in specific areas of the body.',
        },
      ],
      footer:
        'Common chemotherapy agents for digestive cancers include 5-FU (fluorouracil), capecitabine, and gemcitabine. Side effects can include fatigue, nausea, hair loss, and low immunity.',
    },
    {
      heading: 'Radiation Therapy:',
      description:
        'Radiation therapy involves using high-energy rays to destroy cancer cells or shrink tumours. It is often used in combination with surgery and chemotherapy.',
      aneurysmSymptoms: [
        {
          description:
            'External Beam Radiation: A machine directs radiation at the tumour from outside the body.',
        },
        {
          description:
            'Brachytherapy: Radioactive material is placed inside or near the tumour.',
        },
      ],
      footer:
        'Radiation therapy is particularly useful for oesophageal, rectal, and pancreatic cancers to shrink tumours and relieve symptoms.',
    },
    {
      heading: 'Targeted Therapy:',
      description:
        'Targeted therapy uses drugs or substances that specifically target proteins or genes that promote cancer growth.',
      aneurysmSymptoms: [
        {
          description:
            'Monoclonal Antibodies: Target specific proteins on cancer cells, such as HER2 (used in stomach cancer).',
        },
        {
          description:
            'Tyrosine Kinase Inhibitors: Block enzymes responsible for cancer cell growth and spread.',
        },
      ],
      footer:
        'Targeted therapy is less likely to affect normal cells, leading to fewer side effects compared to chemotherapy.',
    },
    {
      heading: 'Immunotherapy:',
      description:
        "Immunotherapy enhances the body's natural immune response to fight cancer.",
      aneurysmSymptoms: [
        {
          description:
            'Checkpoint Inhibitors: Drugs that block proteins used by cancer cells to evade the immune system.',
        },
        {
          description:
            'Cancer Vaccines: Help the immune system recognize cancer cells.',
        },
      ],
      footer:
        'This treatment is mainly used in advanced cases where traditional therapies are ineffective.',
    },
    {
      heading: 'Palliative Care and Supportive Treatment',
      description:
        'For advanced or metastatic cancers, palliative care focuses on relieving symptoms and improving quality of life. This can include:',
      aneurysmSymptoms: [
        {
          description: 'Pain management through medications or nerve blocks',
        },
        {
          description:
            'Nutritional support for patients with difficulty eating or swallowing',
        },
        {
          description:
            ' Counselling and emotional support for patients and families',
        },
        {
          description:
            'Management of side effects such as fatigue, nausea, or bowel issues',
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
      Brain tumours and brain cancers are challenging to treat, but advances in neurosurgery, radiation, and targeted therapies provide hope for better outcomes. Early diagnosis and comprehensive care tailored to the tumour type are key to improving quality of life for patients.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description: 'Unexplained weight loss',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: 'Persistent abdominal pain or discomfort',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Difficulty swallowing: (especially with oesophageal cancer)',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Changes in bowel habits: Constipation, diarrhoea, or blood in the stool',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: 'Bloating, nausea, or vomiting',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: 'Jaundice (common in gallbladder and pancreatic cancers)',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: 'Loss of appetite and general fatigue',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description: 'Endoscopy/Colonoscopy: Visual examination of the GI tract.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Biopsy: Tissue samples examined under a microscope.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: ':',
      description:
        'Imaging Tests: CT scans, MRIs, and PET scans to evaluate tumour size and spread.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Blood Tests: Check for tumour markers (e.g., CEA, CA 19-9).',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Barium Studies: X-ray with contrast to detect abnormalities.',
      bgColor: 'bg-hciSecondary text-white',
    },
  ],
}

console.log('hello')

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <Title title={data.title} />
        <H2 text={data.description} className="text-start" />

        <p className="font-light">{data.overview}</p>
        <H2
          text="Types of Cancers of the Digestive System "
          className="font-semibold mb-4 text-start"
        />
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <p className="font-light">
              <span className="font-semibold text-lg text-hciPrimary">
                Oesophageal Cancer (Ca Oesophagus)
              </span>
              <br />
              Affects the oesophagus, the tube connecting the throat to the
              stomach
            </p>
            <p className="font-light">
              <span className="font-semibold text-lg text-hciPrimary">
                Stomach Cancer (Ca Stomach)
              </span>
              <br />
              Also known as gastric cancer, originating from the stomach lining.
            </p>
            <p className="font-light">
              <span className="font-semibold text-lg text-hciPrimary">
                Colon Cancer (Ca Colon)
              </span>
              <br />
              Develops in the colon, the initial part of the large intestine.
            </p>
            <p className="font-light">
              <span className="font-semibold text-lg text-hciPrimary">
                Rectal Cancer (Ca Rectum)
              </span>
              <br />
              Forms in the rectum, the lower part of the large intestine before
              the anus.
            </p>
            <p className="font-light">
              <span className="font-semibold text-lg text-hciPrimary">
                Gallbladder Cancer (Ca Gallbladder)
              </span>
              <br />
              Begins in the gallbladder, a small organ beneath the liver that
              stores bile.
            </p>
            <p className="font-light">
              <span className="font-semibold text-lg text-hciPrimary">
                Pancreatic Cancer (Ca Pancreas)
              </span>
              <br />
              Originates in the pancreas, an organ involved in digestion and
              hormone production.
            </p>
          </div>
          <div>
            <img src="/gastroenterology/digestive-system.png" alt="" />
          </div>
        </div>
        <H2 title="Causes" className="font-semibold mb-4 text-center" />
        <p className="font-light">
          Several factors can contribute to the development of digestive system
          cancers. Understanding these risk factors is crucial for prevention
          and early detection:
        </p>
        <div className="grid grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-1 gap-4">
          <div>
            <DataBoxes
              title="Symptoms"
              text="Digestive system cancers can present with various symptoms, which may include:"
              titleCss="text-black font-semibold text-center text-2xl"
              header=""
              data={data.symptoms}
              myclass="grid grid-cols-2"
            />
            <KnowMore title={data.title} />
          </div>
          <div>
            <DataBoxes
              title="Diagnosis"
              text="Proper diagnosis is crucial to determine the right treatment plan. Healthcare providers may use the following methods:"
              header=""
              titleCss="text-black font-semibold text-center text-2xl"
              data={data.diagnosis}
              myclass="grid grid-cols-2"
            />
          </div>
        </div>

        <div>
          <H2
            text="Treatment"
            className="font-semibold mb-4 text-center"
          />
          <p className="font-light">
            Digestive cancers require a customized approach depending on the
            cancer type, stage, and patient&apos;s condition. Treatment may
            include a combination of surgery, chemotherapy, radiation therapy,
            targeted therapy, and supportive care.
          </p>
          <DataLists
            // desc={data.complications[0].heading}
            data={data.complications}
          />
        </div>

        <Conclusion
          data={[
            {
              header: 'Conclusion',
              paragraph: `Digestive system cancers are complex conditions that require comprehensive care and early detection. With advances in surgical techniques, targeted therapies, and personalized treatment approaches, outcomes continue to improve. Regular screening, lifestyle modifications, and prompt attention to symptoms are crucial for better prognosis and quality of life.`,
            },
          ]}
        />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default GeneralSurgery

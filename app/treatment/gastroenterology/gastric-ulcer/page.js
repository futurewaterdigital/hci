import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/cardiacComponents/H2'
import KnowMore from '@/components/cardiacComponents/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'

const data = {
  title: 'Gastric Ulcer',
  bannerImage: '/gastroenterology/gastric-ulcer.png',
  description: `Gastric ulcers are open sores that develop on the inner lining of the stomach, typically due to an imbalance between digestive acids and the stomach’s protective mucus lining. They are a type of peptic ulcer disease (PUD) and can cause significant discomfort, particularly after eating. Gastric ulcers, if untreated, can lead to complications like bleeding or perforation.`,
  overview: '',

  section_1: [
    {
      title: 'Helicobacter pylori Infection',
      description: 'A bacterial infection that disrupts the stomach lining.',
    },
    {
      title: 'Smoking',
      description:
        'Increases acid production and delays healing of existing ulcers.',
    },
    {
      title: '',
      description:
        'Colitis or viral infections: Chronic colon inflammation may predispose diverticula to rupture.',
    },
    {
      title: 'Stress',
      description:
        'Physical or emotional stress can exacerbate symptoms or trigger ulcer development.',
    },
    {
      title: 'NSAID Use',
      description:
        'Long-term use of nonsteroidal anti-inflammatory drugs like ibuprofen or aspirin can irritate the stomach lining.',
    },
    {
      title: 'Excessive Alcohol Consumption',
      description:
        'Weakens the protective mucus layer, making the stomach more prone to ulcers.',
    },
  ],

  data_1: [
    {
      heading: 'Acute Gastric Ulcer:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Description: These ulcers form quickly, usually due to severe stress, trauma, or medication use.',
        },
        {
          description:
            'Symptoms: Sudden onset of sharp abdominal pain, often accompanied by nausea.',
        },
        {
          description:
            'Treatment: Focuses on relieving symptoms and addressing the trigger, such as medications or stress.',
        },
      ],
    },
    {
      heading: 'Chronic Gastric Ulcer:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Description: Long-standing ulcers that develop gradually, often due to persistent irritation or infections like H. pylori.',
        },
        {
          description:
            'Symptoms: Burning or gnawing stomach pain, typically worse on an empty stomach.',
        },
        {
          description:
            'Treatment: Requires a combination of lifestyle changes, medications, and infection control.',
        },
      ],
    },
    {
      heading: 'Bleeding Ulcer:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Description:  A severe form of gastric ulcer that erodes a blood vessel, leading to gastrointestinal bleeding.',
        },
        {
          description:
            'Symptoms: Symptoms include black or tarry stools, vomiting blood, and dizziness.',
        },
        {
          description:
            'Treatment: Immediate medical intervention is necessary, possibly including endoscopic treatment or surgery.',
        },
      ],
    },
    {
      heading: 'Perforated Ulcer:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Description: A life-threatening condition where the ulcer creates a hole in the stomach wall, allowing contents to leak into the abdominal cavity.',
        },
        {
          description: 'Symptoms: Sudden, severe abdominal pain and fever.',
        },
        {
          description:
            'Treatment: Emergency surgery is required to close the perforation and prevent infection.',
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
            'Dietary changes, reducing alcohol and smoking cessation can promote healing.',
        },
      ],
    },

    {
      heading: 'Medications:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Proton Pump Inhibitors (PPIs): Decrease stomach acid production, allowing the ulcer to heal.',
        },
        {
          description: 'Antibiotics: Used to treat H. pylori infection.',
        },
        {
          description:
            'Antacids: Provide quick relief from stomach pain by neutralizing acid.',
        },
        {
          description:
            'H2 Receptor Blockers: Reduce acid production to help manage symptoms.',
        },
      ],
    },
    {
      heading: 'Endoscopic Treatment:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'For bleeding ulcers, endoscopy may be used to stop the bleeding with special techniques.',
        },
      ],
    },
    {
      heading: 'Surgery:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'In rare cases, surgery may be required to treat complications like perforation or non-healing ulcers.',
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
      Gastric ulcers can significantly impact quality of life, but early diagnosis and treatment can prevent complications. Managing lifestyle factors and adhering to prescribed medications are essential for effective treatment. If you experience persistent abdominal pain or symptoms of gastric ulcer, consulting a healthcare professional is vital for appropriate care and recovery.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description:
        'Abdominal Pain: Burning or dull ache, usually located in the upper abdomen, often worsening after meals.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Nausea or Vomiting: May include vomiting blood in severe cases.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Bloating and Indigestion: Discomfort and a feeling of fullness after eating.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Weight Loss: Due to loss of appetite or fear of eating because of pain.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Black or Tarry Stools: A sign of bleeding in the digestive tract.',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description:
        'Medical History and Symptoms: Healthcare professionals will assess symptoms, medication use, and lifestyle factors.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Endoscopy: A small camera is inserted through the mouth to visually examine the stomach lining and take tissue samples if necessary.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'H. pylori Testing: Blood, stool, or breath tests can confirm the presence of the H. pylori infection.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Imaging Tests: In some cases, X-rays or CT scans may be used to detect perforation or obstruction.',
      bgColor: 'bg-hciSecondary text-white',
    },
  ],
}

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <Title title={data.title} />
        <H2 text={data.description} textClass="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2
          text="Types of Gastric Ulcers"
          textClass="text-2xl font-semibold mb-4 text-center"
        />
        <div className="mb-8">
          <DataLists
            divClass="grid grid-cols-2 gap-4"
            // key={index}
            // desc={data.complications[0].description}
            data={data.data_1}
            ulClass="list-disc list-outside"
            // boxClass="grid grid-cols-2"
          />
        </div>
        {/* <div className="grid lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Oesophageal Cancer (Ca Oesophagus)
              </span>
              <br />
              Affects the oesophagus, the tube connecting the throat to the
              stomach
            </p>
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Stomach Cancer (Ca Stomach)
              </span>
              <br />
              Also known as gastric cancer, originating from the stomach lining.
            </p>
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Colon Cancer (Ca Colon)
              </span>
              <br />
              Develops in the colon, the initial part of the large intestine.
            </p>
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Rectal Cancer (Ca Rectum)
              </span>
              <br />
              Forms in the rectum, the lower part of the large intestine before
              the anus.
            </p>
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Gallbladder Cancer (Ca Gallbladder)
              </span>
              <br />
              Begins in the gallbladder, a small organ beneath the liver that
              stores bile.
            </p>
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
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
        </div> */}
        <H2 text="Causes" textClass="text-2xl font-semibold mb-4 text-center" />
        {/* <p className="font-light">
          While the exact cause of gallstones isn’t fully understood, several
          factors may increase the risk:
        </p> */}
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

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <DataBoxes
              title="Symptoms"
              // text="Gallstones may not always cause symptoms, but when they obstruct the bile ducts, they can trigger noticeable discomfort, including:"
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
              // text="Proper diagnosis is crucial to determine the right treatment plan. Healthcare providers may use the following methods:"
              header=""
              titleCss="text-black font-semibold text-center"
              data={data.diagnosis}
              myclass="grid grid-cols-1"
            />
          </div>
        </div>

        <div>
          <H2
            text="Treatment"
            textClass="text-2xl font-semibold mb-4 text-center"
          />
          <p className="font-light">
            The treatment approach depends on the severity of the symptoms and
            the size or location of the stones. Options include:
          </p>
          <div className="mb-8">
            <DataLists
              divClass="grid grid-cols-1 gap-4"
              // key={index}
              // desc={data.complications[0].description}
              data={data.complications}
              ulClass="list-disc list-outside"
              // boxClass="grid grid-cols-2"
            />
          </div>
          {/* <H2
            text="Lifestyle Tips to Prevent Gallbladder Stones"
            textClass="text-2xl font-semibold mb-4 text-center"
          /> */}
          {/* <p className="font-light">
            While surgery can effectively address existing stones, adopting
            healthy habits can reduce the risk of developing them:
          </p> */}
          {/* <ul className="list-disc list-inside py-4 space-y-2 font-light">
            <li>
              Maintain a Healthy Weight: Gradual weight management helps prevent
              changes in bile composition.
            </li>
            <li>
              Eat a Balanced Diet: Opt for fibre-rich foods like fruits,
              vegetables, and whole grains. Avoid excessive intake of fatty and
              fried foods.
            </li>
            <li>
              Stay Hydrated: Drinking plenty of water helps keep bile flowing
              smoothly.
            </li>
            <li>
              Exercise Regularly: Physical activity promotes healthy digestion
              and overall well-being.
            </li>
            <li>
              Avoid Crash Diets: Losing weight too quickly can increase the risk
              of gallstones.
            </li>
          </ul> */}
          {/* <DataLists
            // desc={data.complications[0].heading}
            data={data.complications}
          /> */}

          {/* <H2
            text="Recovery and Post-Treatment Care"
            textClass="text-2xl font-semibold mb-4 text-center"
          />
          <p className="font-light">
            After treatment, proper care is essential to ensure a smooth
            recovery and prevent future problems:
          </p> */}
          {/* <div className="mb-8">
            <DataLists
              divClass="grid grid-cols-1 gap-4"
              // key={index}
              // desc={data.complications[0].description}
              data={data.data_1}
              ulClass="list-none list-outside"
              // boxClass="grid grid-cols-2"
            />
          </div> */}
        </div>

        <Conclusion
          data={[
            {
              header: 'Conclusion',
              paragraph: data.conclusion[0].paragraph,
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

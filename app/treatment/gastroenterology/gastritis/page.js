import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'

const data = {
  title: 'Gastritis',
  bannerImage: '/gastroenterology/gastritis.png',
  description: `Gastritis is an inflammation of the stomach lining that can occur suddenly (acute gastritis) or gradually (chronic gastritis). It may result from various factors, including infection, excessive alcohol consumption, prolonged use of certain medications (such as NSAIDs), or autoimmune disorders. Symptoms can range from mild discomfort to severe abdominal pain and can significantly affect quality of life.`,
  overview: '',

  section_1: [
    {
      title: 'Infections:',
      description:
        'The bacterium Helicobacter pylori is a common cause of chronic gastritis.',
    },
    {
      title: 'Stress',
      description:
        'Physical or emotional stress may increase the risk of developing gastritis.',
    },
    {
      title: 'Alcohol Consumption',
      description:
        'Excessive alcohol intake can lead to inflammation of the stomach lining.',
    },
    {
      title: 'Medications',
      description:
        'Long-term use of nonsteroidal anti-inflammatory drugs (NSAIDs) can irritate the stomach lining.',
    },
    {
      title: 'Autoimmune Conditions',
      description:
        'Conditions where the immune system attacks the stomach lining can lead to atrophic gastritis.',
    },
  ],

  data_1: [
    {
      heading: 'Acute Gastritis:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Description: Sudden inflammation of the stomach lining, often caused by irritants like alcohol, medications, or infections.',
        },
        {
          description:
            'Symptoms: Rapid onset of symptoms such as nausea, vomiting, and upper abdominal pain.',
        },
        {
          description:
            'Treatment: Usually involves avoiding irritants and using medications to reduce inflammation and acid production.',
        },
      ],
    },
    {
      heading: 'Chronic Gastritis:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Description: Long-term inflammation that can lead to changes in the stomach lining and may result from persistent infections, autoimmune disorders, or chronic irritation.',
        },
        {
          description:
            'Symptoms: Symptoms can be less pronounced than acute gastritis, but may include abdominal discomfort, bloating, and indigestion.',
        },
        {
          description:
            'Treatment: Focuses on treating the underlying cause, lifestyle changes, and medications to manage symptoms.',
        },
      ],
    },
    {
      heading: 'Erosive Gastritis:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Description: Characterized by the erosion of the stomach lining, often due to prolonged NSAID use or heavy alcohol consumption.',
        },
        {
          description:
            'Symptoms: Can cause severe pain and bleeding in some cases.',
        },
        {
          description:
            'Treatment: May require more aggressive management, including avoiding irritants and medications to heal the stomach lining.',
        },
      ],
    },
    {
      heading: 'Atrophic Gastritis:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Description: A form of chronic gastritis where the stomach lining thins, which may lead to a decrease in stomach acid production and digestive issues.',
        },
        {
          description:
            'Symptoms: Can lead to symptoms of nutrient deficiencies and is often associated with autoimmune conditions.',
        },
        {
          description:
            'Treatment: Focuses on managing symptoms and preventing complications, such as deficiencies in vitamin B12.',
        },
      ],
    },
  ],

  complications: [
    {
      heading: 'Lifestyle Modifications:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Recommendations often include dietary changes, such as avoiding spicy or acidic foods, reducing alcohol intake, and eating smaller, more frequent meals.',
        },
      ],
    },

    {
      heading: 'Medications:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Antacids: Help neutralize stomach acid for relief from pain.',
        },
        {
          description:
            'Proton Pump Inhibitors (PPIs): Reduce acid production and promote healing of the stomach lining.',
        },
        {
          description:
            'Antibiotics: If H. pylori is present, antibiotics may be prescribed to eradicate the infection.',
        },
      ],
    },
    {
      heading: 'Stress Management:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Techniques such as relaxation exercises, yoga, or therapy may help reduce symptoms associated with stress-related gastritis.',
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
      Gastritis is a common condition that can lead to discomfort and digestive issues if not addressed. Understanding the types, causes, and treatment options is crucial for effective management. If you experience symptoms of gastritis, consulting a healthcare professional is essential for appropriate diagnosis and care. Early intervention can lead to better outcomes and improved quality of life.
          `,
    },
  ],

  symptoms: [
    {
      category: 'Abdominal Pain:',
      description:
        'A common symptom, often described as a burning sensation or discomfort in the upper abdomen.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Nausea or Vomiting:',
      description: 'Can occur, sometimes accompanied by a loss of appetite.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Bloating and Indigestion:',
      description:
        'Feelings of fullness and discomfort after eating are common.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Loss of Appetite:',
      description: 'May lead to unintended weight loss in some individuals.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Black or Tarry Stools:',
      description:
        'Can indicate bleeding in the stomach and should prompt immediate medical attention.',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: 'Medical History and Symptoms:',
      description:
        'Understanding symptoms and potential risk factors, such as medication use or alcohol consumption.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Physical Examination:',
      description: `A healthcare professional may conduct a physical examination to assess for abdominal tenderness.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Endoscopy:',
      description:
        'In some cases, an upper endoscopy may be performed to visualize the stomach lining and take biopsies for further analysis.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'H. pylori Testing:',
      description:
        'Breath, blood, or stool tests can help identify an H. pylori infection.',
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
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2
          text="Types of Gastric Ulcers"
          className="font-semibold mb-4 text-center"
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
        <H2 title="Causes" className="font-semibold mb-4 text-center text-xl" />
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

        <div className="grid lg:grid-cols-1 gap-4 pt-8">
          <div className="space-y-4">
            <DataBoxes
              title="Symptoms"
              textCss="font-light py-4"
              titleCss="text-black font-semibold text-center text-xl py-4"
              header=""
            
              data={data.symptoms}
              myclass="grid grid-cols-2"
            />
            <KnowMore title={data.title} />
          </div>
          <div>
            <DataBoxes
              title="Diagnosis"
              text="Diagnosing gastritis typically involves a combination of methods to determine the cause and extent of inflammation:"
              header=""
              textCss="font-light py-4"
              titleCss="text-black font-semibold text-center text-xl"
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
            The treatment approach for gastritis depends on the underlying cause
            and severity of symptoms
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
            className="font-semibold mb-4 text-center"
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
            className="font-semibold mb-4 text-center"
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

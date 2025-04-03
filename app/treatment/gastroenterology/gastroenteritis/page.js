import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
// import TextComponent from '@/components/Common/TextComponent'

const data = {
  title: 'Gastroenteritis',
  bannerImage: '/gastroenterology/gastroenteritis.png',
  description: `Gastroenteritis, commonly known as the "stomach flu," refers to the inflammation of the stomach and intestines. It causes discomfort and symptoms like nausea, vomiting, abdominal pain, and diarrhoea. The condition is often caused by infections—viral, bacterial, or parasitic—or exposure to toxic substances. Although it is generally self-limiting, it can become serious in vulnerable populations, such as young children, the elderly, or those with weakened immune systems.`,
  overview: '',

  section_1: [
    {
      title: 'Autoimmune response:',
      description:
        'The immune system mistakenly attacks healthy cells in the colon, causing inflammation.',
    },
    {
      title: 'Genetic predisposition:',
      description:
        'People with a family history of UC or other IBDs are at higher risk.',
    },
    {
      title: 'Gut microbiome imbalance:',
      description: 'Alterations in gut bacteria may trigger inflammation.',
    },
    {
      title: 'Environmental triggers:',
      description:
        'Factors like stress, infections, and diet may not cause UC directly but can provoke flare-ups.',
    },
    {
      title: 'Risk factors:',
      description:
        'UC is more prevalent in younger individuals (15–30 years) and those over 60. It is also more common among people of Ashkenazi Jewish descent.',
    },
  ],

  data_1: [
    {
      heading: 'Intestinal symptoms:',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Diarrhoea (sometimes watery)',
        },
        {
          description: 'Nausea and vomiting',
        },
        {
          description: 'Abdominal cramps and pain',
        },
        {
          description: 'Loss of appetite',
        },
      ],
    },
    {
      heading: 'Systemic symptoms:',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Fever',
        },
        {
          description: 'Chills and body aches',
        },
        {
          description: 'Fatigue and weakness',
        },
      ],
    },
  ],

  data_2: [
    {
      heading: 'Viral Infections',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Norovirus (most common cause worldwide)',
        },
        {
          description: 'Rotavirus',
        },
        {
          description: 'Adenovirus',
        },
      ],
    },
    {
      heading: 'Bacterial Infection:',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Escherichia coli (E. coli)',
        },
        {
          description: 'Salmonella',
        },
        {
          description: 'Clostridioides difficile (C. diff)',
        },
        {
          description: 'Shigella',
        },
      ],
    },
    {
      heading: 'Parasitic Infections:',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Giardia',
        },
        {
          description: 'Cryptosporidium',
        },
      ],
    },
    {
      heading: 'Fungal Infections:',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Candida species',
        },
      ],
    },
    {
      heading: 'Fungal Infections:',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Contaminated food and water',
        },
        {
          description:
            'Overuse of alcohol or nonsteroidal anti-inflammatory drugs (NSAIDs)',
        },
        {
          description: 'Plant toxins (e.g., poisonous mushrooms)',
        },
      ],
    },
  ],
  data_3: [
    {
      heading: 'Untreated GERD can lead to:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Esophagitis: Inflammation that can cause bleeding or ulcers.',
        },
        {
          description:
            'Esophageal Stricture: Narrowing of the esophagus due to scar tissue, leading to swallowing difficulties.',
        },
        {
          description: `Barrett's Esophagus: Precancerous changes in the esophageal lining, increasing the risk of esophageal cancer.`,
        },
      ],
    },
  ],

  complications: [
    {
      heading: 'Home Management:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            '⦁  Hydration: Drink water, oral rehydration solutions, or clear broths.',
        },
        {
          description:
            '⦁  Diet: Follow the BRAT diet (Bananas, Rice, Applesauce, Toast) to reduce gastrointestinal stress.',
        },
        {
          description:
            '⦁  Avoid irritants: Limit alcohol, caffeine, and dairy products during recovery.',
        },
      ],
    },

    {
      heading: 'Medical Treatment:',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Intravenous fluids: If dehydration is severe.',
        },
        {
          description: 'Medications: Antiemetics to control vomiting.',
        },
        {
          description: 'Medications: Antidiarrheal agents (in some cases).',
        },
        {
          description:
            'Medications: Antibiotics or antiparasitic drugs for specific infections.',
        },
      ],
    },
    {
      heading: 'For Chemical Gastroenteritis:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Detoxification: If poisoning is involved, medical intervention may be needed to remove the toxins.',
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
     Gastroenteritis is a common condition that can affect people of all ages, with most cases resolving on their own within a few days. While it is usually not severe, it can be dangerous for individuals with weaker immune systems, such as children, the elderly, or those with chronic conditions. Managing hydration and rest are essential for recovery. If symptoms persist or worsen, it is important to consult a healthcare provider to avoid complications like dehydration or electrolyte imbalances.
     With good hygiene practices, such as regular hand washing and safe food handling, the risk of contracting gastroenteritis can be significantly reduced.
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
      category: '',
      description:
        'Stool tests: To detect viral, bacterial, or parasitic infections.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Blood tests: To assess dehydration or other underlying health issues`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Electrolyte panel: To monitor for imbalances caused by dehydration.',
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
        <H2 title={data.description} className="text-start" />
        <p className="font-light">{data.overview}</p>

        {/* <H2
          text="How GERD Occurs in the Esophagus"
          textClass="text-2xl font-semibold mb-4 text-center"
        />
        <p className="font-light">
          In healthy digestion, the lower esophageal sphincter (LES)—a muscular
          ring at the junction of the esophagus and stomach—opens to allow food
          to pass into the stomach and closes to prevent backflow. However, in
          GERD, the LES either weakens or relaxes abnormally, allowing stomach
          contents, including acid, to reflux into the esophagus. This exposure
          to acid can damage the delicate lining of the esophagus, causing
          irritation and inflammation.
        </p> */}
        <div className="grid grid-cols-2 gap-4">
          <div>
         
            <H2 title="Types of Gastroenteritis" className="font-semibold mb-4 text-center" />

            <div className="mb-8">
              <DataLists
                divClass="grid grid-cols-1 gap-4"
                // key={index}
                // desc={data.complications[0].description}
                data={data.data_1}
                ulClass="list-disc list-outside"
                // boxClass="grid grid-cols-2"
              />
            </div>
          </div>
          <div>
            <img src="/gastroenterology/gastroenteritis_1.png" alt="" />
          </div>
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
        <H2 title="Causes" className="font-semibold mb-4 text-center" />

        <p className="font-light">
          Gastroenteritis can be caused by infections or exposure to toxins.
          Below are the common causes:
        </p>
        <div className="grid grid-cols-1 gap-4">
          <DataLists
            divClass="grid grid-cols-2 gap-4"
            // key={index}
            // desc={data.complications[0].description}
            data={data.data_2}
            ulClass="list-disc list-outside"
            boxClass="bg-hciYellow h-[230px]"
          />
          {/* {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="w-full min-h-[60px] bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))} */}
        </div>
        <H2
          title="Symptoms"
          className="font-semibold mb-4 text-center"
        />
        <p className="font-light">
          The hallmark symptoms of gastroenteritis are a combination of
          intestinal and systemic effects:
        </p>
        <div className="mb-8">
          <DataLists
            divClass="grid grid-cols-3 gap-4"
            // key={index}
            // desc={data.complications[0].description}
            data={data.data_1}
            ulClass="list-disc list-outside"
            // boxClass="grid grid-cols-2"
          />
        </div>
        <p className="font-light">
          These symptoms tend to appear suddenly, with diarrhoea or vomiting
          often being the first indicators. While most cases resolve within a
          few days, severe or persistent symptoms may indicate complications.
        </p>
        {/* <H2
          text="Symptoms"
          textClass="text-2xl font-semibold mb-4 text-center"
        />
        <div className="mb-8">
          <DataLists
            divClass="grid grid-cols-3 gap-4"
            // key={index}
            // desc={data.complications[0].description}
            data={data.data_1}
            ulClass="list-disc list-outside"
            // boxClass="grid grid-cols-2"
          />
        </div> */}

        <div className="grid grid-cols-1 gap-4">
          {/* <div>
            <DataBoxes
              title="Symptoms"
              // text="Gallstones may not always cause symptoms, but when they obstruct the bile ducts, they can trigger noticeable discomfort, including:"
              titleCss="text-black font-semibold text-center"
              header=""
              data={data.symptoms}
              myclass="grid grid-cols-3"
            />
            <KnowMore title={data.title} />
          </div> */}
          <div>
            <DataBoxes
              title="Diagnosis"
              text="In most cases, healthcare providers diagnose gastroenteritis based on symptoms and medical history. However, additional tests may be required to confirm the cause or rule out other conditions, including:"
              header=""
              titleCss="text-black font-semibold text-center text-2xl"
              data={data.diagnosis}
              myclass="grid grid-cols-1"
            />
          </div>
        </div>

        <div>
          <H2
            title="Treatment"
            className="font-semibold mb-4 text-center"
          />
          <p className="font-light">
            The treatment of gastroenteritis primarily focuses on managing
            symptoms and preventing dehydration. Most cases resolve within 1–3
            days with rest and supportive care.
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
            text="Complications of GERD"
            textClass="text-2xl font-semibold mb-4 text-center"
          />
          <div className="mb-8">
            <DataLists
              divClass="grid grid-cols-1 gap-4"
              // key={index}
              // desc={data.complications[0].description}
              data={data.data_3}
              ulClass="list-disc list-outside"
              // boxClass="grid grid-cols-2"
            />
          </div> */}

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

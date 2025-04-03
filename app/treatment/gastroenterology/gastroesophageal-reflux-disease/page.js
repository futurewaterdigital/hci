import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'

const data = {
  title: 'Gastroesophageal Reflux Disease (GERD)',
  bannerImage: '/gastroenterology/gastroesophageal-reflux-disease.png',
  description: `GERD (Gastroesophageal Reflux Disease) is a chronic digestive condition where stomach acid or, occasionally, bile flows back into the esophagus—the tube that connects the throat and stomach. This backwash, known as acid reflux, irritates the esophageal lining, causing discomfort. While occasional acid reflux is normal, GERD occurs when the reflux becomes frequent and persistent, leading to inflammation and complications.`,
  overview:
    'Many individuals can manage GERD with lifestyle modifications and medications, but more severe cases may require surgical intervention.',

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
      heading: 'The primary symptoms of GERD include:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Heartburn:A burning sensation in the chest, often occurring after meals and worsening at night or when lying down.',
        },
        {
          description:
            'Regurgitation:A sour or bitter-tasting liquid or food rising into the throat.',
        },
        {
          description: 'Chest or upper abdominal pain.',
        },
        {
          description: 'Difficulty swallowing (dysphagia).',
        },
        {
          description: 'Sensation of a lump in the throat.',
        },
      ],
    },
    {
      heading: 'Nighttime reflux can also lead to:',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Chronic cough.',
        },
        {
          description: 'Hoarseness or laryngitis.',
        },
        {
          description: 'Worsening asthma symptoms',
        },
      ],
    },
    {
      heading: 'When to Seek Medical Help:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'If you experience chest pain with shortness of breath or radiating pain in the arm or jaw (as these may indicate a heart attack).',
        },
        {
          description:
            'If GERD symptoms are severe, frequent, or do not improve with over-the-counter medications.',
        },
      ],
    },
  ],

  data_2: [
    {
      heading: 'Risk Factors:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Obesity: Excess weight increases pressure on the abdomen, forcing stomach contents upward.',
        },
        {
          description:
            'Hiatal Hernia: A condition where the stomach bulges above the diaphragm, affecting the LES’s function.',
        },
        {
          description:
            'Pregnancy: Hormonal changes and increased abdominal pressure may trigger reflux.',
        },
        {
          description:
            'Connective tissue disorders: Conditions like scleroderma that affect muscles and connective tissues.',
        },
        {
          description:
            'Delayed stomach emptying: Impaired digestion can increase the chances of reflux.',
        },
      ],
    },
    {
      heading: 'Aggravating Factors:',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Smoking.',
        },
        {
          description: 'Eating large meals or eating close to bedtime.',
        },
        {
          description: 'Fatty or fried foods.',
        },
        {
          description: 'Caffeine or alcohol consumption.',
        },
        {
          description: 'Certain medications, such as aspirin and NSAIDs',
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
      heading: 'Lifestyle Modifications:',
      description: '',
      aneurysmSymptoms: [
        {
          description: 'Maintain a healthy weight.',
        },
        {
          description:
            'Avoid large meals and refrain from eating late at night.',
        },
        {
          description:
            'Elevate the head of your bed to prevent nighttime reflux.',
        },
        {
          description: 'Avoid smoking, caffeine, and alcohol.',
        },
        {
          description:
            'Identify and avoid trigger foods, such as spicy or fatty foods.',
        },
      ],
    },

    {
      heading: 'Medications:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Antacids: Provide quick relief by neutralizing stomach acid.',
        },
        {
          description:
            'H2-Receptor Blockers: Reduce acid production (e.g., ranitidine, famotidine).',
        },
        {
          description:
            'Proton Pump Inhibitors (PPIs): Stronger medications that block acid production (e.g., omeprazole, esomeprazole).',
        },
        {
          description:
            'Prokinetics: Help with stomach emptying and improve LES function (e.g., metoclopramide).',
        },
      ],
    },
    {
      heading: 'Surgical Options (for severe cases):',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Fundoplication: The upper part of the stomach is wrapped around the lower esophagus to strengthen the LES.',
        },
        {
          description:
            'LINX Device: A magnetic ring placed around the LES to prevent reflux while allowing food to pass normally.',
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
     GERD is a manageable condition for most individuals through a combination of lifestyle changes and medication. However, severe cases may require surgery to prevent complications. Early diagnosis and intervention are essential to avoid long-term esophageal damage. Consulting a healthcare professional for persistent or severe symptoms is crucial for appropriate management and improving the quality of life.
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
      category: 'Upper Endoscopy:',
      description:
        'A thin, flexible tube with a camera is used to inspect the esophagus and look for signs of inflammation, strictures, or Barrett’s esophagus.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Esophageal pH Monitoring:',
      description: `This test measures the frequency and duration of acid reflux over 24 hours.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Manometry:',
      description:
        'Assesses the function and strength of the esophageal muscles and the LES.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Barium Swallow X-ray:',
      description:
        'A special X-ray test to evaluate the shape and function of the esophagus.',
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
        <H2 title={data.description} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>

        <H2
          title="How GERD Occurs in the Esophagus"
          className="font-semibold mb-4 text-center"
        />
        <p className="font-light">
          In healthy digestion, the lower esophageal sphincter (LES)—a muscular
          ring at the junction of the esophagus and stomach—opens to allow food
          to pass into the stomach and closes to prevent backflow. However, in
          GERD, the LES either weakens or relaxes abnormally, allowing stomach
          contents, including acid, to reflux into the esophagus. This exposure
          to acid can damage the delicate lining of the esophagus, causing
          irritation and inflammation.
        </p>
        <H2
          title="Symptoms"
          className="font-semibold mb-4 text-center"
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
        <p className="font-light">
          GERD results from repeated episodes of acid or non-acid reflux. This
          occurs when the lower esophageal sphincter does not close properly,
          allowing stomach contents to travel back into the esophagus.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <DataLists
            divClass="grid grid-cols-2 gap-4"
            // key={index}
            // desc={data.complications[0].description}
            data={data.data_2}
            ulClass="list-disc list-outside"
            boxClass="bg-hciYellow"
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
              text="Several diagnostic tests help confirm GERD, including:"
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
          {/* <p className="font-light">
            The goal of treatment is to reduce inflammation, relieve symptoms,
            and maintain remission. Treatment options include:
          </p> */}
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

          <H2
            title="Complications of GERD"
            className="font-semibold mb-4 text-center"
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

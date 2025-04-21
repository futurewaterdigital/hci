import React from 'react'
import Banner from '@/components/Common/Banner'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import H1 from '@/components/ui/h1'
import IssuesLinks from '@/components/ui/IssuesLinks'
import KnowMore from '@/components/ui/KnowMore'

const data = {
  title: "Gastroesophageal Reflux Disease (GERD)",
  bannerImage: "/gastroenterology/gastroesophageal-reflux-disease.png",
  description: `GERD (Gastroesophageal Reflux Disease) is a chronic digestive condition where stomach acid or, occasionally, bile flows back into the esophagus—the tube that connects the throat and stomach. This backwash, known as acid reflux, irritates the esophageal lining, causing discomfort. While occasional acid reflux is normal, GERD occurs when the reflux becomes frequent and persistent, leading to inflammation and complications.`,
  overview:
    "Many individuals can manage GERD with lifestyle modifications and medications, but more severe cases may require surgical intervention.",

  section_1: [
    {
      title: "Autoimmune response:",
      description:
        "The immune system mistakenly attacks healthy cells in the colon, causing inflammation.",
    },
    {
      title: "Genetic predisposition:",
      description:
        "People with a family history of UC or other IBDs are at higher risk.",
    },
    {
      title: "Gut microbiome imbalance:",
      description: "Alterations in gut bacteria may trigger inflammation.",
    },
    {
      title: "Environmental triggers:",
      description:
        "Factors like stress, infections, and diet may not cause UC directly but can provoke flare-ups.",
    },
    {
      title: "Risk factors:",
      description:
        "UC is more prevalent in younger individuals (15–30 years) and those over 60. It is also more common among people of Ashkenazi Jewish descent.",
    },
  ],

  data_1: [
    {
      heading: "The primary symptoms of GERD include:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Heartburn:A burning sensation in the chest, often occurring after meals and worsening at night or when lying down.",
        },
        {
          description:
            "Regurgitation:A sour or bitter-tasting liquid or food rising into the throat.",
        },
        {
          description: "Chest or upper abdominal pain.",
        },
        {
          description: "Difficulty swallowing (dysphagia).",
        },
        {
          description: "Sensation of a lump in the throat.",
        },
      ],
    },
    {
      heading: "Nighttime reflux can also lead to:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Chronic cough.",
        },
        {
          description: "Hoarseness or laryngitis.",
        },
        {
          description: "Worsening asthma symptoms",
        },
      ],
    },
    {
      heading: "When to Seek Medical Help:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "If you experience chest pain with shortness of breath or radiating pain in the arm or jaw (as these may indicate a heart attack).",
        },
        {
          description:
            "If GERD symptoms are severe, frequent, or do not improve with over-the-counter medications.",
        },
      ],
    },
  ],

  data_2: [
    {
      heading: "Risk Factors:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Obesity: Excess weight increases pressure on the abdomen, forcing stomach contents upward.",
        },
        {
          description:
            "Hiatal Hernia: A condition where the stomach bulges above the diaphragm, affecting the LES’s function.",
        },
        {
          description:
            "Pregnancy: Hormonal changes and increased abdominal pressure may trigger reflux.",
        },
        {
          description:
            "Connective tissue disorders: Conditions like scleroderma that affect muscles and connective tissues.",
        },
        {
          description:
            "Delayed stomach emptying: Impaired digestion can increase the chances of reflux.",
        },
      ],
    },
    {
      heading: "Aggravating Factors:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Smoking.",
        },
        {
          description: "Eating large meals or eating close to bedtime.",
        },
        {
          description: "Fatty or fried foods.",
        },
        {
          description: "Caffeine or alcohol consumption.",
        },
        {
          description: "Certain medications, such as aspirin and NSAIDs",
        },
      ],
    },
  ],
  data_3: [
    {
      heading: "Untreated GERD can lead to:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span class="font-semibold text-hciSecondary">Esophagitis:</span> Inflammation that can cause bleeding or ulcers.',
        },
        {
          description:
            '<span class="font-semibold text-hciSecondary">Esophageal Stricture:</span> Narrowing of the esophagus due to scar tissue, leading to swallowing difficulties.',
        },
        {
          description: `<span class="font-semibold text-hciSecondary">Barrett's Esophagus:</span> Precancerous changes in the esophageal lining, increasing the risk of esophageal cancer.`,
        },
      ],
    },
  ],

  complications: [
    {
      heading: "Lifestyle Modifications:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Maintain a healthy weight.",
        },
        {
          description:
            "Avoid large meals and refrain from eating late at night.",
        },
        {
          description:
            "Elevate the head of your bed to prevent nighttime reflux.",
        },
        {
          description: "Avoid smoking, caffeine, and alcohol.",
        },
        {
          description:
            "Identify and avoid trigger foods, such as spicy or fatty foods.",
        },
      ],
    },

    {
      heading: "Medications:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span class="font-semibold text-hciSecondary">Antacids:</span> Provide quick relief by neutralizing stomach acid.',
        },
        {
          description:
            '<span class="font-semibold text-hciSecondary">H2-Receptor Blockers:</span> Reduce acid production (e.g., ranitidine, famotidine).',
        },
        {
          description:
            '<span class="font-semibold text-hciSecondary">Proton Pump Inhibitors (PPIs):</span> Stronger medications that block acid production (e.g., omeprazole, esomeprazole).',
        },
        {
          description:
            '<span class="font-semibold text-hciSecondary">Prokinetics:</span> Help with stomach emptying and improve LES function (e.g., metoclopramide).',
        },
      ],
    },
    {
      heading: "Surgical Options (for severe cases):",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span class="font-semibold text-hciSecondary">Fundoplication:</span> The upper part of the stomach is wrapped around the lower esophagus to strengthen the LES.',
        },
        {
          description:
            '<span class="font-semibold text-hciSecondary">LINX Device:</span> A magnetic ring placed around the LES to prevent reflux while allowing food to pass normally.',
        },
      ],
    },
  ],

  contact: {
    title: "Contact Us Today",
    head: "Contact HCI for Expert Urological Care",
    content:
      "Take the first step towards better urological health. Reach out to HCI today to schedule a consultation with one of our skilled urologists and begin your path to recovery and better quality of life.",
  },

  symptoms: [
    {
      category: "Abdominal Pain:",
      description:
        "A common symptom, often described as a burning sensation or discomfort in the upper abdomen.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Nausea or Vomiting:",
      description: "Can occur, sometimes accompanied by a loss of appetite.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Bloating and Indigestion:",
      description:
        "Feelings of fullness and discomfort after eating are common.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Loss of Appetite:",
      description: "May lead to unintended weight loss in some individuals.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Black or Tarry Stools:",
      description:
        "Can indicate bleeding in the stomach and should prompt immediate medical attention.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "Upper Endoscopy:",
      description:
        "A thin, flexible tube with a camera is used to inspect the esophagus and look for signs of inflammation, strictures, or Barrett’s esophagus.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Esophageal pH Monitoring:",
      description: `This test measures the frequency and duration of acid reflux over 24 hours.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Manometry:",
      description:
        "Assesses the function and strength of the esophageal muscles and the LES.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Barium Swallow X-ray:",
      description:
        "A special X-ray test to evaluate the shape and function of the esophagus.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};

const footerData = [
  {
    header: "Conclusion",
    paragraph: `
     GERD is a manageable condition for most individuals through a combination of lifestyle changes and medication. However, severe cases may require surgery to prevent complications. Early diagnosis and intervention are essential to avoid long-term esophageal damage. Consulting a healthcare professional for persistent or severe symptoms is crucial for appropriate management and improving the quality of life.`,
  },
];

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        
        <H1 title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>

        <H2
          title="How GERD Occurs in the Esophagus"
          className="font-medium mb-4 text-center text-2xl"
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
          className="font-medium mb-4 text-center text-2xl"
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

        
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl pt-12" />
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
        <KnowMore title={data.title} />
        </div>
        

        <div className="grid grid-cols-1 gap-4 pt-8">
         
          <div>
            <DataBoxes
              title="Diagnosis"
              text="Several diagnostic tests help confirm GERD, including:"
              header=""
              titleCss="text-black font-medium text-center text-2xl"
              textCss="font-light py-4"
              data={data.diagnosis}
              myclass="grid grid-cols-1"
            />
          </div>
          <IssuesLinks head={data.title} />
        </div>

        <div className="pt-12">
          <H2
            title="Treatment"
            className="font-medium mb-4 text-center text-2xl"
          />
       
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
            className="font-medium mb-4 text-center text-2xl"
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

         <KnowMore title={data.title} />
        </div>

        <Conclusion data={footerData} />

        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;

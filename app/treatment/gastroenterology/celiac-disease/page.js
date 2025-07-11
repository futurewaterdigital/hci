import React from 'react'
import Banner from '@/components/Common/Banner'
import H1 from '@/components/ui/h1'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import CausesKnowMore from '@/components/ui/CausesKnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import IssuesLinks from '@/components/ui/IssuesLinks'


const data = {
  title: "Celiac Disease",
  bannerImage: "/gastroenterology/celiac-disease.png",
  description: `Celiac disease is an autoimmune disorder triggered by consuming gluten, a protein found in foods made from wheat, barley, and rye. In individuals with celiac disease, gluten consumption causes the immune system to attack the lining of the small intestine, leading to damage over time. This damage impairs the intestine's ability to absorb nutrients properly, resulting in malabsorption and related health complications.`,
  overview:
    "Although there is no permanent cure, adopting a strict gluten-free diet can help manage symptoms and promote intestinal healing.",

  section_1: [
    {
      title: "Genetic Factors",
      description:
        "Family history of celiac disease or dermatitis herpetiformis increases the risk.",
    },
    {
      title: "Gluten Consumption",
      description: "Eating gluten-rich foods triggers the immune response.",
    },
    {
      title: "Environmental Triggers",
      description:
        "Surgery, pregnancy, childbirth, severe stress, or infections can activate the disease.",
    },
    {
      title: "Gastrointestinal Factors",
      description:
        "Altered gut bacteria or infections may contribute, though their role isn't fully established.",
    },
  ],

  data_1: [
    {
      heading: "Pain Management:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Medications may be prescribed to relieve any discomfort after surgery or treatment.",
        },
      ],
    },
    {
      heading: "Follow-Up Appointments:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Regular visits to monitor recovery and address any concerns.",
        },
      ],
    },
    {
      heading: "Dietary Adjustments:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Your healthcare provider may recommend a low-fat diet temporarily to aid digestion.",
        },
      ],
    },
    {
      heading: "Activity Restrictions:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Light activities can usually be resumed within a few days after minimally invasive procedures. However, heavy lifting or strenuous exercises should be avoided until full recovery.",
        },
      ],
    },
  ],

  complications: [
    {
      heading: "Gluten-free diet:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Avoiding gluten-containing foods is the only effective treatment. This includes eliminating products with wheat, barley, rye, and derivatives.",
        },
      ],
    },

    {
      heading: "Nutritional supplements:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "To address deficiencies (e.g., iron, calcium, vitamin D).",
        },
      ],
    },
    {
      heading: "Monitoring and follow-ups:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Regular consultations to assess symptom improvement and monitor nutrient levels.",
        },
      ],
    },
    {
      heading: "Dermatitis herpetiformis management:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "A gluten-free diet and medications like dapsone are used to treat the skin condition.",
        },
      ],
    },
    {
      heading: "Treatment of complications:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "For issues like osteoporosis, anaemia, or neurological conditions, additional medical intervention may be required.",
        },
      ],
    },
  ],

  contact: {
    title: "Contact Us Today",
    head: "Contact HCI for Expert Gastroenterology Care",
    content:
      "Take the first step towards better digestive health. Reach out to HCI today to schedule a consultation with one of our skilled gastroenterologists and begin your path to recovery and better quality of life.",
  },

  conclusion: [
    {
      header: "Conclusion",
      paragraph: `
      Celiac disease requires lifelong management through a gluten-free diet to alleviate symptoms, prevent complications, and promote intestinal healing. Early diagnosis is essential to avoid long-term issues such as malnutrition and osteoporosis. Regular monitoring by healthcare providers ensures optimal health and well-being for those with the condition.
          `,
    },
  ],

  symptoms_data: [
    {
      heading: "Digestive Symptoms:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Diarrhoea",
        },
        {
          description: "Bloating and gas",
        },
        {
          description: "Abdominal pain",
        },
        {
          description: "Nausea and vomiting",
        },
        {
          description: "Constipation",
        },
        {
          description: "Weight loss",
        },
      ],
    },
    {
      heading: "Non-Digestive Symptoms:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Iron-deficiency anaemia",
        },
        {
          description: "Bone disorders (osteoporosis, osteomalacia)",
        },
        {
          description: "Itchy, blistering skin rash (dermatitis herpetiformis)",
        },
        {
          description: "Mouth ulcers",
        },
        {
          description: "Fatigue, headaches, and joint pain",
        },
        {
          description:
            "Numbness or tingling in hands and feet (peripheral neuropathy)",
        },
        {
          description: "Impaired spleen function (hyposplenism)",
        },
      ],
    },
    {
      heading: "Symptoms in Children:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Chronic diarrhoea or constipation",
        },
        {
          description: "Bloated abdomen",
        },
        {
          description: "Pale, foul-smelling stools",
        },
        {
          description: "Growth delays, short stature, or failure to thrive",
        },
        {
          description: "Delayed puberty",
        },
        {
          description: "Tooth enamel damage",
        },
        {
          description: "Behavioural issues or irritability",
        },
        {
          description: "Neurological conditions like ADHD or seizures",
        },
      ],
    },
  ],

  // symptoms: [
  //   {
  //     category: '',
  //     description:
  //       'Severe Abdominal Pain: Often occurs suddenly in the upper right abdomen or between the shoulder blades.',
  //     bgColor: 'bg-hciPrimary text-white',
  //   },
  //   {
  //     category: '',
  //     description:
  //       'Nausea and Vomiting: Especially after eating heavy or fatty meals.',
  //     bgColor: 'bg-hciPrimary text-white',
  //   },
  //   {
  //     category: '',
  //     description:
  //       'Fever and Chills: May indicate an infection due to bile duct blockage.',
  //     bgColor: 'bg-hciPrimary text-white',
  //   },
  //   {
  //     category: '',
  //     description:
  //       'Jaundice: Yellowing of the skin and eyes can occur if bile flow is obstructed.',
  //     bgColor: 'bg-hciPrimary text-white',
  //   },
  //   {
  //     category: '',
  //     description:
  //       'Dark Urine and Pale Stools: Signs of bile not flowing properly.',
  //     bgColor: 'bg-hciPrimary text-white',
  //   },
  // ],

  diagnosis: [
    {
      category: "",
      description:
        "Blood tests: To detect specific antibodies linked to celiac disease (e.g., tTG-IgA).",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description: `Endoscopy and biopsy: A small intestine biopsy confirms the diagnosis by identifying intestinal damage.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Genetic testing: Identifies predisposition through HLA-DQ2 and HLA-DQ8 genes.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Gluten challenge: May be used if testing occurs after adopting a gluten-free diet to confirm the diagnosis.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};


function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">

        <H1 title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>

        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl mt-12" />
        <div className="grid md:grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="w-full min-h-[80px] bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center rounded-lg shadow-lg"
            />
          ))}
        </div>
        <CausesKnowMore title={data.title} />

        <div className="space-y-8">
          <div>
            <H2 title="Symptoms" className="font-medium mb-4 text-center text-2xl mt-12" />
            <DataLists
              divClass="grid md:grid-cols-3 gap-4"
              data={data.symptoms_data}
              ulClass=""
            />
            <div className="mt-4">
              <KnowMore title={data.title} />
            </div>
          </div>

          <div>
            <DataBoxes
              title="Diagnosis"
              textCss="font-light py-4"
              titleCss="text-black font-medium text-center py-4 mt-4 text-2xl"
              header=""
              data={data.diagnosis}
              myclass="grid md:grid-cols-2"
            />
          </div>
        </div>
        <IssuesLinks head={data.title} />

        <div className="pt-12">
          <H2
            title="Treatment"
            className="font-medium mb-4 text-center text-2xl"
          />
          <div className="mb-8">
            <DataLists
              boxClass={"md:min-h-[80px]"}
              divClass="grid grid-cols-1 gap-4"
              data={data.complications}
              ulClass="list-none list-outside"
            />
          </div>
        </div>
        {/* <KnowMore title={data.title} /> */}

        {/* <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
          <button className="text-start underline">
            To Get The Best Diagnosis For Celiac Disease and Related Issues, Click Here
          </button>
        </p> */}


        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;

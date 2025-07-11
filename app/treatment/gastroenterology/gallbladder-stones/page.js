import React from 'react'
import Banner from '@/components/Common/Banner'
import DataLists from '@/components/cardiacComponents/BulletsTwo'
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
  title: "Gallbladder Stones",
  bannerImage: "/gastroenterology/gallbladder-stones.png",
  description: `Gallbladder Stones or Gallstones are solid deposits that form in the gallbladder, a small organ located beneath the liver. These stones are often made of cholesterol, but they may also consist of bile pigments or calcium salts. Although many gallstones remain asymptomatic, they can sometimes block bile ducts, causing intense pain and discomfort. Timely diagnosis and appropriate treatment can help prevent complications.`,
  overview: "",

  section_1: [
    {
      title: "High Cholesterol Levels",
      description:
        "Excess cholesterol in bile can crystallize and form stones.",
    },
    {
      title: "Rapid Weight Loss",
      description:
        "Quick weight loss can alter bile composition, making it prone to forming stones.",
    },
    {
      title: "Excess Bilirubin",
      description:
        "Conditions that increase bilirubin levels, such as liver disease or blood disorders, can promote gallstone formation.",
    },
    {
      title: "Underlying Medical Conditions",
      description:
        "Conditions like diabetes, Crohn’s disease, and high blood pressure are known to be associated with gallstone formation.",
    },
    {
      title: "Obesity",
      description:
        "Being overweight increases cholesterol production, raising the likelihood of gallstones.",
    },
    {
      title: "Family History",
      description:
        "Genetics can play a role, as gallstones may run in families.",
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
      heading: "Medications:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Certain drugs can dissolve cholesterol-based stones, although they may take time to work and are not suitable for all types of stones.",
        },
      ],
    },

    {
      heading: "Laparoscopic Gallbladder Surgery:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "A minimally invasive procedure where the gallbladder is removed through small incisions. This method ensures faster recovery with less pain and minimal scarring.",
        },
      ],
    },
    {
      heading: "Open Surgery:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "In more complex cases, such as when the gallbladder is severely inflamed or infected, open surgery may be necessary.",
        },
      ],
    },
    {
      heading: "Endoscopic Procedures:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Used to remove stones lodged in the bile ducts without removing the gallbladder.",
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

  conclusion: [
    {
      header: "Conclusion",
      paragraph: `
      Gallstones can significantly impact your health and quality of life, especially if left untreated. Whether through lifestyle modifications, medications, or surgery, timely intervention is essential to avoid complications. If you experience persistent abdominal pain or other symptoms related to gallbladder stones, consulting a healthcare professional can help ensure effective management and long-term wellness.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description:
        "Severe Abdominal Pain: Often occurs suddenly in the upper right abdomen or between the shoulder blades.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Nausea and Vomiting: Especially after eating heavy or fatty meals.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Fever and Chills: May indicate an infection due to bile duct blockage.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Jaundice: Yellowing of the skin and eyes can occur if bile flow is obstructed.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Dark Urine and Pale Stools: Signs of bile not flowing properly.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description:
        "Ultrasound Imaging: A non-invasive test to detect stones and assess the condition of the gallbladder.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description: `Blood Tests: Help identify any signs of infection or complications, such as jaundice.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: '',
      description:
        "CT or MRI Scans: Occasionally used for further evaluation of bile ducts.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};
const footerData = [
  {
    header: "Conclusion",
    paragraph: `
     Gallstones can significantly impact your health and quality of life, especially if left untreated. Whether through lifestyle modifications, medications, or surgery, timely intervention is essential to avoid complications. If you experience persistent abdominal pain or other symptoms related to gallbladder stones, consulting a healthcare professional can help ensure effective management and long-term wellness.
  `},
]
function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">

        <H1 title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        {/* <H2
          text="Types of Cancers of the Digestive System "
          textClass="text-2xl font-semibold mb-4 text-start"
        /> */}
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
        <H2 title="Causes" className="font-medium text-2xl text-center" />
        <p className="font-light">
          While the exact cause of gallstones isn’t fully understood, several
          factors may increase the risk:
        </p>
        <div className="grid mdgrid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center rounded-lg shadow-lg"
            />
          ))}
        </div>
        {/* <KnowMore title={data.title} /> */}

        <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
          <button className="text-start underline">
            To Know More About Gallbladder Stones And Its Treatment, Click here
          </button>
        </p>


        <div className="grid lg:grid-cols-1 gap-4 pt-8">
          <div>
            <DataBoxes
              title="Symptoms"
              text="Gallstones may not always cause symptoms, but when they obstruct the bile ducts, they can trigger noticeable discomfort, including:"
              titleCss="text-black font-medium text-center text-2xl"
              textCss="font-light py-4"
              header=""
              data={data.symptoms}
              myclass="grid mdgrid-cols-2"
            />
            <KnowMore title={data.title} />
          </div>
          <div>
            <DataBoxes
              title="Diagnosis"
              text="Proper diagnosis is crucial to determine the right treatment plan. Healthcare providers may use the following methods:"
              header=""
              titleCss="text-black font-medium text-center text-2xl"
              textCss="font-light py-4"
              data={data.diagnosis}
              myclass="grid mdgrid-cols-2"
            />
          </div>
        </div>
        <IssuesLinks head={data.title} />
        <div className="pt-8">
          <H2
            title="Treatment"
            className="font-medium text-2xl text-center"
          />
          <p className="font-light py-4">
            The treatment approach depends on the severity of the symptoms and
            the size or location of the stones. Options include:
          </p>
          <div className="mb-8">
            <DataLists
              divClass="grid md:grid-cols-4 gap-4"
              // key={index}
              // desc={data.complications[0].description}
              data={data.complications}
              ulClass="list-none list-outside"
            // boxClass="grid mdgrid-cols-2"
            />
          </div>
          <H2
            title="Lifestyle Tips to Prevent Gallbladder Stones"
            className="font-medium text-2xl text-center pt-8"
          />
          <p className="font-light pt-4">
            While surgery can effectively address existing stones, adopting
            healthy habits can reduce the risk of developing them:
          </p>
          <ul className="list-disc list-inside py-4 space-y-2 font-light text-hciSecondary ps-3">
            <li>
              <span className="font-medium ">Maintain a Healthy Weight:</span> <span className="font-light text-black">Gradual weight management helps prevent
                changes in bile composition.</span>
            </li>
            <li>
              <span className="font-medium">Eat a Balanced Diet:</span> <span className="font-light text-black">Opt for fibre-rich foods like fruits,
                vegetables, and whole grains. Avoid excessive intake of fatty and
                fried foods.</span>
            </li>
            <li>
              <span className="font-medium">Stay Hydrated:</span> <span className="font-light text-black">Drinking plenty of water helps keep bile flowing
                smoothly.</span>
            </li>
            <li>
              <span className="font-medium">Exercise Regularly:</span> <span className="font-light text-black">Physical activity promotes healthy digestion
                and overall well-being.</span>
            </li>
            <li>
              <span className="font-medium">Avoid Crash Diets:</span> <span className="font-light text-black">Losing weight too quickly can increase the risk
                of gallstones.</span>
            </li>
          </ul>
          {/* <DataLists
            // desc={data.complications[0].heading}
            data={data.complications}
          /> */}

          <H2
            title="Recovery and Post-Treatment Care"
            className="font-medium text-2xl text-center pt-8"
          />
          <p className="font-light pt-4 pb-4">
            After treatment, proper care is essential to ensure a smooth
            recovery and prevent future problems:
          </p>
          <div className="mb-8">
            <DataLists
              divClass="grid grid-cols-1 gap-4"
              // key={index}
              // desc={data.complications[0].description}
              data={data.data_1}
              ulClass="list-none list-outside"
            // boxClass="grid mdgrid-cols-2"
            />
          </div>
        </div>

        <Conclusion data={footerData} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;

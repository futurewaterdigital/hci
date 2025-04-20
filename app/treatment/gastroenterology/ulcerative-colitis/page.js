import React from "react";
import Banner from "@/components/Common/Banner";
import Title from "@/components/cardiacComponents/Title";
import DataLists from "@/components/cardiacComponents/Bullets";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H2 from "@/components/ui/h2";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import TextComponent from "@/components/Common/TextComponent";

const data = {
  title: "Ulcerative Colitis (UC)",
  bannerImage: "/gastroenterology/ulcerative-colitis.png",
  description: `Ulcerative colitis (UC) is a chronic inflammatory bowel disease (IBD) that primarily affects the inner lining of the large intestine (colon) and rectum, causing inflammation and the formation of ulcers. UC can range from mild to severe, with symptoms that come and go, alternating between flare-ups and periods of remission. Unlike Crohn’s disease, which affects the entire digestive tract, UC is limited to the colon. If left untreated, it can lead to serious complications and impair quality of life.`,
  overview: "",

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
      heading: "Mild to Moderate Symptoms:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Diarrhoea (may contain blood or mucus)",
        },
        {
          description: "Abdominal pain and cramping",
        },
        {
          description: "Fatigue and weight loss",
        },
        {
          description: "Frequent and urgent bowel movements",
        },
        {
          description:
            "Tenesmus (feeling the need to defecate but being unable to)",
        },
      ],
    },
    {
      heading: "Severe Symptoms:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Bloody stools with pus",
        },
        {
          description: "Fever and nausea",
        },
        {
          description: "Severe abdominal cramps",
        },
        {
          description: "Significant weight loss",
        },
        {
          description: "Dehydration",
        },
      ],
    },
    {
      heading: "Extraintestinal Symptoms:",
      description:
        "In some cases, UC can affect other parts of the body, leading to:",
      aneurysmSymptoms: [
        {
          description: "Joint pain and swelling",
        },
        {
          description: "Eye inflammation (redness, pain)",
        },
        {
          description: "Skin rashes or ulcers",
        },
        {
          description: "Liver issues, such as primary sclerosing cholangitis",
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
            "Aminosalicylates (5-ASA): Sulfasalazine and mesalamine are used to manage mild to moderate inflammation.",
        },
        {
          description:
            "Corticosteroids: Used for short-term relief during severe flare-ups but not recommended for long-term use due to side effects.",
        },
        {
          description:
            "Immunosuppressants: Medications like azathioprine or methotrexate reduce immune system activity.",
        },
        {
          description:
            "Biologics: Drugs such as infliximab and adalimumab target specific immune responses.",
        },
        {
          description:
            "Janus kinase (JAK) inhibitors: Medications like tofacitinib help control inflammation.",
        },
      ],
    },

    {
      heading: "Surgery:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Surgery may be required if medications fail or if complications develop. Common procedures include:",
        },
        {
          description:
            "Proctocolectomy with ileal pouch-anal anastomosis (IPAA): Removes the colon and rectum while preserving normal defecation.",
        },
        {
          description:
            "Ileostomy: In cases where pouch surgery is not feasible, an external pouch is used to collect waste.",
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
      Although Ulcerative Colitis is a chronic condition with no known cure (except through surgery), most individuals can manage it effectively with medications and lifestyle adjustments. Regular monitoring and early treatment of flare-ups help reduce complications and improve quality of life. Working closely with healthcare providers, avoiding known triggers, and following prescribed treatments are essential to maintaining remission and preventing long-term damage to the colon.
          `,
    },
  ],

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
      category: "Blood tests:",
      description: "To check for anaemia and signs of inflammation.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Stool sample:",
      description: `To rule out infections and confirm intestinal inflammation.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Endoscopy (colonoscopy or sigmoidoscopy):",
      description:
        "Allows direct visualization of the colon and rectum. Biopsies may be taken to confirm UC.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Imaging tests:",
      description:
        "CT or MRI scans can detect complications like perforation or toxic megacolon.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Barium enema X-ray:",
      description: "Helps identify the extent of inflammation.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <Title title={data.title} className="text-4xl text-pink-500" />
        <p
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="text-start font-light"
        />
        <p className="font-light">{data.overview}</p>

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
          The exact cause of UC remains unknown, but it is believed to result
          from a combination of genetic, environmental, and immune system
          factors:
        </p>
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
        <H2
          title="Symptoms"
          className="font-semibold mb-4 text-center text-xl"
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
              text="Diagnosis involves a combination of physical exams, medical history reviews, and tests to confirm UC and rule out other conditions:"
              header=""
              textCss="font-light py-4"
              titleCss="text-black font-semibold text-center text-xl py-4"
              data={data.diagnosis}
              myclass="grid grid-cols-2"
            />
          </div>
        </div>

        <div>
          <H2
            title="Treatment"
            className="font-semibold mb-4 text-center text-xl"
          />
          <p className="font-light py-4">
            The goal of treatment is to reduce inflammation, relieve symptoms,
            and maintain remission. Treatment options include:
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
              header: "Conclusion",
              paragraph: data.conclusion[0].paragraph,
            },
          ]}
        />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;

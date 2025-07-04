import React from "react";
import Banner from "@/components/Common/Banner";
import H1 from "@/components/ui/h1";
// import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
// import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from "@/components/ui/h2";

// import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from "@/components/cardiacComponents/Conclusion";
// import Link from 'next/link'
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H3 from "@/components/ui/h3";
import Link from "next/link";


const parseBoldText = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}; 

const data = {
  title: "Gynecological Cancers",
  title_1: "Endometrial / Uterine Cancer",
  bannerImage: "/oncology/gynecological-cancers-banner.png",
  bannerImage_1: "/oncology/gynecological-cancers.png",
  description:
    "Gynecological cancers encompass a group of malignancies affecting a woman’s reproductive organs, including cervical, ovarian, uterine, vaginal, and vulvar cancers. Each type has unique symptoms, risk factors, and treatment options, but early detection is key to improving outcomes across all forms. Common risk factors include age, family history, genetic mutations like BRCA1/BRCA2, and lifestyle factors such as smoking and obesity. Advances in screening, such as Pap smears for cervical cancer, along with diagnostic tools like ultrasound and genetic testing, have greatly aided in early diagnosis. Treatment approaches, which may include surgery, chemotherapy, and radiation therapy, are tailored to the specific type and stage of the cancer.",
  description_1: `Endometrial cancer, or uterine cancer, arises from the endometrium, the lining of the uterus. It is the most common type of uterine cancer and typically occurs in postmenopausal women. Early detection often leads to a good prognosis, making awareness of symptoms crucial.`,
  causes: [
    {
      heading: "Causes",
      description:
        "While the exact cause remains unclear, certain risk factors increase the likelihood of developing endometrial cancer, including obesity, hormone replacement therapy, early menstruation or late menopause, and certain genetic conditions like Lynch syndrome.",
    },
  ],

  causes_1: [
    {
      heading: "Diagnosis",
      description:
        "Diagnosis often begins with a review of medical history and physical examination, followed by diagnostic tests such as:",
    },
  ],

  diagnosis: [
    {
      heading: "Transvaginal Ultrasound",
      description: "Uses sound waves to create images of the uterus",
      aneurysmSymptoms: [
        { description: "Non-invasive imaging technique" },
        { description: "Creates detailed images of the uterine cavity" },
        { description: "Helps measure endometrial thickness" },
      ],
    },
    {
      heading: "Endometrial Biopsy",
      description:
        "A sample of the uterine lining is taken for laboratory analysis",
      aneurysmSymptoms: [
        { description: "Confirms presence of cancer cells" },
        { description: "Determines cancer type and grade" },
        { description: "Usually performed in office" },
      ],
    },
    {
      heading: "Hysteroscopy",
      description: [
        "A thin tube with a camera is inserted into the uterus to examine the lining",
        "Imaging tests like CT scans or MRIs may also be utilized to determine the cancer's stage and extent."
      ],
      aneurysmSymptoms: [
        { description: "Direct visualization of the uterine cavity" },
        { description: "Can identify abnormal growths" },
        { description: "Allows for targeted biopsies" },
      ],
    },
  ],

  treatments: [
    {
      heading: "Surgery",
      description: "Primary treatment option",
      aneurysmSymptoms: [
        {
          title: "Hysterectomy",
          description:
            "Removal of the uterus and sometimes the ovaries and fallopian tubes (bilateral salpingo-oophorectomy).",
        },
        {
          title: "Lymph Node Removal",
          description: [
            "Nearby lymph nodes may also be removed to check for cancer spread.",
            "Surgery is the primary treatment in most cases, especially for early-stage cancer."
          ],
        },
      ],
    },
    {
      heading: "Radiation Therapy",
      description: "External and internal radiation options",
      aneurysmSymptoms: [
        {
          title: "External Beam Radiation Therapy (EBRT)",
          description:
            "High-energy beams target cancer cells from outside the body.",
        },
        {
          title: "Brachytherapy",
          description: [
            "A radioactive source is placed inside the vagina to target the cancer site more directly.",
            "Radiation is often used to prevent recurrence after surgery or as a primary treatment for those unable to undergo surgery.",
          ]
        },
      ],
    },
    {
      heading: "Hormone Therapy",
      description: "Hormonal treatment approach",
      aneurysmSymptoms: [
        { description: "Used for advanced or recurrent cases, hormone therapy involves progesterone or anti-estrogen drugs like megestrol acetate." },
        { description: "This therapy helps slow the cancer’s growth, especially in cancers that depend on hormones like estrogen." },
        // { description: "Can help slow cancer growth" },
      ],
    },
    {
      heading: "Chemotherapy",
      description: "Systemic treatment with drugs",
      aneurysmSymptoms: [
        { description: "Common drugs include carboplatin and paclitaxel. Chemotherapy is recommended for advanced-stage or high-grade cancers." },
        { description: "It may be given alone or combined with radiation or other treatments for better outcomes." },
        // { description: "May be combined with radiation for better outcomes" },
      ],
    },
    {
      heading: "Targeted Therapy",
      description: "Precision medicine approach",
      aneurysmSymptoms: [
        {
          title: "",
          description: [
            "Drugs like **lenvatinib** (used with pembrolizumab) target specific molecular pathways involved in cancer growth.",
            "Targeted therapy is mainly used for advanced cases or when cancer has spread.",
          ],
        },
      ],
    },
    {
      heading: "Immunotherapy",
      description: "Immune system enhancement",
      aneurysmSymptoms: [
        {
          title: "Immune Checkpoint Inhibitors",
          description: [
            "Immune Checkpoint Inhibitors like pembrolizumab help the immune system fight cancer by blocking proteins that prevent immune attacks.",
            "Immunotherapy is recommended for cases resistant to other treatments or for cancers with specific genetic markers (like MSI-H or dMMR).",
          ],
        },
      ],
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Endometrial cancer presents a significant health concern, particularly for women at risk. Early detection and a multidisciplinary approach to treatment can significantly improve outcomes. Regular check-ups and awareness of symptoms are essential for effective management and treatment of the disease.",
    },
  ],

  hospital_links: [
    {
      text: "For The Best Hospital For The Treatment Of Endometrial Cancer In India",
      url: "/best-endometrial-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Endometrial Cancer In Bangalore",
      url: "/best-endometrial-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Endometrial Cancer In Chennai",
      url: "/best-endometrial-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Endometrial Cancer In Delhi",
      url: "/best-endometrial-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Endometrial Cancer In Hyderabad",
      url: "/best-endometrial-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Endometrial Cancer In Mumbai",
      url: "/best-endometrial-cancer-hospital-mumbai",
    },
  ],
};

const womenCancerTypes = [
  {
    menu: "Endometrial / Uterine Cancer",
    url: "/treatment/oncology/gynecological-cancers",
  },
  {
    menu: "Ovarian Cancer",
    url: "/treatment/oncology/ovarian-cancer",
  },
  {
    menu: "Cervical Cancer",
    url: "/treatment/oncology/cervical-cancer",
  },
];


function EndometrialCancer() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
        <div className="my-10">
          <H1 title={data.title} />

          <p className="text-start font-light">{data.description}</p>
        </div>

        {/* More Link about brain tumor */}
        <div className="my-4">
          <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-x-20 gap-y-8 items-center uppercase font-semibold">
            {womenCancerTypes.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:text-hciSecondary cursor-pointer">
                {item.menu}
              </Link>
            ))}
          </div>
        </div>
        <H2
          title={data.title_1}
          className="text-center text-4xl text-hciSecondary"
        />
        <Banner image={data.bannerImage_1} />

        <p className="text-start font-light">{data.description_1}</p>
        <H2
          title={data.causes[0].heading}
          className="text-2xl font-semibold mb-4 text-center"
        />
        <p className="text-start font-light mb-20">
          {data.causes[0].description}
        </p>
        <p className="text-start text-hciPrimary underline font-semibold capitalize text-lg">
          <button className="text-start underline">
            To know more about The Best treatment for endometrial cancer, click here
          </button>
        </p>
        {/* <Link
          href="/treatment/oncology/endometrial-cancer-info"
          className="mt-10 py-2 text-hciPrimary text-lg"
        >
          To Know More About The Best Treatment For Endometrial Cancer, Click
          Here
        </Link> */}
        <H2
          title={data.causes_1[0].heading}
          className="text-2xl font-semibold mb-4 text-center"
        />
        <p className="text-start font-light">{data.causes_1[0].description}</p>
        <div className="grid grid-cols-3 gap-6">
          {data.diagnosis.map((diagnosis, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <H2
                title={diagnosis.heading}
                className="text-xl font-semibold mb-4 text-hciPrimary"
              />
              {Array.isArray(diagnosis.description) ? (
                diagnosis.description.map((para, i) => (
                  <p key={i} className="text-start font-light mb-2">
                    {para}
                  </p>
                ))
              ) : (
                <p className="text-start font-light">{diagnosis.description}</p>
              )}
            </div>
          ))}


          {/* <div>
            <H2 text="Diagnosis" textClass="text-xl font-semibold mb-4" />
            <DataLists
              divClass="space-y-4"
              data={data.diagnosis}
              ulClass="list-disc pl-5 space-y-2"
            />
            <div className="mt-4 text-center">
              <Link
                href="/treatment/oncology/endometrial-cancer-diagnosis"
                className="inline-block px-4 py-2 bg-hciPrimary text-white rounded-md hover:bg-hciSecondary transition-colors text-sm"
              >
                To Get The Best Diagnosis Of Endometrial Cancer And Related
                Issues, Click Here
              </Link>
            </div>
          </div> */}
        </div>
        <p className="text-start text-hciPrimary underline font-semibold capitalize text-lg">
          <button className="text-start underline">
            To get the best diagnosis of endometrial cancer and related issues, click here
          </button>
        </p>

        <H2
          title="Treatments"
          className="text-2xl font-semibold mb-4 text-center"
        />
        <p className="text-start font-light mb-20">
          Treatment options for endometrial cancer depend on the stage and grade
          of the cancer and may include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {data.treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <H3
                title={treatment.heading}
                className="text-lg font-semibold mb-3 text-hciPrimary"
              />
              {/* <p className="text-gray-600 mb-4 font-light">
                {treatment.description}
              </p> */}
              <ul className="space-y-2">
                {treatment.aneurysmSymptoms.map((symptom, idx) => (
                  <li key={idx} className="text-gray-700 font-light">
                    {Array.isArray(symptom.description) ? (
                      <div className="space-y-2">
                        <p>
                          {symptom.title && <strong>{symptom.title}: </strong>}
                          {parseBoldText(symptom.description[0])}
                        </p>
                        {symptom.description.slice(1).map((para, i) => (
                          <p key={i} className="mt-1">{parseBoldText(para)}</p>
                        ))}
                      </div>
                    ) : (
                      <p>
                        {symptom.title && <strong>{symptom.title}: </strong>}
                        {parseBoldText(symptom.description)}
                      </p>
                    )}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
        <p className="text-start text-hciPrimary underline font-semibold capitalize text-lg">
          <button className="text-start underline">
            To know more about endometrial cancer and its causes and treatment, click here
          </button>
        </p>

        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div >
    </>
  );
}

export default EndometrialCancer;

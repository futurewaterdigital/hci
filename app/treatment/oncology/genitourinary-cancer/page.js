import React from "react";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import H1 from "@/components/ui/h1";
import Banner from "@/components/Common/Banner";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import BookButton from "@/components/cardiacComponents/BookButton";
import KnowMore from "@/components/ui/KnowMore";
import IssuesLink from "@/components/ui/IssuesLinks";
const data = {
  title: "Genitourinary Cancer",
  subtitle: "Genitourinary Cancer",
  description:
    "Gastrointestinal (GI) cancer refers to a group of cancers that affect the digestive system and associated organs. These cancers can develop in any part of the gastrointestinal tract, from the esophagus to the rectum.",

  cancerTypes: [
    {
      name: "BLADDER CANCER",
      link: "/treatment/oncology/genitourinary-cancer",
    },
    {
      name: "KIDNEY CANCER",
      link: "/treatment/oncology/kidney-cancer",
    },
    {
      name: "PROSTATE CANCER",
      link: "/treatment/oncology/prostate-cancer",
    },
  ],

  causes: [
    {
      heading: "Symptoms of Bowel Cancer",
      subTitle:
        "Bowel cancer may not present symptoms in its early stages. However, as the cancer grows, common symptoms include:",
      aneurysmSymptoms: [
        {
          title: "Blood in Urine (Hematuria):",
          description:
            "This is the most common symptom. It may cause the urine to appear pink, red, or brown.",
        },
        {
          title: "Frequent Urination: ",
          description:
            "An urge to urinate more often than usual, even without much urine.",
        },
        {
          title: "Pain or Burning During Urination:",
          description: "Discomfort while passing urine.",
        },
        {
          title: "Pelvic or Back Pain:",
          description:
            "Pain may develop in the later stages of cancer if it spreads to other parts of the body.,",
        },
        {
          title: "Urinary Incontinence: ",
          description:
            "Difficulty in controlling the flow of urine in advanced cases.",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis of Bowel cancer",
      subTitle:
        "Bowel cancer may not present symptoms in its early stages. However, as the cancer grows, common symptoms include:",
      aneurysmSymptoms: [
        {
          title: "Urine Test (Urinalysis)",
          description: "Detects blood or abnormal cells in the urine.",
        },
        {
          title: "Cystoscopy",
          description:
            "A thin tube with a camera is inserted into the bladder through the urethra to visually examine the bladder lining.",
        },
        {
          title: "Biopsy",
          description:
            "During a cystoscopy, tissue samples may be taken to check for cancer cells",
        },
        {
          title: "Imaging Tests",
          description:
            "CT scans, MRIs, and ultrasounds help detect abnormalities in the bladder.",
        },
        {
          title: " CT Scan or MRI",
          description: "To determine if the cancer has spread to other organs.",
        },
        {
          title: "Ultrasound",
          description: "Sometimes used to detect tumors in the bladder.",
        },
        {
          title: "Urine Cytology",
          description:
            "Examines urine under a microscope to check for cancer cells.",
        },
      ],
    },
  ],

  treatments: [
    {
      heading: "Surgery",
      aneurysmSymptoms: [
        {
          title: "Transurethral Resection (TURBT)",
          description:
            " Used in early-stage bladder cancer. It involves removing cancerous tissues through the urethra.",
        },
        {
          title: "Cystectomy:",
          description:
            "Partial or complete removal of the bladder in more advanced cases.",
        },
        {
          title: "Reconstruction",
          description:
            "If the bladder is removed, the surgeon can create a new way for urine to leave the body, either through a urostomy or a neobladder.",
        },
      ],
    },
    {
      heading: "Chemotherapy",
      description:
        "Used to kill cancer cells, either before surgery (neoadjuvant therapy) or after surgery to prevent recurrence.,",
      descriptionTwo:
        "Intravesical chemotherapy involves placing the drug directly into the bladder to target cancerous cells.",
    },
    {
      heading: "Radiation Therapy",
      description: "",
      descriptionTwo:
        "Uses high-energy rays to destroy cancer cells, especially if surgery is not an option.",
    },

    {
      heading: "Immunotherapy",
      description:
        "Bacillus Calmette-Guerin (BCG) therapy, a form of immunotherapy, is widely used in India for treating bladder cancer. It involves placing a weakened bacterium directly into the bladder to activate the immune system to attack cancer cells.",
      descriptionTwo:
        "Newer immunotherapy drugs can help the body’s immune system better identify and attack bladder cancer cells.",
    },
    {
      heading: "Targeted Therapy",
      description:
        "Targets specific molecules involved in cancer growth, though it’s less commonly used for bladder cancer than for other cancers.",
    },
    {
      heading: " Follow-up Care",
      description:
        "Regular monitoring is necessary post-treatment to detect any recurrence. This includes periodic cystoscopies, urine tests, and imaging as recommended by the oncologist.",
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Bladder cancer, when diagnosed early, has a high chance of successful treatment. Awareness of the symptoms and risk factors, along with timely medical attention, can significantly improve outcomes. With India’s advancements in cancer care, including access to specialized treatment options like BCG therapy, patients can receive high-quality care at affordable costs.",
    },
  ],
};

const riskFactors = [
  {
    title: "Smoking",
    description:
      "The most significant risk factor, as harmful chemicals in tobacco can damage the bladder lining.",
  },
  {
    title: "Chemical Exposure",
    description:
      "Long-term exposure to industrial chemicals, such as those used in the textile, dye, rubber, leather, and paint industries, increases the risk.",
  },
  {
    title: "Chronic Bladder Infections",
    description:
      "Repeated bladder infections or inflammation can contribute to bladder cancer.",
  },
  {
    title: "Schistosomiasis",
    description:
      "A parasitic infection found in some regions of India, especially in rural areas, can increase the risk of bladder cancer.",
  },
  {
    title: "Age and Gender",
    description: "It is more common in older adults, especially men.",
  },
  {
    title: "Family History",
    description:
      "A family history of bladder cancer may increase the likelihood of developing it.",
  },
];

function GenitourinaryCancer() {
  return (
    <>
      <Banner image="/oncology/genitourinary-banner.png" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Image */}

        {/* Title Section */}
        <div className="text-center mb-12">
          <H1 title={data.title} />
        </div>
        {/* Cancer Types Navigation */}
        <div className="my-4">
          <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-x-20 gap-y-8 items-center uppercase font-medium">
            {data.cancerTypes.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="hover:text-hciSecondary cursor-pointer">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-3xl mt-14 text-center text-[#D84598] font-medium">
          Bladder cancer
        </div>
        <p className="mt-4 text-gray-600 text-start w-full text-lg mx-auto font-light leading-relaxed">
          Bladder cancer is a type of cancer that begins in the tissues of the
          bladder, a hollow organ in the lower abdomen that stores urine. In
          India, bladder cancer is becoming increasingly prevalent, especially
          among men, and is often linked to risk factors such as smoking,
          exposure to industrial chemicals, and certain infections.
        </p>

        <div className="my-10">
          <img
            src="/oncology/genitourinary-2.png"
            alt="GI Cancer Visualization"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-xl text-center font-bold">
          Causes of Bladder Cancer
        </div>
        <p className="mt-4 mb-4 text-gray-600 text-start w-full text-lg mx-auto font-light leading-relaxed">
          Bladder cancer can develop due to several factors. In India, the
          following are some of the common causes and risk factors:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {riskFactors.map((factor, index) => (
            <div key={index} className="bg-[#FFE7B6] rounded-md p-4 shadow-sm">
              <h3 className="font-bold mb-1">{factor.title}</h3>
              <p className="text-gray-800">{factor.description}</p>
            </div>
          ))}
        </div>
        <div className="my-3">
          <KnowMore title="Bladder Cancer" />
        </div>

        <div className="mt-12 grid grid-cols-1 ">
          {/* Causes Section */}
          <div>
            <H2
              title="Symptoms of Bladder Cancer"
              className="text-xl font-medium mb-4"
            />
            <p className="text-gray-600 text-start w-full  mx-auto font-light leading-relaxed py-2">
              The symptoms of bladder cancer may be subtle in the early stages
              but become more noticeable as the disease progresses. Some common
              symptoms include:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {data.causes[0].aneurysmSymptoms.map((cause, idx) => (
                <div
                  key={idx}
                  className="bg-[#0E56A0] text-white font-light py-6 px-4 rounded text-sm">
                  <span className="font-medium pr-1">{cause.title}</span>
                  {cause.description}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <KnowMore title="Bladder Cancer" />
            </div>
          </div>

          {/* Diagnosis Section */}
          <div className="mt-12">
            <H2
              title="Diagnosis of Bladder Cancer"
              className="text-xl font-medium mb-4"
            />
            <p className="text-gray-600 text-start w-full mx-auto font-light leading-relaxed py-2">
              Bladder cancer is typically diagnosed through a combination of the
              following tests:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {data.diagnosis[0]?.aneurysmSymptoms?.map((diagnosis, idx) => (
                <div
                  key={idx}
                  className="bg-hciSecondary text-white p-3 rounded text-sm">
                  <div className="font-medium ">{diagnosis.title}</div>
                  {diagnosis.description}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <IssuesLink head="Bladder Cancer" />
            </div>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="mt-12">
          <H2
            title="Treatment for Bladder Cancer"
            className="text-2xl font-medium mb-6 text-center"
          />
          <p className="mt-4 text-gray-600 text-start w-full text-lg mx-auto font-light leading-relaxed">
            The treatment of bladder cancer depends on the stage of the disease,
            the patient’s overall health, and other factors. Common treatment
            options in India include:
          </p>
          <div className="grid grid-cols-1 gap-6">
            {data.treatments.map((treatment, index) => (
              <div
                key={index}
                className="border border-hciSecondary rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl mb-2  text-hciPrimary font-bold text-black">
                  {treatment.heading}
                </h2>
                {treatment.description && (
                  <p className="text-gray-600 mb-4 font-light">
                    {treatment.description}
                  </p>
                )}
                {treatment.descriptionTwo && (
                  <p className="text-gray-600 mb-4 font-light">
                    {treatment.descriptionTwo}
                  </p>
                )}
                <div className="space-y-4">
                  {treatment?.aneurysmSymptoms?.map((item, idx) => (
                    <div key={idx} className="text-gray-600">
                      <span className="text-hciSecondary">
                        {" "}
                        {item.title && <strong>{item.title}: </strong>}
                      </span>
                      {item.description}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <Conclusion data={data.conclusion} />
          {/* <H2 title="Conclusion" className="text-xl font-medium mb-4" /> */}
        </div>

        {/* Links */}
        <div className="mt-8 space-y-4">
          <FooterLinks head="Bladder cancer" />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default GenitourinaryCancer;

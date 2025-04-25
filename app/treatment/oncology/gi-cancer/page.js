import React from "react";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import H1 from "@/components/ui/h1";
import Banner from "@/components/Common/Banner";
import KnowMore from "@/components/ui/KnowMore";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import BookButton from "@/components/cardiacComponents/BookButton";
import IssuesLink from "@/components/ui/IssuesLinks";
const data = {
  title: "GI Cancer",
  subtitle: "Genitourinary Cancer",
  bannerImage: "/oncology/GICancer_Banner.png",
  description:
    "Gastrointestinal (GI) cancer refers to a group of cancers that affect the digestive system and associated organs. These cancers can develop in any part of the gastrointestinal tract, from the esophagus to the rectum.",

  cancerTypes: [
    {
      name: "BOWEL CANCER",
      url: "/treatment/oncology/bowel-cancer",
    },
    {
      name: "GALLBLADDER CANCER",
      url: "/treatment/oncology/gallbladder-cancer",
    },
    {
      name: "LIVER CANCER",
      url: "/treatment/oncology/liver-cancer",
    },
    {
      name: "OESOPHAGUS CANCER",
      url: "/treatment/oncology/oesophagus-cancer",
    },
    {
      name: "PANCREATIC CANCER",
      url: "/treatment/oncology/pancreatic-cancer",
    },
  ],

  causes: [
    {
      heading: "Symptoms of Bowel Cancer",
      subTitle:
        "Bowel cancer may not present symptoms in its early stages. However, as the cancer grows, common symptoms include:",
      aneurysmSymptoms: [
        {
          title: "Changes in Bowel Habits:",
          description:
            "Persistent diarrhea, constipation, or changes in stool consistency that last for more than a few days.",
        },
        {
          title: "Blood in Stool:",
          description:
            "Rectal bleeding or dark-colored stools may indicate the presence of blood.",
        },
        {
          title: "Abdominal Pain",
          description:
            "Abdominal Pain: Ongoing discomfort, cramping, or pain in the abdomen.",
        },
        {
          title: "nexplained Weight Loss:",
          description: "Significant weight loss without any apparent reason.",
        },
        {
          title: "Weekness or Fatigue:",
          description:
            "Feeling unusually tired or weak, often due to blood loss caused by internal bleeding.",
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
          title: "Colonoscopy",
          description:
            "A scope is inserted into the rectum to examine the entire colon and rectum for any abnormalities, including polyps or tumors.",
        },
        {
          title: "Sigmoidoscopy",
          description:
            "A procedure that focuses on examining the lower part of the colon and rectum.",
        },
        {
          title: " Stool Test",
          description:
            "A fecal occult blood test (FOBT) or fecal immunochemical test (FIT) checks for hidden blood in the stool.",
        },
        {
          title: " CT Scan/MRI",
          description:
            "Imaging tests are used to determine the cancer’s stage and to check if it has spread to nearby organs or distant parts of the body.",
        },
      ],
    },
  ],

  treatments: [
    {
      heading: "Surgery",
      description:
        "",
      aneurysmSymptoms: [
      
        {
          title: "Partial Colectomy",
          description:
            "Removal of part of the colon or rectum that contains the cancer. This is the most common treatment for early-stage Bowel cancer.",
        },
        {
          title: "Total Colectomy",
          description:
            "In some cases, the entire colon may need to be removed.",
        },
        {
          title: "Laparoscopic Surgery",
          description:
            "A minimally invasive technique that allows for quicker recovery and fewer complications compared to traditional surgery",
        },
       
      ],
    },
    {
      heading: "Chemotherapy",
      description:
        "",
      aneurysmSymptoms: [
        {
          title: "Chemotherapy",
          description:
            "Uses drugs to kill cancer cells or stop their growth. It is often used after surgery to destroy any remaining cancer cells and reduce the chance of recurrence.",
        },
        
      ],
    },
    {
      heading: "Radiation Therapy",
      description:
        "",
      aneurysmSymptoms: [
        {
          title: "Radiation Therapy",
          description:
            "Radiation Therapy involves using high-energy rays to target and destroy cancer cells. It is particularly effective for treating rectal cancer, especially when combined with chemotherapy.",
        },
        {
          title: "Proton Therapy",
          description:
            "An advanced form of radiation therapy, Proton Therapy delivers precise radiation to the tumor while minimizing damage to surrounding healthy tissue. This allows for higher radiation doses to be safely used.",
        },
        {
          title: "CyberKnife",
          description:
            "A non-invasive robotic system, CyberKnife delivers highly focused radiation beams to the tumor with extreme precision. This is especially useful for tumors located near sensitive areas or in patients who cannot undergo traditional surgery.",
        },
        
      ],
    },
    {
      heading: "Targeted Therapy",
      description:
        "Targeted therapy focuses on specific molecules in cancer cells, blocking their growth and spread. This therapy is particularly effective for patients whose tumors exhibit certain genetic mutations.",
      aneurysmSymptoms: [
        {
          title: "",
          description:
            "",
        },
      ],
    },
    {
      heading: "Immunotherapy",
      description: `Immunotherapy uses drugs to enhance the body’s immune system to recognize and fight cancer cells. It may be an option for advanced Bowel cancer that does not respond to standard treatments.`,
      aneurysmSymptoms: [
        {
          title: "",
          description:
            "",
        },
      ],
    },
    {
      heading: "Hormonal Therapy",
      description:
        "Hormonal treatment is used less frequently for cervical cancer but may be considered in cases where the cancer cells are hormone sensitive. It works by blocking hormones that could potentially fuel cancer growth.",
      aneurysmSymptoms: [],
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Bowel cancer is becoming more prevalent in India due to changing dietary patterns and increasingly sedentary lifestyles. Fortunately, advancements in early detection through regular screenings like colonoscopy and innovative treatments, including Proton Therapy and CyberKnife, provide better chances for successful outcomes. Comprehensive cancer centers across the country offer multidisciplinary approaches, ensuring patients receive the best possible care from diagnosis to recovery.",
    },
  ],

  links: [
    {
      text: "To Get The Best Diagnosis Of Cervical Cancer And Related Issues, Click Here",
      url: "/cervical-cancer-diagnosis",
    },
    {
      text: "To Consult With The Best Doctor For Cervical Cancer Treatment, Click Here",
      url: "/best-doctor-cervical-cancer-treatment",
    },
    {
      text: "For The Best Hospital For Cervical Cancer Treatment In India, Click Here",
      url: "/best-cervical-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For Cervical Cancer Treatment In Bangalore, Click Here",
      url: "/best-cervical-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For Cervical Cancer Treatment In Chennai, Click Here",
      url: "/best-cervical-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For Cervical Cancer Treatment In Delhi, Click Here",
      url: "/best-cervical-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For Cervical Cancer Treatment In Hyderabad, Click Here",
      url: "/best-cervical-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For Cervical Cancer Treatment In Mumbai, Click Here",
      url: "/best-cervical-cancer-hospital-mumbai",
    },
  ],
};

const riskFactors = [
  {
    title: "Diet",
    description:
      "A diet high in red meat, processed foods, and low in fiber increases the risk of developing Bowel cancer.",
  },
  {
    title: "Inflammatory Bowel Diseases",
    description:
      "Conditions like Crohn’s disease or ulcerative colitis can lead to chronic inflammation in the intestines, raising the risk of cancer.",
  },
  {
    title: "Family History",
    description:
      "A family history of Bowel cancer or polyps heightens an individual's risk due to inherited genetic factors.",
  },
  {
    title: "Lifestyle Factors",
    description:
      "Smoking, excessive alcohol consumption, and a sedentary lifestyle contribute to the development of Bowel cancer.",
  },
  {
    title: "Age",
    description:
      "The likelihood of developing Bowel cancer rises with age, especially after 50.",
  },
  {
    title: "Obesity",
    description:
      "Being overweight or obese has been linked to an increased risk of Bowel cancer.",
  },
];

function GICancer() {
  return (

    <>
    <Banner image={data.bannerImage} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Image */}
  
      {/* Title Section */}
      <div className="text-center mb-12">
        <H1 title={data.title} />
      </div>
      {/* Cancer Types Navigation */}
      <div className="my-4">
        <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-x-20 gap-y-8 items-center uppercase font-semibold">
          {data.cancerTypes.map((item, index) => (
            <Link
              key={index}
              href={item?.url}
              className="hover:text-hciSecondary cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-3xl mt-14 text-center text-[#D84598] font-semibold">
        Bowel Cancer
      </div>
      <p className="mt-4 text-gray-600 text-start w-full mx-auto font-light leading-relaxed">
        Bowel cancer or Colorectal cancer, which originates in the colon or
        rectum, has become a significant health concern globally, including in
        India. Although it primarily affects individuals over the age of 50, it
        can also occur in younger people due to a combination of dietary habits,
        lifestyle factors, and genetic predispositions. As cases rise in India,
        especially with changing food patterns and urban lifestyles, early
        detection and comprehensive treatment remain essential for better
        outcomes.
      </p>

      <div className="my-10">
        <img
          src="/oncology/Gi-cancer-2.png"
          alt="GI Cancer Visualization"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-2xl text-center font-medium">
        Causes of Bowel cancer
      </div>
      <p className="mt-4 text-gray-600 text-start w-full mx-auto font-light leading-relaxed mb-4">
        Several factors can contribute to the development of Bowel cancer, with
        diet and lifestyle playing a significant role alongside genetic risks.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {riskFactors.map((factor, index) => (
          <div key={index} className="bg-[#FFE7B6] rounded-md p-4 shadow-sm">
            <h3 className="font-medium mb-1 text-lg">{factor.title}</h3>
            <p className="text-gray-800">{factor.description}</p>
          </div>
        ))}
      </div>
      <div className="my-3">
       <KnowMore title={data.title} />
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* Causes Section */}
        <div>
          <H2
            title="Symptoms of Bowel Cancer"
            className="text-2xl font-medium mb-4"
          />
          <p className="text-gray-700 mb-6 font-light">
            Bowel cancer may not present symptoms in its early stages. However,
            as the cancer grows, common symptoms include:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {data.causes[0].aneurysmSymptoms.map((cause, idx) => (
              <div
                key={idx}
                className="bg-[#0E56A0] text-white font-light p-4 rounded h-24 font-light"
              >
                <span className="font-medium pr-1">{cause.title}</span>
                {cause.description}
              </div>
            ))}
          </div>
          <div className="mt-4 text-start">
           <KnowMore title={data.title} />
          </div>
        </div>

        {/* Diagnosis Section */}
        <div>
          <H2
            title="Diagnosis of Bowel cancer"
            className="text-2xl font-medium mb-4"
          />
          <p className="text-gray-700 mb-6 font-light">
            Several diagnostic methods are used to detect and confirm Bowel
            cancer, helping doctors determine the stage and plan the appropriate
            treatment.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {data.diagnosis[0].aneurysmSymptoms.map((diagnosis, idx) => (
              <div
                key={idx}
                className="bg-[#D84498] text-white p-3 rounded h-24 font-light"
              >
                <div className="font-medium">{diagnosis.title}</div>
                {diagnosis.description}
              </div>
            ))}
          </div>
          <div className="mt-4 text-start">
           <KnowMore title={data.title} />
          </div>
        </div>
      </div>

      {/* Treatments Section */}
      <div className="mt-12">
        <H2
          title="Treatment for Bowel cancer"
            className="text-2xl font-medium mb-6 text-center"
        />
        <p className="mt-4 text-gray-600 text-start w-full text-lg mx-auto font-light leading-relaxed">
          Treatment for Bowel cancer depends on the stage of the cancer, its
          location, and the patient’s overall health. Common treatments include:
        </p>
        <div className="grid grid-cols-1 gap-6">
          {data.treatments.map((treatment, index) => (
            <div
              key={index}
              className="border border-pink-400 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl text-hciPrimary font-medium text-black">
                {treatment.heading}
              </h2>
              {treatment.description && (
                <p className="text-gray-600 mb-4 font-light">
                  {treatment.description}
                </p>
              )}
              <div className="space-y-4 mb-4">
                
                {treatment.aneurysmSymptoms.map((item, idx) => (
                  <div key={idx} className="text-gray-600 font-light">
                    <span className="text-[#D84498]">
                      {" "}
                      {item.title && <strong>{item.title}: </strong>}
                    </span>
                    {item.description}
                  </div>
                ))}
              </div>
              {treatment.heading === "Surgery" && (
                <IssuesLink head='Bowel cancer' />
              )}
              
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="space-y-4 mt-8">
          <Conclusion data={data.conclusion} />
          <FooterLinks head='Bowel cancer' />
          <BookButton />
        </div>
    </div>
    </>
  );
}

export default GICancer;

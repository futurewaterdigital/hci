"use client";
import React from "react";
import Banner from "@/components/Common/Banner";
import H2 from "@/components/ui/h2";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";

import H1 from "@/components/ui/h1";
import KnowMore from "@/components/ui/KnowMore";
import CausesKnowMore from "@/components/ui/CausesKnowMore";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import BookButton from "@/components/cardiacComponents/BookButton";
import { useRouter } from "next/navigation";

const data = {
  title: "Lung Cancer",
  bannerImage: "/oncology/lung-cancer-banner.png",
  description: `Lung cancer is a major health concern, significantly contributing to cancer-related deaths across the population. Although often associated with smoking, this cancer can also develop due to environmental factors or genetic predisposition. Early detection and a comprehensive treatment approach are critical to improving outcomes for those affected.`,
  overview:
    "Several factors contribute to the development of lung cancer, with smoking being the leading cause. However, environmental exposure can also be an issue to other environmental and genetic factors.",

  causes: [
    {
      title: "Smoking",
      description:
        "Tobacco use is responsible for about 85% of lung cancer cases. The risk increases with prolonged smoking, but even second-hand smoke can be harmful.",
    },
    {
      title: "Exposure to Carcinogens",
      description:
        "Harmful substances like asbestos, radon gas, and industrial chemicals can increase the risk, especially for those working in high-risk industries.",
    },
    {
      title: "Air Pollution",
      description:
        "Long-term exposure to high levels of pollution, particularly in urban areas, may contribute to the onset of lung cancer.",
    },
    {
      title: "Family History",
      description:
        "Genetic factors can play a role in lung cancer, and having a family member with the disease may increase risk.",
    },
    {
      title: "Previous Radiation Therapy",
      description:
        "Individuals who have undergone radiation therapy for other cancers may face a higher risk of developing lung cancer later in life.",
    },
    {
      title: "Genetic Mutations",
      description:
        "Some people may develop lung cancer due to spontaneous genetic mutations unrelated to smoking or other environmental causes.",
    },
  ],

  symptoms: [
    {
      category: "Persistent Cough",
      description:
        " A cough that lingers or worsens over time, sometimes withblood-tinged sputum.",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Chest Pain",
      description:
        "Discomfort in the chest, particularly when breathing deeply, laughing, or coughing.",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Shortness of Breath",
      description:
        "Difficulty breathing, often due to blocked airways or fluid buildup around the lungs.",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Fatigue",
      description: "Persistent tiredness or weakness.",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Unexplained Weight Loss",
      description:
        "Significant weight loss without any clear reason.",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Hoarseness",
      description:
        "A change in voice, often indicating a tumor affecting the nerves.",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Bone Pain",
      description:
        "Pain specifically in the back or hips, indicating that the cancer has spread.",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Recurring Infections",
      description: "Frequent episodes of pneumonia or bronchitis.",
      bgColor: "bg-[#0E56A0] text-white",
    },
  ],

  diagnosis: [
    {
      category: "Imaging Tests",
      description:
        "Used to detect abnormal masses, consisting of CT scans for precise images, staging, and monitoring treatment response.",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Chest X-ray",
      description: "Common diagnostic method for detecting abnormalities.",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "CT Scan",
      description: "Detailed imaging of the lungs and surrounding structures.",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "PET Scan",
      description:
        "Used to detect cancerous cells by highlighting areas of increased metabolic activity.",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Sputum Cytology",
      description: "Analysis of lung secretions to check for cancerous cells.",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Biopsy",
      description:
        "Tissue samples taken for evaluation, either through a transbronchial or needle biopsy.",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Molecular Testing",
      description:
        "Advanced genetic analysis (e.g., EGFR, ALK) to guide targeted therapies.",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Pulmonary Function Tests",
      description:
        "Assessing lung function to determine a patient's ability to withstand treatments like surgery.",
      bgColor: "bg-[#D84498] text-white",
    },
  ],

  treatments: [
    {
      heading: "Surgery",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Lobectomy: Removing one lobe of the lung.",
        },
        { description: "Pneumonectomy: Complete removal of a lung, typically for larger or more aggressive tumors." },
      ],
    },
    {
      heading: "Chemotherapy",
      description:
        "Chemotherapy is used to kill or shrink cancer cells and is often combined with surgery or radiation therapy. It may also be used as the primary treatment for advanced stages.",
      aneurysmSymptoms: [
        { description: "" },
        { description: "" },
        { description: "" },
      ],
    },
    {
      heading: "Targeted Therapy",
      description:
        "Certain medications target specific genetic mutations within cancer cells (e.g., EGFR, ALK). Targeted therapy can be highly effective with fewer side effects compared to traditional chemotherapy.",
      aneurysmSymptoms: [
        { description: "" },
        { description: "" },
        { description: "" },
      ],
    },
    {
      heading: "Radiation Therapy",
      description:
        "Radiation therapy is a crucial treatment for lung cancer, particularly for patients unable to undergo surgery or for those whose tumors are inoperable. Newer techniques in radiation therapy allow for more precise treatment, sparing healthy tissues.",
      aneurysmSymptoms: [
        {
          description:
            "",
        },
        {
          description:
            "",
        },
        { description: "" },
      ],
    },
    {
      heading: "Proton Therapy",
      description:
        "Proton therapy is an advanced form of radiation that precisely targets cancerous cells while minimizing damage to surrounding healthy tissues, such as the heart or esophagus. It allows for higher radiation doses, improving the chance of tumor control while reducing side effects.",
      aneurysmSymptoms: [
        {
          description:
            "",
        },
        {
          description:
            "",
        },
        { description: "" },
      ],
    },
    {
      heading: "CyberKnife Treatment",
      description:
        "CyberKnife is a robotic system that delivers highly targeted radiation to lung tumors with extreme precision. It tracks the tumor’s movement in real-time (important for lung cancer, where tumors move as a person breathes). CyberKnife requires fewer treatment sessions, offering patients a non-invasive, pain-free alternative to traditional surgery.",
      aneurysmSymptoms: [
        {
          description:
            "",
        },
        { description: "" },
        {
          description: "",
        },
      ],
    },
    {
      heading: "Immunotherapy",
      description:
        "Immunotherapy uses drugs to help the body’s immune system recognize and fight cancer cells. It is often used in combination with other treatments and can be particularly effective for certain types of lung cancer.",
      aneurysmSymptoms: [
        { description: "" },
        { description: "" },
        {
          description:
            "",
        },
      ],
    },
    {
      heading: "Palliative Care",
      description:
        "For advanced lung cancer, palliative care focuses on relieving symptoms such as pain or breathing difficulties, aiming to improve the quality of life.",
      aneurysmSymptoms: [
        { description: "" },
        { description: "" },
        {
          description:
            "",
        },
      ],
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph: `Lung cancer is a serious disease, but advancements in surgery, chemotherapy, targeted therapy, and immunotherapy have made treatment outcomes better than in the past. Smoking cessation is the most effective lung cancer prevention strategy. For those already diagnosed, early identification and regular monitoring can ensure timely intervention to manage the disease effectively.`,
    },
  ],

  best_hospitals: [
    { city: "India", url: "/best-lung-cancer-hospital-india" },
    { city: "Bangalore", url: "/best-lung-cancer-hospital-bangalore" },
    { city: "Chennai", url: "/best-lung-cancer-hospital-chennai" },
    { city: "Delhi", url: "/best-lung-cancer-hospital-delhi" },
    { city: "Hyderabad", url: "/best-lung-cancer-hospital-hyderabad" },
    { city: "Mumbai", url: "/best-lung-cancer-hospital-mumbai" },
  ],
};

function LungCancer() {
  const router = useRouter();
  const handleClick = () => {
    // Navigate to homepage
    router.push("/");

    // Wait for navigation to complete then scroll to form
    setTimeout(() => {
      const formElement = document.querySelector("#consultation-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="relative mx-auto px-4 md:px-8">
        <div className="lg:container mx-auto space-y-6 ">
          <H1 title={data.title} />
          <div className="mt-6">
            <p className="text-gray-600  font-light">{data.description}</p>
          </div>

          <H2
            title="Causes of Lung Cancer"
            className="text-2xl font-semibold mb-4 text-center"
          />
          <p className="font-light">{data.overview}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {data.causes.map((cause, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                {/* <H3
                title={cause.title}
                className="text-lg font-semibold text-blue-600 mb-2"
              /> */}
                <h3 className="text-lg font-medium text-[#0E56A0] mb-2">
                  {" "}
                  {cause.title}
                </h3>
                <p className="text-gray-700 text-sm font-light">
                  {cause.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-start mb-8">
            <CausesKnowMore title={data.title} />
          </div>

          <div className=" gap-6 mb-8">
            <div>
              <H2
                title="Symptoms of Lung Cancer"
                className="text-xl font-medium mb-4 text-center"
              />
              <p className="mb-4 font-light">
                In its early stages, lung cancer may not cause noticeable
                symptoms. As the disease progresses, common symptoms include:
              </p>
              <div className="space-y-2">
                <DataBoxes
                  title=""
                  header=""
                  data={data.symptoms}
                  myclass="grid grid-cols-1 gap-2"
                />
              </div>
              <div className="text-start mt-4 mb-8">
                <KnowMore title={data.title} />
              </div>
            </div>
            <div>
              <H2
                title="Diagnosis of Lung Cancer"
                className="text-xl font-medium mb-4 text-center"
              />
              <p className="mb-4 font-light">
                Lung cancer is diagnosed through a combination of physical
                exams, imaging, and laboratory tests:
              </p>
              <div className="space-y-2">
                <DataBoxes
                  title=""
                  header=""
                  data={data.diagnosis}
                  myclass="grid grid-cols-1 gap-2"
                />
              </div>
              <div className="text-start mt-4 mb-8">
                <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
                  <button
                    onClick={handleClick}
                    className="text-start underline"
                  >
                    To get the best diagnosis for lung cancer and related issues, click here
                  </button>
                </p>
              </div>
            </div>
          </div>

          <H2
            title="Treatment for Lung Cancer"
            className="text-2xl font-medium mb-4 text-center"
          />
          <p className="font-light mb-4">
            Lung cancer treatment is varialized based on the cancer type, stage,
            and the patient&apos;s overall health. The most common treatments
            include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {data.treatments.slice(0, 3).map((treatment, index) => (
              <div
                key={index}
                className="border border-pink-400 rounded-lg p-4 shadow-sm"
              >
                <h2 className="text-lg font-medium text-[#0E56A0] mb-2">
                  {treatment.heading}
                </h2>
                <p className="text-gray-700 mb-2 font-light">
                  {treatment.description}
                </p>
                <div className="font-light text-gray-600 space-y-1">
                  {treatment.aneurysmSymptoms.map((symptom, idx) => {
                    const parts = symptom.description.split(":");
                    return (
                      <p key={idx}>
                        {parts.length > 1 ? (
                          <>
                            <strong>{parts[0]}:</strong> {parts.slice(1).join(":").trim()}
                          </>
                        ) : (
                          symptom.description
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {data.treatments.slice(3, 5).map((treatment, index) => (
              <div
                key={index}
                className="border border-pink-400 rounded-lg p-4 shadow-sm"
              >
                <h2 className="text-lg font-medium text-[#0E56A0] mb-2">
                  {treatment.heading}
                </h2>

                <p className="text-gray-700 mb-2 font-light">
                  {treatment.description}
                </p>

                <div className="font-light text-gray-600 space-y-1">
                  {treatment.aneurysmSymptoms.map((symptom, idx) => {
                    const parts = symptom.description.split(":");
                    return (
                      <p key={idx}>
                        {parts.length > 1 ? (
                          <>
                            <strong>{parts[0]}:</strong> {parts.slice(1).join(":").trim()}
                          </>
                        ) : (
                          symptom.description
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {data.treatments.slice(5, 8).map((treatment, index) => (
              <div
                key={index}
                className="border border-pink-400 rounded-lg p-4 shadow-sm"
              >
                <h2 className="text-lg font-medium text-[#0E56A0] mb-2">
                  {treatment.heading}
                </h2>

                <p className="text-gray-700 mb-2 font-light">
                  {treatment.description}
                </p>

                <div className="font-light text-gray-600 space-y-1">
                  {treatment.aneurysmSymptoms.map((symptom, idx) => {
                    const parts = symptom.description.split(":");
                    return (
                      <p key={idx}>
                        {parts.length > 1 ? (
                          <>
                            <strong>{parts[0]}:</strong> {parts.slice(1).join(":").trim()}
                          </>
                        ) : (
                          symptom.description
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 mt-8">
            <Conclusion data={data.conclusion} />
            <FooterLinks head={data.title} />
            <BookButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default LungCancer;

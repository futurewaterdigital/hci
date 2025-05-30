import React from "react";
import Title from "@/components/cardiacComponents/Title";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import Banner from "@/components/Common/Banner";
import BookButton from '@/components/cardiacComponents/BookButton'


const data = {
  title: "Liver Cancer",
  description:
    "Liver cancer, or hepatic cancer, originates in the liver cells and is one of the leading causes of cancer-related deaths globally. It is a serious condition often associated with chronic liver disease and typically occurs in individuals with a history of hepatitis or long-term liver damage. Early detection is crucial to improving survival rates, as liver cancer often progresses rapidly.",

  riskFactors: [
    {
      title: "Hepatitis B or C Infection",
      description:
        "Chronic infection with hepatitis B or C viruses is one of the leading causes of liver cancer, especially in regions where these infections are prevalent. The viruses cause long-term liver inflammation, increasing the risk of liver cancer over time.",
    },
    {
      title: "Cirrhosis",
      description:
        "Cirrhosis is scarring of the liver tissue due to chronic damage, often caused by alcohol abuse, hepatitis infection, or fatty liver disease. Cirrhosis significantly increases the risk of developing liver cancer.",
    },
    {
      title: "Aflatoxin Exposure",
      description:
        "Aflatoxins are harmful substances produced by fungi that can contaminate food supplies, particularly in regions with poor food storage practices. Long-term exposure to them increases the risk for liver cancer .",
    },
    {
      title: "Non-Alcoholic Fatty Liver Disease (NAFLD)",
      description:
        "Accumulation of fat in the liver, even in non-drinkers, can lead to cirrhosis and raise the risk of liver cancer.",
    },
    {
      title: "Alcohol Abuse",
      description:
        "Long-term excessive alcohol consumption leads to liver cirrhosis and increases the risk of liver cancer.",
    },
    {
      title: "Diabetes and Obesity",
      description:
        " Individuals with type 2 diabetes or obesity are at increased risk of developing liver cancer, likely due to their association with fatty liver disease and chronic liver inflammation.",
    },
    {
      title: "Family History",
      description:
        "A family history of liver cancer may increase the likelihood of developing the disease, possibly due to inherited genetic factors or shared environmental risks.",
    },
  ],

  causes: [
    {
      heading: "Causes of Liver Cancer",
      subheading:
        "Several risk factors contribute to the development of liver cancer, most of which are related to chronic liver damage or infections. The most common causes include:",
      items: [
        {
          title: "Hepatitis B or C Infection",
          description:
            "Chronic infection with hepatitis B or C viruses is one of the leading causes of liver cancer, especially in regions where these infections are prevalent. The viruses cause long-term liver inflammation, increasing the risk of liver cancer over time.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Non-Alcoholic Fatty Liver Disease (NAFLD)",
          description:
            "Accumulation of fat in the liver even in non-drinkers, can lead to cirrhosis and raise the risk of liver cancer.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Cirrhosis",
          description:
            "Cirrhosis is scarring of the liver tissue due to chronic damage, often caused by alcohol abuse, hepatitis infection, or fatty liver disease. Cirrhosis significantly increases the risk of developing liver cancer.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Alcohol Abuse",
          description:
            "Long-term excessive alcohol consumption leads to liver cirrhosis and increases the risk of liver cancer.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Aflatoxin Exposure",
          description:
            "Exposure to aflatoxins (toxins from fungi that can contaminate food supplies), particularly in regions with poor food storage practices. Long-term exposure to them increases the risk for liver cancer.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Diabetes and Obesity",
          description:
            "Individuals with Type 2 diabetes or obesity are at increased risk of developing liver cancer, particularly when they have insulin resistance and chronic liver inflammation.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Family History",
          description:
            "A family history of liver cancer may increase the likelihood of developing the disease, possibly due to inherited genetic factors or shared environmental risks.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: "Symptoms of Liver Cancer",
      description:
        "Liver cancer often does not cause symptoms in its early stages. As the disease progresses, symptoms may develop, which may include:",
      items: [
        {
          title: "Unexplained Weight Loss",
          description:
            "Significant and unintentional weight loss without any clear cause",
          className: "bg-[#0E56A0] text-white p-2 rounded font-light",
        },
        {
          title: "Loss of Appetite",
          description:
            "Decreased interest in food, often leading to malnutrition",
          className: "bg-[#0E56A0] text-white p-2 rounded font-light",
        },
        {
          title: "Upper Abdominal Pain",
          description:
            "Persistent pain or discomfort in the upper right side of the abdomen, which may radiate to the back or shoulder.",
          className: "bg-[#0E56A0] text-white p-2 rounded font-light",
        },
        {
          title: "Swelling of the Abdomen",
          description: "Abdominal bloating or swelling caused by an enlarged liver or accumulation of fluid (ascites).",
          className: "bg-[#0E56A0] text-white p-2 rounded font-light",
        },
        {
          title: "Jaundice",
          description:
            "Yellowing of the skin and eyes, indicating liver dysfunction",
          className: "bg-[#0E56A0] text-white p-2 rounded font-light",
        },
        {
          title: "Fatigue",
          description: `Persistent tiredness and weakness that doesn't improve with rest`,
          className: "bg-[#0E56A0] text-white p-2 rounded font-light",
        },
        {
          title: "Nausea and Vomiting",
          description: "Frequent feelings of nausea or bouts of vomiting",
          className: "bg-[#0E56A0] text-white p-2 rounded font-light",
        },
        {
          title: "Itchy Skin",
          description:
            "Irritation or itching of the skin due to bile accumulation in the bloodstream, a sign of liver dysfunction.",
          className: "bg-[#0E56A0] text-white p-2 rounded font-light",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis of Liver Cancer",
      description: `Diagnosing liver cancer typically begins with a thorough review of the patient's medical history and physical examination, followed by diagnostic procedures, including:`,
      items: [
        {
          title: "Blood Tests",
          items: [
            "Alpha-fetoprotein (AFP) Test: Elevated levels of AFP in the blood may indicate liver cancer or other liver diseases.",
            "Liver Function Tests (LFTs): These tests measure the levels of liver enzymes and other substances in the blood to assess liver health.",
          ],
          className: "bg-[#D84498] text-white p-2 rounded",
        },
        {
          title: "Imaging Tests",
          items: [
            "Ultrasound: A non-invasive imaging test that can detect masses or tumors in the liver.",
            "CT Scan or MRI: These provide more detailed images of the liver, helping determine the size, location, and extent of the cancer.",
          ],
          className: "bg-[#D84498] text-white p-2 rounded",
        },
        {
          title: "Biopsy",
          description:
            "A small sample of liver tissue is taken and examined under a microscope to confirm the presence of cancer cells. This is often done using a fine needle inserted into the liver.",
          className: "bg-[#D84498] text-white p-2 rounded",
        },
        {
          title: "Liver Function Tests (LFTs)",
          description:
            "These tests assess the overall functioning of the liver and are used to determine if the liver is healthy enough to undergo surgery or other treatments.",
          className: "bg-[#D84498] text-white p-2 rounded",
        },
      ],
    },
  ],

  treatments: [
    {
      heading: "Surgery",
      description: "",
      items: [
        {
          title: "Partial Hepatectomy",
          description:
            "In cases of early-stage liver cancer, surgery may include removing the cancerous part of the liver (resection) while keeping the healthy portion intact.",
        },
        {
          title: "Liver Transplant",
          description:
            "For patients with liver cancer confined to the liver but not treatable by resection, liver transplantation is a potential cure, provided a suitable donor is available. The damaged liver is replaced with a healthy donor liver.",
        },
      ],
    },
    {
      heading: "Radiation Therapy",
      description: "",
      items: [
        {
          title: "External Beam Radiation Therapy",
          description:
            "High-energy rays target the cancer cells, shrinking tumors or controlling pain in cases where surgery is not an option.",
        },
        {
          title: "Proton Therapy",
          description:
            "This type of radiation therapy uses protons to deliver highly precise radiation to the tumor while minimizing damage to surrounding tissues.",
        },
        {
          title: "Stereotactic Body Radiation Therapy (SBRT)",
          description:
            "Another precise form of radiation therapy used to deliver focused doses to the tumor while sparing healthy tissue.",
        },
      ],
    },
    {
      heading: "Ablation Therapy",
      description: "",
      items: [
        {
          title: "Radiofrequency Ablation (RFA)",
          description:
            "This treatment uses heat generated by radio waves to destroy cancer cells in the liver.",
        },
        {
          title: "Microwave Ablation",
          description:
            "Similar to RFA but uses microwave energy to heat and kill cancer cells.",
        },
        {
          title: "Cryoablation",
          description:
            "Freezes and destroys cancer cells using extreme cold temperatures.",
        },
      ],
    },
    {
      heading: "Chemotherapy",
      description: "",
      items: [
        {
          title: "Systemic Chemotherapy",
          description:
            "Involves the use of drugs to kill cancer cells or stop them from growing. It is generally less effective for liver cancer compared to other cancers, but it may be used in certain cases.",
        },
        {
          title: "Transarterial Chemoembolization (TACE)",
          description:
            "A localized chemotherapy treatment where drugs are delivered directly into the liver cancer through the blood vessels, limiting exposure to the rest of the body.",
        },
      ],
    },
    {
      heading: "Targeted Therapy",
      description: "",
      items: [
        {
          title: "Sorafenib and Lenvatinib",
          description:
            "These targeted drugs inhibit the growth of new blood vessels that feed liver tumors and may be used in advanced cases where surgery is not an option.",
        },
      ],
    },
    {
      heading: "Immunotherapy",
      description: "",
      items: [
        {
          title: "Checkpoint Inhibitors",
          description:
            "These drugs help the immune system recognize and attack liver cancer cells. Immunotherapy is used in some cases of advanced liver cancer that do not respond to other treatments.",
        },
      ],
    },
    {
      heading: "Palliative Care",
      description:
        "For patients with advanced or inoperable liver cancer, palliative care focuses on managing symptoms such as pain, nausea, and fatigue, and improving the quality of life.",
      items: [],
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Liver cancer poses a significant health threat, particularly in individuals with chronic liver disease. In regions where hepatitis infections and alcohol-related liver damage are common, the incidence of liver cancer remains high. However, early detection, through regular screenings and monitoring in high-risk individuals, can improve treatment outcomes. With advancements in surgery, radiation therapy, and targeted treatments, patients have more options and better chances for recovery. A comprehensive approach that includes liver specialists, oncologists, and support staff is essential for managing and treating liver cancer effectively.",
    },
  ],

  links: [
    {
      text: "To Consult With The Best Doctor For Treatment Of Liver Cancer, Click Here",
      url: "/best-doctor-liver-cancer-treatment",
    },
    {
      text: "For The Best Hospital For The Treatment Of Liver Cancer In India, Click Here",
      url: "/best-liver-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Liver Cancer In Bangalore, Click Here",
      url: "/best-liver-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Liver Cancer In Chennai, Click Here",
      url: "/best-liver-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Liver Cancer In Delhi, Click Here",
      url: "/best-liver-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Liver Cancer In Hyderabad, Click Here",
      url: "/best-liver-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Liver Cancer In Mumbai, Click Here",
      url: "/best-liver-cancer-hospital-mumbai",
    },
  ],
};

function LiverCancer() {
  return (
    <>
      {/* Banner Image  */}
      <Banner image="/oncology/liver-cancer-banner.png" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title title={data.title} className="text-[#D84598]" />
        <div className="mt-6">
          <p className="text-gray-600 text-lg mb-10 font-light">
            {data.description}
          </p>
        </div>



        {/* Causes Section */}
        <div className="mt-12">
          <H2
            title={data.causes[0].heading}
            className="text-3xl text-center font-semibold mb-4"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.causes[0].subheading}
          </p>
          <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-4">
            {data?.riskFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-[#FDE7B0] rounded-md p-5 shadow-sm flex flex-col justify-between h-full min-h-[120px]"
              >
                <h3 className="font-bold text-base mb-1">{factor.title}</h3>
                <p className="text-sm text-gray-900 leading-snug font-light">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-start">
            <Link
              href="/treatment/oncology/liver-cancer-info"
              className="text-hciPrimary font-semibold underline"
            >
              To Know More About Liver Cancer And Its Treatment, Click Here
            </Link>
          </div>
        </div>

        {/* Symptoms Section */}
        <div className="mt-12">
          <H2
            title={data.symptoms[0].heading}
            className="text-2xl font-semibold mb-4"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.symptoms[0].description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.symptoms[0].items.map((symptom, idx) => (
              <div key={idx} className={symptom.className}>
                <strong>{symptom.title}:</strong> {symptom.description}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/treatment/oncology/liver-cancer-causes"
              className="text-hciPrimary font-semibold underline"
            >
              To Know More About Liver Cancer And Its Causes And Treatment, Click
              Here
            </Link>
          </div>
        </div>

        {/* Diagnosis Section */}
        <div className="mt-12">
          <H2
            title={data.diagnosis[0].heading}
            className="text-2xl font-semibold mb-4"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.diagnosis[0].description}
          </p>
          <div className="space-y-4">
            {data.diagnosis[0].items.map((test, idx) => (
              <div key={idx} className={test.className}>
                <strong>{test.title}</strong>
                {test.items ? (
                  <ul className="list-disc pl-5 mt-2 font-light">
                    {test.items.map((item, i) => (
                      <li key={i}>
                        <span className="font-semibold">
                          {item.split(":")[0]}:
                        </span>{" "}
                        <span className="font-light">
                          {item.split(":").slice(1).join(":").trim()}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-light">{test.description}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 text-left">
            <Link
              href="/treatment/oncology/liver-cancer-diagnosis"
              className="text-hciPrimary font-semibold underline"
            >
              To Get The Best Diagnosis For Liver Cancer And Related Issues, Click
              Here
            </Link>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="mt-12">
          <H2
            title="Treatment for Liver Cancer"
            className="text-2xl font-semibold mb-6 text-center"
          />
          <p className="text-gray-600 mb-6 font-light">
            The treatment approach for liver cancer depends on several factors,
            including the size and function of the liver, the stage of cancer, and
            the patient&apos;s overall health. Treatment options may include:
          </p>
          <div className="space-y-6">
            {data.treatments.map((treatment, index) => (
              <div
                key={index}
                className="border border-pink-400 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                {treatment.heading && (
                  <h3 className={`text-lg font-semibold mb-3 text-[#0E56A0]`}>
                    {treatment.heading}
                  </h3>
                )}
                {treatment.description && (
                  <p className="text-gray-600 mb-4 font-light">
                    {treatment.description}
                  </p>
                )}
                {treatment.items && treatment.items.length > 0 && (
                  <div className="space-y-4">
                    {treatment.items.map((item, idx) => (
                      <div key={idx} className="text-gray-600">
                        {item.title && (
                          <span className="text-[#D84498] font-semibold">{item.title}: </span>
                        )}
                        <span className="font-light">{item.description}</span>
                      </div>
                    ))}
                  </div>

                )}
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <h2 className={`text-xl font-bold text-center mb-6`}>Conclusion</h2>
          {/* <H2 title="Conclusion" className="text-xl font-semibold mb-4" /> */}
          <p className="text-gray-600 font-light">
            {data.conclusion[0].paragraph}
          </p>
        </div>

        {/* Links */}
        <div className="mt-8 space-y-4">
          {data.links.map((link, index) => (
            <div key={index} className="text-start">
              <Link
                href={link.url}
                className="text-hciPrimary font-semibold underline"
              >
                {link.text}
              </Link>
            </div>
          ))}
        </div>
        <BookButton />

      </div>
    </>
  );
}

export default LiverCancer;

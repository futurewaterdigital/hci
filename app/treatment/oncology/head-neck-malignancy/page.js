import React from "react";
import Banner from "@/components/Common/Banner";
import H2 from "@/components/ui/h2";
import DataBoxes from "@/components/cardiacComponents/Box";
import H1 from "@/components/ui/h1";
import KnowMore from "@/components/ui/KnowMore";
import IssueLinks from "@/components/ui/IssuesLinks";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import BookButton from "@/components/cardiacComponents/BookButton";

const data = {
  title: "Head and Neck Malignancy",
  bannerImage: "/oncology/head-neck-malignancy.png",
  description: `Head and neck malignancies encompass cancers that originate in the mouth, throat, nose, salivary glands, thyroid, and larynx (voice box) in the region. These cancers can impact vital functions such as breathing, swallowing, speaking, and facial movement. Arising from the complexity of head and neck region, multidisciplinary treatment approach is necessary to restore both function and quality of life.`,
  overview: "",

  cancer_types: [
    {
      heading: "Oral Cancers",
      description:
        "Found on the lips, tongue, gums, inner cheeks, and roof of the mouth",
      aneurysmSymptoms: [
        {
          description:
            "Signs include non-healing sores, bleeding, and difficulty eating.",
        },
      ],
    },
    {
      heading: "Oropharyngeal Cancer",
      description: "Affects the back of the throat, tonsils, and soft palate, often linked to HPV.",
      aneurysmSymptoms: [
        {
          description:
            "Symptoms include sore throat, voice changes, and difficulty swallowing.",
        },
      ],
    },
    {
      heading: "Laryngeal Cancer",
      description:
        "Occurs in the voice box, affecting breathing and speech.",
      aneurysmSymptoms: [
        { description: "Hoarseness and chronic coughing are common indicators." },
      ],
    },
    {
      heading: "Nasopharyngeal Cancer",
      description: "Found in the upper throat behind the nose.",
      aneurysmSymptoms: [
        {
          description:
            "Causes nasal blockage, nosebleeds, and headaches.",
        },
      ],
    },
    {
      heading: "Salivary Gland Tumors",
      description: "Affect the parotid, submandibular, or sublingual glands.",
      aneurysmSymptoms: [
        { description: "Symptoms include swelling and facial numbness." },
      ],
    },
    {
      heading: "Thyroid Cancer",
      description:
        "Manifests as a lump in the neck and may affect hormone production.",
      aneurysmSymptoms: [
        {
          description:
            "",
        },
      ],
    },
  ],

  causes: [
    {
      category: "Tobacco and Alcohol Use",
      description:
        "Primary risk factors for most head and neck cancers.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "HPV Infection",
      description:
        "Strongly linked to oropharyngeal cancers.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Sun Exposure",
      description: "Associated with lip cancers.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Environmental Hazards",
      description:
        "Exposure to chemicals and industrial pollutants.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Genetics and Family History",
      description:
        "Some individuals are predisposed to these cancers.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Poor Oral Hygiene and Diet Deficiency",
      description:
        "Contributing factors, particularly for oral cancers.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],

  diagnosis: [
    {
      category: "Physical Examination",
      description:
        "Doctors assess visible lumps or sores in the mouth and throat.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Endoscopy",
      description:
        "A flexible camera is used to examine deeper tissues in the throat and larynx.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Imaging Studies",
      description:
        "CT, MRI, and PET scans help determine tumour size and spread.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Biopsy",
      description: "Tissue samples are examined to confirm malignancy.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "HPV Testing",
      description: "Used for detecting HPV-positive oropharyngeal cancers.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Ultrasound and Fine Needle Aspiration",
      description: "Common for diagnosing thyroid cancers.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  treatments: [
    {
      heading: "Surgery",
      description:
        "",
      aneurysmSymptoms: [
        {
          description:
            "Removes the tumour along with affected tissues or lymph nodes.",
        },
        {
          description:
            "Reconstructive surgery restores function after removal of large tumours.",
        },
        {
          description:
            "Minimally invasive surgeries are used for early-stage cancers.",
        },
      ],
    },
    {
      heading: "Radiation Therapy",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "External beams of radiation target the tumour cells.",
        },
        {
          description:
            "Techniques like IMRT (Intensity-Modulated Radiation Therapy) limit damage to surrounding tissues.",
        },
        {
          description:
            "Can be combined with surgery or chemotherapy for better outcomes.",
        },
      ],
    },
    {
      heading: "Chemotherapy",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Drugs destroy rapidly growing cancer cells.",
        },
        { description: "Commonly used for advanced cancers or when surgery is not feasible." },
        { description: "Can be used in conjunction with radiation (chemoradiation)." },

      ],
    },
    {
      heading: "Targeted Therapy",
      description:
        "",
      aneurysmSymptoms: [
        { description: "Focuses on specific molecules driving cancer growth, like EGFR inhibitors (e.g., cetuximab)." },
        { description: "Less toxic compared to chemotherapy, with fewer side effects." },
      ],
    },
    {
      heading: "Immunotherapy",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Boosts the immune system to fight cancer cells effectively.",
        },
        {
          description:
            "Checkpoint inhibitors such as nivolumab are used for HPV-positive or treatment-resistant cancers.",
        },
      ],
    },
    {
      heading: "Rehabilitation And Support",
      description:
        "Speech Therapy: Helps patients regain speech after surgery or radiation.",
      aneurysmSymptoms: [
        {
          description:
            "Nutritional Support: Critical for maintaining strength during treatment.",
        },
        {
          description:
            "Psychological support and counselling are essential to manage emotional well-being.",
        },
      ],
    },
  ],
  conclusion: [
    {
      header: "Conclusion",
      paragraph: `Head and neck malignancies are treatable with early diagnosis and a comprehensive care approach. Multidisciplinary treatment—including surgery, radiation, chemotherapy, and immunotherapy—improves the chances of recovery. Rehabilitation services such as speech and nutritional therapy are essential for restoring function and ensuring a good quality of life. Patients are encouraged to seek timely medical advice, especially if they have risk factors such as smoking, alcohol use, or HPV exposure.`,
    },
  ],

  links: [
    {
      title: `To Consult with The Best Doctor For Treatment Of Head and Neck Malignancy, Click Here`,
      url: "", // Replace "#" with the actual link
    },
    {
      title: `For The Best Hospital For Head and Neck Malignancy In India, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      title: `For The Best Hospital For Head and Neck Malignancy In Bangalore, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      title: `For The Best Hospital For Head and Neck Malignancy In Chennai, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      title: `For The Best Hospital For Head and Neck Malignancy In Delhi, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      title: `For The Best Hospital For Head and Neck Malignancy In Hyderabad, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      title: `For The Best Hospital For Head and Neck Malignancy In Mumbai, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
  ],
  best_hospitals: [
    { city: "Delhi", url: "/best-head-neck-cancer-hospital-delhi" },
    { city: "Mumbai", url: "/best-head-neck-cancer-hospital-mumbai" },
    { city: "Bangalore", url: "/best-head-neck-cancer-hospital-bangalore" },
    { city: "Hyderabad", url: "/best-head-neck-cancer-hospital-hyderabad" },
    { city: "Kolkata", url: "/best-head-neck-cancer-hospital-kolkata" },
  ],
};

function HeadNeckMalignancy() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Image */}

        <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
          <H1 title={data.title} />
          <div className="mt-6">
            <p className="text-gray-600 font-light">{data.description}</p>
          </div>
          <H2
            title="Types of Head and Neck Malignancies"
            className="text-2xl font-medium mb-4 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {data.cancer_types.map((cancer, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <h2 className="text-lg font-medium mb-2 text-hciPrimary">
                  {cancer.heading}
                </h2>
                <p className="text-gray-700 mb-2 font-light">
                  {cancer.description}
                </p>
                {cancer.aneurysmSymptoms.map((symptom, idx) => (
                  <p key={idx} className=" text-gray-600 font-light">
                    {symptom.description}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 mb-8">
            <div>
              <H2 title="Causes" className="text-xl font-medium mb-4" />
              <div className="space-y-2">
                <DataBoxes
                  title=""
                  header=""
                  data={data.causes}
                  myclass="grid grid-cols-2 gap-2"
                />
              </div>
              <div className="mt-6 text-start">
                <KnowMore title={data.title} />
              </div>
            </div>
            <div>
              <H2 title="Diagnosis" className="text-xl font-medium mb-4" />
              <div className="space-y-2">
                <DataBoxes
                  title=""
                  header=""
                  data={data.diagnosis}
                  myclass="grid grid-cols-2 gap-2"
                />
              </div>
              <div className="mt-6 text-start">
                <IssueLinks head={data.title} />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <Banner image="/oncology/head-neck-malignancy-2.png" />
          </div>
          <H2
            title="Treatment"
            className="text-2xl font-medium mb-4 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
            {data.treatments.slice(0, 4).map((treatment, index) => (
              <div
                key={index}
                className="border border-hciSecondary rounded-lg p-4 shadow-sm"
              >
                <h2 className="text-lg font-medium text-hciPrimary mb-2">
                  {treatment.heading}
                </h2>
                <p className="text-gray-700 mb-2 font-light">
                  {treatment.description}
                </p>
                <ul className=" text-gray-600 list-disc pl-5 font-light">
                  {treatment.aneurysmSymptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom.description}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {data.treatments.slice(4, 6).map((treatment, index) => (
              <div
                key={index}
                className="border border-hciSecondary rounded-lg p-4 shadow-sm"
              >
                <h2 className="text-lg font-medium text-hciPrimary mb-2">
                  {treatment.heading}
                </h2>
                <p className="text-gray-700 mb-2 font-light">
                  {treatment.description}
                </p>
                <ul className=" text-gray-600 list-disc pl-5 font-light">
                  {treatment.aneurysmSymptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom.description}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-start">
            <KnowMore title={data.title} />
          </div>
          {/* Conclusion */}
          <div className="mt-12">
            <Conclusion data={data.conclusion} />
            <FooterLinks head={data.title} />
            <BookButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadNeckMalignancy;

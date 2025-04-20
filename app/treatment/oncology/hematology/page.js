import React from "react";
import Banner from "@/components/Common/Banner";
import H2 from "@/components/ui/h2";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import Link from "next/link";

const data = {
  title: "Hematology",
  bannerImage: "/oncology/hematology-banner.png",
  description: `Hematological disorders encompass a range of conditions affecting the blood, bone marrow, and lymphatic system, disrupting critical functions such as oxygen transport, clotting, and immune defense. These disorders are broadly categorized into anemias, bleeding disorders, and Hematological cancers. An overview of the common types of Hematological disorders 
is given below.`,
  overview: "",

  types: {
    anemias: [
      {
        title: "Anemia (General)",
        description:
          "MA condition marked by low red blood cell (RBC) count or hemoglobin, leading to fatigue and weakness.",
      },
      {
        title: "Aplastic Anemia",
        description: "Bone marrow failure to produce sufficient blood cells.",
      },
      {
        title: "Autoimmune Anemia",
        description: "The body’s immune system attacks its own RBCs",
      },
      {
        title: "Chronic Anemia",
        description:
          "Tersistent anemia associated with underlying chronic diseases.",
      },
      {
        title: "Iron-Deficiency Anemia",
        description:
          "Caused by a lack of iron, impairing hemoglobin production.",
      },
      {
        title: "Sickle Cell Anemia",
        description:
          "A genetic disorder causing abnormal, crescent-shaped RBCs that block blood flow.",
      },
    ],

    bleeding: [
      {
        title: "Disseminated Intravascular Coagulation (DIC)",
        description:
          "A serious condition causing improper clotting and bleeding throughout the body.",
      },
      {
        title: "Hemophilia",
        description:
          "A genetic disorder where blood does not properly clot, often with recurring bleeds.",
      },
    ],

    cancers: [
      {
        mainTitle: "Leukemia",
        title: "Acute Myeloid Leukemia (AML)",
        description:
          "A rapidly progressing cancer of the bone marrow and blood.",
      },
      {
        title: "Chronic Lymphocytic Leukemia (CLL)",
        description: "A slow-growing cancer affecting lymphocytes.",
      },
      {
        title: "Chronic Myelogenous Leukemia (CML)",
        description:
          "A type of cancer affecting white blood cells, with gradual onset symptoms.",
      },

      {
        title: "  Acute Lymphoblastic Leukemia (ALL)",
        description:
          "A fast-growing cancer of lymphocytes, a type of white blood cell.",
      },
      {
        mainTitle: "Lymphomas",
        title: "Burkitt Lymphoma",
        description:
          "A fast-growing non-Hodgkin lymphoma, often associated with viral infections.",
      },
      {
        mainTitle: "Multiple Myeloma",
        title: "Multiple Myeloma",
        description: `A cancer of plasma cells, impairing the bone marrow's ability to produce healthy blood cells.`,
      },
    ],
  },

  causes: [
    {
      category: "Genetic mutations",
      description: "(can be both inherited and developed)",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Nutritional deficiencies",
      description: "(iron, folic acid)",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Infections and autoimmune responses",
      description: "(i.e., autoimmune anemia)",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Exposure to toxins or chemotherapy",
      description: "(aplastic anemia)",
      bgColor: "bg-[#0E56A0] text-white",
    },
    {
      category: "Chronic diseases",
      description: "(causing chronic anemia)",
      bgColor: "bg-[#0E56A0] text-white",
    },
  ],

  diagnosis: [
    {
      category: "Blood tests",
      description:
        "Complete blood count (CBC), hemoglobin levels, and clotting factors",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Bone marrow biopsy",
      description: "For cancer detection and aplastic anemia",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Genetic tests",
      description:
        "Identifying hereditary conditions (i.e., sickle cell anemia)",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Imaging studies",
      description: "CT/MRI scans for suspected lymphoma",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Flow cytometry",
      description: "Analyzing cell types and detecting leukemia or cancer",
      bgColor: "bg-[#D84498] text-white",
    },
  ],

  treatments: [
    {
      heading: "Medications",
      description: "Iron supplements for iron deficiency anemia",
      aneurysmSymptoms: [
        {
          description:
            "Erythropoietin agents for chronic kidney disease anemia",
        },
        {
          description:
            "Anticoagulants or clotting factors for bleeding disorders",
        },
      ],
    },
    {
      heading: "Chemotherapy and Radiation",
      description: "Used for leukemia, lymphoma, and multiple myeloma",
      aneurysmSymptoms: [
        { description: "Various protocols based on cancer type and stage" },
        { description: "May be used before bone marrow transplant" },
      ],
    },
    {
      heading: "Blood Transfusions",
      description: "For severe anemia or blood loss",
      aneurysmSymptoms: [
        { description: "Red blood cell transfusions for severe anemia" },
        { description: "Platelet transfusions for bleeding disorders" },
      ],
    },
    {
      heading: "Targeted Therapy & Immunotherapy",
      description:
        "Advanced treatments targeting specific cancer characteristics (e.g., CLL)",
      aneurysmSymptoms: [
        {
          description: "Monoclonal antibodies to target specific cancer cells",
        },
        { description: "Immune checkpoint inhibitors" },
      ],
    },
    {
      heading: "Bone Marrow Transplants",
      description: "A curative option for leukemia and aplastic anemia",
      aneurysmSymptoms: [
        {
          description:
            "Allogeneic (from donor) or autologous (patient's own cells)",
        },
        { description: "Requires conditioning therapy before transplant" },
      ],
    },
    {
      heading: "CAR-T Cell Therapy",
      description:
        "Chimeric antigen receptor (CAR) T-cell therapy is a cancer treatment that uses genetically modified T cells",
      aneurysmSymptoms: [
        {
          description:
            "Currently approved for certain types of leukemias and lymphomas",
        },
        {
          description: "Personalized approach using patient's own immune cells",
        },
      ],
    },
  ],

  medicationCards: [
    {
      title: "Medications",
      description: "Iron supplements for iron deficiency anemia",
      items: [
        "Erythropoietin agents for chronic kidney disease anemia",
        "Anticoagulants or clotting factors for bleeding disorders",
      ],
    },
    {
      title: "Chemotherapy and Radiation",
      description: "Used for leukemia, lymphoma, and multiple myeloma.",
    },
    {
      title: "Radiation Therapy",
      description: "TBI, TMI, TMCI",
    },
    {
      title: "Blood Transfusions",
      description: "For severe anemia or blood loss",
    },
    {
      title: "Targeted Therapy & Immunotherapy",
      description:
        "Advanced treatments targeting specific cancer characteristics (e.g., CLL)",
    },
    {
      title: "Bone Marrow Transplants",
      description: "A curative option for leukemia and aplastic anemia",
    },
    {
      title: "CAR-T Cell Therapy",
      description:
        " Chimeric antigen receptor (CAR) T-cell therapy is a cancer treatment that uses genetically modified T cells",
      items: [
        "Currently approved for certain types of leukemias and lymphomas",
        "Personalized approach using patient&apos;s own immune cells",
      ],
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph: `Hematological disorders require precise diagnosis and individualized treatment plans to manage symptoms and improve quality of life. From nutritional management to advanced therapies like bone marrow transplants, modern medicine offers numerous solutions to address these complex conditions effectively. Early detection plays a critical role in the success of treatments, especially for Hematological cancers.`,
    },
  ],

  best_hospitals: [
    { city: "India", url: "/best-hematology-hospital-india" },
    { city: "Bangalore", url: "/best-hematology-hospital-bangalore" },
    { city: "Chennai", url: "/best-hematology-hospital-chennai" },
    { city: "Delhi", url: "/best-hematology-hospital-delhi" },
    { city: "Hyderabad", url: "/best-hematology-hospital-hyderabad" },
    { city: "Mumbai", url: "/best-hematology-hospital-mumbai" },
  ],
};

function Hematology() {
  return (
    <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
        <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
          <div className="text-5xl mt-14 text-center text-[#D84598] font-semibold">
            {data.title}
          </div>
          <div className="mt-6">
            <p className="text-gray-600 text-lg font-light">
              {data.description}
            </p>
          </div>
        </div>
        <H2
          title="Types of Hematological Disorders"
          className="text-2xl font-semibold mb-4 text-center"
        />

        <div className="mb-8 relative">
          <div className="hidden md:block absolute right-0 top-0 w-1/3 h-full">
            <img
              src="/oncology/blood-cell.png"
              alt="Blood cell"
              className="object-contain h-full w-full ml-2"
            />
          </div>

          <div className="md:w-2/3 space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-[#0E56A0] mb-3">
                Anemias
              </h2>
              <div className="space-y-2">
                {data.types.anemias.map((anemia, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-2 last:border-0"
                  >
                    <span className="font-medium text-black">
                      {anemia.title}
                    </span>
                    : {anemia.description}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-[#0E56A0] mb-3">
                Bleeding Disorders
              </h2>
              <div className="space-y-2">
                {data.types.bleeding.map((disorder, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-2 last:border-0"
                  >
                    <span className="font-medium text-black">
                      {disorder.title}
                    </span>
                    : {disorder.description}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-[#0E56A0] mb-3">
                Hematological Cancers
              </h2>
              <div className="space-y-2">
                {data.types.cancers.map((cancer, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-2 last:border-0"
                  >
                    {cancer?.mainTitle && (
                      <div className="text-pink-500 font-semibold text-lg">
                        {cancer?.mainTitle}
                      </div>
                    )}
                    <span className="font-medium text-black">
                      {cancer.title}
                    </span>
                    : {cancer.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-start mb-8">
          <Link
            href="/treatment/oncology/head-neck-treatment"
            className="text-[#0E56A0] underline font-semibold"
          >
            To Know More About Hematological Disorders And Their Causes And
            Treatment, Click Here
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <H2
              title="Causes"
              className="text-xl font-semibold mb-4 text-center"
            />
            <div className="space-y-2">
              <DataBoxes
                title=""
                header=""
                data={data.causes}
                myclass="grid grid-cols-1 gap-2"
              />
            </div>
            <div className="mt-4 text-start">
              <Link
                href="/treatment/hematology/treatment"
                className="text-hciPrimary underline font-semibold"
              >
                To Know More About Hematological Disorders And Treatment, Click
                Here
              </Link>
            </div>
          </div>

          <div>
            <H2
              title="Diagnosis"
              className="text-xl font-semibold mb-4 text-center"
            />
            <div className="space-y-2">
              <DataBoxes
                title=""
                header=""
                data={data.diagnosis}
                myclass="grid grid-cols-1 gap-2"
              />
            </div>
            <div className="mt-4 text-start">
              <Link
                href="/treatment/hematology/diagnosis"
                className="text-hciPrimary underline font-semibold"
              >
                To Get The Best Diagnosis For Hematological Disorders And
                Related Issues, Click Here
              </Link>
            </div>
          </div>
        </div>

        <H2
          title="Treatment"
          className="text-2xl font-semibold mb-4 text-center"
        />
        <p className="font-light mb-4">
          Treatment for blood cancer depends on its origin, type, and individual
          patient needs. It often involves a combination of therapies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {data?.medicationCards?.map((item, index) => (
            <div
              className="border border-pink-400 rounded-lg p-4 shadow-sm"
              key={index}
            >
              <h2 className="text-lg font-semibold text-[#0E56A0] mb-2">
                {item?.title}
              </h2>
              <p className="text-gray-700 mb-2 font-light">
                {item?.description}
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                {item?.items?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Conclusion data={data.conclusion} />

        {/* Links */}
        <div className="space-y-2 mb-8">
          {data.best_hospitals.map((hospital, index) => (
            <div
              key={index}
              className="text-start py-2 border-b border-blue-100 last:border-0"
            >
              <Link
                href={hospital.url}
                className="text-hciPrimary underline font-semibold"
              >
                For The Best Hospital For The Treatment Of Hematological
                Disorders In {hospital.city}, Click Here
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <Link
            href="/book-appointment"
            className="inline-block px-8 py-3 bg-pink-500 text-white rounded-md hover:bg-[#D84498] transition-colors font-semibold"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hematology;

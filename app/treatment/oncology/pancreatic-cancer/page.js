import React from "react";
import Title from "@/components/cardiacComponents/Title";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import Banner from "@/components/Common/Banner";

const data = {
  title: "Pancreatic Cancer",
  description:
    "Pancreatic cancer is a type of cancer that begins in the tissues of the pancreas, a gland located behind the stomach that plays an essential role in digestion and regulating blood sugar. Pancreatic cancer occurs when abnormal cells in the pancreas grow uncontrollably, forming a tumor.",

  types: [
    {
      heading: "Types of Pancreatic Cancer",
      items: [
        {
          title: "Exocrine Tumors",
          description:
            "The most common type, typically originating in the ducts of the pancreas. The most frequent form is pancreatic adenocarcinoma.",
          className: "bg-white p-6 rounded-lg shadow-md",
        },
        {
          title: "Endocrine Tumors (Pancreatic Neuroendocrine Tumors)",
          description:
            "These are less common and arise from hormone-producing cells in the pancreas.",
          className: "bg-white p-6 rounded-lg shadow-md",
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: "Symptoms of Pancreatic Cancer",
      description:
        "Pancreatic cancer is often asymptomatic in the early stages, but as it progresses, symptoms may include:",
      items: [
        {
          title: "Abdominal pain (radiating to the back)",
          className: "bg-[#0E56A0] text-white py-4 px-2 rounded mb-2",
        },
        {
          title: "Unexplained weight loss",
          className: "bg-[#0E56A0] text-white py-4 px-2 rounded mb-2",
        },
        {
          title: "Jaundice (yellowing of the skin and eyes)",
          className: "bg-[#0E56A0] text-white py-4 px-2 rounded mb-2",
        },
        {
          title: "Loss of appetite",
          className: "bg-[#0E56A0] text-white py-4 px-2 rounded mb-2",
        },
        {
          title: "Nausea",
          className: "bg-[#0E56A0] text-white py-4 px-2 rounded mb-2",
        },
        {
          title: "Diabetes (newly diagnosed)",
          className: "bg-[#0E56A0] text-white py-4 px-2 rounded mb-2",
        },
        {
          title: "Blood clots",
          className: "bg-[#0E56A0] text-white py-4 px-2 rounded mb-2",
        },
      ],
    },
  ],

  treatments: [
    {
      heading: "Treatment for Pancreatic Cancer",
      items: [
        {
          title: "Surgery",
          items: [
            {
              name: "Whipple Procedure",
              description:
                "Removal of the head of the pancreas, part of the stomach, and other nearby structures.",
            },
            {
              name: "Distal Pancreatectomy",
              description: "Removal of the body and tail of the pancreas.",
            },
          ],
        },
        {
          title: "Radiation Therapy",
          description: "High-energy rays are used to destroy cancer cells.",
        },
        {
          title: "Chemotherapy",
          description:
            "Drugs like gemcitabine or FOLFIRINOX are used to kill cancer cells.",
        },
        {
          title: "Targeted Therapy",
          description:
            "Drugs that target specific cancer cell mechanisms (e.g., PARP inhibitors).",
        },
        {
          title: "Immunotherapy",
          description:
            "Boosting the immune system to recognize and fight cancer cells.",
        },
      ],
    },
  ],

  diagnosis:
    "Pancreatic cancer is often diagnosed at an advanced stage, making early detection and treatment critical to improving outcomes.",

  links: [
    {
      text: "To Consult With The Best Doctor For Treatment Of Pancreatic Cancer, Click Here",
      url: "/best-doctor-pancreatic-cancer-treatment",
    },
    {
      text: "For The Best Hospital For The Treatment Of Pancreatic Cancer In India, Click Here",
      url: "/best-pancreatic-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Pancreatic Cancer In Bangalore, Click Here",
      url: "/best-pancreatic-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Pancreatic Cancer In Chennai, Click Here",
      url: "/best-pancreatic-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Pancreatic Cancer In Delhi, Click Here",
      url: "/best-pancreatic-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Pancreatic Cancer In Hyderabad, Click Here",
      url: "/best-pancreatic-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Pancreatic Cancer In Mumbai, Click Here",
      url: "/best-pancreatic-cancer-hospital-mumbai",
    },
  ],
};

function PancreaticCancer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title title={data.title} className="text-pink-500" />
      <div className="mt-6">
        <p className="text-gray-600 mb-10 text-lg font-light">
          {data.description}
        </p>
      </div>

      {/* Banner Image  */}
      <Banner image="/oncology/pancreatic-cancer-banner.png" />

      {/* Types Section */}
      <div className="mt-12">
        <H2
          title={data.types[0].heading}
          className="text-2xl font-semibold mb-6 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.types[0].items.map((type, idx) => (
            <div key={idx} className={type.className}>
              <h2 className="text-xl font-bold mt-8 text-[#0E56A0]">
                {type.title}
              </h2>
              <p className="text-gray-600 font-light">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-start">
        <Link
          href="/treatment/oncology/pancreatic-cancer-info"
          className="text-[#0E56A0] text-semibold"
        >
          To Know More About Pancreatic Cancer And Its Treatment, Click Here
        </Link>
      </div>

      {/* Symptoms Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mt-12">
          <H2
            title={data.symptoms[0].heading}
            className="text-2xl font-semibold mb-4"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.symptoms[0].description}
          </p>
          <div className="space-y-2">
            {data.symptoms[0].items.map((symptom, idx) => (
              <div key={idx} className={symptom.className}>
                {symptom.title}
              </div>
            ))}
          </div>
          <div className="mt-6 text-start">
            <Link
              href="/treatment/oncology/pancreatic-cancer-causes"
              className="text-[#0E56A0] text-semibold"
            >
              To Know More About Pancreatic Cancer And Its Causes And Treatment,
              Click Here
            </Link>
          </div>
        </div>

        {/* Treatment Section */}
        <div className="mt-12">
          <H2
            title={data.treatments[0].heading}
            className="text-2xl font-semibold mb-6"
          />
          <div className="border border-pink-200 rounded-lg p-6">
            <div className="space-y-6">
              {data.treatments[0].items.map((treatment, idx) => (
                <div key={idx} className="space-y-2">
                  <h2 className="text-lg font-semibold text-pink-600">
                    {treatment.title}
                  </h2>
                  {treatment.items ? (
                    <div className="space-y-2 pl-4">
                      {treatment.items.map((item, i) => (
                        <div key={i}>
                          <span className="font-medium">{item.name}:</span>{" "}
                          {item.description}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 font-light">
                      {treatment.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-start">
            <Link
              href="/treatment/oncology/pancreatic-cancer-diagnosis"
              className="text-[#0E56A0] text-semibold"
            >
              To Get The Best Diagnosis Of Pancreatic Cancer And Related Issues,
              Click Here
            </Link>
          </div>
        </div>
      </div>

      {/* Diagnosis Note */}
      <div className="mt-12">
        <p className="text-gray-600 font-light">{data.diagnosis}</p>
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
    </div>
  );
}

export default PancreaticCancer;

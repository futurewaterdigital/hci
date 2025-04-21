import React from "react";
import Title from "@/components/cardiacComponents/Title";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import Banner from "@/components/Common/Banner";
const data = {
  title: "Kidney Cancer",
  description:
    "Kidney cancer, also known as renal cancer, originates in the kidneys, two bean-shaped organs located in the back of the abdomen. The most common type of kidney cancer is renal cell carcinoma (RCC), which starts in the lining of the small tubes in the kidney. Other types include urothelial carcinoma, Wilms tumor (more common in children), and renal sarcoma.",

  causes: [
    {
      heading: "Causes of Kidney Cancer",
      description:
        "While the exact cause of kidney cancer isn't known, several factors increase the risk of developing it. These include smoking, obesity, high blood pressure, long-term dialysis, family history of kidney cancer, and certain inherited conditions, like von Hippel-Lindau disease.",
      items: [],
    },
  ],

  symptoms: [
    {
      heading: "Symptoms of Kidney Cancer",
      description:
        "Early kidney cancer often does not present noticeable symptoms. As it progresses, common symptoms may include:",
      items: [
        {
          title: "Blood in the urine (hematuria)",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2",
        },
        {
          title: "Lower back pain (on one side)",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2",
        },
        {
          title: "Unexplained weight loss",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2",
        },
        {
          title: "Loss of appetite",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2",
        },
        {
          title: "Fatigue",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2",
        },
        {
          title: "Fever",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2",
        },
        {
          title: "Lump or mass in the abdomen",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis of Kidney Cancer",
      description: "Doctors use a variety of tests to diagnose kidney cancer:",
      items: [
        {
          title: "Imaging Tests",
          description:
            "CT scans, MRIs, and ultrasounds help detect abnormalities in the kidney.",
          className: "bg-pink-500 text-white p-2 rounded mb-2",
        },
        {
          title: "Biopsy",
          description:
            "A small tissue sample is taken for lab analysis to confirm cancer.",
          className: "bg-pink-500 text-white p-2 rounded mb-2",
        },
        {
          title: "Urinalysis",
          description:
            "This test checks for blood or abnormal cells in the urine.",
          className: "bg-pink-500 text-white p-2 rounded mb-2",
        },
      ],
    },
  ],

  treatments: [
    {
      title: "Treatment for Kidney Cancer",
      description:
        "The treatment of kidney cancer depends on the stage, size and spread of the tumor, as well as the patient's overall health. Options include:",
      heading: "Surgery",
      aneurysmSymptoms: [
        {
          title: "Partial Nephrectomy",
          description:
            "Only the tumor or affected part of the kidney is removed. This is often used when the cancer is small or confined to one area.",
        },
        {
          title: "Radical Nephrectomy",
          description:
            "Removal of the entire kidney and sometimes surrounding tissues or lymph nodes. This is the standard treatment for larger tumors.",
        },
        {
          title: "Cryoablation and Radiofrequency Ablation",
          description:
            "For patients who cannot undergo surgery, these methods freeze or heat the tumor to destroy cancerous cells.",
        },
      ],
    },
    {
      heading: "Radiation Therapy",
      aneurysmSymptoms: [
        {
          title: "External Beam Radiation",
          description:
            "High-energy beams are directed at the cancerous cells from outside the body. Radiation therapy is usually used when surgery isn't an option or if the cancer has spread to other parts of the body.",
        },
      ],
    },
    {
      heading: "Targeted Therapy",
      aneurysmSymptoms: [
        {
          title: "Angiogenesis Inhibitors",
          description:
            "These drugs block the formation of new blood vessels that tumors need to grow. Examples include sunitinib and pazopanib.",
        },
        {
          title: "mTOR Inhibitors",
          description:
            "Drugs like everolimus target the mTOR protein, which plays a role in cancer cell growth.",
        },
      ],
    },
    {
      heading: "Immunotherapy",
      aneurysmSymptoms: [
        {
          title: "Immune Checkpoint Inhibitors",
          description:
            "Drugs such as nivolumab and pembrolizumab work by enhancing the body's immune response to fight cancer. These therapies block proteins that prevent the immune system from attacking cancer cells.",
        },
        {
          title: "Cytokines",
          description:
            "Older forms of immunotherapy, including interleukin-2, stimulate the immune system to destroy cancer cells.",
        },
      ],
    },
    {
      heading: "Ablation Therapy",
      aneurysmSymptoms: [
        {
          title: "Cryoablation",
          description:
            "A probe inserted through the skin freezes and kills the cancer cells.",
        },
        {
          title: "Radiofrequency Ablation",
          description:
            "A needle inserted into the tumor heats and destroys the cancerous tissue.",
        },
      ],
    },
    {
      heading: "Chemotherapy",
      description:
        "While not commonly used for kidney cancer, chemotherapy may be an option for rare types like transitional cell carcinoma.",
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Kidney cancer is manageable if detected early, and advancements in treatment options have improved patient outcomes. Consulting a healthcare specialist for early diagnosis and a tailored treatment plan is essential.",
    },
  ],

  links: [
    {
      text: "To Consult With The Best Doctor For Treatment Of Kidney Cancer, Click Here",
      url: "/best-doctor-kidney-cancer-treatment",
    },
    {
      text: "For The Best Hospital For The Treatment Of Kidney Cancer In India, Click Here",
      url: "/best-kidney-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Kidney Cancer In Bangalore, Click Here",
      url: "/best-kidney-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Kidney Cancer In Chennai, Click Here",
      url: "/best-kidney-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Kidney Cancer In Delhi, Click Here",
      url: "/best-kidney-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Kidney Cancer In Hyderabad, Click Here",
      url: "/best-kidney-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Kidney Cancer In Mumbai, Click Here",
      url: "/best-kidney-cancer-hospital-mumbai",
    },
  ],
};

function KidneyCancer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title title={data.title} className="text-pink-500" />
      <div className="mt-6">
        <p className="text-gray-600 mb-10 text-lg font-light">
          {data.description}
        </p>
      </div>
      {/* Banner Image  */}
      <Banner image="/oncology/kidney-banner.png" />
      {/* Causes Section */}
      <div className="mt-12">
        <H2
          title={data.causes[0].heading}
          className="text-2xl text-center font-semibold mb-4"
        />
        <p className="text-gray-600 mb-6 font-light">
          {data.causes[0].description}
        </p>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-4">
          {data.causes[0].items.map((factor, index) => (
            <div
              key={index}
              className="bg-[#FDE7B0] rounded-md p-5 shadow-sm flex flex-col justify-between h-full min-h-[120px]"
            >
              <h3 className="font-bold text-base mb-1">{factor.title}</h3>
              <p className="text-sm text-gray-900 leading-snug">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-3">
        <Link href={""} className="text-hciPrimary font-semibold underline">
          To Know More About Oesophagus Cancer And Its Treatment, Click Here
        </Link>
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
        <div className="space-y-2">
          {data.symptoms[0].items.map((symptom, idx) => (
            <div key={idx} className={symptom.className}>
              <strong>{symptom.title}:</strong> {symptom.description}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-start">
        <Link
          href="/treatment/oncology/oesophagus-cancer-causes"
          className="text-[#0E56A0] font-semibold underline"
        >
          To know more about oesophagus cancer and its causes and treatment,
          click here
        </Link>
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
        <div className="space-y-2">
          {data.diagnosis[0].items.map((test, idx) => (
            <div key={idx} className={test.className}>
              <strong>{test.title}:</strong> {test.description}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-start">
        <Link
          href="/treatment/oncology/oesophagus-cancer-causes"
          className="text-[#0E56A0] font-semibold underline"
        >
          To Know More About Oesophagus Cancer And Its Causes And Treatment,
          Click Here
        </Link>
      </div>
      {/* Treatments Section */}
      <div className="mt-12">
        <H2
          title="Treatment for Gallbladder Cancer"
          className="text-2xl font-semibold mb-6 text-center"
        />
        <p className="mt-4 text-gray-600 text-start w-full text-lg mx-auto font-light leading-relaxed">
          The treatment approach for gallbladder cancer depends on the stage of
          the disease, the patient&lsquo;s overall health, and their
          preferences. Treatment options may include:
        </p>
        <div className="grid grid-cols-1 gap-6">
          {data.treatments.map((treatment, index) => (
            <div
              key={index}
              className="border border-pink-400 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl text-hciPrimary font-bold text-black">
                {treatment.heading}
              </h2>
              {treatment.description && (
                <p className="text-gray-600 mb-4 font-light">
                  {treatment.description}
                </p>
              )}
              <div className="space-y-4">
                {treatment?.aneurysmSymptoms?.map((item, idx) => (
                  <div key={idx} className="text-gray-600">
                    <span className="text-[#D84498]">
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
    </div>
  );
}

export default KidneyCancer;

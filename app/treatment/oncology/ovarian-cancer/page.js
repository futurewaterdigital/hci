import React from "react";
import Title from "@/components/cardiacComponents/Title";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import Banner from "@/components/Common/Banner";

const data = {
  title: "Ovarian Cancer",
  bannerImage: "/oncology/ovarian-cancer-banner.png",
  description:
    "Ovarian cancer is a serious condition originating in the ovaries. It often goes undetected in its early stages due to non-specific symptoms, leading to advanced diagnosis. The most common type is epithelial ovarian cancer, affecting the outer layer of the ovaries.",

  causes: [
    {
      heading: "Causes",
      aneurysmSymptoms: [
        {
          description: "Family history of ovarian/breast cancer",
          className: "bg-[#0E56A0] text-white p-2 rounded",
        },
        {
          description: "BRCA1/BRCA2 gene mutations",
          className: "bg-[#0E56A0] text-white p-2 rounded",
        },
        {
          description: "Hormone therapy and reproductive history",
          className: "bg-[#0E56A0] text-white p-2 rounded",
        },
        {
          description: "Age (more common in postmenopausal women)",
          className: "bg-[#0E56A0] text-white p-2 rounded",
        },
        {
          description: "Obesity and lifestyle factors",
          className: "bg-[#0E56A0] text-white p-2 rounded",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis",
      aneurysmSymptoms: [
        {
          description: "Pelvic exam: Checks for abnormalities in the ovaries",
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          description: "Imaging (Ultrasound/CT scans): Visualizes tumors",
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          description: "CA-125 blood test: Measures tumor marker levels",
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          description: "Biopsy: Confirms malignancy through tissue examination",
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          description:
            "Genetic testing: For BRCA mutations in high-risk patients",
          className: "bg-pink-500 text-white p-2 rounded",
        },
      ],
    },
  ],

  treatments: [
    {
      heading: "Surgery",
      description: "",
      aneurysmSymptoms: [
        {
          title: "Debulking surgery",
          description: "Removes as much of the tumor as possible",
        },
        {
          title: "Hysterectomy",
          description:
            "Removal of ovaries, fallopian tubes, and uterus to prevent spread",
        },
      ],
    },
    {
      heading: "Chemotherapy",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Administered either intravenously or directly into the abdomen (intraperitoneal). It targets rapidly dividing cancer cells and is commonly used after surgery to reduce the risk of recurrence.",
        },
      ],
    },
    {
      heading: "Hormonal Therapy",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Employed in hormone-sensitive ovarian tumors to block estrogen, which can stimulate cancer growth.",
        },
      ],
    },
    {
      heading: "Immunotherapy",
      description: "",
      aneurysmSymptoms: [
        {
          description: `Newer treatments harness the body's immune system to fight cancer cells and are being explored for advanced cases.'`,
        },
      ],
    },
    {
      heading: "Targeted Therapy",
      description: "",
      aneurysmSymptoms: [
        {
          title: "PARP inhibitors",
          description:
            "(like Olaparib) block enzymes that cancer cells need to repair damaged DNA, especially in patients with BRCA mutations.",
        },
        {
          title: "Bevacizumab",
          description:
            "(Avastin) prevents the formation of new blood vessels feeding tumors.",
        },
      ],
    },
    {
      heading: "Radiation Therapy",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Used less frequently but may be applied for specific cases to shrink localized tumors or alleviate symptoms.",
        },
      ],
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Early detection remains challenging, but advancements in treatments offer hope. Regular screenings, especially for high-risk individuals, can improve outcomes. A multidisciplinary approach with surgery, chemotherapy, and emerging therapies ensures better survival rates and quality of life.",
    },
  ],

  links: [
    {
      text: "To Consult With The Best Doctor For Treatment Of Ovarian Cancer, Click Here",
      url: "/best-doctor-ovarian-cancer-treatment",
    },
    {
      text: "For The Best Hospital For The Treatment Of Ovarian Cancer In India, Click Here",
      url: "/best-ovarian-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Ovarian Cancer In Bangalore, Click Here",
      url: "/best-ovarian-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Ovarian Cancer In Chennai, Click Here",
      url: "/best-ovarian-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Ovarian Cancer In Delhi, Click Here",
      url: "/best-ovarian-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Ovarian Cancer In Hyderabad, Click Here",
      url: "/best-ovarian-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Ovarian Cancer In Mumbai, Click Here",
      url: "/best-ovarian-cancer-hospital-mumbai",
    },
  ],
};

function OvarianCancer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Banner image={"/oncology/ovarian-cancer-banner.png"} />
      <Title title={data.title} />
      <div className="mt-6">
        <p className="text-gray-600 text-lg font-light">{data.description}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Causes Section */}
        <div>
          <H2 title="Causes" className="text-xl font-semibold mb-4" />
          <div className="space-y-2">
            {data.causes[0].aneurysmSymptoms.map((cause, idx) => (
              <div key={idx} className={cause.className}>
                {cause.description}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/treatment/oncology/ovarian-cancer-info"
              className="text-blue-600 hover:underline"
            >
              To Know More About Ovarian Cancer And Its Treatment, Click Here
            </Link>
          </div>
        </div>

        {/* Diagnosis Section */}
        <div>
          <H2 title="Diagnosis" className="text-xl font-semibold mb-4" />
          <div className="space-y-2">
            {data.diagnosis[0].aneurysmSymptoms.map((diagnosis, idx) => (
              <div key={idx} className={diagnosis.className}>
                {diagnosis.description}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/treatment/oncology/ovarian-cancer-diagnosis"
              className="text-blue-600 hover:underline"
            >
              For The Best Diagnosis Of Ovarian Cancer And Related Issues, Click
              Here
            </Link>
          </div>
        </div>
      </div>

      {/* Treatments Section */}
      <div className="flex gap-2 justify-center items-stretch mt-12">
        {/* Left Section */}
        <div className="flex-1">
          <H2
            title="Treatments"
            className="text-2xl font-semibold mb-6 text-center"
          />
          <p className="text-start font-light">
            Treatment options for endometrial cancer depend on the stage and
            grade of the cancer and may include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {data.treatments.map((treatment, index) => (
              <div
                key={index}
                className="border border-pink-200 rounded-lg py-4 px-4 hover:shadow-lg transition-shadow"
              >
                <h2 className={`text-xl font-bold text-pink-500`}>
                  {treatment.heading}
                </h2>
                {treatment.aneurysmSymptoms.map((item, idx) => (
                  <div key={idx} className="text-gray-600">
                    {item.title && <strong>{item.title}: </strong>}
                    {item.description}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex bg-black justify-center items-center">
          <div className="w-full h-full flex justify-center items-center p-4">
            <img
              src="/oncology/ovarian-cancer-1.png"
              alt="Brain Tumor 2"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-12">
        <h2 className={`text-xl font-bold text-center mb-6`}>Conclusion</h2>
        <p className="text-gray-600 font-light">
          {data.conclusion[0].paragraph}
        </p>
      </div>

      {/* Links */}
      <div className="mt-8 space-y-4">
        {data.links.map((link, index) => (
          <div key={index} className="text-start">
            <Link href={link.url} className="text-blue-600 hover:underline">
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OvarianCancer;

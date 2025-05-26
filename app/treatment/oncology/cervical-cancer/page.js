import React from "react";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import Banner from "@/components/Common/Banner";
import KnowMore from "@/components/ui/KnowMore";
import FooterLinks from "@/components/cardiacComponents/FooterLinkOthers";
import IssuesLinks from "@/components/ui/IssuesLinks";
import DiagnosistLink from "@/components/ui/DiagnosistLink";
import BookButton from "@/components/cardiacComponents/BookButton";


const data = {
  title: "Cervical Cancer",
  description:
    "Cervical cancer originates in the cervix, the lower part of the uterus connecting to the vagina. It typically develops slowly and can be detected early through regular screening. The primary cause of cervical cancer is persistent infection with high-risk types of the human papillomavirus (HPV). Early-stage cervical cancer often has no symptoms, which is why routine Pap tests and HPV tests are essential for timely detection and intervention.",

  causes: [
    {
      heading: "Causes",
      aneurysmSymptoms: [
        {
          description: "Persistent HPV infection (main risk factor)",
        },
        {
          description:
            "Early onset of sexual activity and multiple sexual partners",
        },
        {
          description: "Smoking, which damages cervical cells",
        },
        {
          description: "Weakened immune system",
        },
        {
          description: "Long-term use of oral contraceptives",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis",
      aneurysmSymptoms: [
        {
          title: "Pap Test:",
          description: `${" "}Detects precancerous or abnormal cervical cells`,
          className: "bg-hciSecondary text-white p-2 rounded text-sm",
        },
        {
          title: "HPV Testing:",
          description:
            " Identifies high-risk HPV strains associated with cervical cancer",
          className: "bg-hciSecondary text-white p-2 rounded text-sm",
        },
        {
          title: "Colposcopy:",
          description:
            " Uses a magnifying device to closely examine the cervix for abnormalities",
          className:
            "bg-hciSecondary text-white p-2 rounded whitespace-nowrap text-sm",
        },
        {
          title: "Biopsy:",
          description: " Removes tissue samples to confirm cancer diagnosis",
          className: "bg-hciSecondary text-white p-2 rounded text-sm",
        },
        {
          title: "Imaging (CT/MRI/PET):",
          description:
            " Determines the extent and spread of the cancer in advanced stages",
          className:
            "bg-hciSecondary text-white p-2 rounded whitespace-nowrap text-sm",
        },
      ],
    },
  ],

  treatments: [
    {
      heading: "Surgery",
      description:
        "Surgery is often the first line of treatment for early-stage cervical cancer and may include various procedures depending on the stage and spread of the cancer:",
      aneurysmSymptoms: [
        {
          title: "Conization",
          description: `Conization is the removal of a cone-shaped piece of tissue from the cervix. This procedure can treat early-stage, localized cancer by removing abnormal cells while preserving the rest of the cervix.
This is an option for women wanting to retain fertility, especially when cancer is confined to a small area.`,
        },
        {
          title: "Hysterectomy",
          description: `Total Hysterectomy: Involves removal of the cervix and uterus. It is effective for early-stage cancer that has not spread beyond the cervix.
Radical Hysterectomy: Involves removal of the cervix, uterus, part of the vagina, and surrounding tissues, as well as lymph nodes. This option is used when the cancer is at a slightly advanced stage but still localized.
Hysterectomy can reduce the risk of recurrence but is not suitable for patients who wish to retain fertility.`,
        },
        {
          title: "Trachelectomy",
          description: `This procedure removes the cervix and upper part of the vagina but leaves the uterus intact, preserving the possibility of pregnancy.
Typically recommended for younger patients with early-stage, small tumors who wish to maintain fertility.`,
        },

        {
          title: "Pelvic Exenteration",
          description: `For advanced cancer that has spread within the pelvic area, this extensive surgery removes the uterus, cervix, bladder, and parts of the lower colon.
This is generally considered only when other treatments are not effective and are often combined with reconstructive surgery.`,
        },
      ],
    },
    {
      heading: "Radiation Therapy",
      description:
        "Radiation therapy uses high-energy beams to kill or shrink cancer cells. It is often combined with chemotherapy (chemoradiation) in advanced cases to increase effectiveness. Types include:",
      aneurysmSymptoms: [
        {
          title: "External Beam Radiation Therapy (EBRT)",
          description:
            "Delivers radiation from an external machine targeting the pelvic area, which can also include nearby lymph nodes. Treatment typically extends over a few sessions each week.",
        },
        {
          title: "Brachytherapy",
          description:
            "Internal radiation where a device containing radioactive material is placed inside the vagina or next to deliver high-dose radiation directly to the cancer cells. Often used in combination with EBRT for more targeted treatment and can be done over a shorter period.",
        },
        {
          title: "Combined Radiation Therapy",
          description:
            "In some cases, both EBRT and brachytherapy are used to achieve maximum effect, especially when the tumor is large or the cancer has spread beyond the cervix.",
        },
      ],
    },
    {
      heading: "Chemotherapy",
      description:
        "Chemotherapy uses drugs to kill or stop the growth of cancer cells. It is often used in conjunction with radiation therapy (chemoradiation) for advanced cervical cancer or as standalone treatment in recurrent cases.",
      aneurysmSymptoms: [
        {
          title: "Concurrent Chemoradiation",
          description:
            "Combines low-dose chemotherapy with radiation therapy to make cancer cells more sensitive to radiation, improving the effectiveness of treatment. Cisplatin is a common chemotherapy drug used in this combination.",
        },
        {
          title: "Systemic Chemotherapy",
          description:
            "For more advanced or recurrent cervical cancer, systemic chemotherapy may be used with drugs like paclitaxel, carboplatin, or topotecan. Treatment is given in cycles to minimize side effects and allow the body to recover between sessions.",
        },
      ],
    },
    {
      heading: "Targeted Therapy",
      description:
        "Targeted therapies are drugs that focus on specific molecules involved in cancer cell growth and spread, offering a more precise treatment with fewer side effects compared to chemotherapy.",
      aneurysmSymptoms: [
        {
          title: "Bevacizumab (Avastin)",
          description:
            "An anti-angiogenic inhibitor that blocks the formation of new blood vessels, cutting off the blood supply to the tumor and slowing its growth. This drug is often used alongside chemotherapy for advanced or recurrent cervical cancer.",
        },
      ],
    },
    {
      heading: "Immunotherapy",
      description: `Immunotherapy harnesses the body's immune system to identify and attack cancer cells. This is particularly beneficial in cases where the cancer has spread or recurred after other treatment.`,
      aneurysmSymptoms: [
        {
          title: "Immune Checkpoint Inhibitors",
          description:
            "Pembrolizumab (Keytruda) is an example of an immune checkpoint inhibitor approved for advanced cervical cancer. It targets PD-1, a protein on immune cells that, when blocked, allows the immune system to recognize and attack cancer cells more effectively.",
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
        "Cervical cancer is largely preventable with regular screenings, HPV vaccinations, and early interventions. Timely diagnosis and a tailored treatment plan, including surgery, radiation, and other targeted therapies, significantly improve survival rates and quality of life for patients.",
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

function CervicalCancer() {
  return (
    <>
      <Banner image={"/oncology/ovarian-cancer-2.png"} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <H1 title={data.title} />

        <div className="mt-6">
          <p className="text-gray-600 font-light">{data.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Causes Section */}
          <div>
            <H2 title="Causes" className="text-xl font-semibold mb-4" />
            <div className="space-y-2">
              {data.causes[0].aneurysmSymptoms.map((cause, idx) => (
                <div
                  key={idx}
                  className="bg-[#0E56A0] text-white p-4 rounded whitespace-nowrap text-sm">
                  {cause.description}
                </div>
              ))}
            </div>
            <div className="mt-4">
              {/* <KnowMore title="Cervical Cancer" /> */}
              <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
                <button className="text-start underline">
                  For more about cervical cancer, its causes and treatment, click here
                </button>
              </p>

            </div>
          </div>

          {/* Diagnosis Section */}
          <div>
            <H2 title="Diagnosis" className="text-xl font-semibold mb-4" />
            <div className="space-y-2">
              {data.diagnosis[0].aneurysmSymptoms.map((diagnosis, idx) => (
                <div
                  key={idx}
                  className="bg-[#D84498] text-white p-4 rounded whitespace-nowrap text-sm">
                  <span className="font-semibold">{diagnosis.title}</span>
                  {diagnosis.description}
                </div>
              ))}
            </div>
            <div className="mt-4">
              {/* <IssuesLinks head="Cervical Cancer" /> */}
              <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
                <button className="text-start underline">
                  For the Best diagnosis and treatment For cervical cancer, click here
                </button>
              </p>

            </div>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="mt-12">
          <H2
            title="Treatment"
            className="text-2xl font-semibold mb-6 text-center"
          />
          <div className="grid grid-cols-1 gap-6">
            {data.treatments.map((treatment, index) => (
              <div
                key={index}
                className="border border-pink-400 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl text-hciPrimary font-medium">
                  {treatment.heading}
                </h2>
                {/* <H3
                title={treatment.heading}
                className="text-lg font-semibold mb-3 text-pink-600"
              /> */}
                {treatment.description && (
                  <p className="text-gray-600 mb-4 font-light">
                    {treatment.description}
                  </p>
                )}
                <div className="space-y-4">
                  {treatment.aneurysmSymptoms.map((item, idx) => (
                    <div key={idx} className="text-gray-600 font-light">
                      {item.title && <strong>{item.title}: </strong>}
                      {item.description}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <IssuesLinks head={data.title} />
        </div>
        {/* Conclusion */}
        <div className="mt-12">
          <h2 className={`text-xl font-medium text-center mb-6`}>Conclusion</h2>
          {/* <H2 title="Conclusion" className="text-xl font-semibold mb-4" /> */}
          <p className="text-gray-600 font-light">
            {data.conclusion[0].paragraph}
          </p>
        </div>

        {/* Links */}
        <div className="mt-8 space-y-4">
          <FooterLinks head={data.title} />
        </div>
        <BookButton />
      </div>
    </>
  );
}

export default CervicalCancer;

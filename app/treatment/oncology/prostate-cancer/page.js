import React from "react";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import Banner from "@/components/Common/Banner";
import H1 from "@/components/ui/h1";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import BookButton from "@/components/cardiacComponents/BookButton";
import KnowMore from "@/components/ui/KnowMore";
import IssuesLinks from "@/components/ui/IssuesLinks";
const data = {
  title: "Prostate Cancer",
  description:
    "Prostate cancer is one of the most common cancers in men, and early detection can significantly improve treatment outcomes. It originates in the prostate gland, which is responsible for producing seminal fluid. While prostate cancer typically grows slowly, it can become aggressive in some cases and spread to other parts of the body.",

  causes: [
    {
      heading: "Causes of Prostate Cancer",
      description:
        "The exact causes of prostate cancer are not fully understood, but several risk factors can contribute to its development:",
      items: [
        {
          title: "Age",
          description:
            "The risk of prostate cancer increases significantly after age 50.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Family History",
          description:
            "A family history of prostate cancer can increase the risk.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Genetic Mutations",
          description:
            "Certain inherited gene mutations (like BRCA1 and BRCA2) may contribute.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Lifestyle Factors",
          description:
            "Obesity, smoking, and lack of physical activity may contribute to a higher likelihood of developing prostate cancer.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Diet",
          description:
            "A diet high in red meat and dairy products, with low fruit and vegetable intake, can increase the risk.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: "Symptoms of Prostate Cancer",
      description:
        "In its early stages, prostate cancer may not present any noticeable symptoms. However, as the disease progresses, symptoms may include:",
      items: [
        {
          title:
            "Difficulty urinating or frequent urination, especially at night",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light ",
        },
        {
          title: "Weak or interrupted urine flow",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light",
        },
        {
          title: "Blood in urine or semen",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light",
        },
        {
          title: "Pain or discomfort in the pelvic area",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light",
        },
        {
          title: "Erectile dysfunction",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis of Prostate Cancer",
      description:
        "Prostate cancer is diagnosed through several methods, often starting with a physical examination and screening tests:",
      items: [
        {
          title: "Digital Rectal Exam (DRE)",
          description:
            "A physical examination to check the prostate for abnormalities.",
          className: "bg-hciSecondary text-white p-2 rounded mb-2",
        },
        {
          title: "Prostate-Specific Antigen (PSA) Test",
          description:
            "A blood test that measures PSA levels, which may be elevated in men with prostate cancer.",
          className: "bg-hciSecondary text-white p-2 rounded mb-2",
        },
        {
          title: "Biopsy",
          description:
            "If the PSA or DRE indicates possible cancer, a biopsy is performed to confirm the diagnosis.",
          className: "bg-hciSecondary text-white p-2 rounded mb-2",
        },
        {
          title: "Imaging Tests",
          description:
            "MRI, CT scans, or bone scans may be used to determine the extent of the cancer.",
          className: "bg-hciSecondary text-white p-2 rounded mb-2",
        },
      ],
    },
  ],

  treatments: [
    {
      heading: "Treatment of Prostate Cancer",
      description:
        "Treatment for prostate cancer depends on the stage and grade of the disease, as well as the patient's overall health. The most common treatments include:",
      items: [
        {
          title: "Surgery",
          description: [
            "Radical Prostatectomy: Removal of the prostate gland, often used for early-stage cancer.",
            "Robotic-Assisted Surgery (Robotic Prostatectomy): Robotic surgery is a minimally invasive technique that uses robotic arms controlled by a surgeon to perform precise procedures. This method offers improved accuracy, reduced blood loss, less postoperative pain, and quicker recovery compared to traditional surgery. Robotic prostatectomy has become a preferred choice for many patients due to its advanced capabilities and better functional outcomes, including urinary control and sexual function."
          ]

        },
        {
          title: "Hormone Therapy",
          description:
            "Hormone therapy is used to lower testosterone levels, as the hormone stimulates prostate cancer growth.",
        },
        {
          title: "Chemotherapy",
          description:
            "Chemotherapy may be used in cases where the cancer has spread beyond the prostate and is no longer responding to hormone therapy.",
        },
        {
          title: "Radiation Therapy",
          description:
            "Radiation therapy plays a crucial role in treating prostate cancer, particularly for patients who are not candidates for surgery or those with localized tumors. The latest advancements in radiation therapy allow for more precise treatments, minimizing side effects and improving patient outcomes.",
        },
        {
          title: "Proton Therapy",
          description:
            "Proton therapy is an advanced form of radiation that uses protons instead of traditional X-rays to target cancer cells. Its precision ensures that the surrounding healthy tissues, such as the bladder and rectum, are spared from excessive radiation exposure. Proton therapy allows for higher doses of radiation to be delivered directly to the tumor, reducing side effects and improving long-term outcomes for prostate cancer patients.",
        },
        {
          title: "CyberKnife Treatment",
          description:
            "CyberKnife is a non-invasive robotic system that delivers targeted radiation with pinpoint accuracy. It tracks the prostate’s movement in real-time, ensuring that the tumor receives the full radiation dose while avoiding nearby healthy tissues. CyberKnife treatment for prostate cancer is typically completed in fewer sessions compared to traditional radiation therapy, offering a quicker and more convenient option for patients. The treatment is painless and does not require surgery or anesthesia.",
        },
        {
          title: "Advantages of Proton Therapy and CyberKnife",
          description: [
            "No Incision: These non-invasive treatments eliminate the need for surgical procedures. ",
            "No Blood Loss: With no surgery involved, there is no risk of blood loss.",
            "No Pain: Both treatments are painless, offering comfort to patients during therapy.",
            "No Anesthesia: Since there’s no surgery, anesthesia is not required.",
            "No Admission: Proton Therapy and CyberKnife are typically performed on an outpatient basis, allowing patients to return home the same day.",
          ]
        },
      ],
    },
  ],

  advantages: [
    {
      heading: "Advantages of Proton Therapy and CyberKnife",
      items: [
        {
          title: "No Incision",
          description:
            "These non-invasive treatments eliminate the need for surgical procedures.",
        },
        {
          title: "No Blood Loss",
          description:
            "With no surgery involved, there is no risk of blood loss.",
        },
        {
          title: "No Pain",
          description:
            "Both treatments are painless, offering comfort to patients during therapy.",
        },
        {
          title: "No Admission",
          description: "These therapies are usually outpatient procedures.",
        },
      ],
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Prostate cancer treatment has advanced significantly with the introduction of cutting-edge radiation techniques like Proton Therapy and CyberKnife, offering more precise, effective, and patient-friendly options. These treatments ensure that the cancer is targeted while minimizing damage to surrounding tissues, improving patient outcomes and quality of life. Early diagnosis and a personalized treatment plan are crucial for managing prostate cancer effectively, offering hope for a successful recovery.",
    },
  ],

  links: [
    {
      text: "To Consult With The Best Doctor For Treatment Of Prostate Cancer, Click Here",
      url: "/best-doctor-prostate-cancer-treatment",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In India, Click Here",
      url: "/best-prostate-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In Bangalore, Click Here",
      url: "/best-prostate-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In Chennai, Click Here",
      url: "/best-prostate-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In Delhi, Click Here",
      url: "/best-prostate-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In Hyderabad, Click Here",
      url: "/best-prostate-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In Mumbai, Click Here",
      url: "/best-prostate-cancer-hospital-mumbai",
    },
  ],
};

function ProstateCancer() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <H1 title={data.title} />
        <div className="mt-6">
          <p className="text-gray-600 text-start text-lg font-light">
            {data.description}
          </p>
        </div>
      </div>
      <Banner image="/oncology/prostate-cancer.png" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Causes */}
        <div className="mt-12">
          <H2
            title={data.causes[0].heading}
            className="text-2xl text-center font-medium mb-4"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.causes[0].description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.causes[0].items.map((cause, idx) => (
              <div key={idx} className={cause.className}>
                <h2 className="font-medium text-black text-md">
                  {cause.title}
                </h2>
                <p className="text-sm">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-start">
          {/* <KnowMore title="Prostate Cancer" /> */}
          <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
            <button className="text-start underline">
              To Know More About Prostate Cancer and Its Treatment, Click here
            </button>
          </p>
        </div>

        {/* Symptoms */}
        <div className="mt-12">
          <H2
            title={data.symptoms[0].heading}
            className="text-2xl font-medium mb-4"
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
        </div>

        <div className="mt-6 text-center">
          <KnowMore title="Prostate Cancer" />
        </div>


        {/* Diagnosis */}
        <div className="mt-12">
          <H2
            title={data.diagnosis[0].heading}
            className="text-2xl font-medium mb-4"
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

        <div className="mt-6 mb-10 text-center">
          <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
            <button className="text-start underline">
              To Get The Best Diagnosis of Prostate Cancer and Related Issues, Click here
            </button>
          </p>


        </div>

        {/* Treatments */}
        <H2
            title={data.treatments[0].heading}
            className="text-2xl font-medium mb-4"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.treatments[0].description}
          </p>
        <div className="border border-hciSecondary rounded-lg p-6 space-y-6">
          {data.treatments[0].items.map((treatment, idx) => (
            <div key={idx} className="space-y-2">
              <H3
                title={treatment.title}
                className="text-lg font-medium text-hciSecondary"
              />
              {(Array.isArray(treatment.description) ? treatment.description : [treatment.description]).map((desc, i) => {
                const [boldText, ...rest] = desc.split(":");
                const restText = rest.join(":").trim();

                return (
                  <p key={i} className="text-gray-600 font-light">
                    {rest.length > 0 ? (
                      <>
                        <strong className="font-medium text-black">{boldText}:</strong> {restText}
                      </>
                    ) : (
                      desc
                    )}
                  </p>
                );
              })}

            </div>
          ))}
        </div>


        {/* Advantages */}
        {/* <div className="mt-12">
          <H2
            title={data.advantages[0].heading}
            className="text-2xl font-medium mb-6"
          />
          <div className="border border-pink-200 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.advantages[0].items.map((advantage, idx) => (
              <div key={idx} className="bg-pink-50 p-4 rounded-lg">
                <H3
                  title={advantage.title}
                  className="font-medium text-hciSecondary mb-2"
                />
                <p className="text-gray-600 font-light">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Conclusion */}
        <div className="mt-12">
          <Conclusion data={data.conclusion} />
          <FooterLinks head={data.title} />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default ProstateCancer;

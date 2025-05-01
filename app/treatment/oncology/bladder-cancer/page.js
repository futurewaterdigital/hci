import React from "react";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import Banner from "@/components/Common/Banner";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import BookButton from "@/components/cardiacComponents/BookButton";
import KnowMore from "@/components/ui/KnowMore";
import IssuesLink from "@/components/ui/IssuesLinks";

const data = {
  title: "Bladder Cancer",
  description:
    "Bladder cancer is a type of cancer that begins in the tissues of the bladder. Bladder cancer is the fourth common cancer in India. Bladder cancer is becoming increasingly common in India, especially among men over 50 years of age. Early detection and proper treatment can lead to better outcomes and improved prognosis.",

  causes: [
    {
      heading: "Causes of Bladder Cancer",
      description:
        "Bladder cancer can develop due to several factors. In India, the following are some of the common causes of this type:",
      items: [
        {
          title: "Smoking",
          description:
            "Using cigarettes and harmful chemicals in tobacco can damage the bladder cells.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Chemical Exposure",
          description:
            "Exposure to industrial chemicals, especially those used in the textile, dye, rubber, and leather industries.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Chronic Bladder Infections",
          description:
            "Recurring urinary tract infections and inflammation can contribute to bladder cancer.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Age and Gender",
          description: "More common in older adults, especially men.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Family History",
          description:
            "A family history of bladder cancer may increase the likelihood of developing it.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: "Symptoms of Bladder Cancer",
      description:
        "The symptoms of bladder cancer may be similar to many other conditions but paying attention to these signs is crucial:",
      items: [
        {
          title: "Blood in Urine",
          description:
            "Blood in urine (hematuria), which may appear pink, red, or cola-colored.",
          className:
            "bg-hciSecondary text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Frequent Urination",
          description: "Needing to urinate more often than usual.",
          className:
            "bg-hciSecondary text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Pain or Burning During Urination",
          description: "Discomfort while passing urine.",
          className:
            "bg-hciSecondary text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Pain in Back Pain",
          description: "Pain may be felt in the lower region of your back.",
          className:
            "bg-hciSecondary text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Urinary Incontinence",
          description: "Difficulty controlling the flow of urine.",
          className:
            "bg-hciSecondary text-white p-2 rounded mb-2 h-20 font-light",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis of Bladder Cancer",
      description: "Several tests are used to diagnose bladder cancer:",
      items: [
        {
          title: "Cystoscopy",
          description:
            "A thin tube with a camera is inserted through the urethra to examine the bladder.",
          className:
            "bg-hciPrimary text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Biopsy",
          description:
            "A small sample of tissue is removed during cystoscopy for examination.",
          className:
            "bg-hciPrimary text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Imaging Tests",
          description:
            "CT scans and ultrasounds help assess the extent of the disease.",
          className:
            "bg-hciPrimary text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Urine Cytology",
          description:
            "Examination of urine for cancer cells under a microscope.",
          className:
            "bg-hciPrimary text-white p-2 rounded mb-2 h-20 font-light",
        },
      ],
    },
  ],

  treatments: [
    {
      heading: "Treatment for Bladder Cancer",
      description:
        "The best type of bladder cancer treatment depends on the stage of the disease. Early-stage tumors can often be treated with less invasive options:",
      items: [
        {
          title: "Surgery",
          items: [
            {
              name: "Transurethral Resection (TURBT)",
              description:
                "Used to treat early-stage bladder cancer. It involves removing cancerous tissue through the urethra.",
            },
            {
              name: "Cystectomy",
              description:
                "If the bladder is removed, the surgeon can create a new way for urine to leave the body, either through a urostomy or a neobladder.",
            },
          ],
        },
        {
          title: "Chemotherapy",
          description:
            "Anti-cancer drugs either before surgery (neoadjuvant) or after surgery to prevent recurrence. Can be delivered directly to the bladder or through the bloodstream.",
        },
        {
          title: "Radiation Therapy",
          description:
            "Uses high-energy rays to destroy cancer cells, especially before surgery to shrink tumors.",
        },
        {
          title: "Immunotherapy",
          description:
            "BCG therapy is given directly through a catheter to help the body's immune system fight bladder cancer.",
        },
        {
          title: "Targeted Therapy",
          description:
            "Specific drugs are used to target cancer growth through your body system.",
        },
      ],
    },
  ],

  followUp: {
    heading: "Follow-up Care",
    description:
      "Regular check-ups are necessary post-treatment to detect any recurrence. This includes periodic cystoscopies, urine tests, and imaging to monitor recovery.",
  },

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Bladder cancer, when diagnosed early, has a high chance of successful treatment. Awareness of the symptoms and risk factors, along with timely medical attention and appropriate treatment, can lead to better outcomes. With proper guidance and support, patients can manage their condition effectively and maintain a good quality of life.",
    },
  ],

  links: [
    {
      text: "To Consult With The Best Doctor For The Treatment Of Bladder Cancer, Click Here",
      url: "/best-doctor-bladder-cancer-treatment",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bladder Cancer In India, Click Here",
      url: "/best-bladder-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bladder Cancer In Bangalore, Click Here",
      url: "/best-bladder-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bladder Cancer In Chennai, Click Here",
      url: "/best-bladder-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bladder Cancer In Delhi, Click Here",
      url: "/best-bladder-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bladder Cancer In Hyderabad, Click Here",
      url: "/best-bladder-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bladder Cancer In Mumbai, Click Here",
      url: "/best-bladder-cancer-hospital-mumbai",
    },
  ],
};

function BladderCancer() {
  return (
    <>
      <Banner image="/oncology/bladder-cancer.png" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <H1 title={data.title} />
        <div className="mt-6">
          <p className="text-gray-600 font-light">{data.description}</p>
        </div>

        {/* Causes Section */}
        <div className="mt-12">
          <H2
            title={data.causes[0].heading}
            className="font-medium mb-4 text-2xl"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.causes[0].description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.causes[0].items.map((cause, idx) => (
              <div key={idx} className={cause.className}>
                <H3 title={cause.title} className="font-medium mb-2 text-lg" />
                <p className="font-light">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>

        <KnowMore title={data.title} />

        {/* Symptoms Section */}
        <div className="mt-12 ">
          <H2
            title={data.symptoms[0].heading}
            className="font-medium mb-4 text-2xl"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.symptoms[0].description}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {data.symptoms[0].items.map((symptom, idx) => (
              <div key={idx} className={symptom.className}>
                <strong>{symptom.title}:</strong> {symptom.description}
              </div>
            ))}
          </div>
          <KnowMore title={data.title} />
        </div>

        {/* Diagnosis Section */}
        <div className="mt-12">
          <H2
            title={data.diagnosis[0].heading}
            className="font-medium mb-4 text-2xl"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.diagnosis[0].description}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {data.diagnosis[0].items.map((test, idx) => (
              <div key={idx} className={test.className}>
                <strong>{test.title}:</strong> {test.description}
              </div>
            ))}
          </div>
        </div>

        <IssuesLink head={data.title} />

        {/* Treatment Section */}
        <div className="mt-12">
          <H2
            title={data.treatments[0].heading}
            className="font-medium mb-6 text-2xl"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.treatments[0].description}
          </p>
          <div className="border border-pink-200 rounded-lg p-6">
            <div className="space-y-6">
              {data.treatments[0].items.map((treatment, idx) => (
                <div key={idx} className="space-y-2">
                  <H3
                    title={treatment.title}
                    className="text-lg font-medium text-hciPrimary"
                  />
                  {treatment.items ? (
                    <div className="space-y-2 pl-4">
                      {treatment.items.map((item, i) => (
                        <div key={i} className="font-light">
                          <span className="font-medium text-hciSecondary">
                            {item.name}:
                          </span>{" "}
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
        </div>

        {/* Follow-up Care */}
        <div className="mt-12">
          <H2
            title={data.followUp.heading}
            className="font-medium mb-4 text-2xl"
          />
          <p className="text-gray-600 font-light">
            {data.followUp.description}
          </p>
        </div>

        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default BladderCancer;

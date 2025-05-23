import React from "react";
import Banner from "@/components/Common/Banner";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import KnowMore from "@/components/ui/KnowMore";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import BookButton from "@/components/cardiacComponents/BookButton";

const data = {
  title: "Bowel/Colorectal Cancer",
  description:
    "Bowel cancer, or colorectal cancer, which originates in the colon or rectum, has become a significant health concern globally, including in India. Although it primarily affects individuals over the age of 50, it can also occur at younger ages due to a combination of genetic factors, lifestyle habits, and poor diet. However, early detection and treatment can lead to better outcomes.",

  causes: [
    {
      heading: "Causes of Bowel Cancer",
      description:
        "Several factors can contribute to the development of bowel cancer, and diet and lifestyle play a significant role:",
      items: [
        {
          title: "Diet",
          description:
            "High-fat and high-processed foods, and low fiber increases the risk of developing bowel cancer.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Family History",
          description:
            "A family history of bowel cancer or polyps heightens an individual's risk due to inherited genetic factors.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Inflammatory Bowel Disease",
          description:
            "Conditions like ulcerative colitis or Crohn's disease which can lead to chronic inflammation in the bowel.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Lifestyle Factors",
          description:
            "Sedentary lifestyle, high alcohol consumption, and a smoking lifestyle contribute to the development of bowel cancer.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "Obesity",
          description:
            "Being overweight or obese has been linked to an increased risk of bowel cancer.",
          className: "bg-hciYellow p-4 rounded-lg",
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: "Symptoms of Bowel Cancer",
      description:
        "Bowel cancer may not always present noticeable symptoms in its early stages, but as the cancer progresses, symptoms may include:",
      items: [
        {
          title: "Changes in bowel habits",
          description:
            "Persistent changes in bowel movements, including diarrhea or constipation.",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Blood in Stool",
          description:
            "Blood appearing in stool or rectal bleeding, which requires immediate attention.",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Abdominal Pain",
          description: "Persistent abdominal pain, bloating, or discomfort.",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Unexplained Weight Loss",
          description: "Significant weight loss without apparent reason.",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Weakness or Fatigue",
          description:
            "Persistent tiredness and weakness that affects daily activities.",
          className: "bg-[#0E56A0] text-white p-2 rounded mb-2 h-20 font-light",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis of Bowel Cancer",
      description:
        "Several diagnostic methods are used to detect bowel cancer and determine its stage:",
      items: [
        {
          title: "Colonoscopy",
          description:
            "A thin tube with a camera is used to examine the entire colon and rectum for any abnormalities.",
          className: "bg-pink-500 text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Sigmoidoscopy",
          description:
            "Similar to colonoscopy but examines only the lower part of the bowel and rectum.",
          className: "bg-pink-500 text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "Stool Test",
          description:
            "Tests like FOBT or FIT to check for blood or abnormal DNA/RNA in stool samples.",
          className: "bg-pink-500 text-white p-2 rounded mb-2 h-20 font-light",
        },
        {
          title: "CT Scan/MRI",
          description:
            "Advanced imaging to determine the extent of cancer and check if it has spread to other organs.",
          className: "bg-pink-500 text-white p-2 rounded mb-2 h-20 font-light",
        },
      ],
    },
  ],

  treatments: [
    {
      heading: "Treatment for Bowel Cancer",
      description:
        "Treatment for bowel cancer depends on the stage of the cancer, its location, and the patient's overall health. Options include:",
      items: [
        {
          title: "Surgery",
          items: [
            {
              name: "Partial Resection",
              description:
                "Removal of part of the colon or rectum that contains the cancer. This is the most common surgery for early-stage bowel cancer.",
            },
            {
              name: "Total Colectomy",
              description:
                "A surgery to remove the entire colon, may be required.",
            },
            {
              name: "Laparoscopic Surgery",
              description:
                "A minimally invasive approach that allows for quicker recovery and fewer complications compared to traditional surgery.",
            },
          ],
        },
        {
          title: "Chemotherapy",
          description:
            "Anti-cancer drugs used to kill or stop the growth of cancer cells. It is often used after surgery or in treating cancer that has spread to other parts of the body.",
        },
        {
          title: "Radiation Therapy",
          description:
            "High-energy rays are used to target and destroy cancer cells. It is particularly effective for treating rectal cancer, especially when combined with chemotherapy.",
        },
        {
          title: "Targeted Therapy",
          description:
            "Targeted therapy focuses on specific molecules in cancer cells, blocking their growth and spread. This therapy is particularly effective for patients whose tumors have certain genetic mutations.",
        },
        {
          title: "Immunotherapy",
          description:
            "Immunotherapy helps enhance the body's immune system to recognize and fight cancer cells. It may be an option for advanced bowel cancer that does not respond to other treatments.",
        },
      ],
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Bowel cancer's increasing rates worldwide make it an emerging threat, patterns and encouraging collective lifestyles. Fortunately, advancements in early detection through regular screenings and improved treatment options have improved patient outcomes. Early diagnosis and a tailored treatment plan is essential. Comprehensive clinical cancer advice and support is available.",
    },
  ],

  links: [
    {
      text: "To Consult With The Best Doctor For Treatment Of Bowel Cancer, Click Here",
      url: "/best-doctor-bowel-cancer-treatment",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bowel Cancer In India, Click Here",
      url: "/best-bowel-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bowel Cancer In Bangalore, Click Here",
      url: "/best-bowel-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bowel Cancer In Chennai, Click Here",
      url: "/best-bowel-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bowel Cancer In Delhi, Click Here",
      url: "/best-bowel-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bowel Cancer In Hyderabad, Click Here",
      url: "/best-bowel-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Bowel Cancer In Mumbai, Click Here",
      url: "/best-bowel-cancer-hospital-mumbai",
    },
  ],
};

function BowelCancer() {
  return (
    <>
      <Banner image="/oncology/bowel-cancer.png" />
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
        <div className="mt-12">
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

        <KnowMore title={data.title} />

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
                    className="text-lg font-medium text-hciSecondary"
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

export default BowelCancer;

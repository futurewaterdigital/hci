import React from "react";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import H1 from "@/components/ui/h1";

const data = {
  title: "GI Cancer",
  subtitle: "Genitourinary Cancer",
  description:
    "Gastrointestinal (GI) cancer refers to a group of cancers that affect the digestive system and associated organs. These cancers can develop in any part of the gastrointestinal tract, from the esophagus to the rectum.",

  cancerTypes: [
    {
      name: "BOWEL CANCER",
      url: "/treatment/oncology/bowel-cancer",
    },
    {
      name: "GALLBLADDER CANCER",
      url: "/treatment/oncology/gallbladder-cancer",
    },
    {
      name: "LIVER CANCER",
      url: "/treatment/oncology/liver-cancer",
    },
    {
      name: "OESOPHAGUS CANCER",
      url: "/treatment/oncology/oesophagus-cancer",
    },
    {
      name: "PANCREATIC CANCER",
      url: "/treatment/oncology/pancreatic-cancer",
    },
  ],

  causes: [
    {
      heading: "Symptoms of Bowel Cancer",
      subTitle:
        "Bowel cancer may not present symptoms in its early stages. However, as the cancer grows, common symptoms include:",
      aneurysmSymptoms: [
        {
          title: "Changes in Bowel Habits:",
          description:
            "Persistent diarrhea, constipation, or changes in stool consistency that last for more than a few days.",
        },
        {
          title: "Blood in Stool:",
          description:
            "Rectal bleeding or dark-colored stools may indicate the presence of blood.",
        },
        {
          title: "Abdominal Pain",
          description:
            "Abdominal Pain: Ongoing discomfort, cramping, or pain in the abdomen.",
        },
        {
          title: "nexplained Weight Loss:",
          description: "Significant weight loss without any apparent reason.",
        },
        {
          title: "Weekness or Fatigue:",
          description:
            "Feeling unusually tired or weak, often due to blood loss caused by internal bleeding.",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis of Bowel cancer",
      subTitle:
        "Bowel cancer may not present symptoms in its early stages. However, as the cancer grows, common symptoms include:",
      aneurysmSymptoms: [
        {
          title: "Colonoscopy",
          description:
            "A scope is inserted into the rectum to examine the entire colon and rectum for any abnormalities, including polyps or tumors.",
        },
        {
          title: "Sigmoidoscopy",
          description:
            "A procedure that focuses on examining the lower part of the colon and rectum.",
        },
        {
          title: " Stool Test",
          description:
            "A fecal occult blood test (FOBT) or fecal immunochemical test (FIT) checks for hidden blood in the stool.",
        },
        {
          title: " CT Scan/MRI",
          description:
            "Imaging tests are used to determine the cancer’s stage and to check if it has spread to nearby organs or distant parts of the body.",
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
          description:
            "The removal of a cone-shaped piece of tissue from the cervix. This procedure can treat early cervical cancer by removing abnormal cells while preserving fertility.",
        },
        {
          title: "Trachelectomy",
          description:
            "Partial removal of the cervix and upper part of the vagina but leaves the uterus intact, preserving the possibility of pregnancy. This is an option for women wanting to retain fertility, especially when cancer is confined to a small area.",
        },
        {
          title: "Radical Hysterectomy",
          description:
            "Involves removal of the cervix, uterus, part of the vagina, and surrounding tissues, as well as lymph nodes. This option is used when the cancer is at a slightly advanced stage but still localized.",
        },
        {
          title: "Pelvic Exenteration",
          description:
            "For advanced cancer that has spread within the pelvic area, this extensive surgery removes the cervix, uterus, bladder, and part of the lower colon. This is generally considered only when other treatments are not effective and are often combined with reconstructive surgery.",
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
        "Targeted therapies are drugs that focus on specific molecules involved in cancer cell growth and spread, offering a more precise treatment with fewer side effects.",
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
      description: `Immunotherapy harnesses the body's immune system to identify and attack cancer cells. This is particularly beneficial in cases where the cancer has spread or recurred after other treatment.'`,
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
        "Bowel cancer is becoming more prevalent in India due to changing dietary patterns and increasingly sedentary lifestyles. Fortunately, advancements in early detection through regular screenings like colonoscopy and innovative treatments, including Proton Therapy and CyberKnife, provide better chances for successful outcomes. Comprehensive cancer centers across the country offer multidisciplinary approaches, ensuring patients receive the best possible care from diagnosis to recovery.",
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

const riskFactors = [
  {
    title: "Diet",
    description:
      "A diet high in red meat, processed foods, and low in fiber increases the risk of developing Bowel cancer.",
  },
  {
    title: "Inflammatory Bowel Diseases",
    description:
      "Conditions like Crohn’s disease or ulcerative colitis can lead to chronic inflammation in the intestines, raising the risk of cancer.",
  },
  {
    title: "Family History",
    description:
      "A family history of Bowel cancer or polyps heightens an individual's risk due to inherited genetic factors.",
  },
  {
    title: "Lifestyle Factors",
    description:
      "Smoking, excessive alcohol consumption, and a sedentary lifestyle contribute to the development of Bowel cancer.",
  },
  {
    title: "Age",
    description:
      "The likelihood of developing Bowel cancer rises with age, especially after 50.",
  },
  {
    title: "Obesity",
    description:
      "Being overweight or obese has been linked to an increased risk of Bowel cancer.",
  },
];

function GICancer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Image */}
      <div className="relative w-full mb-8">
        <img
          src="/oncology/GICancer_Banner.png"
          alt="GI Cancer Visualization"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Title Section */}
      <div className="text-center mb-12">
        <H1 title={data.title} />
      </div>
      {/* Cancer Types Navigation */}
      <div className="my-4">
        <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-x-20 gap-y-8 items-center uppercase font-semibold">
          {data.cancerTypes.map((item, index) => (
            <Link
              key={index}
              href={item?.url}
              className="hover:text-hciSecondary cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-3xl mt-14 text-center text-[#D84598] font-semibold">
        Bowel Cancer
      </div>
      <p className="mt-4 text-gray-600 text-start w-full text-lg mx-auto font-light leading-relaxed">
        Bowel cancer or Colorectal cancer, which originates in the colon or
        rectum, has become a significant health concern globally, including in
        India. Although it primarily affects individuals over the age of 50, it
        can also occur in younger people due to a combination of dietary habits,
        lifestyle factors, and genetic predispositions. As cases rise in India,
        especially with changing food patterns and urban lifestyles, early
        detection and comprehensive treatment remain essential for better
        outcomes.
      </p>

      <div className="my-10">
        <img
          src="/oncology/Gi-cancer-2.png"
          alt="GI Cancer Visualization"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-xl text-center font-bold">
        Causes of Bowel cancer
      </div>
      <p className="mt-4 text-gray-600 text-start w-full text-lg mx-auto font-light leading-relaxed">
        Several factors can contribute to the development of Bowel cancer, with
        diet and lifestyle playing a significant role alongside genetic risks.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {riskFactors.map((factor, index) => (
          <div key={index} className="bg-[#FFE7B6] rounded-md p-4 shadow-sm">
            <h3 className="font-bold mb-1">{factor.title}</h3>
            <p className="text-gray-800">{factor.description}</p>
          </div>
        ))}
      </div>
      <div className="my-3">
        <Link
          href={""}
          className="hover:text-blue-500 text-hciPrimary cursor-pointer"
        >
          To know more about bowel cancer and its treatment, click here
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Causes Section */}
        <div>
          <H2
            title="Symptoms of Bowel Cancer"
            className="text-xl font-semibold mb-4"
          />
          <p className="text-gray-700 mb-6 font-light">
            Bowel cancer may not present symptoms in its early stages. However,
            as the cancer grows, common symptoms include:
          </p>
          <div className="space-y-2">
            {data.causes[0].aneurysmSymptoms.map((cause, idx) => (
              <div
                key={idx}
                className="bg-[#0E56A0] text-white font-light p-4 rounded text-sm"
              >
                <span className="font-semibold pr-1">{cause.title}</span>
                {cause.description}
              </div>
            ))}
          </div>
          <div className="mt-4 text-start">
            <Link
              href="/treatment/oncology/cervical-cancer-diagnosis"
              className="text-hciPrimary underline block mb-2 font-semibold capitalize"
            >
              To know more about bowel cancer and its causes and treatment,
              click here
            </Link>
          </div>
        </div>

        {/* Diagnosis Section */}
        <div>
          <H2
            title="Diagnosis of Bowel cancer"
            className="text-xl font-semibold mb-4"
          />
          <p className="text-gray-700 mb-6 font-light">
            Several diagnostic methods are used to detect and confirm Bowel
            cancer, helping doctors determine the stage and plan the appropriate
            treatment.
          </p>
          <div className="space-y-2">
            {data.diagnosis[0].aneurysmSymptoms.map((diagnosis, idx) => (
              <div
                key={idx}
                className="bg-[#D84498] text-white p-3 rounded text-sm"
              >
                <div className="font-semibold">{diagnosis.title}</div>
                {diagnosis.description}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Treatments Section */}
      <div className="mt-12">
        <H2
          title="Treatment for Bowel cancer"
          className="text-2xl font-semibold mb-6 text-center"
        />
        <p className="mt-4 text-gray-600 text-start w-full text-lg mx-auto font-light leading-relaxed">
          Treatment for Bowel cancer depends on the stage of the cancer, its
          location, and the patient’s overall health. Common treatments include:
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
                {treatment.aneurysmSymptoms.map((item, idx) => (
                  <div key={idx} className="text-gray-600">
                    <span className="text-[#D84498]">
                      {" "}
                      {item.title && <strong>{item.title}: </strong>}
                    </span>
                    {item.description}
                  </div>
                ))}
              </div>

              {index === 0 && (
                <div className="mt-4 text-start">
                  <Link
                    href="/treatment/oncology/cervical-cancer-diagnosis"
                    className="text-hciPrimary underline block mb-2 font-semibold capitalize"
                  >
                    To get the best diagnosis of bowel cancer and related
                    issues, click here
                  </Link>
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
              className="text-hciPrimary font-semibold hover:underline"
            >
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GICancer;

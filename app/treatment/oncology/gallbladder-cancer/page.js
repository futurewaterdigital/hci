import React from "react";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import Banner from "@/components/Common/Banner";

const data = {
  title: "Gallbladder Cancer",
  description:
    "Gallbladder cancer is a rare but aggressive form of cancer that originates in the gallbladder, a small organ located beneath the liver that stores bile. Although it is uncommon, gallbladder cancer poses a significant health concern, particularly in certain populations. Early detection is crucial for improving treatment outcomes, as this cancer is often diagnosed at an advanced stage.",

  causes: [
    {
      heading: "Causes of Gallbladder Cancer",
      subheading:
        "Several factors contribute to the development of gallbladder cancer, including:",
      items: [
        {
          title: "Gallstones",
          description:
            "The presence of gallstones is one of the most significant risk factors associated with gallbladder cancer. Chronic irritation and inflammation caused by gallstones may lead to cellular changes.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Obesity",
          description:
            "Higher body mass index (BMI) is associated with an increased risk of developing gallbladder cancer.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Diet",
          description:
            "A diet high in fat and low in fruits and vegetables may contribute to the risk.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Chronic Inflammation",
          description:
            "Conditions like chronic cholecystitis (inflammation of the gallbladder) or biliary dyskinesia can increase the risk of gallbladder cancer due to ongoing inflammation.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Family History",
          description:
            "A family history of gallbladder cancer or other related cancers may increase cancer risk.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Age and Gender",
          description:
            "Gallbladder cancer is more common in women and tends to occur in individuals over the age of 65.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
        {
          title: "Genetic Factors",
          description:
            "Certain genetic conditions, such as Lynch syndrome or familial adenomatous polyposis, can also increase the risk of gallbladder cancer.",
          className: "bg-yellow-100 p-4 rounded-lg",
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: "Symptoms of Gallbladder Cancer",
      description:
        "Gallbladder cancer often presents no symptoms in its early stages, making early detection challenging. When symptoms do occur, they may include:",
      items: [
        {
          title: "Abdominal Pain",
          description:
            "Pain in the upper right abdomen, often radiating to the back or shoulder blade",
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          title: "Nausea and Vomiting",
          description:
            "Feeling nauseous or experiencing vomiting, especially after meals",
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          title: "Loss of Appetite",
          description:
            "Significant decrease in appetite or unexplained weight loss",
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          title: "Jaundice",
          description:
            "Yellowing of the skin and eyes, indicating a possible blockage of bile ducts",
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          title: "Itchy Skin",
          description:
            "Generalized itching may occur due to bile accumulation in the bloodstream",
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          title: "Bloating",
          description:
            "A feeling of fullness or bloating in the abdomen, often accompanied by pain",
          className: "bg-pink-500 text-white p-2 rounded",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis of Gallbladder Cancer",
      description:
        "Diagnosing gallbladder cancer typically involves a series of evaluations and tests, including:",
      items: [
        {
          title: "Imaging Tests",
          description: [
            "Ultrasound: A non-invasive test that uses sound waves to create images of the gallbladder and surrounding organs",
            "CT Scan: Provides detailed cross-sectional images to detect abnormalities in the gallbladder and assess the extent of cancer spread.",
            "MRI: Offers high-resolution images of soft tissues, including the gallbladder and nearby structures."
          ],
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          title: "Biopsy",
          description:
            "Tissue samples may be taken during an endoscopic procedure to confirm the presence of cancer cells",
          className: "bg-pink-500 text-white p-2 rounded",
        },
        {
          title: "Blood Tests",
          description:
            "Liver function tests and tumor markers like CA 19-9 may be assessed to evaluate the extent of disease and the presence of cancer",
          className: "bg-pink-500 text-white p-2 rounded",
        },
      ],
    },
  ],

  riskFactors: [
    {
      title: "Gallstones",
      description:
        "The presence of gallstones is one of the most significant risk factors associated with gallbladder cancer. Chronic irritation and inflammation caused by gallstones may lead to cellular changes in the gallbladder.",
    },
    {
      title: "Obesity",
      description:
        "Higher body mass index (BMI) is associated with an increased risk of developing gallbladder cancer.",
    },
    {
      title: "Chronic Inflammation",
      description:
        "Conditions like chronic cholecystitis (inflammation of the gallbladder) or biliary dyskinesia can increase the risk of gallbladder cancer due to ongoing inflammation.",
    },
    {
      title: "Age and Gender",
      description:
        "Gallbladder cancer is more common in women and tends to occur in individuals over the age of 65.",
    },
    {
      title: "Diet ",
      description:
        " A diet high in fat and low in fruits and vegetables may contribute to the risk.",
    },
    {
      title: "Family History",
      description:
        "A family history of gallbladder cancer or other related cancers may increase susceptibility.",
    },
    {
      title: "Genetic Factors",
      description:
        "Certain genetic conditions, such as Lynch syndrome or familial adenomatous polyposis, can also increase the risk of gallbladder cancer.",
    },
  ],

  causes: [
    {
      heading: "Symptoms of Bowel Cancer",
      subTitle:
        "Bowel cancer may not present symptoms in its early stages. However, as the cancer grows, common symptoms include:",
      aneurysmSymptoms: [
        {
          title: "Abdominal Pain:",
          description:
            "Persistent pain or discomfort in the upper right abdomen, often radiating to the back or shoulder.",
        },
        {
          title: "Nausea and Vomiting:",
          description:
            "Feeling nauseous or experiencing vomiting, especially after eating.",
        },
        {
          title: "Loss of Appetite: ",
          description:
            "A significant decrease in appetite or unexplained weight loss.",
        },
        {
          title: "Jaundice:",
          description:
            "Yellowing of the skin and eyes, indicating a possible blockage of bile ducts.",
        },
        {
          title: "Itchy Skin:",
          description:
            "Generalized itching may occur due to bile accumulation in the bloodstream.",
        },
        {
          title: "Bloating: ",
          description:
            "A feeling of fullness or bloating in the abdomen, often accompanied by swelling.",
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
          title: " Imaging Tests",
          description: [
            "Ultrasound: A non-invasive test that uses sound waves to create images of the gallbladder and surrounding organs",
            "CT Scan: Provides detailed cross-sectional images to detect abnormalities in the gallbladder and assess the extent of cancer spread.",
            "MRI: Offers high-resolution images of soft tissues, including the gallbladder and nearby structures."
          ],
        },
        {
          title: "Biopsy",
          description:
            "A tissue sample may be taken during an endoscopic procedure to confirm the presence of cancer cells.",
        },
        {
          title: "Blood Tests",
          description:
            "Liver function tests and tumor markers like CA 19-9 may be assessed to evaluate the overall health of the liver and the presence of cancer.",
        },
        // {
        //   title: "Blood Tests",
        //   description:
        //     "Liver function tests and tumor markers like CA 19-9 may be assessed to evaluate the overall health of the liver and the presence of cancer.",
        // },
      ],
    },
  ],

  treatments: [
    {
      heading: "Surgery",
      aneurysmSymptoms: [
        {
          title: "Cholecystectomy",
          description:
            "The surgical removal of the gallbladder is the primary treatment for early-stage gallbladder cancer. Depending on the cancer's extent, nearby tissues or organs may also be removed.",
        },
        {
          title: "Laparoscopic Surgery",
          description:
            "Minimally invasive techniques may be employed for gallbladder removal, leading to shorter recovery times.",
        },
      ],
    },
    {
      heading: "Radiation Therapy",
      description:
        "Radiation therapy uses high-energy rays to target and destroy cancer cells. It may be employed after surgery to eliminate any remaining cancer cells, especially if there is a high risk of recurrence.",
      aneurysmSymptoms: [
        {
          title: "Proton Therapy",
          description:
            "A form of radiation therapy that uses protons to deliver targeted radiation, minimizing damage to surrounding healthy tissue. This approach can be beneficial for patients with localized gallbladder cancer.",
        },
        {
          title: "Brachytherapy",
          description:
            "In certain cases, internal radiation therapy may be used, where radioactive material is placed near or within the tumor to provide a higher dose of radiation to cancer cells while sparing normal tissues.",
        },
        // {
        //   title: "Combined Radiation Therapy",
        //   description:
        //     "In some cases, both EBRT and brachytherapy are used to achieve maximum effect, especially when the tumor is large or the cancer has spread beyond the cervix.",
        // },
      ],
    },
    {
      heading: "Chemotherapy",
      description:
        "Chemotherapy utilizes powerful drugs to kill or slow the growth of cancer cells. It is often used in advanced stages of gallbladder cancer or as adjuvant therapy following surgery to reduce the risk of recurrence.",
    },
    {
      heading: "Targeted Therapy",
      description:
        "Targeted therapies focus on specific pathways and mechanisms that cancer cells use to grow and survive. Medications that target specific genetic mutations or proteins associated with gallbladder cancer may be considered.",
    },
    {
      heading: " Palliative Care",
      description:
        "For patients with advanced gallbladder cancer, palliative care is vital to improve quality of life. This approach focuses on relieving symptoms, managing pain, and providing emotional support.",
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Gallbladder cancer is a challenging condition that requires timely diagnosis and comprehensive treatment. Despite its rarity, the incidence is rising, particularly in certain demographics. Awareness of the risk factors, symptoms, and the importance of regular check-ups is essential for early detection. Treatment advancements, including surgery, targeted therapies, and innovative radiation options like Proton Therapy, offer hope for improved outcomes, highlighting the significance of personalized care tailored to each patient's needs.",
    },
  ],

  links: [
    {
      text: "To Consult With The Best Doctor For Treatment Of Gallbladder Cancer, Click Here",
      url: "/best-doctor-gallbladder-cancer-treatment",
    },
    {
      text: "For The Best Hospital For The Treatment Of Gallbladder Cancer In India, Click Here",
      url: "/best-gallbladder-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Gallbladder Cancer In Bangalore, Click Here",
      url: "/best-gallbladder-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Gallbladder Cancer In Chennai, Click Here",
      url: "/best-gallbladder-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Gallbladder Cancer In Delhi, Click Here",
      url: "/best-gallbladder-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Gallbladder Cancer In Hyderabad, Click Here",
      url: "/best-gallbladder-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Gallbladder Cancer In Mumbai, Click Here",
      url: "/best-gallbladder-cancer-hospital-mumbai",
    },
  ],
};

function GallbladderCancer() {
  return (
    <>
      {/* Banner image */}
      <Banner image="/oncology/gallbladder-cancer-banner.png" />
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-3xl mt-14 text-center text-[#D84598] font-semibold">
          {data.title}
        </div>
        <div className="mt-6">
          <p className="text-gray-600 text-lg font-light">{data.description}</p>
        </div>

        <div className="text-xl text-center font-bold pt-5">
          Causes of Gallbladder cancer
        </div>
        <p className="mt-4 text-gray-600 text-start w-full text-lg mx-auto font-light leading-relaxed">
          Several factors contribute to the development of gallbladder cancer,
          including:
        </p>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-4">
          {data?.riskFactors.map((factor, index) => (
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
        <div className="my-3">
          <Link href={""} className="text-hciPrimary font-semibold underline">
            To Know More About Gallbladder Cancer and Its Treatment, Click here
          </Link>
        </div>
        <div className="mt-12 gap-8">
          {/* Causes Section */}
          <div>
            <H2
              title="Symptoms of Bowel Cancer"
              className="text-xl font-semibold mb-4"
            />
            <p className="text-gray-600 mb-6 font-light">
              {data.symptoms[0].description}
            </p>
            <div className="space-y-2">
              {data.causes[0]?.aneurysmSymptoms?.map((cause, idx) => (
                <div
                  key={idx}
                  className="bg-[#0E56A0] text-white font-light p-4 rounded text-sm"
                >
                  <span className="font-semibold pr-1">{cause.title}</span>
                  {cause.description}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/treatment/oncology/cervical-cancer-info"
                className="text-[#0E56A0] font-semibold underline"
              >
                To Know More About Gallbladder Cancer and Its Causes and Treatment, Click here
              </Link>
            </div>
          </div>

          {/* Diagnosis Section */}
          <div className="mt-10">
            <H2
              title="Diagnosis of Bowel cancer"
              className="text-xl font-semibold mb-4"
            />
            <p className="text-gray-600 mb-6 font-light">
              Diagnosing gallbladder cancer typically involves a series of evaluations and tests, including:
            </p>

            <div className="space-y-2">
              {data.diagnosis[0].aneurysmSymptoms.map((diagnosis, idx) => (
                <div
                  key={idx}
                  className="bg-[#D84498] text-white p-3 rounded text-sm"
                >
                  <div className="font-semibold">{diagnosis.title}</div>

                  {Array.isArray(diagnosis.description) ? (
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {diagnosis.description.map((desc, i) => {
                        const [beforeColon, afterColon] = desc.split(/:(.+)/);
                        return (
                          <li key={i}>
                            {afterColon ? (
                              <>
                                <strong>{beforeColon}:</strong>{afterColon}
                              </>
                            ) : (
                              desc
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="mt-1">
                      {diagnosis.description.includes(":") ? (
                        <>
                          <strong>{diagnosis.description.split(/:(.+)/)[0]}:</strong>
                          {diagnosis.description.split(/:(.+)/)[1]}
                        </>
                      ) : (
                        diagnosis.description
                      )}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/treatment/oncology/cervical-cancer-diagnosis"
                className="text-[#0E56A0] font-semibold underline"
              >
                To Get the Best Diagnosis of Gallbladder Cancer and Related Issues, Click here
              </Link>
            </div>
          </div>
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
                <h2 className="text-xl text-hciPrimary font-bold">
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
                      {item.title && (
                        <span className="text-[#D84498] font-semibold">{item.title}: </span>
                      )}
                      <span className="font-light">{item.description}</span>
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
    </>
  );
}

export default GallbladderCancer;

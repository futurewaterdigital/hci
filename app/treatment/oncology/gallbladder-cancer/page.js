import React from "react";
import H2 from "@/components/ui/h2";
import Link from "next/link";

const data = {
  title: "Gallbladder Cancer",
  description:
    "Gallbladder cancer is a rare but aggressive form of cancer that originates in the gallbladder, a small organ located between the liver that stores bile. Although it is uncommon, gallbladder cancer poses a significant health concern, particularly in certain populations, including those in India. Early detection is crucial for improving treatment outcomes, as this cancer is often diagnosed at an advanced stage.",

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
          items: [
            "Ultrasound: A non-invasive test that uses sound waves to create images of the gallbladder and surrounding organs",
            "CT Scan: Provides detailed cross-sectional images to detect abnormalities in the gallbladder area",
            "MRI: Offers high-resolution images of soft tissues, including the gallbladder and nearby organs",
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
      title: "Chronic",
      description:
        "Inflammation Conditions like chronic cholecystitis (inflammation of the gallbladder) or biliary dyskinesia can increase the risk of gallbladder cancer due to ongoing inflammation.",
    },
    {
      title: "Age and Gender",
      description:
        "Gallbladder cancer is more common in women and tends to occur in individuals over the age of 65.",
    },
    {
      title: "Age",
      description:
        "The likelihood of developing Bowel cancer rises with age, especially after 50.",
    },
    {
      title: "Obesity",
      description:
        " Higher body mass index (BMI) is associated with an increased risk of developing gallbladder cancer.",
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
          description:
            "A scope is inserted into the rectum to examine the entire colon and rectum for any abnormalities, including polyps or tumors.",
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
        {
          title: "Blood Tests",
          description:
            "Liver function tests and tumor markers like CA 19-9 may be assessed to evaluate the overall health of the liver and the presence of cancer.",
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
        "Gallbladder cancer is a challenging condition that requires timely diagnosis and comprehensive treatment. Despite its rarity, its incidence is rising, particularly in certain demographics in India. Awareness of risk factors, symptoms, and the importance of regular check-ups is essential for early detection. Treatment advancements, including surgery, targeted therapies, and innovative radiation options like Proton Therapy, offer hope for improved outcomes. High-quality care and comprehensive treatment planning are essential for optimal results.",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl mt-14 text-center text-[#D84598] font-semibold">
        {data.title}
      </div>
      <div className="mt-6">
        <p className="text-gray-600 text-lg font-light">{data.description}</p>
      </div>
      {/* Banner Image */}
      <div className="relative my-10 w-full mb-8">
        <img
          src="/oncology/gallbladder-cancer-banner.png"
          alt="Gallbladder Cancer Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-xl text-center font-bold">
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
          <div className="space-y-2">
            {data.causes[0].aneurysmSymptoms.map((cause, idx) => (
              <div
                key={idx}
                className="bg-blue-700 text-white font-light p-4 rounded text-sm"
              >
                <span className="font-semibold pr-1">{cause.title}</span>
                {cause.description}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/treatment/oncology/cervical-cancer-info"
              className="text-blue-600 hover:underline"
            >
              For More About Cervical Cancer, Its Causes And Treatment, Click
              Here
            </Link>
          </div>
        </div>

        {/* Diagnosis Section */}
        <div>
          <H2
            title="Diagnosis of Bowel cancer"
            className="text-xl font-semibold mb-4"
          />
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
          <div className="mt-4">
            <Link
              href="/treatment/oncology/cervical-cancer-diagnosis"
              className="text-blue-600 hover:underline"
            >
              For The Best Diagnosis And Treatment For Cervical Cancer, Click
              Here
            </Link>
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
      hello
      {/* Links */}
      <div className="mt-8 space-y-4">
        {data.links.map((link, index) => (
          <div key={index} className="text-start">
            <Link href={link.url} className="text-hciPrimary hover:underline">
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallbladderCancer;

import React from "react";
import Banner from "@/components/Common/Banner";
import H1 from "@/components/ui/h1";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H2 from "@/components/ui/h2";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import Link from "next/link";
import DataBoxes from "@/components/cardiacComponents/Box";
import H3 from "@/components/ui/h3";

const data = {
  title: "Cancer in Women",
  bannerImage: "/oncology/cancer-in-women-banner.png",
  description:
    "Cancer in women are largely divided into breast cancer and gynecological cancers",

  breastCancerIntro:
    "Breast cancer is one of the most common cancers among women, with early detection and advanced treatment playing a vital role in its successful recovery. If detected while affected cells are few (known as the understanding of the forming), it could help prevent the spread of the cancer. If you are worried about cancer affecting women, you can also inquire breast cancer.",

  causes: [
    {
      heading: "Causes of Breast Cancer",
      description:
        "The exact cause of breast cancer remains unknown, but several risk factors can increase the likelihood of its development:",
      aneurysmSymptoms: [
        {
          title: "Genetic Mutations",
          description:
            "Inherited mutations in genes like BRCA1 and BRCA2 can significantly increase the risk of breast cancer",
        },
        {
          title: "Family History",
          description:
            "Having a family history of breast cancer can indicate a possible risk",
        },
        {
          title: "Hormonal Influence",
          description:
            "Long-term exposure to high levels of hormones can increase cancer risk",
        },
        {
          title: "Age",
          description:
            "The risk of developing breast cancer increases with age",
        },
        {
          title: "Lifestyle Factors",
          description:
            "Obesity, smoking, alcohol consumption, and lack of physical activity are associated with a higher risk",
        },
      ],
    },
  ],

  // symptoms: [
  //   {
  //     heading: 'Symptoms of Breast Cancer',
  //     description: 'Common signs include:',
  //     aneurysmSymptoms: [
  //       {
  //         description: 'A lump or thickening in the breast or underarm',
  //         bgColor: 'bg-hciPrimary text-white',
  //       },
  //       {
  //         description:
  //           'Changes in the size, shape, or appearance of the breast',
  //       },
  //       { description: 'Dimpling or puckering of breast skin' },
  //       { description: 'Nipple discharge (particularly if bloody)' },
  //       { description: 'Redness or scaling of nipple or breast skin' },
  //       { description: 'Persistent breast pain or discomfort' },
  //     ],
  //   },
  // ],
  symptoms: [
    {
      category: "",
      description: "A lump or thickening in the breast or underarm",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Changes in the size, shape, or appearance of the breast",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Dimpling or puckering of breast skin",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Nipple discharge (particularly if bloody)",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Redness or scaling of nipple or breast skin",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Persistent breast pain or discomfort",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description:
        "Mammogram: An X-ray of the breast used to detect abnormal growth in the breast",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Ultrasound: To further evaluate abnormalities found in a mammogram",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "MRI: A series of breast scans to screen for or determine if it is cancerous",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Biopsy: A small sample of breast tissue is removed and examined under a microscope to determine if it is cancerous",
      bgColor: "bg-hciSecondary text-white",
    },
  ],

  // diagnosis: [
  //   {
  //     heading: 'Diagnosis of Breast Cancer',
  //     description:
  //       'Breast cancer can be diagnosed through a combination of methods:',
  //     aneurysmSymptoms: [
  //       {
  //         title: 'Mammogram',
  //         description:
  //           'X-ray of the breast used to detect abnormal growth in the breast',
  //       },
  //       {
  //         title: 'Ultrasound',
  //         description: 'To further evaluate abnormalities found in a mammogram',
  //       },
  //       {
  //         title: 'MRI',
  //         description:
  //           'A series of breast scans to screen for or determine if it is cancerous',
  //       },
  //       {
  //         title: 'PET',
  //         description:
  //           'Advanced, precise imaging scan is sometimes used for detailed imaging of cancer spread',
  //       },
  //     ],
  //   },
  // ],

  treatments: [
    {
      heading: "Treatment of Breast Cancer",
      description:
        "Treatment for breast cancer depends on its stage, type, and individual patient needs. It often involves a combination of therapies:",
      aneurysmSymptoms: [
        {
          title: "Surgery",
          description:
            "Lumpectomy (removing tumor) or Mastectomy (removing most or all of the breast)",
        },
        {
          title: "Chemotherapy",
          description:
            "Uses powerful drugs to kill or slow the growth of cancer cells. Treatment can be given before or after surgery depending on the stage of the cancer",
        },
        {
          title: "Hormone Therapy",
          description:
            "For cancers that are sensitive to hormones, this treatment blocks or lowers hormone levels to slow cancer growth",
        },
        {
          title: "Targeted Therapy",
          description:
            "Specifically targets cancer cells without affecting normal cells. Drugs like Herceptin are commonly used",
        },
      ],
    },
    {
      heading: "",
      description: "",
      aneurysmSymptoms: [
        {
          title: "Radiation Therapy",
          description:
            "Directed radiation beams target any remaining cancer cells after surgery to eliminate any remaining cancer cells",
        },
        {
          title: "Proton Therapy",
          description:
            "An advanced form of radiation treatment that uses protons to precisely target cancerous breast tissue while sparing surrounding healthy tissue. This treatment is particularly beneficial for left-sided breast cancer patients as it reduces the risk of damage to the heart",
        },
        {
          title: "CyberKnife Treatment",
          description:
            "This robotic radiosurgery system delivers radiation with extreme precision to target tumors. Its advanced image guidance system allows for real-time tracking of tumor movement during breathing, ensuring accurate treatment delivery",
        },
      ],
    },
  ],

  advantages: [
    {
      title: "No Incision",
      description:
        "Non-invasive treatment reduces the skin and the need for surgical cuts",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      title: "No Blood Loss",
      description: "No need for surgery means no risk of blood loss",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      title: "No Pain",
      description:
        "Painless treatment with minimal discomfort during the procedure",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      title: "No Anesthesia",
      description: "Most procedures require no general anesthesia",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      title: "No Admission",
      description:
        "Most treatments can typically be done as an outpatient basis, allowing patients to return home the same day",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Breast cancer treatment has evolved significantly with personalized care and advanced technologies like Proton Therapy and CyberKnife providing highly effective options for patients. These modern treatments, combined with early detection through regular screening and genetic testing, have greatly improved survival rates. Ongoing research into targeted therapies and immunotherapy continues to bring new hope for a better diagnosis and successful management of breast cancer.",
    },
  ],

  hospital_links: [
    {
      text: "For The Best Hospital For The Treatment Of Breast Cancer In India",
      url: "/best-breast-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Breast Cancer In Bangalore",
      url: "/best-breast-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Breast Cancer In Chennai",
      url: "/best-breast-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Breast Cancer In Delhi",
      url: "/best-breast-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Breast Cancer In Hyderabad",
      url: "/best-breast-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Breast Cancer In Mumbai",
      url: "/best-breast-cancer-hospital-mumbai",
    },
  ],
};

const womenCancerTypes = [
  {
    menu: "Breast cancer",
    url: "",
  },
  {
    menu: "Gynecological Cancers",
    url: "/treatment/oncology/gynecological-cancers",
  },
];

function CancerInWomen() {
  return (
    <>
      <Banner image={data.bannerImage} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
          
          <H1 title={data.title} />
        <H2 title={data.description} className="text-center font-light" />

        {/* More Link about brain tumor */}
        <div className="my-4">
          <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-x-20 gap-y-8 items-center uppercase font-medium">
            {womenCancerTypes.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:text-hciSecondary cursor-pointer"
              >
                {item.menu}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <H2
            title="Breast Cancer"
            className="text-3xl font-medium mb-4 text-center text-hciSecondary"
          />
          <p className="text-gray-700 mb-6 font-light">
            {data.breastCancerIntro}
          </p>
        </div>
        <div className="pt-2">
          {data.causes.map((cause, index) => (
            <div key={index}>
              <H3
                title={cause.heading}
                className="text-2xl text-center font-medium text-black mb-2"
              />
              <p className="text-gray-600 text-lg mb-4 font-light">
                {cause.description}
              </p>
              <div className="grid grid-cols-5 gap-6">
                {cause.aneurysmSymptoms.map((symptom, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                  >
                    <h4 className="text-lg text-center font-medium text-[#0E56A0] mb-2">
                      {symptom.title}
                    </h4>
                    <p className="text-gray-600 text-center  mb-4 font-light">
                      {symptom.description}
                    </p>
                  </div>
                ))}
              </div>
              {/* <DataLists
                divClass="space-y-4 mb-8"
                data={cause.aneurysmSymptoms}
                ulClass="list-disc pl-5 space-y-2"
              /> */}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 pt-8 mb-8">
          <div>
            {/* <DataLists
              divClass="space-y-4"
              data={data.symptoms}
              ulClass="list-disc pl-5 space-y-2"
            /> */}
            <DataBoxes
              title="Symptoms of Breast Cancer"
              text="Common symptoms include:"
              titleCss="text-black font-medium text-start text-2xl mb-2"
              header=""
              data={data.symptoms}
              myclass="grid grid-cols-2"
            />
          </div>
          <div>
            <DataBoxes
              title="Diagnosis of Breast Cancer"
              text="Breast cancer can be diagnosed through a combination of methods:"
              titleCss="text-black font-medium text-start text-2xl mb-2"
              header=""
              data={data.diagnosis}
              myclass="grid grid-cols-2"
            />

            <div className="mt-4 text-start">
              <Link
                href="/treatment/oncology/breast-cancer-diagnosis"
                className="text-hciPrimary underline block mb-2 font-medium capitalize"
              >
                For The Best Diagnosis Of Breast Cancer And Related Issues,
                Click Here
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="">
            {data.treatments.map((treatment, index) => (
              <div key={index} className="">
                <H3
                  title={treatment.heading}
                  className="text-2xl text-center font-medium mb-2"
                />
                <p className="text-gray-600 text-lg mb-4 font-light">
                  {treatment.description}
                </p>
                <div
                  className={`grid grid-cols-${treatment.aneurysmSymptoms.length} gap-6`}
                >
                  {treatment.aneurysmSymptoms.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-gray-600  border p-2 rounded-md shadow-md space-y-2"
                    >
                      {item.title && (
                        <span className="font-medium text-hciPrimary">
                          {item.title}:{" "}
                        </span>
                      )}
                      <p className="text-gray-600  font-light">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <DataBoxes
            title="Key Advantages of these Techniques"
            text=""
            titleCss="text-black text-2xl mb-5 font-medium text-center"
            header=""
            data={data.advantages}
            myclass="grid grid-cols-2"
          />
        
          </div>
          
          <div>
            <Conclusion data={data.conclusion} />
            <FooterLinks head={data.title} />
            <BookButton />
          </div>

        {/* <div className="space-y-2 mb-8">
          {data.hospital_links.map((link, index) => (
            <div key={index} className="text-center">
              <Link
                href={link.url}
                className="text-hciSecondary hover:text-pink-700"
              >
                {link.text}, Click Here
              </Link>
            </div>
          ))}
        </div> */}

        
      </div>
      </div>
      </>
  );
}

export default CancerInWomen;

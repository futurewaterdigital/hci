import React from "react";
import Banner from "@/components/Common/Banner";
import Title from "@/components/cardiacComponents/Title";
import DataLists from "@/components/cardiacComponents/Bullets";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H2 from "@/components/ui/h2";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import TextComponent from "@/components/Common/TextComponent";
import H3 from "@/components/ui/h3";
import Link from "next/link";

const data = {
  title: "Advanced and Recurrent Cancers",
  bannerImage: "/oncology/advanced-recurrent-cancers.png",
  description: `In India, the advanced and recurrent cancers pose a significant public health concern due to increasing cancer rates, delayed diagnoses, and challenges in healthcare access. Managing these cancers in India is guided by factors such as healthcare infrastructure, socioeconomic disparities, and the access to cancer treatment in the country.`,
  overview:
    "Advanced cancer refers to a cancer that has spread beyond its primary site to other organs (metastasis), or a cancer that has recurred after initial treatment. Breast cancer, along with cancers of the lung, liver, and cervix, are among the most common cancers diagnosed at advanced stages in India.",

  early_symptoms: [
    { description: "Localized Symptoms" },
    { description: "Pain" },
    { description: "Fatigue, Weight Loss and Weakness" },
    { description: "Abnormal Bleeding" },
  ],

  common_cancers: [
    {
      title: "Breast Cancer",
      description:
        "The most common cancer among women, locally advanced or metastatic breast cancer (MBC) requires a multi-disciplinary approach. HER2-positive, ER/PR-negative breast cancer (TNBC), hormone-positive and other subtypes each demand specialized approaches.",
    },
    {
      title: "Advanced and Recurrent Colorectal",
      description:
        "Advanced colorectal cancer often spreads to the liver or lungs requiring approach to target specific mutations including KRAS, NRAS and BRAF. We utilize innovative surgical and radiation techniques for optimal outcomes.",
    },
    {
      title: "Ovarian Cancer",
      description:
        "Commonly discovered through screening and considered one of the most challenging to treat due to recurrence and chemotherapy resistance. Our approach combines cytoreductive surgery with targeted therapy for platinum-resistant cases.",
    },
    {
      title: "Lung and Head Cancers",
      description:
        "Often detected in later stages with poor prognosis, we conduct extensive molecular testing for EGFR, ALK, ROS1 and PD-L1 to determine targeted and immunotherapy approaches for personalized treatment.",
    },
  ],

  india_cancer_stats: [
    {
      title: "Breast Cancer",
      description:
        "The most common cancer in India with highest incidence rate among women. Triple-negative breast cancer (TNBC) has higher prevalence in Indian population than global averages.",
    },
    {
      title: "Oral Cancer",
      description:
        "India has highest oral cancer rates due to tobacco use (smoking and chewing), with 60% detected in advanced stages with poor prognosis.",
    },
    {
      title: "Recurrent Colorectal Cancer",
      description:
        "Rising incidence in urban populations with up to 30-40% recurrence rates despite successful initial treatment, often requiring multimodal approaches.",
    },
  ],

  symptoms_factors: [
    {
      heading: "Tumor Characteristics",
      description: "Aggressive tumor biology with rapid cellular division",
      aneurysmSymptoms: [
        { description: "High-grade histology" },
        { description: "Rapid growth rate" },
        { description: "Extensive local invasion" },
      ],
    },
    {
      heading: "Treatment Resistance",
      description:
        "Cancer cells that develop mechanisms to evade standard treatments",
      aneurysmSymptoms: [
        { description: "Drug resistance mutations" },
        { description: "Adaptive cellular mechanisms" },
        { description: "Multiple pathway activation" },
      ],
    },
    {
      heading: "Late Stage Diagnosis",
      description:
        "Detection after cancer has already metastasized to other organs",
      aneurysmSymptoms: [
        { description: "Multiple organ involvement" },
        { description: "Complex symptom management" },
        { description: "Limited treatment options" },
      ],
    },
    {
      heading: "Genetic Factors",
      description:
        "Inherited gene mutations that predispose to aggressive cancer forms",
      aneurysmSymptoms: [
        { description: "BRCA mutations" },
        { description: "Lynch syndrome" },
        { description: "P53 mutations" },
      ],
    },
  ],

  treatments: [
    {
      heading: "Common Cancers and their Recurrence in India",
      aneurysmSymptoms: [
        {
          title: "Breast Cancer",
          description:
            " Recurrence rates are high, especially for hormone receptor-negative or triple-negative breast cancer (TNBC). Regular follow-up and monitoring are critical for detecting recurrence early.",
        },
        {
          title: "Cervical Cancer",
          description:
            "Women who undergo treatment for cervical cancer (e.g., surgery, radiation) may experience recurrence in the pelvic region.",
        },
        {
          title: "Oral Cancer",
          description:
            "In India, oral cancers, often linked to tobacco and alcohol use, have high recurrence rates after initial surgery or radiation therapy.",
        },
        {
          title: "Lung Cancer",
          description:
            "Given the aggressive nature of lung cancer, recurrence is common, especially in patients diagnosed at later stages.",
        },
      ],
    },
    {
      heading:
        "Treatment of Recurrent Cancers in India include all the modalities of the treatment such as",
      description:
        "Radiation therapy uses high-energy rays to target and destroy cancer cells. It may be employed after surgery to eliminate any remaining cancer cells, especially if there is a high risk of recurrence.",
      aneurysmSymptoms: [
        {
          title: "Surgery",
          description:
            "In some cases, recurrent tumors may be surgically removed if they are localized.",
        },
        {
          title: "Chemotherapy and Radiation",
          description:
            "These remain the primary treatments for recurrent cancers in India, though access to advanced chemotherapy regimens may be limited outside major cities.",
        },
        {
          title: "Targeted Therapy",
          description:
            "For cancers like breast cancer and advanced and recurrent cancer, targeted therapies (e.g., HER2 inhibitors or EGFR inhibitors) are becoming more available, though still largely concentrated in major cancer centers.",
        },
        {
          title: "Immunotherapy",
          description:
            " Still an emerging option in India, immunotherapy has shown promise for recurrent cancers, particularly in cancers like melanoma and advanced and recurrent cancer. Clinical trials in major hospitals are increasing.",
        },
        {
          title: "Palliative Care",
          description:
            "For many recurrent cancers, especially those diagnosed at advanced stages, palliative care plays a crucial role in managing symptoms and improving quality of life.",
        },
      ],
    },
    {
      heading: "Barriers to Managing Advanced and Recurrent Cancers in India",
      aneurysmSymptoms: [
        {
          title: "",
          description:
            "Several factors make the management of advanced and recurrent cancers particularly challenging in India:",
        },
        {
          title: "Awareness",
          description:
            "Despite increasing awareness efforts, there is still limited public knowledge about the importance of early detection, regular screenings, and the warning signs of cancer, particularly in rural areas.",
        },
        {
          title: "Healthcare Disparities",
          description:
            "There is a large urban-rural divide in healthcare access, with advanced diagnostic tools, specialized cancer centers, and treatments more concentrated in metropolitan cities.",
        },
        {
          title: "Cost of Treatment",
          description:
            "Cancer treatment, especially advanced therapies like targeted therapy and immunotherapy, is expensive, making it inaccessible to a large section of the population, especially in rural areas.",
        },
        {
          title: "Infrastructure Limitations",
          description:
            "Many regions lack the necessary infrastructure to support advanced cancer treatments, including diagnostic imaging (e.g., PET scans), specialized surgery, and newer therapies.",
        },
        {
          title: "Cultural and Social Factors",
          description:
            "Stigma surrounding cancer diagnosis and treatment, particularly in rural areas, can lead to delays in seeking care or non-compliance with treatment regimens.",
        },
      ],
    },
  ],

  treatment_options: [
    {
      heading: "Chemotherapy and Radiation",
      description:
        "These are the most common treatments available, but access to newer treatments are still limited in many parts of India.",
    },
    {
      heading: "Targeted Therapy and Immunotherapy",
      description:
        "Emerging treatments like HER2-targeted therapy for breast cancer and immunotherapy for cancers like lung and melanoma are increasingly available in major cancer centers.",
    },
    {
      heading: "Palliative Care",
      description:
        "Because an advanced cancer is often incurable, palliative care, including pain management and symptom relief, is a key focus.",
    },
  ],

  surgical_approaches: [
    {
      heading: "Salvage Surgery",
      description: "Surgical intervention after failure of primary therapy",
      aneurysmSymptoms: [
        {
          description:
            "Used for isolated recurrences that can be surgically addressed",
        },
        { description: "Often combined with intraoperative radiation therapy" },
      ],
    },
    {
      heading: "Cytoreductive Surgery",
      description: "Removal of as much tumor burden as possible",
      aneurysmSymptoms: [
        { description: "Particularly beneficial in peritoneal carcinomatosis" },
        {
          description:
            "May be combined with HIPEC (Hyperthermic Intraperitoneal Chemotherapy)",
        },
      ],
    },
    {
      heading: "Minimally Invasive Techniques",
      description: "Laparoscopic and robotic approaches for suitable cases",
      aneurysmSymptoms: [
        {
          description:
            "Faster recovery and reduced postoperative complications",
        },
        { description: "Enhanced precision in difficult anatomical locations" },
      ],
    },
  ],

  barriers: [
    {
      heading: "Awareness",
      description: "Low awareness about cancer symptoms and treatment options",
      aneurysmSymptoms: [
        {
          description:
            "Delays in seeking medical attention leading to advanced presentations",
        },
        {
          description:
            "Limited understanding of long-term follow-up importance",
        },
      ],
    },
    {
      heading: "Access to Healthcare",
      description: "Uneven distribution of cancer centers across India",
      aneurysmSymptoms: [
        { description: "Concentration of specialized centers in major cities" },
        {
          description:
            "Transportation and accommodation challenges for rural patients",
        },
      ],
    },
    {
      heading: "Financial Considerations",
      description: "High cost of advanced cancer treatments",
      aneurysmSymptoms: [
        { description: "Limited insurance coverage for novel therapies" },
        {
          description:
            "Catastrophic health expenditure affecting treatment completion",
        },
      ],
    },
    {
      heading: "Cultural and Social Factors",
      description: "Stigma and cultural beliefs affecting treatment decisions",
      aneurysmSymptoms: [
        {
          description:
            "Preference for alternative medicines delaying conventional treatment",
        },
        { description: "Fatalistic attitudes toward cancer diagnosis" },
      ],
    },
  ],

  risk_factors: [
    {
      category: "",
      description:
        "Many cancers are diagnosed in later stages (III or IV) when recurrence is more likely, particularly in breast, cervical, and oral cancers.",
    },
    {
      category: "",
      description:
        "Patients in India may not receive the most optimal or complete treatment due to financial constraints, limited healthcare access, or misdiagnosis.",
    },
    {
      category: "",
      description:
        "A significant barrier to managing recurrent cancer is the lack of regular monitoring and follow-up care for patients after initial treatment.",
    },
  ],

  diagnostics: [
    {
      heading: "Advanced Imaging",
      description: "High-resolution scanning technologies",
      aneurysmSymptoms: [
        { description: "PET-CT for metabolic activity assessment" },
        {
          description:
            "MRI with contrast enhancement for soft tissue evaluation",
        },
        { description: "Whole-body imaging for metastasis detection" },
      ],
    },
    {
      heading: "Molecular Diagnostics",
      description: "Genetic and biomarker analysis",
      aneurysmSymptoms: [
        {
          description:
            "Next-generation sequencing for comprehensive genomic profiling",
        },
        { description: "Liquid biopsies to detect circulating tumor DNA" },
        {
          description:
            "Expression profiling for personalized treatment selection",
        },
      ],
    },
    {
      heading: "Tissue Sampling",
      description: "Obtaining specimens for analysis",
      aneurysmSymptoms: [
        { description: "Image-guided biopsies for difficult-to-access tumors" },
        { description: "Endoscopic ultrasound-guided fine needle aspiration" },
        { description: "Sentinel node evaluation for recurrent disease" },
      ],
    },
  ],

  best_hospitals: [
    { city: "Delhi", url: "/best-cancer-hospital-delhi" },
    { city: "Mumbai", url: "/best-cancer-hospital-mumbai" },
    { city: "Bangalore", url: "/best-cancer-hospital-bangalore" },
    { city: "Chennai", url: "/best-cancer-hospital-chennai" },
    { city: "Hyderabad", url: "/best-cancer-hospital-hyderabad" },
    { city: "Pune", url: "/best-cancer-hospital-pune" },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph: `The management of <b> advanced and recurrent cancers </b> in India remains a significant challenge due to issues of late diagnosis, limited healthcare infrastructure, and financial constraints. However, with growing awareness, advances in medical research, and improved access to cancer care in major urban centers, there is hope for better outcomes. Addressing these challenges requires a multifaceted approach, including improving access to early detection, expanding healthcare infrastructure, and ensuring that newer treatments like targeted therapies and immunotherapy become more widely accessible. For patients, ongoing support, palliative care, and regular follow-up are crucial for managing advanced or recurrent cancers.`,
    },
  ],
};

function AdvancedRecurrentCancers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
        <Title title={data.title} className="text-4xl text-pink-500" />
        <p className="mt-4 text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
          {data.description}{" "}
        </p>

        <p className="mt-4 text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
          <strong className="font-semibold"> Advanced </strong>cancer refers to
          a cancer that has spread beyond its primary site to other organs
          (metastasis), or a cancer that has recurred after initial treatment. 
          <strong className="font-semibold"> Breast cancer</strong>, along with
          cancers of the <strong className="font-semibold"> lung, liver</strong>
          , and <strong className="font-semibold"> cervix</strong>, are among
          the most common cancers diagnosed at advanced stages in India.
        </p>

        <H2
          title="Common Types of Advanced Cancers in India:"
          className="text-xl font-semibold mb-4"
        />
        <div className="space-y-2">
          {data.common_cancers.map((cause, idx) => (
            <div
              key={idx}
              className="bg-[#0E56A0] text-white font-light py-6 px-4 rounded text-sm"
            >
              <div className="font-medium text-lg pr-1">{cause.title}</div>
              {cause.description}
            </div>
          ))}
        </div>

        <H2
          title="Treatments for Advanced Cancers"
          className="text-xl text-center text-[#D84498] font-semibold mb-4"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {data.treatment_options.map((cause, index) => (
            <div
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow rounded-lg p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#0E56A0] mb-2">
                {" "}
                {cause.heading}
              </h3>
              <p className="text-gray-700 text-sm font-light">
                {cause.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-start mb-8">
          <Link href="" className="text-hciPrimary font-semibold underline">
            To Know More About Lung Cancer And Its Treatment, Click Here
          </Link>
        </div>

        <H2
          title="Recurrent Cancers in India"
          className="text-xl text-center text-black font-semibold mb-4"
        />

        <p className="mt-4 text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
          A recurrent cancer occurs when cancer returns after a period of
          remission following initial treatment. In India, recurrent cancers are
          often diagnosed in patients who initially received inadequate or
          delayed treatment, which can lead to higher rates of recurrence.
        </p>

        <H2
          title="Common risk factors for recurrence"
          className="text-xl text-center text-black font-semibold mb-4"
        />

        <div className="space-y-2">
          {data.risk_factors.map((cause, idx) => (
            <div
              key={idx}
              className="bg-[#D84498] text-white font-light py-4 px-4 rounded text-md"
            >
              {cause.description}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6">
          {data.treatments.map((treatment, index) => (
            <>
              <div
                key={index}
                className="border border-pink-400 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl text-center mb-4 text-hciPrimary font-bold text-black">
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
                      <span className="text-black">
                        {" "}
                        {item.title && <strong>{item.title}: </strong>}
                      </span>
                      {item.description}
                    </div>
                  ))}
                </div>
              </div>
              {index === 1 && (
                <div className="text-start mb-8">
                  <Link
                    href=""
                    className="text-hciPrimary text-lg font-semibold underline"
                  >
                    To get the best diagnosis for An advanced and recurrent
                    cancer and related issues, click here
                  </Link>
                </div>
              )}
            </>
          ))}
        </div>

        {/* <H2
          title="Factors Contributing to Advanced Cancer"
          className="font-semibold mb-4 text-center"
        />
        <DataLists
          divClass="grid grid-cols-1 md:grid-cols-2 gap-6"
          data={data.symptoms_factors}
          ulClass="list-disc pl-5 space-y-1"
        />

        <H2
          title="Treatment Approaches"
          className="font-semibold mb-4 text-center"
        />
        <DataLists
          divClass="grid grid-cols-1 md:grid-cols-3 gap-6"
          data={data.treatment_options}
          ulClass="list-disc pl-5 space-y-1"
        />

        <H2
          title="Surgical Options"
          className="font-semibold mb-4 text-center"
        />
        <DataLists
          divClass="grid grid-cols-1 md:grid-cols-3 gap-6"
          data={data.surgical_approaches}
          ulClass="list-disc pl-5 space-y-1"
        />

        <H2
          title="Treatment Barriers"
          className="font-semibold mb-4 text-center"
        />
        <DataLists
          divClass="grid grid-cols-1 md:grid-cols-2 gap-6"
          data={data.barriers}
          ulClass="list-disc pl-5 space-y-1"
        />

        <H2
          title="Best Diagnostics for Advanced and Recurrent Cancer And Related Issues, Click Here"
          className="font-semibold mb-4 text-center"
        />
        <div className="mb-8">
          <DataLists
            divClass="grid grid-cols-1 gap-4"
            data={data.diagnostics}
            ulClass="list-none"
          />
        </div> */}

        {/* <H2
          title="Recurrent Cancers in India"
          className="font-semibold mb-4 text-center"
        />
        <p className="font-light mb-6">
          A recurrent cancer occurs when cancer returns after a period of
          treatment and remission. This is often more challenging to treat and
          may require different approaches than the initial treatment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {data.india_cancer_stats.map((stat, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <H3
                title={stat.title}
                className="text-lg font-semibold text-hciPrimary mb-2"
              />
              <p className="text-gray-700">{stat.description}</p>
            </div>
          ))}
        </div>

        <H2
          title="Common Risk Factors for Recurrence"
          className="font-semibold mb-4 text-center"
        />
        <div className="mb-8">
          <DataBoxes
            title=""
            header=""
            data={data.risk_factors}
            myclass="grid grid-cols-1"
          />
        </div>

        <H2
          title="Treatment of Recurrent Cancers in India includes all the modalities of the Treatment such as:"
          className="font-semibold mb-4 text-start"
        />

        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.symptoms_factors.map((item, index) => (
              <TextComponent
                key={index}
                title={item.title}
                description={item.description}
                boxCss="w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center min-h-[120px]"
              />
            ))}
          </div>
        </div> */}

        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </div>
  );
}

export default AdvancedRecurrentCancers;

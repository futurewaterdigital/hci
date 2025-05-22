import React from "react";
import Banner from "@/components/Common/Banner";
import H1 from "@/components/ui/h1";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H2 from "@/components/ui/h2";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import KnowMore from "@/components/ui/KnowMore";
import IssuesLinks from "@/components/ui/IssuesLinks";

const data = {
  title: "Advanced and Recurrent Cancers",
  bannerImage: "/oncology/advanced-recurrent-cancers.png",
  description: `The advanced and recurrent cancers pose a significant public health concern due to increasing cancer rates, delayed diagnoses, and challenges in healthcare access. Managing these cancers is guided by factors such as healthcare infrastructure, socioeconomic disparities, and the access to cancer treatment in the country.`,
  overview:
    "Advanced cancer refers to a cancer that has spread beyond its primary site to other organs (metastasis), or a cancer that has recurred after initial treatment. Breast cancer, along with cancers of the lung, liver, and cervix, are among the most common cancers diagnosed at advanced stages.",

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
        "This is the most common cancer among women. Advanced or metastatic breast cancer, especially HER2-positive or triple-negative breast cancer (TNBC), is associated with poor prognosis if not treated early.",
    },
    {
      title: "Advanced and Recurrent Colorectal",
      description:
        "Often diagnosed at advanced stages, advanced and recurrent cancers are increasing, especially in urban areas where smoking and air pollution are significant risk factors.",
    },
    {
      title: "Cervical Cancer",
      description:
        "While it is preventable through screening and vaccination, cervical cancer is often diagnosed late due to limited awareness of screening methods (e.g., Pap smear).",
    },
    {
      title: "Head and Neck Cancers",
      description:
        "These cancers, particularly oral cancer linked to tobacco and betel nut use, are also frequently diagnosed at advanced stages",
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
      heading: "Common Cancers and their Recurrence",
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
            "Oral cancers, often linked to tobacco and alcohol use, have high recurrence rates after initial surgery or radiation therapy.",
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
        "Treatment of Recurrent Cancers include all the modalities of the treatment such as",
      description: "",
      aneurysmSymptoms: [
        {
          title: "Surgery",
          description:
            "In some cases, recurrent tumors may be surgically removed if they are localized.",
        },
        {
          title: "Chemotherapy and Radiation",
          description:
            "These remain the primary treatments for recurrent cancers, though access to advanced chemotherapy regimens may be limited outside major cities.",
        },
        {
          title: "Targeted Therapy",
          description:
            "For cancers like breast cancer and advanced and recurrent cancer, targeted therapies (e.g., HER2 inhibitors or EGFR inhibitors) are becoming more available, though still largely concentrated in major cancer centers.",
        },
        {
          title: "Immunotherapy",
          description:
            "Still an emerging option, immunotherapy has shown promise for recurrent cancers, particularly in cancers like melanoma and advanced and recurrent cancer. Clinical trials in major hospitals are increasing.",
        },
        {
          title: "Palliative Care",
          description:
            "For many recurrent cancers, especially those diagnosed at advanced stages, palliative care plays a crucial role in managing symptoms and improving quality of life.",
        },
      ],
    },
    {
      heading: "Barriers to Managing Advanced and Recurrent Cancers",
      aneurysmSymptoms: [
        {
          title: "",
          description:
            "Several factors make the management of advanced and recurrent cancers particularly challenging:",
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
        "Patients may not receive the most optimal or complete treatment due to financial constraints, limited healthcare access, or misdiagnosis.",
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
      paragraph: `The management of <b> advanced and recurrent cancers </b> in India remains a significant challenge due to issues of late diagnosis, limited healthcare infrastructure, and financial constraints. However, with growing awareness, advances in medical research, and improved access to cancer care in major urban centers, there is hope for better outcomes. Addressing these challenges requires a multifaceted approach, including improving access to early detection, expanding healthcare infrastructure, and ensuring that newer treatments like targeted therapies and immunotherapy become more widely accessible. For patients, ongoing support, palliative care, and regular follow-up are crucial for managing advanced or recurrent cancers.`,
    },
  ],
};

function AdvancedRecurrentCancers() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
          <H1 title={data.title} />
          <p className="mt-4 text-gray-600 text-start max-w-7xl mx-auto font-light">
            {data.description}{" "}
          </p>

          <p className="mt-4 text-gray-600 text-start max-w-7xl mx-auto font-light">
            <strong className="font-medium"> Advanced </strong> refers to a cancer that has spread beyond its primary site to other organs (metastasis), or a cancer that has recurred after initial treatment. <strong className="font-medium"> Breast cancer</strong>, along with cancers of the <strong className="font-medium"> lung, liver</strong> , and <strong className="font-medium"> cervix</strong>, are among the most common cancers diagnosed at advanced stages.
          </p>

          <div className="flex gap-4">
            <div>
              <p className="mt-4 text-gray-600 text-start max-w-7xl mx-auto font-medium">
                The causes and challenges faced for such cancers are primarily
                due to the following reasons:
              </p>
              <div className="space-y-2 mt-4">
                <div className="text-gray-600 font-light flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D84498]"></div>
                  <span>Lack of Awareness</span>
                </div>
                <div className="text-gray-600 font-light flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D84498]"></div>
                  <span>Late Diagnosis</span>
                </div>
                <div className="text-gray-600 font-light flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D84498]"></div>
                  <span>Access to Healthcare</span>
                </div>
                <div className="text-gray-600 font-light flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D84498]"></div>
                  <span>Access to Newer Technologies and Molecules</span>
                </div>
                <div className="text-gray-600 font-light flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D84498]"></div>
                  <span>Economic Barriers</span>
                </div>
              </div>
            </div>
            <img
              src="/oncology/AdvancedRecurrent2.png"
              alt="advanced-recurrent-cancers"
            />
          </div>

          <p className="mt-4 text-gray-600 text-start max-w-7xl mx-auto font-light">
            A significant percentage of breast cancers are diagnosed at advanced stages (III or IV), often due to limited awareness and delayed healthcare seeking, particularly in rural areas. This is primarily due to women not having access to regular screening, and breast cancer awareness is still low in many regions, leading to late-stage diagnoses.
          </p>

          <p className="mt-4 text-gray-600 text-start max-w-7xl mx-auto font-light">
            Treatment for an advanced cancer requires access to targeted therapies, chemotherapy, radiation and immunotherapies. This may be another challenge in cities which are beyond Tier 1 cities.
          </p>

          <p className="mt-4 text-gray-600 text-start max-w-7xl mx-auto font-light">
            Treatment costs for an advanced cancer (including chemotherapy, targeted therapies, and immunotherapy) can be prohibitive for many families, resulting in discontinuation or delays in treatment.
          </p>
          <KnowMore title={data.title} />

          <H2
            title="Common Types of Advanced Cancers:"
            className="text-xl font-medium mb-4"
          />
          <div className="space-y-2">
            {data.common_cancers.map((cause, idx) => (
              <div
                key={idx}
                className="bg-[#0E56A0] text-white font-light py-6 px-4 rounded">
                <div className="font-medium pr-1">{cause.title}</div>
                {cause.description}
              </div>
            ))}
          </div>

          <H2
            title="Treatments for Advanced Cancers"
            className="text-center text-[#D84498] font-medium mb-4 text-2xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {data.treatment_options.map((cause, index) => (
              <div
                key={index}
                className="border border-gray-200 hover:shadow-lg transition-shadow rounded-lg p-4 shadow-sm">
                <h3 className="font-medium text-[#0E56A0] mb-2 text-lg">
                  {cause.heading}
                </h3>
                <p className="text-gray-700 font-light">{cause.description}</p>
              </div>
            ))}
          </div>
          <KnowMore title={data.title} />

          <H2
            title="Recurrent Cancers"
            className="text-xl text-center text-black font-medium mb-4"
          />

          <p className="mt-4 text-gray-600 text-start max-w-7xl mx-auto font-light">
            A recurrent cancer occurs when cancer returns after a period of
            remission following initial treatment. In India, recurrent cancers
            are often diagnosed in patients who initially received inadequate or
            delayed treatment, which can lead to higher rates of recurrence.
          </p>

          <H2
            title="Common Risk Factors For Recurrence"
            className="text-xl text-center text-black font-medium mb-4"
          />

          <div className="space-y-2">
            {data.risk_factors.map((cause, idx) => (
              <div
                key={idx}
                className="bg-[#D84498] text-white font-light py-4 px-4 rounded">
                {cause.description}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6">
            {data.treatments.map((treatment, index) => (
              <React.Fragment key={index}>
                <div className="border border-pink-400 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-medium text-center mb-4 text-hciPrimary">
                    {treatment.heading}
                  </h2>
                  {treatment.description && (
                    <p className="text-gray-600 mb-4 font-light">{treatment.description}</p>
                  )}
                  <div className="space-y-4">
                    {treatment?.aneurysmSymptoms?.map((item, idx) => (
                      <div key={idx} className="text-gray-600 font-light">
                        <span className="text-black font-medium">
                          {item.title && <strong>{item.title}: </strong>}
                        </span>
                        {item.description}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Render CTA button AFTER the matching section */}
                {treatment.heading ===
                  "Treatment of Recurrent Cancers include all the modalities of the treatment such as" && (
                    <div className="">
                      <IssuesLinks head={data.title} />
                    </div>
                  )}
              </React.Fragment>
            ))}
          </div>
          <Conclusion data={data.conclusion} />
          <FooterLinks head={data.title} />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default AdvancedRecurrentCancers;

import React from "react";
import Link from "next/link";
import Banner from "@/components/Common/Banner";
import H1 from "@/components/ui/h1";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import BookButton from "@/components/cardiacComponents/BookButton";

const data = {
  title: "Brain Tumor",
  bannerImage: "/oncology/brain-tumor-banner.png",
  description:
    "There are over 120 brain tumor types, based on the brain tissues they affect. Not all brain tumors are brain cancers, but even benign (or noncancerous) tumors can be dangerous because of their size or location.",
  overview: "",

  main_menu: [
    {
      menu: "What is brain tumor?",
      url: "/treatment/oncology/brain-tumor/what-is-brain-tumor",
    },
    {
      menu: "What is brain cancer?",
      url: "/treatment/oncology/brain-tumor/what-is-brain-cancer",
    },
    { menu: "Symptoms", url: "/treatment/oncology/brain-tumor/symptoms" },
    { menu: "Causes", url: "/treatment/oncology/brain-tumor/causes" },
    {
      menu: "Locations and Types",
      url: "/treatment/oncology/brain-tumor/locations-and-types",
    },
    {
      menu: "Brain Tumors in Children",
      url: "/treatment/oncology/brain-tumor/brain-tumors-in-children",
    },
    { menu: "Diagnosis", url: "/treatment/oncology/brain-tumor/diagnosis" },
    { menu: "Treatment", url: "/treatment/oncology/brain-tumor/treatment" },
    { menu: "Prognosis", url: "/treatment/oncology/brain-tumor/prognosis" },
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
      title: "Tumor Characteristics",
      description: "Aggressive tumor biology with rapid cellular division",
    },
    {
      title: "Treatment Resistance",
      description:
        "Cancer cells that develop mechanisms to evade standard treatments",
    },
    {
      title: "Late Stage Diagnosis",
      description:
        "Detection after cancer has already metastasized to other organs",
    },
    {
      title: "Genetic Factors",
      description:
        "Inherited gene mutations that predispose to aggressive cancer forms",
    },
  ],

  treatment_options: [
    {
      heading: "Chemotherapy and Radiation",
      description:
        "Strategic use of cytotoxic drugs to destroy cancer cells or shrink tumors before surgery",
      aneurysmSymptoms: [
        {
          description:
            "Combination chemotherapy protocols targeting specific cancer pathways",
        },
        { description: "Dose-dense regimens for aggressive recurrent cases" },
        {
          description:
            "Integration with radiation therapy for localized tumors",
        },
        { description: "Hypofractionated protocols for patient convenience" },
      ],
    },
    {
      heading: "Targeted Therapy and Immunotherapy",
      description:
        "Precisely targets specific molecules involved in cancer growth or stimulates immune system to fight cancer",
      aneurysmSymptoms: [
        {
          description:
            "Monoclonal antibodies that target specific cellular receptors",
        },
        {
          description:
            "Checkpoint inhibitors that unleash immune response against cancer cells",
        },
        {
          description:
            "Small molecule inhibitors that block specific growth pathways",
        },
        {
          description:
            "CAR-T cell therapies for eligible hematological malignancies",
        },
      ],
    },
    {
      heading: "Palliative Care",
      description:
        "Focuses on providing relief from symptoms and improving quality of life",
      aneurysmSymptoms: [
        {
          description:
            "Advanced pain management protocols tailored to individual needs",
        },
        {
          description:
            "Nutritional support to counter cachexia and maintain strength",
        },
        { description: "Psychological support for patients and caregivers" },
        {
          description:
            "Integration with curative approaches for better outcomes",
        },
      ],
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
        "Inadequate treatment of the primary cancer leading to residual cancer cells",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Genetic mutations causing resistance to standard treatment protocols",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Advanced stage at initial diagnosis increasing likelihood of microscopic spread",
      bgColor: "bg-hciPrimary text-white",
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
      paragraph: `
<p>
        There is no projected survival rate for those diagnosed with a brain
        tumor, as individual circumstances play a big role. For example, some
        malignant tumors can be successfully controlled by radiation therapy.
        Others, because of their location, may be life-threatening even if they
        are benign. Doctors have to look at thousands of patients with similar
        characteristics to see a trend in how certain tumors progress and how
        different treatments affect them.
   </p>
   <p>

     
        Your overall outlook and prognosis is likely to change as you undergo
        various treatments. If you have surgery, how much of the tumor the
        neurosurgeon can remove will impact what will happen next. Other brain
        tumor treatments will determine future steps as well.
        </p>  
     
      `,
    },
  ],

  types: {
    heading: "Types of Brain Tumors",
    items: [
      {
        title: "Primary Brain Tumors",
        description:
          "These tumors start in the brain tissue and can be either malignant or benign.",
        subtypes: [
          "Gliomas",
          "Meningiomas",
          "Pituitary Adenomas",
          "Schwannomas",
          "Medulloblastomas",
        ],
      },
      {
        title: "Secondary Brain Tumors",
        description:
          "These tumors start elsewhere in the body and spread to the brain, commonly from lung cancer, breast cancer, kidney cancer, and melanoma.",
      },
    ],
  },

  symptoms: {
    heading: "Common Symptoms",
    description:
      "Symptoms vary depending on the tumor's size, location, and growth rate. Common signs include:",
    items: [
      "Headaches that become more frequent and severe",
      "Unexplained nausea or vomiting",
      "Vision problems, such as blurred vision, double vision, or loss of peripheral vision",
      "Gradual loss of sensation or movement in arms or legs",
      "Difficulty with balance",
      "Speech difficulties",
      "Confusion in everyday matters",
      "Personality or behavior changes",
      "Seizures, especially in someone who doesn't have a history of seizures",
      "Hearing problems",
    ],
  },

  diagnosis: {
    heading: "Diagnosis Methods",
    description:
      "Several tests and procedures are used to diagnose brain tumors:",
    methods: [
      {
        name: "Neurological Exam",
        description:
          "Checking vision, hearing, balance, coordination, and reflexes",
      },
      {
        name: "Imaging Tests",
        items: [
          "MRI (Magnetic Resonance Imaging)",
          "CT Scan",
          "PET Scan",
          "Angiogram",
        ],
      },
      {
        name: "Biopsy",
        description: "Surgical removal of a small sample of tissue for testing",
      },
    ],
  },

  treatments: {
    heading: "Treatment Options",
    description: "Treatment depends on type, size, and location of the tumor:",
    options: [
      {
        name: "Surgery",
        description:
          "When possible, surgical removal of the brain tumor is the first treatment option.",
        details: [
          "Craniotomy - Opening the skull to remove tumor",
          "Minimally invasive surgery",
          "Awake brain surgery",
          "Laser interstitial thermal therapy",
        ],
      },
      {
        name: "Radiation Therapy",
        types: [
          "External beam radiation",
          "Proton therapy",
          "Stereotactic radiosurgery",
          "Brachytherapy",
        ],
      },
      {
        name: "Chemotherapy",
        description:
          "Using drugs to kill cancer cells, can be oral or intravenous",
      },
      {
        name: "Targeted Drug Therapy",
        description: "Focuses on specific abnormalities within cancer cells",
      },
      {
        name: "Immunotherapy",
        description: "Helps your immune system fight cancer cells",
      },
    ],
  },

  rehabilitation: {
    heading: "Rehabilitation Services",
    services: [
      "Physical therapy",
      "Occupational therapy",
      "Speech therapy",
      "Cognitive rehabilitation",
    ],
  },

  hospitals: [
    {
      text: "For The Best Hospital For The Treatment Of Brain Tumor In India, Click Here",
      url: "/best-brain-tumor-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Brain Tumor In Bangalore, Click Here",
      url: "/best-brain-tumor-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Brain Tumor In Chennai, Click Here",
      url: "/best-brain-tumor-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Brain Tumor In Delhi, Click Here",
      url: "/best-brain-tumor-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Brain Tumor In Hyderabad, Click Here",
      url: "/best-brain-tumor-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Brain Tumor In Mumbai, Click Here",
      url: "/best-brain-tumor-hospital-mumbai",
    },
  ],
};

const mainGastro = [
  {
    menu: "What is brain tumor?",
    url: "/treatment/oncology/brain-tumor",
  },
  {
    menu: "What is brain cancer?",
    url: "/treatment/oncology/cancer-in-women",
  },
  {
    menu: "Symptoms",
    url: "/treatment/oncology/gi-cancer",
  },
  {
    menu: "Causes",
    url: "/treatment/oncology/head-neck-malignancy",
  },
  {
    menu: "Locations and Types",
    url: "/treatment/oncology/hematology",
  },
  {
    menu: "Brain Tumors in Children",
    url: "/treatment/oncology/lung-cancer",
  },
  {
    menu: "Diagnosis",
    url: "/treatment/oncology/gynecological-cancers",
  },
  {
    menu: "Treatment",
    url: "/treatment/oncology/gynecological-cancers",
  },
  {
    menu: "Prognosis",
    url: "/treatment/oncology/gynecological-cancers",
  },
];

const tumorInfo = [
  {
    title: "What is Brain Tumor?",
    description:
      "A brain tumor is a growth of abnormal cells in the brain. The anatomy of the brain is very complex, with different parts responsible for different nervous system functions. Brain tumors can develop in any part of the brain or skull, including its protective lining, the underside of the brain (skull base), the brainstem, the sinuses and the nasal cavity, and many other areas. There are more than 120 different types of tumors that can develop in the brain, depending on what tissue they arise from.",
  },
  {
    title: "How Common are Brain Tumors, and are they Dangerous?",
    description:
      "Brain and nervous system tumors affect about 30 adults out of 100,000. Brain tumors are dangerous because they can put pressure on healthy parts of the brain or spread into those areas. Some brain tumors can also be cancerous or become cancerous. They can cause problems if they block the flow of fluid around the brain, which can lead to an increase in pressure inside the skull. Some types of tumors can spread through the spinal fluid to distant areas of the brain or the spine.",
  },
  {
    title: "How is a Tumor Different from a Brain Lesion?",
    description:
      "A brain tumor is a specific type of brain lesion. A lesion describes any area of damaged tissue. All tumors are lesions, but not all lesions are tumors. Other brain lesions can be caused by stroke, injury, encephalitis and arteriovenous malformation.",
  },
];

const brainCancerTypes = [
  {
    menu: "Breast cancer",
    url: "/treatment/oncology/cancer-in-women",
  },
  {
    menu: "Colon cancer",
    url: "/treatment/oncology/bowel-cancer",
  },
  {
    menu: "Kidney cancer",
    url: "/treatment/oncology/kidney-cancer",
  },
  {
    menu: "Lung cancer",
    url: "/treatment/oncology/lung-cancer",
  },
  {
    menu: "Skin cancer",
    url: "",
  },
];

const tumorLocationsCard = [
  {
    title: "Meningiomas",
    description: "form in the meninges, the protective lining of the brain",
  },
  { title: "Pituitary", description: "tumors develop in the pituitary gland." },
  {
    title: "Medulloblastoma",
    description: "tumors arise from the cerebellum or brainstem.",
  },
  {
    title: "Skull base tumors",
    description: "grow on the underside of the brain, called the skull base.",
  },
];

const tumorTumorOptions = [
  {
    title: "Craniotomy:",
    description: `The temporary removal of a piece of skull to allow surgeons access to the brain
Awake brain tumor surgery: Patients are kept sedated and comfortable — but awake — during surgery so doctors can ensure normal brain function is unaffected.`,
  },
  {
    title: "Neuroendoscopy: ",
    description:
      "Surgeons enter the brain through other parts of the body, like the nose, to better reach certain regions and minimize scarring.MRI-guided laser ablation and laser interstitial thermal therapy (LITT): Radiologists and neurosurgeons use computer technology and intraoperative imaging to locate a tumor and precisely destroy the cancerous cells with lasers or heat.",
  },
  {
    title: "Biopsy:",
    description:
      "Doctors take a small sample of brain tumor tissue to examine under a microscope.",
  },
  {
    title: "Neuroplastic surgery:",
    description:
      "This neurosurgical approach preserves and restores skull appearance and anatomy after invasive procedures.",
  },
];

const tumorGrades = [
  {
    title: "Grade I Brain Tumor",
    points: [
      "Benign (noncancerous)",
      "Slow-growing",
      "Cells look almost normal under a microscope",
      "Usually associated with long-term survival",
      "Rare in adults",
    ],
  },
  {
    title: "Grade II Brain Tumor",
    points: [
      "Relatively slow-growing",
      "Sometimes spreads to nearby normal tissue and comes back (recurs)",
      "Cells look slightly abnormal under a microscope",
      "Sometimes comes back as a higher grade tumor",
    ],
  },
  {
    title: "Grade III Brain Tumor",
    points: [
      "Malignant (cancerous)",
      "Actively reproduces abnormal cells",
      "Tumor spreads into nearby normal parts of the brain Cells look abnormal under a microscope",
      "Tends to come back, often as a higher grade tumor",
    ],
  },
  {
    title: "Grade IV Brain Tumor",
    points: [
      "Malignant",
      "Most aggressive",
      "Grows fast",
      "Easily spreads into nearby normal parts of the brain",
      "Actively reproduces abnormal cells",
      "Cells look very abnormal under a microscope",
      "Tumor forms new blood vessels to maintain rapid growth",
      "Tumors have areas of dead cells in their center (called necrosis)",
    ],
  },
];

const therapistInfo = [
  {
    title: "Physical Therapists",
    description:
      "Will assess your ability to walk safely and climb stairs before being released from the hospital. They may also help improve strength and balance.",
  },
  {
    title: "Occupational Therapists",
    description:
      "Will assess your ability to perform activities of daily living such as getting dressed, using the bathroom and getting in and out of the shower. Occupational therapists also test vision and thinking skills to determine whether you can return to work, driving or other challenging tasks.",
  },
  {
    title: "Speech-Language Pathologists",
    description:
      "Evaluate problems with speech, language or thinking. They may also evaluate for swallowing disorders.",
  },
];

function BrainTumor() {
  return (
    <>
      <Banner image="/oncology/brain-tumor-banner.png" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Image */}

        {/* Title and Description */}
        <div className="text-center mb-12">
          <H1 title={data.title} />
          <p className="mt-4 text-gray-600 text-start  max-w-7xl mx-auto font-light">
            {data.description}
          </p>
        </div>
        {/* More Link about brain tumor */}
        <div className="my-4">
          <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-x-20 gap-y-8 items-center uppercase font-medium">
            {mainGastro.map((item, index) => (
              // <Link
              //   key={index}
              //   href={item.url}
              //   className="hover:text-hciSecondary cursor-pointer">
              //   {item.menu}
              // </Link>
              <span className="font-medium text-black" key={index}>
                {item.menu}
              </span>
            ))}
          </div>
        </div>
        {/* Tumor Info section */}
        <div className="text-center my-10">
          {tumorInfo?.map((item, index) => (
            <div className="text-center my-10" key={index}>
              <div className="text-xl font-medium">{item.title}</div>
              <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex mx-auto justify-center items-center">
          <div className="bg-[#0E56A0] rounded-l-3xl py-8 px-20 text-xl font-medium text-white">
            Brain Tumor
          </div>
          <div className="bg-[#D84498] rounded-r-3xl py-8 px-20 text-xl font-medium text-white">
            Brain Cancer
          </div>
        </div>
        <div className="my-10">
          <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
            All brain cancers are tumors, but not all brain tumors are
            cancerous. Noncancerous brain tumors are called benign brain tumors.
          </p>
          <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
            Benign brain tumors typically grow slowly, have distinct borders and
            rarely spread. Benign tumors can still be dangerous. They can damage
            and compress parts of the brain, causing severe dysfunction. Benign
            brain tumors located in a vital area of the brain can be
            life-threatening. Very rarely, a benign tumor can become malignant.
            Examples of typically benign tumors include meningioma, vestibular
            schwannoma and pituitary adenoma.
          </p>
          <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
            Malignant brain tumors are cancerous. They typically grow rapidly
            and invade surrounding healthy brain structures. Brain cancer can be
            life-threatening due to the changes it causes to the vital
            structures of the brain. Some examples of malignant tumors that
            originate in or near the brain include olfactory neuroblastoma,
            chondrosarcoma and medulloblastoma.
          </p>
        </div>
        <div className="text-xl text-center font-medium">
          Primary vs. Metastatic Brain Tumors
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Primary brain tumors are tumors that start in the brain. Examples of
          tumors that most often originate in the brain include meningioma and
          glioma. Very rarely, these tumors can break away and spread to other
          parts of the brain and spinal cord. More commonly, tumors spread to
          the brain from other parts of the body.
        </p>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Metastatic brain tumors, also called secondary brain tumors, are
          malignant tumors that originate as cancer elsewhere in the body and
          then metastasize (spread) to the brain. Metastatic brain tumors are
          about four times more common than primary brain tumors. They can grow
          rapidly, crowding or invading nearby brain tissue.
        </p>
        {/*  Brain Cancer Types */}
        <div className="mt-10  text-center font-medium">
          Common Cancers that can spread to the brain are:
        </div>
        {/* More Link about brain tumor */}
        <div className="my-4">
          <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-x-20 gap-y-8 items-center uppercase font-medium">
            {brainCancerTypes.map((item, index) => (
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
        <div>
          <img
            src="/oncology/brain-tumor-1.png"
            alt="Brain Tumor"
            className="w-full mt-5 h-full object-cover"
          />
        </div>
        <div className=" mt-10 text-center font-medium">
          Brain Tumor Locations
        </div>
        <p className="mt-4 text-gray-600 text-center w-full  mx-auto font-light leading-relaxed">
          Brain tumors can form in any part of the brain, but there are certain
          regions where specific tumors form:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-4">
          {tumorLocationsCard?.map((item, index) => (
            <div
              key={index}
              className="py-6 px-4 shadow-lg  rounded-lg font-light w-full"
            >
              <span className="font-medium">{item?.title}</span>{" "}
              {item?.description}
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-600 text-center w-full  mx-auto font-light leading-relaxed">
          Other brain tumors are described by the kinds of cells they are made
          of. For instance, gliomas are composed of glial cells.
        </p>
        <div className="text-center my-5 underline">
          <a className=" text-hciPrimary text-bold " href="">
            Learn more about these and other brain tumor types.
          </a>
        </div>
        <div className="text-xl text-center font-medium">
          Brain Tumors in Children
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Brain tumors are the most common solid tumor in children and
          adolescents, affecting about 5,000 children each year. Several
          different types of brain tumors can occur in children, including
          astrocytomas (e.g., glioblastoma multiforme), gliomas, ependymomas and
          medulloblastomas.
        </p>
        <div className="text-center my-5 underline">
          <a className=" text-hciPrimary text-bold " href="">
            Learn more about brain tumors in children.
          </a>
        </div>
        <div className="flex gap-2 flex-col md:flex-row my-10">
          <div className="">
            <img
              src="/oncology/brain-tumor-2.png"
              alt="Brain Tumor 2"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1">
            <div className=" mt-2 text-start font-medium">
              Brain Tumor Symptoms
            </div>
            <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
              Different parts of the brain control different functions, so brain
              tumor symptoms will vary depending on the tumor’s location. For
              example, a brain tumor located in the cerebellum at the back of
              the head may cause trouble with movement, walking, balance and
              coordination. If the tumor affects the optic pathway, which is
              responsible for sight, vision changes may occur. The tumor’s size
              and how fast it’s growing also affect which symptoms a person will
              experience.
            </p>
            <p className="mt-2 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
              The tumor’s size and how fast it’s growing also affect which
              symptoms a person will experience.
            </p>
            <p className="mt-2 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
              In general, the most common symptoms of a brain tumor may include:
            </p>
            <ul className="list-disc mt-2 pl-6 font-light space-y-2 marker:text-red-500">
              <li>Headaches</li>
              <li>Seizures or convulsions</li>
              <li>Difficulty thinking, speaking or finding words</li>
              <li>Personality or behavior changes</li>
              <li>
                Weakness, numbness or paralysis in one part or one side of the
                body
              </li>
              <li>Loss of balance, dizziness or unsteadiness</li>
              <li>Loss of hearing</li>
              <li>Vision changes</li>
              <li>Confusion and disorientation</li>
              <li>Memory loss</li>
            </ul>
          </div>
        </div>
        <div className="my-10 p-4 font-sans">
          {/* First Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="md:w-1/2 bg-white p-4 rounded-md shadow">
              <h2 className=" font-medium mb-4">
                Can you have a Brain Tumor with no symptoms?
              </h2>
              <p className="text-gray-700 mb-4 font-light">
                Brain tumors don&apos;t always cause symptoms. In fact, the most
                common brain tumor in adults, meningioma, often grows so slowly
                that it goes unnoticed. Tumors may not start causing symptoms
                until they become large enough to interfere with healthy tissues
                inside the brain.
              </p>

              <h3 className="text-hciSecondary font-medium mb-2">
                Brain Tumor Causes and Risk Factors
              </h3>
              <p className="text-gray-700 mb-4 font-light">
                Doctors don&apos;t know why some cells begin to form into tumor
                cells. It may have something to do with a person&apos;s genes or
                his or her environment, or both. Some potential brain tumor
                causes and risk factors may include:
              </p>

              <div className="bg-blue-100 p-3 mb-2 rounded font-light">
                Cancers that spread from other parts of the body
              </div>
              <div className="bg-blue-100 p-3 mb-2 rounded font-light">
                Certain genetic conditions that predispose a person to
                overproduction of certain cells
              </div>
              <div className="bg-blue-100 p-3 mb-2 rounded font-light">
                Exposure to some forms of radiation
              </div>
            </div>

            <div className="md:w-1/2 bg-[#FFE7B6] p-4 rounded-md shadow">
              <h2 className=" font-medium mb-4">
                Are Brain Tumors hereditary?
              </h2>
              <p className="text-gray-700 mb-4 font-light">
                Genetics are to blame for a small number (fewer than 5%) of
                brain tumors. Some inherited conditions put individuals at
                greater risk of developing tumors, including:
              </p>

              <ul className="list-disc pl-8 space-y-2 font-light marker:text-hciSecondary">
                <li className="text-gray-700">Neurofibromatosis</li>
                <li className="text-gray-700">
                  Von Hippel-Lindau disease Li-Fraumeni syndrome
                </li>
                <li className="text-gray-700">
                  Familial adenomatous polyposis
                </li>
                <li className="text-gray-700">Lynch syndrome</li>
                <li className="text-gray-700">
                  Basal cell nevus syndrome (Gorlin syndrome)
                </li>
                <li className="text-gray-700">Tuberous sclerosis</li>
                <li className="text-gray-700">Cowden syndrome</li>
              </ul>
            </div>
          </div>

          {/* Second Section */}
          <h2 className="text-xl font-medium text-center mb-6">
            Brain Tumor Diagnosis
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="md:w-1/2">
              <img
                src="/oncology/brain-tumor-3.png"
                alt="MRI scan machine"
                className="w-full h-auto rounded-md shadow"
              />
            </div>

            <div className="md:w-1/2">
              <p className="text-pink-400  mb-4">
                Diagnosing a brain tumor usually involves a neurological exam,
                brain scans and a biopsy, if it can be done safely.
              </p>

              <div className="bg-blue-50 p-4  rounded-md mb-4">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-hciSecondary font-medium mr-2">
                      •
                    </span>
                    <span className="text-gray-700 font-light">
                      A neurological exam may include a variety of tests to
                      evaluate neurological functions such as balance, hearing,
                      vision and reflexes.
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-hciSecondary font-medium mr-2">
                      •
                    </span>
                    <span className="text-gray-700 font-light">
                      A variety of imaging techniques, including CT (or CAT)
                      scan, MRI, occasionally an angiogram or X-rays can be used
                      to identify the tumor, pinpoint its location and/or assess
                      the function of your brain.
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-hciSecondary font-medium mr-2">
                      •
                    </span>
                    <span className="text-gray-700 font-light">
                      If doctors cannot safely perform a{" "}
                      <span className="font-medium">biopsy</span> (tissue sample
                      collection and analysis), they will diagnose the brain
                      tumor and plan the treatment based on other test results.
                      If a biopsy was possible, doctors can use it to determine
                      the tumor grade (how aggressive it is), as well as study
                      the tumor tissue for any biomarkers that can help
                      personalize the treatment approach.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-pink-400  mb-4">
                Depending on your symptoms, doctors may also perform these tests
                to help confirm the diagnosis and rule out other conditions:
              </p>

              <div className="bg-hciYellow  p-4 rounded-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-hciSecondary font-medium mr-2">
                      •
                    </span>
                    <span className="text-gray-700 font-light">
                      Lumbar puncture to collect a sample of cerebrospinal fluid
                      and see if it contains traces of the tumor cells.
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-hciSecondary font-medium mr-2">
                      •
                    </span>
                    <span className="text-gray-700 font-light">
                      Evoked potentials studies to measure electrical activity
                      in the nerves and/or electroencephalography (EEG) to
                      measure electrical activity in the brain.
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-hciSecondary font-medium mr-2">
                      •
                    </span>
                    <span className="text-gray-700 font-light">
                      Neurocognitive assessment to evaluate any changes in
                      cognition and well-being.
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-hciSecondary font-medium mr-2">
                      •
                    </span>
                    <span className="text-gray-700 font-light">
                      Neuro-ophthalmological examination to assess for signs of
                      tumor affecting the eyes.
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-hciSecondary font-medium mr-2">
                      •
                    </span>
                    <span className="text-gray-700 font-light">
                      Endocrinological evaluation to assess hormone function.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4 font-light">
                Proper diagnosis is essential in determining the best course of
                treatment.
              </p>
            </div>
          </div>
        </div>
        <div className="text-2xl text-center font-medium">
          Brain Tumor Grading
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          The grade of a brain tumor defines how serious it is. Using the biopsy
          sample, a pathologist will examine the tumor under a microscope to
          determine its grade. Brain tumor grading is a category system that
          describes the brain tumor cells and indicates how likely the tumor is
          to grow and spread.
        </p>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Brain tumor grading uses a scale from 1 (least aggressive) to 4 (most
          aggressive).
        </p>
        {/* Tumor Grades Cards */}
        <div className="grid my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tumorGrades.map((grade, index) => (
            <div
              key={index}
              className="border border-pink-400 rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300"
            >
              <h2 className=" font-medium text-blue-800 mb-4">{grade.title}</h2>
              <ul className="list-disc pl-2 pr-2 list-outside space-y-2 text-gray-700 marker:text-hciSecondary font-light">
                {grade.points.map((point, idx) => (
                  <li key={idx} className="">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-2xl text-center font-medium">
          A changing diagnosis
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          The grade of a brain tumor might change, usually to a higher grade,
          often without a cause. It’s also possible that the biopsy sample might
          not represent the entire tumor, giving an inaccurate initial data for
          the grade.
        </p>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          A change from a low-grade tumor to a high-grade tumor happens more
          often in adults than in children.
        </p>
        {/* Image */}
        <img
          src="/oncology/brain-tumor-4.png"
          alt="MRI scan machine"
          className="w-full h-auto my-10 shadow"
        />
        <div className="text-2xl text-center font-medium">
          Brain Tumor Staging
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Staging refers to how far a tumor has spread. If a tumor has migrated
          to other parts of the body, it has metastasized. Staging is often done
          for other types of tumors but not primary brain tumors. This is
          because brain tumors are unlikely to spread beyond the nervous system.
        </p>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Conversely, other types of tumors (e.g., lung cancer) can spread to
          the brain. Tumors that have spread to the brain are advanced stage.
        </p>
        <div className="text-2xl text-center mt-10 font-medium">
          What does the size of a brain tumor mean?
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Because larger tumors are more likely to interfere with normal brain
          function, they more often cause symptoms and complications.
        </p>
        <div className="text-2xl text-center mt-10 font-medium">
          Brain Tumor Treatment
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          The most common treatment for brain tumors is surgery. For some
          tumors, surgical removal and continued monitoring may be the only
          treatment needed. Common surgical approaches to brain tumor removal
          include craniotomy, neuroendoscopy, laser ablation and laser
          interstitial thermal therapy.
        </p>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Chemotherapy and radiation therapy can be used to treat brain cancer
          by helping shrink the tumor, slowing down its growth and/or preventing
          it from coming back. External beam radiation therapy, stereotactic
          radiosurgery and proton therapy are some of the radiation treatments
          for brain tumor.
        </p>
        <div className="text-start my-5 underline">
          <a
            className=" text-hciPrimary text-bold hover:text-hciPrimary text-lg"
            href=""
          >
            To learn more about other brain tumor treatment options, click here
          </a>
        </div>
        <div className="text-2xl text-center mt-10 font-medium">
          Brain Tumor Treatment
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          <span className="text-hciSecondary font-medium text-lg">
            Neurology Brain, Nerves and Spine Brain Tumors and Brain Cancer
          </span>{" "}
          <br /> There is more hope than ever before for people with brain
          tumors. Research has helped create advanced treatments such as
          tumor-treating fields and other innovations.
        </p>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          The treatment for a brain tumor will depend on many things, including
          the type, size and location of the tumor, as well as your symptoms,
          general health and treatment preferences. The main treatment options
          for a brain tumor include:
        </p>
        <div className="my-2">
          <ul className="list-disc pl-2 pr-2 list-outside space-y-2 text-gray-700 marker:text-hciSecondary font-light">
            <li> Surgery</li>
            <li> Radiation therapy Chemotherapy</li>
            <li>
              {" "}
              Targeted drug therapy Tumor treating fields Clinical trials
            </li>
            <li> Follow-up care and rehabilitation</li>
          </ul>
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          If you’ve been diagnosed with a specific type of brain tumor, see what
          treatments may be available to you:
        </p>
        <div className="text-2xl text-center mt-10 font-medium">
          Brain Tumor Surgery
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          The most popular therapy for brain tumors is surgery, depending on
          their location and size, brain tumors can be removed surgically using
          a variety of techniques.
        </p>
        <div className="grid grid-cols-1 my-10 gap-4">
          {tumorTumorOptions?.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-[#D84498] font-white shadow-lg  font-light w-full"
            >
              <p className="text-white text-start w-full  mx-auto font-light leading-relaxed">
                <span className="font-medium">{item?.title}</span>{" "}
                {item?.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-start my-5 underline">
          <a
            className=" text-hciPrimary text-bold hover:text-hciPrimary text-lg"
            href=""
          >
            To learn more about brain tumor surgery or to explore various
            procedures, click here
          </a>
        </div>
        {/* Radiation Therapy  */}
        <div className="text-2xl text-center mt-10 font-medium">
          Radiation Therapy for Brain Cancer and Brain Tumors
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Radiation therapy uses X-rays and other forms of light energy to
          destroy cancer cells in malignant tumors or to slow the growth of a
          benign brain tumor. Learn more about radiation therapy, or explore the
          types of radiation therapy used to treat brain tumors:
        </p>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          <span className="font-medium text-black">
            External beam radiation therapy:{" "}
          </span>
          The most common type of radiation therapy for brain tumors, it can be
          directed to the tumor and nearby brain tissue or to the whole brain.
          Whole-brain radiation is sometimes used to treat metastatic brain
          tumors, especially when there are multiple metastatic tumors
          throughout the brain, including tumors that are too small to be seen
          on a scan.
        </p>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          <span className="font-medium text-black">
            Stereotactic radiosurgery:{" "}
          </span>
          This form of radiation therapy uses smaller, more targeted beams of
          X-rays to spare healthy surrounding tissue. It is often used on areas
          of the brain that are difficult to reach.
        </p>

        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          <span className="font-medium text-black">Proton therapy:</span>
          This uses a particle, the proton, to deliver radiation. Proton therapy
          may be a good choice for certain types of tumors. Compared with other
          methods, it delivers less radiation to surrounding healthy tissue.
        </p>

        <div className="text-2xl text-center mt-10 font-medium">
          Chemotherapy for Brain Cancer
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Chemotherapy drugs are medicines that kill cancer cells. Chemotherapy
          is rarely used as a stand-alone treatment for brain tumors; it is
          often used in combination with surgery and/or radiation. Researchers
          have pioneered different ways to get chemotherapy drugs into the
          brain, including surgically implanted wafers such as Gliadel. To mop
          up any lingering cancer cells, surgeons use these wafers to line the
          area left behind after a tumor is removed.
        </p>

        <div className="text-start my-5 underline">
          <a
            className=" text-hciPrimary text-bold hover:text-hciPrimary text-lg"
            href=""
          >
            To learn more about chemotherapy for brain tumors, click here
          </a>
        </div>

        <div className="text-2xl text-center mt-10 font-medium">
          Targeted Drug Therapy for Brain Tumors
        </div>

        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Targeted drug therapies are medications that selectively attack
          specific cell traits to halt a tumor’s spread. Unlike chemotherapy,
          targeted therapies spare healthy tissue, so they generally have fewer,
          milder side effects. These drugs are most often used to treat
          metastatic brain tumors and are frequently paired with other therapies
          like surgery or radiation.
        </p>

        <div className="text-2xl text-center mt-10 font-medium">
          Tumor Treating Fields
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Tumor treating fields use painless electrical pulses to interrupt
          brain tumor cell division. This slows their growth and spread. The
          device is portable and resembles a swim cap connected to a small
          backpack. The device can cause local side effects, such as scalp
          irritation, and requires frequent head shaving.
        </p>

        {/* Clinical Trials */}
        <div className="my-10 bg-[#B8DEFF] py-2 px-16">
          <div className="text-2xl text-center mt-10 py-8 font-medium">
            Clinical Trials
          </div>
          <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
            Clinical trials are an important form of clinical research. They are
            designed to test new therapies or diagnostic techniques in patients.
            In general, clinical trials address whether a new treatment or
            technique is safe and more effective than existing therapies. Brain
            tumor clinical trials are frequently focused on finding new ways to
            manage malignant brain tumors.
          </p>
          <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
            Involvement in clinical trials generally requires some commitment
            and comes with certain risks. Clinical trials might be an option for
            patients whose tumor came back and/or if it’s a tumor known to be
            aggressive and generally incurable with current therapies.
          </p>

          <div className="text-xl text-center mt-10 font-medium py-8">
            Follow-up Care and Rehabilitation after Brain Tumor Treatment
          </div>

          <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
            After completion of treatment, your brain tumor care team will help
            you prepare to leave the hospital, provide follow-up care, and
            coordinate any necessary rehabilitation services or home care.
          </p>
          <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
            Follow-up care after brain tumor treatment may involve seeing a
            neurosurgeon or neurologist for periodic examinations and brain
            scans, usually MRIs. The doctor will check for tumor recurrence and
            possible problems caused by the tumor and/or the treatment, which
            may include:
          </p>

          <div className="flex flex-wrap justify-center gap-4 py-8 my-8">
            <span className="bg-[#0E56A0] text-white py-2 px-6 rounded w-[calc(25%-1rem)] text-center">
              Weakness
            </span>
            <span className="bg-[#0E56A0] text-white py-2 px-6 rounded w-[calc(25%-1rem)] text-center">
              Loss of balance
            </span>
            <span className="bg-[#0E56A0] text-white py-2 px-6 rounded w-[calc(25%-1rem)] text-center">
              Loss of vision
            </span>
            <span className="bg-[#0E56A0] text-white py-2 px-6 rounded w-[calc(25%-1rem)] text-center">
              Loss of memory
            </span>
            <span className="bg-[#0E56A0] text-white py-2 px-6 rounded w-[calc(25%-1rem)] text-center">
              Difficulty speaking
            </span>
            <span className="bg-[#0E56A0] whitespace-nowrap text-white py-2 px-6 rounded w-[calc(25%-1rem)] text-center">
              Difficulty doing complex tasks
            </span>
            <span className="bg-[#0E56A0] whitespace-nowrap  text-white py-2 px-6 rounded w-[calc(25%-1rem)] text-center">
              Difficulty making decisions
            </span>
          </div>
        </div>

        {/* Clinical Trails */}
        <div className="text-2xl text-center mt-10 font-medium">
          Rehabilitation
        </div>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          To regain some of the affected skills and functions after brain tumor
          treatment, you may need to stay at a rehabilitation facility, or
          perform therapy at home or at an outpatient facility. Your doctor will
          help determine the best type of rehabilitation care.
        </p>

        {/* Pink Bg paragraph */}
        <p className="p-3 my-1  bg-[#D84498] text-white text-start w-full  mx-auto font-light leading-relaxed">
          If an inpatient stay is recommended, a social worker will help you
          find a facility close to home and work with your insurance provider to
          get you set up.
        </p>
        <p className="p-3 my-1  bg-[#D84498] text-white text-start w-full  mx-auto font-light leading-relaxed">
          If home therapy is recommended, the team will arrange for home
          therapists to visit you. They usually come two to three times a week
          for 30–60 minutes.
        </p>
        <p className="p-3 my-1  bg-[#D84498] text-white text-start w-full  mx-auto font-light leading-relaxed">
          If outpatient therapy is recommended, you will receive a referral or
          prescription before leaving the hospital that will detail the type of
          therapy necessary.
        </p>

        <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {therapistInfo.map((item, index) => (
            <div
              key={index}
              className="shadow-md border border-gray-200 rounded-lg p-4 bg-white"
            >
              <h3 className="text-hciPrimary font-medium  mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 font-light">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed text-2xl">
          There are different types of rehabilitation specialists who can help
          you
        </p>

        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          Support services, such as counseling, patient education and support
          groups are available and can typically be accessed through your
          treatment center even after your treatment has ended.
        </p>
        <p className="mt-4 text-gray-600 text-start w-full  mx-auto font-light leading-relaxed">
          A brain tumor can be a frightening diagnosis. It’s important to
          partner with a medical team you trust to determine the best next
          steps, whether it’s observation, surgery, radiation therapy or another
          treatment. How successful your personal outcome will be depends on
          many factors, including:
        </p>

        <div className="my-2">
          <ul className="list-disc pl-2 pr-2 list-outside space-y-2 text-gray-700 marker:text-hciSecondary font-light">
            <li> The type of brain tumor, its size, grade and location</li>
            <li>
              {" "}
              Whether the tumor has spread within the brain or to other parts of
              the body
            </li>
            <li>
              Your age, overall health and how the brain tumor affects your
              ability to function
            </li>
            <li>
              How long you had symptoms before you were diagnosed with a brain
              tumor{" "}
            </li>
            <li>Your treatment preferences</li>
            <li>The expertise of your treatment team </li>
          </ul>
        </div>

        {/* CTA Section */}
        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default BrainTumor;

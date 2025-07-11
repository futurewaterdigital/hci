import React from 'react'
import Banner from '@/components/Common/Banner'
import H1 from '@/components/ui/h1'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import IssuesLinks from '@/components/ui/IssuesLinks'
const data = {
  title: "Brain Tumours and Brain Cancer",
  bannerImage: "/neuro-sciences/brain-tumours-and-brain-cancer.png",
  description: `Brain tumors are abnormal growths of cells within the brain or its surrounding tissues. These growths can be benign (non-cancerous) or malignant (cancerous). A brain tumor can originate in the brain itself (primary brain tumor) or spread to the brain from another part of the body (secondary or metastatic brain tumor).`,
  overview: `Brain cancer specifically refers to malignant brain tumors, which are aggressive and can invade surrounding brain tissue.`,

  section_1: [
    {
      title: "1. Acoustic Neuroma: ",
      description:
        "A non-cancerous tumour on the nerve connecting the ear to the brain, causing hearing loss and balance problems.",
    },
    {
      title: "2. Astrocytoma:",
      description:
        "A tumour originating in star-shaped glial cells (astrocytes). It can range from low-grade to high-grade (glioblastoma).",
    },
    {
      title: "3. Chordoma:",
      description:
        "A rare, slow-growing tumour that forms at the base of the skull or spine, often affecting nearby nerves.",
    },
    {
      title: "4. Choroid Plexus Tumor:",
      description:
        "A rare tumour that arises in the ventricles of the brain, typically affecting cerebrospinal fluid flow.",
    },
    {
      title: "5. CNS Lymphoma:",
      description:
        "A malignant tumour affecting the lymphatic system in the brain, often linked to immunosuppressive conditions.",
    },
    {
      title: "6. Craniopharyngioma:",
      description:
        "A benign tumour near the pituitary gland, leading to hormone imbalance and vision issues.",
    },
    {
      title: "7. Embryonal Tumor:",
      description:
        "Aggressive childhood tumours that develop from embryonic tissue, often located in the cerebellum.",
    },
    {
      title: "8. Ependymoma:",
      description: `A tumour that forms in the lining of the brain's ventricles or spinal canal, leading to fluid buildup.`,
    },
    {
      title: "9. Glioblastoma:",
      description:
        "A fast-growing, aggressive brain cancer with poor prognosis, known for rapid spread.",
    },
    {
      title: "10. Glioma:",
      description:
        "A broad category of tumours that arise from glial cells, including astrocytomas, oligodendrogliomas, and ependymomas.",
    },
    {
      title: "11. Medulloblastoma:",
      description:
        "Often forming near joints, such as the wrist, ganglion cysts may press on nerves, causing discomfort or limiting movement. These cysts sometimes disappear without treatment, but those that cause significant symptoms may require removal.",
    },
    {
      title: "12. Meningitis and Meningioma:",
      description: `<p><strong>Meningitis:</strong> Inflammation of the brain’s protective membranes, typically caused by infection.</p>
      <p><strong>Meningioma:</strong> A mostly benign tumour arising from the brain's outer membranes</p>`,
    },
    {
      title: "13. Oligodendroglioma:",
      description:
        "A slow-growing tumour from oligodendrocytes, cells responsible for producing myelin in the CNS.",
    },
    {
      title: "14. Pineoblastoma:",
      description:
        "A rare, malignant tumour that forms in the pineal gland, disrupting sleep patterns and hormone production.",
    },
  ],

  complications: [
    {
      heading: "Surgery:",
      description:
        "Surgery is often the first line of treatment to remove as much of the tumour as possible.",
      aneurysmSymptoms: [
        // {
        //   description:
        //     'In cases where the tumour is small and asymptomatic, regular monitoring may be recommended to track its growth and any emerging symptoms.',
        // },
        {
          description:
            '<strong className="text-hciSecondary">Craniotomy:</strong> A portion of the skull is removed to access the tumour.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Minimally Invasive Surgery:</strong> Small incisions with the use of endoscopes or robotic systems for hard-to-reach tumours.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Awake Brain Surgery:</strong> Performed while the patient is conscious to ensure no critical functions (e.g., speech) are impacted during tumour removal.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Challenges:</strong> Tumours near critical brain regions may not be fully removable, requiring additional treatments.',
        },
      ],
    },

    {
      heading: "Radiation Therapy:",
      description:
        "Radiation therapy uses high-energy rays to destroy tumour cells or shrink them.",
      aneurysmSymptoms: [
        {
          description:
            '<strong className="text-hciSecondary">External Beam Radiation Therapy (EBRT):</strong> Directs radiation from outside the body over multiple sessions.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Stereotactic Radiosurgery (SRS):</strong> Delivers highly focused radiation in a single or few sessions (e.g., Gamma Knife, Cyber Knife). Ideal for small, inoperable tumours.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Proton Therapy:</strong> Uses protons as conventional radiation therapy to minimize damage to surrounding healthy tissue.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Side Effects:</strong> Fatigue, hair loss, and brain swelling can occur, requiring supportive care.',
        },
      ],
    },
    {
      heading: "Chemotherapy",
      description:
        "Chemotherapy drugs stop tumour growth or kill cancer cells directly.",
      aneurysmSymptoms: [
        {
          description: `<p><strong className="text-hciSecondary">Administration Methods:</strong> Directs radiation from outside the body over multiple sessions.</p>
            <p><strong className="text-hciSecondary">1. Oral:</strong> Pills taken at home</p>
            <p><strong className="text-hciSecondary">2. Intravenous (IV):</strong> Delivered directly into the bloodstream.</p>
            <p><strong className="text-hciSecondary">3. Intrathecal:</strong> Injected into the cerebrospinal fluid for central nervous system cancers.</p>
            `,
        },
        {
          description:
            '<strong className="text-hciSecondary">Common Drugs:</strong> Temozolomide (for glioblastoma) and Carmustine.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Challenges:</strong> Chemotherapy can lead to side effects like nausea, hair loss, and lowered immunity.',
        },
      ],
    },
    {
      heading: "Targeted Therapy:",
      description:
        "This approach blocks specific molecules or mutations that drive tumour growth.",
      aneurysmSymptoms: [

        {
          description:
            '<strong className="text-hciSecondary">EGFR Inhibitors:</strong> Effective for tumours with EGFR mutations (common in glioblastoma).',
        },
        {
          description:
            '<strong className="text-hciSecondary">VEGF Inhibitors:</strong> Prevent tumour blood vessel formation.',
        },
        {
          description:
            '<strong className="text-hciSecondary">mTOR Inhibitors:</strong> Blocks proteins involved in cell growth and survival.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Advantages:</strong> Fewer side effects than chemotherapy since healthy cells are less affected.',
        },
      ],
    },
    {
      heading: "Immunotherapy:",
      description:
        "Immunotherapy enhances the body’s natural defences to fight cancer cells.",
      aneurysmSymptoms: [
        {
          description:
            '<strong className="text-hciSecondary">Checkpoint Inhibitors:</strong> Blocks proteins that prevent immune cells from attacking the tumour.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Vaccine Therapies:</strong> Trains the immune system to target tumour-specific antigens.',
        },
        {
          description:
            '<strong className="text-hciSecondary">CAR-T Cell Therapy:</strong> Immune cells are modified to recognize and destroy brain cancer cells.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Limitations:</strong> Brain tumours can evade immune detection, so immunotherapy may not always be effective alone.',
        },
      ],
    },
    {
      heading: "Rehabilitation and Supportive Care:",
      description:
        "Since brain tumours affect critical functions, patients may need rehabilitation during or after treatment.",
      aneurysmSymptoms: [
        {
          description:
            '<strong className="text-hciSecondary">Physical Therapy:</strong> Restores strength and mobility affected by surgery or radiation.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Occupational Therapy:</strong> Helps patients adapt to changes in cognitive or motor functions.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Speech Therapy:</strong> Addresses communication challenges if speech areas are impacted.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Counselling and Mental Health Support:</strong> Supports patients and families in coping with emotional stress and life adjustments.',
        },
      ],
    },
    {
      heading: "Clinical Trials:",
      description:
        "Patients can access cutting-edge treatments not widely available through clinical trials.",
      aneurysmSymptoms: [
        {
          description:
            '<strong className="text-hciSecondary">Emerging Therapies:</strong> New drug combinations, gene therapies, and advanced surgical techniques are tested.',
        },
        {
          description:
            '<strong className="text-hciSecondary">Eligibility:</strong> Trials may have specific criteria, such as tumour type and previous treatments.',
        },
      ],
    },
  ],

  contact: {
    title: "Contact Us Today",
    head: "Contact HCI for Expert Urological Care",
    content:
      "Take the first step towards better urological health. Reach out to HCI today to schedule a consultation with one of our skilled urologists and begin your path to recovery and better quality of life.",
  },

  conclusion: [
    {
      header: "Conclusion",
      paragraph: `
      Brain tumours and brain cancers are challenging to treat, but advances in neurosurgery, radiation, and targeted therapies provide hope for better outcomes. Early diagnosis and comprehensive care tailored to the tumour type are key to improving quality of life.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description: "Headaches (often worse in the morning or with activity)",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Seizures",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Nausea and vomiting",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Cognitive or personality changes",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Weakness or numbness in limbs",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Difficulty with balance and coordination",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Vision, speech, or hearing problems",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "Neurological Exams:",
      description:
        "Evaluate motor skills, coordination, and sensory functions.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Imaging Tests",
      description: `<p>MRI (Magnetic Resonance Imaging): Provides detailed images of the brain to detect abnormalities.</p>
        <p>CT Scans (Computed Tomography): Useful for spotting tumour size and location.</p>`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Biopsy:",
      description:
        "Tissue sample analysis to determine whether the tumour is malignant or benign.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Molecular and Genetic Testing:",
      description: "Identifies specific mutations for targeted treatments.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Lumbar Puncture:",
      description:
        "Collects cerebrospinal fluid to detect cancer cells or infections if CNS lymphoma is suspected.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],
}

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <H1 title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        {/* <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />
        <p className="font-light" text="">
          The exact cause of benign peripheral nerve tumours is often unclear,
          but some cases are associated with genetic conditions, such as
          neurofibromatosis type 1 (NF1) and neurofibromatosis type 2 (NF2).
          These inherited conditions increase the likelihood of developing nerve
          tumours.
        </p> */}
        <H2 title="Types" className="font-medium mb-4 text-center text-2xl" />
        {/* <p className="font-light" text="">
          Peripheral nerve tumours can grow within the nerves (intra-neural
          tumours) or press on them from outside (extra-neural tumours). The
          following are common types of benign peripheral nerve tumours:
        </p> */}
        {/* <DataSurgery data={data.section_1} /> */}
        <div className="grid md:grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[120px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>
        {/* <p>
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p>
         */}
        {/* <KnowMore title={data.title} /> */}
        <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
          <button className="text-start underline">
            To know more about Brain Tumours and brain cancer and its treatment, click here
          </button>
        </p>
        <div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms of Brain Tumors and Brain Cancer:"
                textCss="font-light py-4"
                text="Symptoms depend on the tumor's size, location, and growth rate but can include:"
                titleCss="text-black font-medium text-center text-xl py-4"
                header=""
                data={data.symptoms}
                myclass="grid md:grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div className='space-y-6'>
              <DataBoxes
                title="Diagnosis of Brain Tumours and Brain Cancer"
                text="Early detection is essential for effective treatment. Diagnostic methods include:"
                header=""
                titleCss="text-black font-medium text-center text-xl py-4"
                textCss="font-light pb-4"
                data={data.diagnosis}
                myclass="grid md:grid-cols-2"
              />
              <IssuesLinks head={data.title} />
            </div>
          </div>
        </div>
        <div>
          <H2 title="Treatment" className="font-medium mb-4 text-center text-2xl" />

          {/* <p className="font-light">
            Treatment for benign peripheral nerve tumours depends on factors
            such as the type, size, location, and whether the tumour causes
            symptoms. Options include:
          </p> */}
          <DataLists
            desc={data.complications.description}
            data={data.complications}
          />
        </div>
        {/* <div className="space-y-4">
          <H2 text="When to Consider Robotic Knee Replacement?" />
          <p className="font-light text-center">
            Consult a doctor if you experience:
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {data.consideration.slice(0, 3).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {data.consideration.slice(3, 5).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
          </div>
        </div> */}

        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;

import React from "react";
import Banner from "@/components/Common/Banner";
import H1 from "@/components/ui/h1";
import DataLists from "@/components/cardiacComponents/Bullets";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H2 from "@/components/ui/h2";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import Link from "next/link";
import H3 from "@/components/ui/h3";

const data = {
  title: "Pediatric Cancer",
  bannerImage: "/oncology/pediatric-cancer.png",
  description: `Pediatric cancer refers to a group of cancer affecting children under 18 years of age. Though adult and pediatric cancers share many similarities, they differ in terms of causes, growth, treatment response, and prognosis. Recent advancements in medicine have significantly improved survival rates, with over 80% of affected children living five years or more post-diagnosis. However, statistics differ based on cancer type and stage, necessitating the understanding of childhood cancer manifestations and treatments.`,
  overview: "",

  cancer_types: [
    {
      title: "Leukemia",
      description:
        "Cancer of blood and bone marrow, including acute lymphoblastic leukemia (ALL) and acute myeloid leukemia (AML)",
      bgColor: "bg-pink-500 text-white",
    },
    {
      title: "Brain Tumors",
      description:
        "Solid tumors within nervous tissue, being the most common childhood cancer",
      bgColor: "bg-pink-500 text-white",
    },
    {
      title: "Soft Cancers",
      description:
        "Includes neuroblastoma, Wilms tumor, rhabdomyosarcoma, retinoblastoma, and others",
      bgColor: "bg-pink-500 text-white",
    },
  ],

  diagnosis: [
    {
      heading: "Blood Tests",
      description:
        "Screening and comprehensive evaluation of conditions like anemia",
      aneurysmSymptoms: [
        { description: "Complete blood count (CBC) to assess overall health" },
        { description: "Blood chemistry studies to evaluate organ function" },
        { description: "Tumor marker tests for specific cancer indicators" },
      ],
    },
    {
      heading: "Imaging Tests",
      description: "X-Rays, CT scans, MRIs, and ultrasounds to detect tumors",
      aneurysmSymptoms: [
        {
          description:
            "PET scans to identify areas of abnormal metabolic activity",
        },
        { description: "Bone scans to detect metastasis to bones" },
        {
          description: "MIBG scans for specific tumor types like neuroblastoma",
        },
      ],
    },
    {
      heading: "Biopsy",
      description: "Tissue sample for pathological examination",
      aneurysmSymptoms: [
        { description: "Needle biopsy for accessible tumors" },
        { description: "Surgical biopsy when larger samples are needed" },
        {
          description: "Molecular testing of biopsy samples to guide treatment",
        },
      ],
    },
    {
      heading: "Bone Marrow and Lumbar Puncture",
      description:
        "Evaluation of bone marrow involvement and cerebrospinal fluid",
      aneurysmSymptoms: [
        { description: "Assessment for cancer cells in bone marrow" },
        {
          description:
            "Analysis of cerebrospinal fluid for cancer spread to the central nervous system",
        },
        { description: "Cytogenetic studies of collected samples" },
      ],
    },
  ],

  causes: [
    {
      description:
        "The exact causes of childhood cancer remain unclear, but genetic mutations during early development are believed to play a factor. Unlike adult cancers linked to environmental exposures or aging, pediatric cancers often arise from errors in cellular processes during rapid growth and development. Certain genetic conditions like Down syndrome and Li-Fraumeni syndrome may increase the likelihood of childhood cancers, making early screening critical for high-risk individuals.",
    },
  ],

  treatments: [
    {
      heading: "Radiation Therapy",
      description:
        "Radiation therapy uses high-energy rays or particles to kill cancer cells by damaging their DNA, which prevents them from growing and dividing",
      aneurysmSymptoms: [
        {
          description:
            "For children, radiation is often used with other treatments to target specific cancers",
        },
        {
          description: "Precise targeting minimizes damage to healthy tissues",
        },
        {
          description:
            "May be delivered externally (external beam radiation) or internally (brachytherapy)",
        },
        {
          description:
            "Physicians carefully consider the potential impact on growing bodies and cognitive development",
        },
        {
          description:
            "Treatment strategies carefully balance plans to achieve efficacy with the preservation of the child's overall health and quality of life",
        },
      ],
    },
    {
      heading: "Chemotherapy",
      description:
        "Chemotherapy is the cornerstone of childhood cancer treatment, involving the use of potent drugs to target and destroy rapidly dividing cancer cells",
      aneurysmSymptoms: [
        {
          description:
            "These drugs can be administered in various ways, including intravenous infusion, oral medication, or directly into cerebrospinal fluid for cancers affecting the brain and spinal cord",
        },
        {
          description:
            "Protocols typically involve combinations of medications, dosages, and administrations",
        },
        {
          description:
            "Chemotherapy often requires lengthy treatment cycles to ensure complete eradication",
        },
        {
          description:
            "Medications may vary based on cancer type, stage, and patient characteristics",
        },
        {
          description:
            "Supportive care measures help manage side effects and ensure the child can maintain adequate nutrition, hydration, and immune function during treatment",
        },
      ],
    },
    {
      heading: "Surgery",
      description:
        "Surgery is often essential to remove cancer entirely or significantly reduce tumor size before additional treatments",
      aneurysmSymptoms: [
        {
          description:
            "Surgeons with special training in pediatric oncology perform these procedures with extreme care",
        },
        {
          description:
            "The goal is to remove as much tumor as possible while preserving organ function",
        },
        {
          description:
            "Surgery may be the primary treatment for solid tumors like Wilms tumor or neuroblastoma",
        },
        {
          description:
            "Minimally invasive techniques may be utilized when appropriate to reduce recovery time and complications",
        },
        {
          description:
            "Advanced imaging guides surgeons to precisely locate tumors and plan surgical approaches",
        },
        {
          description:
            "Tissue samples obtained during surgery provide crucial information for diagnosis and ongoing treatment planning",
        },
      ],
    },
    {
      heading: "Stem Cell (Bone Marrow) Transplantation",
      description:
        "This procedure involves infusing healthy blood-forming cells into patients with cancers such as leukemia or lymphomas that have not responded to other therapies",
      aneurysmSymptoms: [
        {
          description:
            "Stem cells may come from the patient (autologous) or from a donor (allogeneic)",
        },
        {
          description:
            "Before transplantation, high-dose chemotherapy and/or radiation destroy the existing bone marrow",
        },
        {
          description:
            "The healthy cells begin to grow and make new blood cells, strengthening the immune system",
        },
        {
          description:
            "Close monitoring and supportive care manage side effects and potential complications",
        },
        {
          description:
            "This intensive procedure requires specialized transplant centers with expertise in pediatric cases",
        },
      ],
    },
    {
      heading: "Immunotherapy",
      description:
        "This innovative approach harnesses the power of the child's immune system to recognize and attack cancer cells",
      aneurysmSymptoms: [
        {
          description:
            "Monoclonal antibodies target specific proteins on cancer cells, making them more visible to the immune system",
        },
        {
          description:
            'Checkpoint inhibitors remove the "brakes" that prevent immune cells from attacking cancer',
        },
        {
          description:
            "CAR T-cell therapy engineers a patient's own immune cells to better fight specific cancer types",
        },
        {
          description:
            "Shows promising results in certain childhood cancers, including some forms of leukemia",
        },
        {
          description:
            "Active research continues to expand applications for pediatric patients, with special focus on children with difficult-to-treat cancers",
        },
      ],
    },
  ],

  side_effects: {
    description:
      "Side effects such as fatigue, developmental delays, and long-term complications are managed through supportive care, including palliative treatments and psychological support.",
  },

  best_hospitals: [
    { city: "Delhi", url: "/best-cancer-hospital-delhi" },
    { city: "Mumbai", url: "/best-cancer-hospital-mumbai" },
    { city: "Bangalore", url: "/best-cancer-hospital-bangalore" },
    { city: "Chennai", url: "/best-cancer-hospital-chennai" },
    { city: "Kochi", url: "/best-cancer-hospital-kochi" },
    { city: "Hyderabad", url: "/best-cancer-hospital-hyderabad" },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph: `While pediatric cancer poses significant challenges, advancements in medical science offer hope for survival and improved quality of life. The majority of children with cancer achieve remission and go on to lead normal lives with proper treatment and care. Early diagnosis and access to specialized pediatric oncology centers are essential for these positive outcomes. By treating each diagnosis as unique and addressing both medical and emotional aspects, healthcare providers strive to ensure the best possible outcome for every child facing cancer.`,
    },
  ],
};

function PediatricCancer() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
        
        <H1 title={data.title} />
        <H2 title={data.description} className="text-start font-light" />

        <div className="space-y-2 mb-6">
          <DataBoxes
            title=""
            header=""
            data={data.cancer_types}
            myclass="grid grid-cols-1"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <img
              src="/oncology/pediatric-cancer-diagnosis.png"
              alt="Doctor examining a child patient"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div>
            <H2
              title="Diagnosis of Pediatric Cancer"
              className="text-xl font-medium mb-4"
            />
            <p className="mb-4 font-light">
              Childhood cancers are often discovered through persistent symptoms
              or routine examinations. Diagnosis methods include:
            </p>
            <div className="bg-yellow-50 rounded-lg p-4 space-y-4">
              {data.diagnosis.map((method, index) => (
                <div
                  key={index}
                  className="border-b border-yellow-200 pb-2 last:border-0"
                >
                  <H3
                    title={method.heading}
                    className="font-medium text-yellow-800"
                  />
                  <p className="text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <H2
          title="Causes of Pediatric Cancer"
          className="text-2xl font-medium mb-4 text-center"
        />
        <div className="mb-8">
          {data.causes.map((cause, index) => (
            <p key={index} className="font-light">
              {cause.description}
            </p>
          ))}
        </div>

        <div className="text-center mb-8">
          <Link
            href="/treatment/oncology/pediatric-cancer-info"
            className="inline-block px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
          >
            To Know More About Pediatric Cancer And Its Treatment, Click Here
          </Link>
        </div>

        <H2
          title="Treatment Options for Pediatric Cancer"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light mb-4">
          Childhood cancer treatment varies based on the type and stage of
          cancer, as well as the child&apos;s age and overall health. Common
          treatments include:
        </p>

        <div className="mb-8">
          <DataLists
            divClass="grid grid-cols-1 gap-6"
            data={data.treatments}
            ulClass="list-disc pl-5 space-y-1"
          />
        </div>

        <div className=" p-4 rounded-lg mb-8">
          <p className="font-light">{data.side_effects.description}</p>
        </div>


        <div className="my-10">
        <Conclusion data={data.conclusion} />
<FooterLinks head={data.title} />
<BookButton />
        </div>
      
      </div>
    </>
  );
}

export default PediatricCancer;

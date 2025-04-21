import React from "react";
import Banner from "@/components/Common/Banner";
import Title from "@/components/cardiacComponents/Title";
import DataLists from "@/components/cardiacComponents/Bullets";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H2 from "@/components/ui/h2";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
// import TextComponent from '@/components/Common/TextComponent'
import Link from "next/link";
import H3 from "@/components/ui/h3";
import H1 from "@/components/ui/h1";

const data = {
  title: "Pediatric Cancer",
  bannerImage: "/oncology/pediatric-cancer.png",
  description: `Pediatric cancer refers to a group of cancer affecting children under 18 years of age. Though adult and pediatric cancers share many similarities, they differ in terms of causes, growth, treatment response, and prognosis. Recent advancements in medicine have significantly improved survival rates, with over 80% of affected children living five years or more post-diagnosis. However, statistics differ based on cancer type and stage, necessitating the understanding of childhood cancer manifestations and treatments.`,
  overview: "",

  cancer_types: [
    {
      category: "Leukemia",
      description:
        "Affecting blood and bone marrow, including acute lymphoblastic leukemia (ALL) and acute myeloid leukemia (AML).",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Brain Tumors",
      description:
        "Both benign and malignant types, being the most common childhood cancer.",
      bgColor: "bg-[#D84498] text-white",
    },
    {
      category: "Solid Tumours",
      description:
        "Such as neuroblastoma, Wilms tumour, retinoblastoma, and bone cancers (e.g., osteosarcoma, Ewing sarcoma).",
      bgColor: "bg-[#D84498] text-white",
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

  treatments: [
    {
      heading: "Radiation Therapy",
      description:
        "Radiation therapy uses high-energy rays or particles to kill cancer cells by damaging their DNA, which prevents them from growing and dividing. For children, radiation is often employed to treat brain tumours, bone cancers, and other solid tumours. Techniques like external beam radiation and proton therapy allow for precise targeting of the cancer, minimising harm to surrounding healthy tissues. Side effects can include fatigue, skin irritation, and, in some cases, long-term impacts on growth and cognitive development. Paediatric oncologists carefully tailor radiation plans to balance efficacy with the preservation of the child’s overall health and quality of life.",
    },
    {
      heading: "Chemotherapy",
      description:
        "Chemotherapy is the cornerstone of childhood cancer treatment, involving the use of potent drugs to target and destroy rapidly dividing cancer cells. These drugs can be administered through various methods, including intravenous infusion, oral medication, or directly into cerebrospinal fluid for cancers affecting the brain and spinal cord. While effective in combating cancers like leukaemia, lymphoma, and solid tumours, chemotherapy often impacts healthy cells, leading to side effects such as nausea, fatigue, hair loss, and weakened immunity. Advances in chemotherapy protocols are now focused on reducing these side effects through precision medicine and targeted delivery, ensuring better outcomes for children.",
    },
    {
      heading: "Surgery",
      description:
        "Surgery is often used to remove solid tumours or cancerous tissue and plays a vital role in treating certain types of childhood cancers. Surgeons work to extract as much of the tumour as possible while preserving nearby healthy tissue. For cancers like neuroblastoma or Wilms tumour, surgery may be the primary treatment or part of a multimodal approach alongside chemotherapy and radiation. Advances in surgical techniques, including minimally invasive and robotic-assisted procedures, have improved precision and recovery times. Despite its efficacy, surgery carries risks such as infection and complications related to anaesthesia, which are carefully managed in paediatric care settings.",
    },
    {
      heading: "Stem Cell (Bone Marrow) Transplantation",
      description:
        "Stem cell transplantation is a lifesaving treatment for children with cancers such as leukaemia or lymphoma that do not respond to other therapies. This procedure involves replacing damaged or destroyed bone marrow with healthy stem cells, either from the child or a donor. The healthy cells rebuild the bone marrow, enabling the production of normal blood cells. While highly effective, the procedure requires intensive preparation, including high-dose chemotherapy or radiation, and poses risks such as infection or graft-versus-host disease. Despite these challenges, stem cell transplants have revolutionised outcomes for many children with complex cancers.",
    },
    {
      heading: "Immunotherapy",
      description:
        "Immunotherapy harnesses the power of the child’s immune system to recognise and attack cancer cells. This innovative treatment includes approaches like monoclonal antibodies, immune checkpoint inhibitors, and CAR-T cell therapy, which are particularly effective for cancers such as certain leukaemia and lymphomas. Immunotherapy is often used when traditional treatments fail or as part of a combined regimen. Side effects, such as inflammation and flu-like symptoms, are typically less severe than those from chemotherapy or radiation. As a cutting-edge treatment, immunotherapy continues to evolve, offering new hope for children with difficult-to-treat cancers. Proton theraphy offeres a promising future for pediatric cancer.",
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
        {/* <Title title={data.title} className="text-4xl text-[#D84598]" /> */}
        <H1 title={data.title} />
        <p className="text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
          {data.description}
        </p>

        <div className="space-y-2 mb-6">
          <p className="font-bold text-black">
            Pediatric cancers are classified into three major categories:
          </p>
          {data?.cancer_types?.map((items, index) => (
            <div className={`${items.bgColor} flex p-4 rounded`} key={index}>
              <h3 className="font-medium mr-2">{items.category}:</h3>
              <p className="font-light"> {items.description} </p>
            </div>
          ))}
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
              className="text-xl font-semibold mb-2"
            />
            <p className="text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
              Childhood cancers are often discovered through persistent symptoms
              or routine examinations. Diagnosis methods include:
            </p>
            <div className=" rounded-lg">
              {data.diagnosis.map((method, index) => (
                <div key={index} className="bg-[#FFE7B6] p-2 mb-2">
                  <h2 className="font-medium text-black font-semibold text-gray-800">
                    {method.heading}
                  </h2>
                  <p className="text-sm text-gray-800">{method.description}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
              Timely and accurate diagnosis is critical to determine the type
              and stage of cancer, enabling an effective treatment plan.
            </p>
          </div>
        </div>

        <H2
          title="Causes of Pediatric Cancer"
          className="text-2xl font-semibold mb-4 text-center"
        />
        <p className="text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
          The exact causes of childhood cancer remain unclear, but genetic
          mutations during early development are a key factor. Unlike adult
          cancers linked to environmental exposures or aging, pediatric cancers
          often arise from inherited conditions or DNA replication errors.
          Genetic disorders such as Li-Fraumeni Syndrome and Fanconi Anemia
          increase the likelihood of childhood cancers, making early screening
          crucial for high-risk individuals.",
        </p>

        <div className="text-start mb-8">
          <Link
            href="/treatment/oncology/pediatric-cancer-info"
            className="text-hciPrimary text-lg font-semibold underline"
          >
            To know more about pediatric cancer and its treatment, click here
          </Link>
        </div>

        <H2
          title="Treatment Options for Pediatric Cancer"
          className="text-2xl font-semibold mb-4 text-center"
        />
        <p className="text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
          Childhood cancer treatment varies based on the type and stage of
          cancer, as well as the child’s age and overall health. Common
          treatments include:
        </p>

        <div className="mb-8">
          <DataLists
            divClass="grid grid-cols-1 gap-6"
            data={data.treatments}
            ulClass="list-disc pl-5"
          />
        </div>

        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default PediatricCancer;

"use client";
import { useEffect } from "react";
import H3 from "@/components/ui/h3";
import H1 from "@/components/ui/h1";
import Banner from "@/components/Common/Banner";
import Link from "next/link";
import BookButton from "@/components/cardiacComponents/BookButton";

export default function RareCancers() {
  useEffect(() => {
    document.title = "Rare Cancers Treatment in India";
  }, []);

  const cancerData = [
    {
      title: "Sarcomas",
      content: [
        "Sarcomas are cancers that arise from connective tissues like muscles, fat, bones, and cartilage. They can occur in various forms, including osteosarcoma (bone), liposarcoma (fat), and rhabdomyosarcoma (muscle). Sarcomas are rare, accounting for only about 1% of all cancers. However, they are increasingly being recognized due to advancements in diagnostic imaging and oncology.",
        "Sarcomas are often diagnosed late because their symptoms can mimic benign conditions such as muscle strains or injuries. Treatment usually involves a combination of surgery, chemotherapy, and sometimes radiation.",
      ],
    },
    {
      title: "Neuroendocrine Tumors (NETs)",
      content: [
        "NETs are a group of cancers that arise in the neuroendocrine system, which can produce hormones. They can occur in various parts of the body, including the lungs, pancreas, and gastrointestinal tract.",
        "Although neuroendocrine tumors are relatively rare, their incidence is gradually increasing in India, associated with improved diagnostic methods.",
        "Symptoms can be non-specific, such as abdominal pain, flushing, and diarrhea, leading to delayed diagnosis. NETs may be associated with more common cancers of the digestive tract and lung. Treatment involves surgery, targeted therapies, and sometimes radiation. India has advanced centers of excellence for the treatment of NETs.",
      ],
    },
    {
      title: "Gastric Lymphoma",
      content: [
        "Gastric lymphoma is a cancer of the lymphatic tissue in the stomach. It is a rare type of non-Hodgkin lymphoma and accounts for a very small percentage of all gastric cancers.",
        "It is rare but more common than other lymphomas, with a strong incidence in certain regions, possibly linked to dietary habits and Helicobacter pylori infection.",
        "Diagnosis can be delayed because the symptoms (such as nausea, weight loss, and stomach pain) are often mistaken for common gastric disorders. Treatment involves chemotherapy, radiation, and in some cases, surgery. Specialized lymphoma centers in India offer treatment for gastric lymphoma.",
      ],
    },
    {
      title: "Mesothelioma",
      content: [
        "Mesothelioma is a rare and aggressive cancer linked to exposure to asbestos. It typically affects the lining of the lungs (pleura) but can also affect the abdomen (peritoneum) and the heart (pericardium).",
        "**Prevalence in India:** Though mesothelioma is rare globally, it has been reported in industrial regions of India, especially in areas with significant asbestos exposure from industries.",
        "**Challenges:** It often presents in an advanced stage, as it can mimic other respiratory conditions. Symptoms include coughing, shortness of breath, and chest pain.",
        "**Treatment:** Due to its rarity, treatment options in India are evolving, with a focus on improving early diagnosis and providing specialized care.",
      ],
    },
    {
      title: "Retinoblastoma",
      content: [
        "Retinoblastoma is a rare cancer of the eye that is the most common eye cancer among children. It originates in the retina and can lead to vision loss or even death if untreated.",
        "It is critical that diagnosing this condition is critical for preserving vision, as many children are diagnosed too late, especially in rural areas where there is limited access to specialized ophthalmological care.",
        "Treatment may involve chemotherapy, radiation, or laser therapy, and in some cases, eye removal (enucleation) is necessary.",
      ],
    },
  ];

  const risk_factors = [
    {
      description:
        " Many rare cancers are diagnosed late due to the lack of awareness among both patients and healthcare providers. Symptoms may mimic more common conditions, leading to misdiagnosis or delayed diagnosis.",
    },
    {
      description:
        "  Rural areas often lack access to advanced diagnostic and treatment facilities for rare cancers.",
    },
    {
      description:
        "  Both the public and medical professionals may not be aware of the signs and symptoms of rare cancers, leading to missed opportunities for early intervention.",
    },
    {
      description:
        " The cost of treatment for rare cancers, particularly with newer therapies like targeted therapy and immunotherapy, can be prohibitive, especially for patients from low-income families.",
    },
    {
      description:
        " Currently, there is limited data on the incidence and outcomes of rare cancers in India, which makes it difficult to develop standardized treatment protocols.",
    },
  ];

  const links = [
    {
      title:
        "To Consult With The Best Doctor For Treatment Of A Rare Cancer, Click Here",
      url: "",
    },
    {
      title:
        "For The Best Hospital For The Treatment Of A Rare Cancer In Bangalore, Click Here",
      url: "",
    },
    {
      title:
        "For The Best Hospital For The Treatment Of A Rare Cancer In Mumbai, Click Here",
      url: "",
    },
    {
      title:
        "To Consult With The Best Doctor For Treatment Of A Rare Cancer, Click Here",
      url: "",
    },
    {
      title:
        "For The best hospital for the treatment of A rare cancer in Delhi, click here",
      url: "",
    },
    {
      title:
        "For The best hospital for the treatment of A rare cancer in Hyderabad, click here",
      url: "",
    },
    {
      title:
        "For The best hospital for the treatment of A rare cancer in Mumbai, click here",
      url: "",
    },
  ];

  return (
    <>
      {/* Banner Image */}
      <Banner image="/oncology/rare-cancer-banner.png" />
      {/* <!-- Main Content --> */}
      <main class="container mx-auto py-12 px-6">
        <H1 title="Rare Cancers" />
        <p className="mt-4 text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
          Rare cancers are defined as cancers that occur in a small percentage
          of the population, often with unique characteristics, and are not as
          commonly diagnosed as more prevalent cancers like breast, lung and
          colorectal cancers. In India, the occurrence of rare cancers poses
          unique challenges, as the healthcare infrastructure is not always
          equipped to handle these less common conditions, and awareness among
          the public and healthcare providers is limited.
        </p>
        <p className="mt-4 text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
          While exact numbers are difficult to determine due to the lack of
          comprehensive cancer registries for all rare cancers, it is estimated
          that rare cancers represent around {" "}
          <strong className="font-medium"> 20-25% of all cancers </strong>
           globally. These cancers often present diagnostic challenges and are
          sometimes misdiagnosed due to their uncommon nature.
        </p>
        <p className="mt-4 text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
          Rare cancers are not as well known, both among the general public and
          healthcare professionals, leading to delays in diagnosis and
          treatment. Early signs may be misinterpreted as benign conditions, and
          many healthcare facilities are not equipped with the specialized
          knowledge or diagnostic tools required.
        </p>

        <h2 class="text-2xl my-16 font-bold text-center text-black">
          Some of the Rare Cancers identified in the Indian context could
          include:
        </h2>

        <div>
          {cancerData.map((item, index) => (
            <div key={index} className="bg-[#FFE7B6] p-4 mb-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              {item.content.map((paragraph, i) => (
                <p key={i} className="mb-2">
                  {paragraph.includes("**") ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="text-start mb-8">
          <Link
            href=""
            className="text-hciPrimary text-lg font-semibold underline"
          >
            To Know More About Rare Cancers, Click Here
          </Link>
        </div>

        <h2 class="text-2xl my-6 font-bold text-center text-black">
          Challenges in Managing Rare Cancers in India
        </h2>

        <div className="space-y-2">
          {risk_factors.map((cause, idx) => (
            <div
              key={idx}
              className="bg-[#D84498] text-white font-light py-4 px-4 rounded text-md"
            >
              {cause.description}
            </div>
          ))}
        </div>

        <p className="mt-4 text-gray-600 text-start text-lg max-w-7xl mx-auto font-light">
          Rare cancers present significant diagnostic and treatment challenges
          in India due to the lack of awareness, limited access to specialized
          care, and high treatment costs. However, with improvements in
          healthcare infrastructure, access to advanced diagnostic tools, and
          growing awareness, India is gradually making progress in the
          management of rare cancers. Specialized treatment centers, clinical
          trials, and better public health initiatives hold promise for
          improving outcomes for patients with these rare but serious diseases.
        </p>

        {/* Links */}
        <div className="my-6">
          {links.map((link, index) => (
            <div className="text-start mb-4" key={index}>
              <Link
                href={link.url}
                className="text-hciPrimary text-lg font-semibold underline"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>

        <BookButton />
      </main>
    </>
  );
}

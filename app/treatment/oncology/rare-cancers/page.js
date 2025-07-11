"use client";
import { useEffect } from "react";
//import H3 from "@/components/ui/h3";
import H1 from "@/components/ui/h1";
import Banner from "@/components/Common/Banner";
import BookButton from "@/components/cardiacComponents/BookButton";
import KnowMore from "@/components/ui/KnowMore";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import Conclusion from "@/components/cardiacComponents/Conclusion";
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
      title: "Thyroid Cancer",
      content: [
        "Anaplastic thyroid cancer and medullary thyroid cancer are much rarer when compared to papillary CA Thyroid. This is extremely aggressive, and medullary thyroid cancer arises from the C-cells of the thyroid. While Thyroid cancer is becoming more commonly diagnosed due to increased awareness and screening, anaplastic and medullary thyroid cancers account for a smaller percentage of cases. They are aggressive and often diagnosed at an advanced stage due to their rapid progression. Surgery is usually the first line of treatment, often followed by radiation and chemotherapy.",
      ],
    },
    {
      title: "Cholangiocarcinoma (Bile Duct Cancer)",
      content: [
        "Cholangiocarcinoma is a rare cancer that originates in the bile ducts. It can occur in the intrahepatic (within the liver) or extrahepatic (outside the liver) bile ducts. Cholangiocarcinoma is rare but has been increasingly reported in certain regions, particularly in the eastern and northeastern states where liver diseases like Hepatitis B and C are more prevalent. It is often diagnosed late due to vague symptoms like jaundice, fatigue, and abdominal pain, which are common to many liver diseases. Treatment options include surgery, chemotherapy, and targeted therapies. Due to the rarity of the disease, specialized treatment centers are essential.",
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

  const data = {
    conclusion: [
      {
        header: "Conclusion",
        paragraph: `
        Rare cancers present significant diagnostic and treatment challenges due to the lack of awareness, limited access to specialized care, and high treatment costs. However, with improvements in healthcare infrastructure, access to advanced diagnostic tools, and growing awareness, progress is gradually being made in the management of rare cancers. Specialized treatment centers, clinical trials, and better public health initiatives hold promise for improving outcomes for patients with these rare but serious diseases.`,
      },
    ],
  };

  return (
    <>
      {/* Banner Image */}
      <Banner image="/oncology/rare-cancer-banner.png" />
      {/* <!-- Main Content --> */}
      <main className="md:container mx-auto md:py-12 py-1 md:px-6 px-4">
        <H1 title="Rare Cancers" />
        <p className="mt-4 text-gray-600 text-start  max-w-7xl mx-auto font-light">
          Rare cancers are defined as cancers that occur in a small percentage of the population, often with unique characteristics, and are not as commonly diagnosed as more prevalent cancers like breast, lung and colorectal cancers. In India, the occurrence of rare cancers poses unique challenges, as the healthcare infrastructure is not always equipped to handle these less common conditions, and awareness among the public and healthcare providers is limited.
        </p>
        <p className="mt-4 text-gray-600 text-start max-w-7xl mx-auto font-light">
          While exact numbers are difficult to determine due to the lack of
          comprehensive cancer registries for all rare cancers, it is estimated
          that rare cancers represent around {" "}
          <strong className="font-medium"> 20-25% of all cancers </strong>
          globally. These cancers often present diagnostic challenges and are
          sometimes misdiagnosed due to their uncommon nature.
        </p>
        <p className="mt-4 text-gray-600 text-start max-w-7xl mx-auto font-light">
          Rare cancers are not as well known, both among the general public and
          healthcare professionals, leading to delays in diagnosis and
          treatment. Early signs may be misinterpreted as benign conditions, and
          many healthcare facilities are not equipped with the specialized
          knowledge or diagnostic tools required.
        </p>

        <h2 className="text-2xl md:my-16 my-8 font-medium text-center text-black">
          Some of the Rare Cancers identified in the context could include:
        </h2>

        <div>
          {cancerData.map((item, index) => (
            <div key={index} className="bg-[#FFE7B6] p-4 mb-6">
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              {item.content.map((paragraph, i) => (
                <p key={i} className="mb-2 font-light">
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
          {/* <KnowMore title="Rare Cancers" /> */}
          <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
            <button className="text-start underline">
              To Know More About Rare Cancers, Click here
            </button>
          </p>
        </div>

        <h2 className="text-2xl my-6 font-medium text-center text-black">
          Challenges in Managing Rare Cancers
        </h2>

        <div className="space-y-2">
          {risk_factors.map((cause, idx) => (
            <div
              key={idx}
              className="bg-hciSecondary text-white font-light py-4 px-4 rounded text-md">
              {cause.description}
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="my-6">
          <Conclusion data={data.conclusion} />
          <FooterLinks head="Rare Cancers" />
          <BookButton />
        </div>
      </main>
    </>
  );
}

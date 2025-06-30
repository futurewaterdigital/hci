import React from "react";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import Banner from "@/components/Common/Banner";
import H1 from "@/components/ui/h1";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import BookButton from "@/components/cardiacComponents/BookButton";
import CausesKnowMore from "@/components/ui/CausesKnowMore";
import KnowMore from "@/components/ui/KnowMore";
import IssuesLinks from "@/components/ui/IssuesLinks";

const data = {
  title: "Stomach Cancer",
  description:
    "Stomach cancer, also known as gastric cancer, originates in the lining of the stomach. It is the fifth most common cancer worldwide and the third leading cause of cancer-related deaths. Often developing slowly over many years, stomach cancer can be difficult to detect in its early stages due to vague or mild symptoms. Early diagnosis significantly improves treatment outcomes and survival rates.",

  causes: [
    {
      heading: "Causes",
      description:
        "Stomach cancer is caused by changes in the stomach lining that lead to uncontrolled cell growth. Key risk factors include:",
      items: [
        {
          title: "",
          description:
            "Infection with Helicobacter pylori bacteria",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "",
          description:
            "Chronic gastritis or inflammation of the stomach",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "",
          description:
            "Smoking and excessive alcohol consumption",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "",
          description:
            "A diet high in salty, smoked, or pickled foods",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "",
          description:
            "A family history of stomach cancer",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "",
          description:
            "Certain genetic conditions such as Lynch syndrome",
          className: "bg-hciYellow p-4 rounded-lg",
        },
        {
          title: "",
          description:
            "Pernicious anaemia and stomach polyps",
          className: "bg-hciYellow p-4 rounded-lg",
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: "Symptoms",
      description:
        "In the early stages, stomach cancer may not cause noticeable symptoms. As the disease progresses, common signs may include:",
      items: [
        {
          title:
            "Persistent indigestion or heartburn",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light ",
        },
        {
          title: "Abdominal discomfort or bloating after eating",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light",
        },
        {
          title: "Loss of appetite or feeling full quickly",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light",
        },
        {
          title: "Nausea and vomiting",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light",
        },
        {
          title: "Unintended weight loss",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light",
        },
        {
          title: "Fatigue and weakness",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light",
        },
        {
          title: "Vomiting blood or black, tarry stools (a sign of internal bleeding)",
          className: "bg-hciPrimary text-white p-2 rounded mb-2 font-light",
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: "Diagnosis",
      description:
        "Accurate diagnosis of stomach cancer involves several steps and tests:",
      items: [
        {
          title: "",
          description:
            "Physical examination and review of symptoms",
          className: "bg-hciSecondary text-white p-2 rounded mb-2",
        },
        {
          title: "Endoscopy:",
          description:
            "A flexible tube with a camera is inserted into the stomach to visualise the tumour",
          className: "bg-hciSecondary text-white p-2 rounded mb-2",
        },
        {
          title: "Biopsy:",
          description:
            "A tissue sample is taken during endoscopy for laboratory analysis",
          className: "bg-hciSecondary text-white p-2 rounded mb-2",
        },
        {
          title: "Imaging tests:",
          description:
            "CT scans, PET scans, and X-rays help determine the spread of cancer",
          className: "bg-hciSecondary text-white p-2 rounded mb-2",
        },
        {
          title: "Blood tests:",
          description:
            "To check for anaemia or tumour markers",
          className: "bg-hciSecondary text-white p-2 rounded mb-2",
        },
        {
          title: "Staging laparoscopy:",
          description:
            "A minimally invasive procedure to assess cancer spread",
          className: "bg-hciSecondary text-white p-2 rounded mb-2",
        },
      ],
    },
  ],

  treatments: [
    {
      heading: "Treatment for Stomach Cancer",
      description:
        "The treatment plan for stomach cancer depends on its stage, location, patient’s overall health, and preferences. A multidisciplinary approach involving surgery, chemotherapy, radiation therapy, and targeted treatments is often used.",
      items: [
        {
          title: "Surgery",
          description: [
            "Surgery is the primary treatment for early-stage stomach cancer.",
          ],
          description2: [
            "Subtotal (Partial) Gastrectomy: Removal of the cancerous part of the stomach along with nearby lymph nodes.",
            "Total Gastrectomy: Removal of the entire stomach, often necessary for cancers near the oesophagus. The oesophagus is then connected directly to the small intestine.",
            "Minimally Invasive Surgery: Laparoscopic techniques may be used in selected cases for faster recovery.",
          ]
        },

      ],
      items2: [
        {
          title: "Chemotherapy",
          description: [
            "Chemotherapy involves the use of drugs to kill cancer cells. It may be given:",
          ],
          description2: [
            "Before surgery (neoadjuvant) to shrink tumours",
            "After surgery (adjuvant) to destroy remaining cancer cells",
            "In advanced cases to relieve symptoms and improve survival",
          ]
        },

      ],
      items3: [
        {
          title: "Radiation Therapy",
          description: [
            "Radiation uses high-energy rays to target and kill cancer cells.",
          ],
          description2: [
            "Often used in combination with chemotherapy, especially in locally advanced cancers",
            "May be used post-surgery to prevent recurrence",
            "Side effects include skin irritation, stomach upset, and fatigue. The types of radiation therapy performed for stomach cancer are as follows.",
          ]
        },

      ],
      itemsRadiation: [
        {
          title: "1. External Beam Radiation Therapy (EBRT)",
          description: [
            "This is the most common type of radiation for stomach cancer:"
          ],
          points: [
            "High-energy X-rays are directed at the tumour from outside the body.",
            "It is usually administered over several sessions across a few weeks.",
            "Image-guided techniques are used to minimise exposure to healthy tissues.",
          ],
          note: "Common side effects include fatigue, nausea, vomiting, and irritation of the stomach lining, but these can often be managed with supportive care."
        },
        {
          title: "2. CyberKnife (Robotic Radiosurgery)",
          description: [
            "CyberKnife is a non-invasive, highly precise form of stereotactic body radiation therapy (SBRT):"
          ],
          points: [
            "It delivers focused beams of radiation to the tumour from multiple angles using a robotic arm.",
            "This precision minimises damage to surrounding healthy organs such as the liver, pancreas, and intestines.",
            "CyberKnife is especially useful for treating small, well-defined tumours and for patients who are not candidates for surgery.",
            "It is typically completed in 1–5 sessions and is painless with minimal downtime.",
          ],
          note: "Speak to your clinical team to know your suitability for CyberKnife."
        },
        {
          title: "3. Proton Beam Therapy",
          description: [
            "Proton beam therapy uses positively charged particles (protons) instead of traditional X-rays to target tumors.",
          ],
          points: [
            "Protons can be controlled to release most of their energy directly at the tumour site, reducing radiation exposure to nearby healthy tissues.",
            "This is particularly advantageous in stomach cancer, where precision is crucial due to the close proximity of vital organs like the liver, kidneys, and spinal cord.",
            "It is suitable for selected cases where conventional radiation may pose higher risk."
          ],
          note: "Consult your oncologist to evaluate if Proton Beam Therapy is appropriate for your case."
        }
      ],

      items4: [
        {
          title: "Immunotherapy",
          description: [
            "Immunotherapy stimulates the body’s immune system to fight cancer cells.",
          ],
          description2: [
            "Checkpoint inhibitors like pembrolizumab may be used for certain advanced stomach cancers with high microsatellite instability (MSI-H) or PD-L1 expression",
            "Usually given when other treatments have failed or are not an option",
            "Side effects can include immune-related inflammation of healthy tissues",
          ]
        },

      ],
      items5: [
        {
          title: "Palliative Care",
          description: [
            "In advanced stages, when cure is not possible, palliative treatment focuses on relieving symptoms and improving quality of life",
          ],
          description2: [
            "This may involve managing pain, bleeding, or obstruction",
            "Usually given when other treatments have failed or are not an option",
            "Endoscopic stents, feeding tubes, or medications are often used",
          ]
        },

      ],


    },
  ],

  advantages: [
    {
      heading: "Advantages of Proton Therapy and CyberKnife",
      items: [
        {
          title: "No Incision",
          description:
            "These non-invasive treatments eliminate the need for surgical procedures.",
        },
        {
          title: "No Blood Loss",
          description:
            "With no surgery involved, there is no risk of blood loss.",
        },
        {
          title: "No Pain",
          description:
            "Both treatments are painless, offering comfort to patients during therapy.",
        },
        {
          title: "No Admission",
          description: "These therapies are usually outpatient procedures.",
        },
      ],
    },
  ],

  conclusion: [
    {
      header: "Conclusion",
      paragraph:
        "Stomach cancer is a serious condition that often progresses silently, making awareness and early diagnosis vital. Treatment options vary depending on the stage and biology of the cancer, and may involve surgery, chemotherapy, radiation, targeted drugs, or immunotherapy. Early intervention significantly improves outcomes. Anyone experiencing persistent digestive symptoms should consult a specialist promptly for evaluation and timely management.",
    },
  ],

  links: [
    {
      text: "To Consult With The Best Doctor For Treatment Of Prostate Cancer, Click Here",
      url: "/best-doctor-prostate-cancer-treatment",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In India, Click Here",
      url: "/best-prostate-cancer-hospital-india",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In Bangalore, Click Here",
      url: "/best-prostate-cancer-hospital-bangalore",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In Chennai, Click Here",
      url: "/best-prostate-cancer-hospital-chennai",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In Delhi, Click Here",
      url: "/best-prostate-cancer-hospital-delhi",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In Hyderabad, Click Here",
      url: "/best-prostate-cancer-hospital-hyderabad",
    },
    {
      text: "For The Best Hospital For The Treatment Of Prostate Cancer In Mumbai, Click Here",
      url: "/best-prostate-cancer-hospital-mumbai",
    },
  ],
};

function ProstateCancer() {
  return (
    <>
      <Banner image="/oncology/stomach-cancer-banner.png" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <H1 title={data.title} />
        <div className="mt-6">
          <p className="text-gray-600 text-start text-lg font-light">
            {data.description}
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Causes */}
        <div className="mt-12">
          <H2
            title={data.causes[0].heading}
            className="text-2xl font-medium mb-4"
          />
          <p className="text-gray-600 mb-6 font-light">
            {data.causes[0].description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.causes[0].items.map((cause, idx) => (
              <div key={idx} className={cause.className}>
                <h2 className="font-medium text-black text-md">
                  {cause.title}
                </h2>
                <p className="font-light">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-start">
          <CausesKnowMore title="Stomach Cancer" />

        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Symptoms */}
          <div>
            <H2
              title={data.symptoms[0].heading}
              className="text-2xl font-medium mb-4"
            />
            <p className="text-gray-600 mb-6 font-light">
              {data.symptoms[0].description}
            </p>
            <div className="space-y-2">
              {data.symptoms[0].items.map((symptom, idx) => (
                <div key={idx} className={symptom.className}>
                  {symptom.title}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <KnowMore title="Stomach Cancer" />
            </div>
          </div>

          {/* Diagnosis */}
          <div>
            <H2
              title={data.diagnosis[0].heading}
              className="text-2xl font-medium mb-4"
            />
            <p className="text-gray-600 mb-6 font-light md:min-h-12">
              {data.diagnosis[0].description}
            </p>
            <div className="space-y-2">
              {data.diagnosis[0].items.map((test, idx) => (
                <div key={idx} className={test.className}>
                  <strong>{test.title}</strong> {test.description}
                </div>
              ))}
            </div>

            <div className="mt-8 mb-10 text-center">
              <IssuesLinks head="Stomach Cancer" />
            </div>
          </div>
        </div>


        {/* Treatments */}
        <H2
          title={data.treatments[0].heading}
          className="text-2xl font-medium mb-4"
        />
        <p className="text-gray-600 mb-6 font-light">
          {data.treatments[0].description}
        </p>
        <div className="border border-hciSecondary rounded-lg p-6 space-y-6 mb-5">
          {data.treatments[0].items.map((treatment, idx) => (
            <div key={idx} className="space-y-4">
              <H3
                title={treatment.title}
                className="text-lg font-medium text-hciPrimary"
              />
              <p className="font-light ">{treatment.description}</p>
              {/* Description2 (bullet points: before `:` in hciSecondary, after `:` in black) */}
              {Array.isArray(treatment.description2) && (
                <ul className="list-disc pl-5 space-y-2">
                  {treatment.description2.map((desc2, i) => {
                    const [boldText, ...rest] = desc2.split(":");
                    const restText = rest.join(":").trim();

                    return (
                      <li key={i} className="font-light text-black marker:text-hciSecondary">
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-hciSecondary font-medium">{boldText}:</strong>{" "}
                            <span className="text-black">{restText}</span>
                          </>
                        ) : (
                          <span className="text-hciSecondary">{desc2}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>

              )}
            </div>
          ))}
        </div>

        {/* Item 2 - Chemotherapy */}
        <div className="border border-hciSecondary rounded-lg p-6 space-y-6 mb-5">
          {data.treatments[0].items2.map((treatment, idx) => (
            <div key={`item2-${idx}`} className="space-y-4">
              <H3
                title={treatment.title}
                className="text-lg font-medium text-hciPrimary"
              />
              <p className="font-light ">{treatment.description}</p>
              {Array.isArray(treatment.description2) && (
                <ul className="list-disc pl-5 space-y-2 marker:text-hciSecondary">
                  {treatment.description2.map((desc2, i) => {
                    const [boldText, ...rest] = desc2.split(":");
                    const restText = rest.join(":").trim();

                    return (
                      <li key={i} className="text-black font-light">
                        {rest.length > 0 ? (
                          <span>{restText}</span>
                        ) : (
                          <span>{desc2}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>

              )}
            </div>
          ))}
        </div>

        {/* Item 3 - Proton Beam Therapy */}
        <div className="border border-hciSecondary rounded-lg p-6 space-y-6 mb-5">
          {data.treatments[0].items3.map((treatment, idx) => (
            <div key={`item2-${idx}`} className="space-y-4">
              <H3
                title={treatment.title}
                className="text-lg font-medium text-hciPrimary"
              />
              <p className="font-light ">{treatment.description}</p>
              {Array.isArray(treatment.description2) && (
                <ul className="list-disc pl-5 space-y-2 marker:text-hciSecondary">
                  {treatment.description2.map((desc2, i) => {
                    const [boldText, ...rest] = desc2.split(":");
                    const restText = rest.join(":").trim();

                    return (
                      <li key={i} className="text-black font-light">
                        {rest.length > 0 ? (
                          <span>{restText}</span>
                        ) : (
                          <span>{desc2}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>

              )}
            </div>
          ))}
          {data.treatments[0].itemsRadiation.map((item, idx) => (
            <div key={idx} className="space-y-4">
              {/* Title */}
              <h3 className="font-semibold text-[#E6399B]">{item.title}</h3>

              {/* Description paragraphs */}
              {item.description.map((desc, i) => (
                <p key={i} className="text-black font-light">{desc}</p>
              ))}

              {/* Bullet points */}
              <ul className="list-disc pl-5 space-y-2 marker:text-hciSecondary">
                {item.points.map((point, i) => (
                  <li key={i} className="text-black font-light">{point}</li>
                ))}
              </ul>

              {/* Note or emphasis */}
              {item.note && (
                <p className="text-black font-light">{item.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Item 4 - Immunotherapy */}
        <div className="border border-hciSecondary rounded-lg p-6 space-y-6 mb-5">
          {data.treatments[0].items4.map((treatment, idx) => (
            <div key={`item2-${idx}`} className="space-y-4">
              <H3
                title={treatment.title}
                className="text-lg font-medium text-hciPrimary"
              />
              <p className="font-light ">{treatment.description}</p>
              {Array.isArray(treatment.description2) && (
                <ul className="list-disc pl-5 space-y-2 marker:text-hciSecondary">
                  {treatment.description2.map((desc2, i) => {
                    const [boldText, ...rest] = desc2.split(":");
                    const restText = rest.join(":").trim();

                    return (
                      <li key={i} className="text-black font-light">
                        {rest.length > 0 ? (
                          <span>{restText}</span>
                        ) : (
                          <span>{desc2}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>

              )}
            </div>
          ))}
        </div>

        {/* Item 4 - Palliative Care */}
        <div className="border border-hciSecondary rounded-lg p-6 space-y-6 mb-5">
          {data.treatments[0].items5.map((treatment, idx) => (
            <div key={`item2-${idx}`} className="space-y-4">
              <H3
                title={treatment.title}
                className="text-lg font-medium text-hciPrimary"
              />
              <p className="font-light ">{treatment.description}</p>
              {Array.isArray(treatment.description2) && (
                <ul className="list-disc pl-5 space-y-2 marker:text-hciSecondary">
                  {treatment.description2.map((desc2, i) => {
                    const [boldText, ...rest] = desc2.split(":");
                    const restText = rest.join(":").trim();

                    return (
                      <li key={i} className="text-black font-light">
                        {rest.length > 0 ? (
                          <span>{restText}</span>
                        ) : (
                          <span>{desc2}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>

              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <KnowMore title="Stomach Cancer" />
        </div>






        {/* Advantages */}
        {/* <div className="mt-12">
          <H2
            title={data.advantages[0].heading}
            className="text-2xl font-medium mb-6"
          />
          <div className="border border-pink-200 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.advantages[0].items.map((advantage, idx) => (
              <div key={idx} className="bg-pink-50 p-4 rounded-lg">
                <H3
                  title={advantage.title}
                  className="font-medium text-hciSecondary mb-2"
                />
                <p className="text-gray-600 font-light">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Conclusion */}
        <div className="mt-12">
          <Conclusion data={data.conclusion} />
          <FooterLinks head={data.title} />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default ProstateCancer;

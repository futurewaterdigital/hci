import React from 'react'
import Banner from '@/components/Common/Banner'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import H1 from '@/components/ui/h1'
import IssuesLinks from '@/components/ui/IssuesLinks'

const data = {
  title: "Benign peripheral nerve tumour",
  bannerImage: "/neuro-sciences/benign-peripheral-nerve-tumour.png",
  description: `Your peripheral nerves connect your brain and spinal cord to other parts of your body, allowing you to perform various functions such as walking, blinking, swallowing, and gripping objects. Tumours may occasionally develop on these nerves, though the precise cause is often unknown, with some linked to genetic conditions. Most peripheral nerve tumours are benign (non-cancerous), but they can still cause nerve damage and loss of muscle control. It’s essential to consult a healthcare professional if you experience unusual lumps, pain, tingling, numbness, or muscle weakness.`,
  overview: ``,

  section_1: [
    {
      title: "1. Schwannoma:",
      description:
        "The most prevalent benign nerve tumour in adults, these arise from Schwann cells, which surround nerve fibres. Schwannomas usually grow slowly and may go unnoticed for years. When they occur in the arms or legs, they may present as a lump. Rarely, they may form unusual shapes, such as dumbbell-shaped tumours within the spine or pelvis.",
    },
    {
      title: "2. Neurofibroma:",
      description:
        "These tumours typically form at the centre of a nerve, potentially involving multiple nerve bundles. While neurofibromas generally cause mild symptoms, they are often seen in individuals with NF1, a genetic disorder that leads to multiple tumours forming on nerves.",
    },
    {
      title: "3. Perineurioma:",
      description:
        "A rare tumour that arises from perineurial cells, these can form within or near nerves. Intraneural perineuriomas primarily affect children and young adults, causing gradual weakness and sensory loss in the affected limb.",
    },
    {
      title: "4. Lipoma:",
      description:
        "These are slow-growing lumps made of fat cells, commonly occurring under the skin on the neck, shoulders, back, or arms. When near a nerve, they may compress it, but usually, lipomas are painless and do not cause other symptoms.",
    },
    {
      title: "5. Ganglion Cyst:",
      description:
        "Often forming near joints, such as the wrist, ganglion cysts may press on nerves, causing discomfort or limiting movement. These cysts sometimes disappear without treatment, but those that cause significant symptoms may require removal.",
    },
  ],

  complications: [
    {
      heading: 'Observation:',
      aneurysmSymptoms: [
        {
          description:
            'In cases where the tumour is small and asymptomatic, regular monitoring may be recommended to track its growth and any emerging symptoms.',
        },
      ],
    },
   
    {
      heading: 'Surgical Removal:',
      aneurysmSymptoms: [
        {
          description:
            'If the tumour is pressing on nerves or causing discomfort, surgical excision may be necessary. This approach is often successful for schwannomas, neurofibromas, and other benign tumours, but careful precision is required to avoid nerve damage.',
        },
      ],
    },
   
    {
      heading: 'External Beam Radiation Therapy (EBRT):',
      aneurysmSymptoms: [
        {
          description:
            'This is a conventional form of radiation therapy where multiple sessions are administered over a few weeks. EBRT directs radiation at the tumour from outside the body and is generally used for larger or more difficult-to-reach tumours.',
        },
      ],
    },
    {
      heading: "Stereotactic Radiosurgery (SRS):",
      aneurysmSymptoms: [
        {
          description:
            "This is a highly targeted form of radiation therapy that delivers precise, high-dose radiation to the tumour while sparing surrounding healthy tissue. SRS is often used for tumours in delicate areas such as the brain or spinal cord, including vestibular schwannomas (acoustic neuromas).",
        },
      ],
    },
    {
      heading: "Proton Beam Therapy:",
      aneurysmSymptoms: [
        {
          description:
            "Proton therapy is a newer form of radiation that uses protons instead of X-rays to treat the tumour. It allows for more precise targeting, which is especially beneficial when treating tumours near critical nerves and structures, reducing the risk of damage to surrounding tissues.",
        },
      ],
    },
    {
      heading: "Physiotherapy:",
      aneurysmSymptoms: [
        {
          description:
            "Following surgery or radiation therapy, rehabilitation may help restore muscle function and relieve pain or discomfort caused by nerve damage.",
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
      Benign peripheral nerve tumours, while non-cancerous, can still impact nerve function and lead to symptoms that may affect quality of life. Early detection and intervention, through careful diagnosis and a tailored treatment plan, can help manage these tumours effectively and minimize complications. Regular monitoring and seeking timely medical advice are crucial in ensuring optimal outcomes.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description: "Swelling or a noticeable lump beneath the skin",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Pain or discomfort at the site of the tumour",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Tingling or numbness in the affected area",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Muscle weakness or loss of function",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "Magnetic Resonance Imaging (MRI):",
      description:
        "This imaging technique provides detailed views of the nerves and surrounding tissues, helping to identify tumours.",
      bgColor: "bg-hciSecondary text-white",
    },
   
    {
      category: "Computed Tomography (CT) Scan:",
      description:
        "A CT scan may be used to assess the size and location of a tumour.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Biopsy:",
      description:
        "In some cases, a sample of the tumour tissue may be taken for analysis to confirm its benign nature.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <H1 title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />
        
        <p className="font-light" text="">
          The exact cause of benign peripheral nerve tumours is often unclear,
          but some cases are associated with genetic conditions, such as
          neurofibromatosis type 1 (NF1) and neurofibromatosis type 2 (NF2).
          These inherited conditions increase the likelihood of developing nerve
          tumours.
        </p>
        <KnowMore title={data.title} />
        <H2 title="Types" className="font-medium mb-4 text-center text-2xl" />
        <p className="font-light" text="">
          Peripheral nerve tumours can grow within the nerves (intra-neural
          tumours) or press on them from outside (extra-neural tumours). The
          following are common types of benign peripheral nerve tumours:
        </p>
        {/* <DataSurgery data={data.section_1} /> */}
        <div className="grid grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[150px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>
        {/* <p>
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p>
        <KnowMore title={data.title} /> */}
        <div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                text="A benign peripheral nerve tumour can lead to symptoms if it presses on the affected nerve or nearby tissues. Tumour growth may increase the likelihood of symptoms, though even small tumours can cause discomfort. Symptoms depend on the tumour's size, location, and the structures it affects and may include:"
                textCss="font-light py-4"
                titleCss="text-black font-medium text-center text-2xl py-4"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div className='space-y-6'>
              <DataBoxes
                title="Diagnosis"
                text="Diagnosis of benign peripheral nerve tumours involves a comprehensive evaluation, including a physical examination, medical history, and imaging tests. Common diagnostic procedures include:"
                header=""
                textCss="font-light py-4"
                titleCss="text-black font-medium text-center text-2xl py-4"
                data={data.diagnosis}
                myclass="grid grid-cols-2"
              />
              <IssuesLinks head={data.title} />
            </div>
          </div>
        </div>
        <div>
         
          <H2 title="Treatment" className="font-medium mb-4 text-center text-2xl" />

          <p className="font-light">
            Treatment for benign peripheral nerve tumours depends on factors
            such as the type, size, location, and whether the tumour causes
            symptoms. Options include:
          </p>
          <DataLists
            // desc="If the fracture is unstable or involves displaced bone fragments, surgery is typically required:"
            data={data.complications}
          />
        </div>
        {/* <div className="space-y-4">
          <H2 title="When to Consider Robotic Knee Replacement?" />
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
            <div className="grid grid-cols-2 gap-4">
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

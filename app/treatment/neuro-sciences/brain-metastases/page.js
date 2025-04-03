import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
// import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'

const data = {
  title: 'Brain Metastases',
  bannerImage: '/neuro-sciences/brain-metastases.png',
  description: `Brain metastases occurs when cancer cells migrate from their primary site to the brain. While any cancer has the potential to spread to the brain, the most common culprits include lung, breast, colon, kidney cancers, and melanoma. These metastatic brain tumours may appear as a single growth or multiple tumours, and as they expand, they place pressure on surrounding brain tissue, potentially impairing its function. This pressure can lead to symptoms such as headaches, personality changes, memory loss, and seizures.`,
  overview: `Treatments for brain metastases often involve a combination of surgery, radiotherapy, chemotherapy, immunotherapy, or other specialized interventions aimed at reducing pain and alleviating symptoms caused by the cancer.`,

  section_1: [
    {
      title: 'Neurological Examination:',
      description: `
A doctor will conduct a thorough examination of the patient&apos;s nervous system, testing vision, hearing, reflexes, balance, coordination, strength, and memory. This helps identify the areas of the brain that may be affected by metastases.`,
    },
    {
      title: 'Imaging Studies:',
      description: `
     ⦁   Magnetic Resonance Imaging (MRI): Provides detailed images of the brain to detect abnormalities.
     ⦁   Computed Tomography (CT) Scan: A CT scan may be used if an MRI is not available or as an additional tool. It can detect tumours, bleeding, and swelling in the brain.
     ⦁   Positron Emission Tomography (PET) Scan: A PET scan helps identify areas of increased metabolic activity, which may indicate tumour growth.`,
    },
    {
      title: 'Biopsy:',
      description: `
In cases where the origin of the tumour is unclear, a biopsy may be performed. This involves removing a small tissue sample for microscopic examination. It can be done via a craniotomy or stereotactic needle biopsy.`,
    },
    {
      title: 'Lumbar Puncture (Spinal Tap):',
      description: `
In some cases, a spinal tap may be performed to collect cerebrospinal fluid (CSF) for analysis. This can help determine whether cancer cells have spread to the brain's lining or the spinal cord.`,
    },
  ],

  complications: [
    {
      heading: 'Surgery:',
      description: `Surgery is often recommended for patients with a limited number of brain metastases, particularly if they are causing significant symptoms or if the primary cancer is well-controlled. Surgery is used to`,
      aneurysmSymptoms: [
        {
          description: 'Remove the tumour',
        },
        {
          description: 'Relieve pressure on the brain',
        },
        {
          description: 'Obtain tissue for biopsy',
        },
        {
          description:
            'Post-Surgical Care: Surgery may be followed by radiation therapy to prevent recurrence.',
        },
      ],
    },

    {
      heading: 'Radiation Therapy:',
      description: `In addition to stereotactic radiation therapy (SRT), other forms of radiation are commonly used`,
      aneurysmSymptoms: [
        {
          description:
            'Whole-brain Radiation Therapy (WBRT): Used when there are multiple metastases, WBRT treats the entire brain to target tumours that may not be visible on imaging.',
        },
        {
          description: `Gamma Knife Radiosurgery: A type of precise radiation therapy that delivers high-dose radiation to small, specific areas of the brain, causing minimal damage to surrounding healthy tissue.`,
        },
      ],
    },
    {
      heading: 'Chemotherapy:',
      aneurysmSymptoms: [
        {
          description:
            'Traditional chemotherapy is less effective for brain metastases compared to other cancers because many chemotherapy drugs have difficulty crossing the blood-brain barrier. However, certain chemotherapy agents may still be used depending on the type of cancer. Newer chemotherapy options may include targeted drugs designed to penetrate the blood-brain barrier.',
        },
      ],
    },
    {
      heading: 'Immunotherapy:',
      aneurysmSymptoms: [
        {
          description:
            'Immunotherapy drugs boost the body&apos;s immune system to help fight cancer. These treatments are especially useful for cancers like melanoma and lung cancer that have metastasised to the brain. Immune checkpoint inhibitors and CAR T-cell therapies are examples of immunotherapy used in brain metastases treatment.',
        },
      ],
    },
    {
      heading: 'Targeted Therapy:',
      aneurysmSymptoms: [
        {
          description:
            'Targeted therapies use drugs to specifically attack cancer cells based on their genetic makeup. This treatment is more effective for certain types of cancer, such as HER2-positive breast cancer and non-small cell lung cancer, that have metastasised to the brain.',
        },
      ],
    },
    {
      heading: 'Stereotactic Radiation Therapy (SRT):',
      aneurysmSymptoms: [
        {
          description:
            'This treatment involves directing numerous beams of radiation at the tumour cells. While each individual beam is relatively weak, the point where they converge receives a powerful dose of radiation, effectively targeting and killing the cancer cells.',
        },
      ],
    },
    {
      heading: 'Steroid Therapy:',
      aneurysmSymptoms: [
        {
          description:
            'Steroids, such as dexamethasone, may be prescribed to reduce brain swelling and alleviate symptoms like headaches and neurological deficits.',
        },
      ],
    },
    {
      heading: 'Symptom Management:',
      aneurysmSymptoms: [
        {
          description:
            'Alongside cancer treatment, symptom management is a crucial part of caring for patients with brain metastases. Anticonvulsants may be used to prevent seizures, and pain relief medications help control headaches and discomfort.',
        },
      ],
    },
    {
      heading: 'Palliative Care:',
      aneurysmSymptoms: [
        {
          description:
            'Palliative care focuses on improving the quality of life for patients with advanced cancer, managing pain and other symptoms, and providing emotional and psychological support for both patients and their families.',
        },
      ],
    },
  ],

  contact: {
    title: 'Contact Us Today',
    head: 'Contact HCI for Expert Urological Care',
    content:
      'Take the first step towards better urological health. Reach out to HCI today to schedule a consultation with one of our skilled urologists and begin your path to recovery and better quality of life.',
  },

  conclusion: [
    {
      header: 'Conclusion',
      paragraph: `
      Brain metastases pose a significant challenge in cancer management, requiring timely diagnosis and a comprehensive treatment approach. Recognising symptoms early is vital for effective intervention, and management often includes surgery, radiation therapy, chemotherapy, immunotherapy, and targeted treatments. This multidisciplinary strategy not only aims to control metastatic tumours but also to alleviate symptoms and improve patients’ quality of life. With ongoing advancements in medical science, personalized treatment options continue to emerge, offering hope for better outcomes and holistic care for those affected by brain metastases.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description: 'Swelling or a noticeable lump beneath the skin',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: 'Pain or discomfort at the site of the tumour',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: 'Tingling or numbness in the affected area',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: 'Muscle weakness or loss of function',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: 'Magnetic Resonance Imaging (MRI):',
      description:
        'This imaging technique provides detailed views of the nerves and surrounding tissues, helping to identify tumours.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Computed Tomography (CT) Scan:',
      description:
        'This imaging technique provides detailed views of the nerves and surrounding tissues, helping to identify tumours.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Computed Tomography (CT) Scan:',
      description:
        'A CT scan may be used to assess the size and location of a tumour.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Biopsy:',
      description:
        'In some cases, a sample of the tumour tissue may be taken for analysis to confirm its benign nature.',
      bgColor: 'bg-hciSecondary text-white',
    },
  ],
}

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <Title title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2
          title="Symptoms"
          className="font-semibold mb-4 text-center"
        />
        <p className="font-light" text="">
          The signs and symptoms of brain metastases are largely dependent on
          the location, size, and growth rate of the tumours. Common symptoms
          include:
        </p>
        <ul className="list-disc list-inside">
          <li>Persistent headaches, often accompanied by nausea or vomiting</li>
          <li>Cognitive changes, such as memory issues or confusion</li>
          <li>Seizures</li>
          <li>Weakness or numbness on one side of the body</li>
        </ul>
        <H2
          title="When to Seek Medical Attention"
          className="font-semibold mb-4 text-center"
        />
        <p className="font-light" text="">
          If you experience persistent symptoms that concern you, it&apos;s
          essential to see a doctor. This is especially important if you&apos;ve
          previously been treated for cancer, as your medical history may help
          with diagnosis and treatment.
        </p>
        <KnowMore title={data.title} />
        <H2 title="Causes" className="font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          Brain metastases occurs when cancer cells detach from their original
          site and spread through the bloodstream or lymphatic system to the
          brain, where they begin to grow. The type of metastatic cancer is
          always referred to by the original location. For instance, cancer that
          spreads from the breast to the brain is termed metastatic breast
          cancer, not brain cancer.
        </p>
        <KnowMore title={data.title} />
        <H2
          title="Risk Factors"
          className="font-semibold mb-4 text-center"
        />
        <p className="font-light" text="">
          Any form of cancer has the potential to metastasise to the brain, but
          the following cancers are more likely to cause brain metastases:
        </p>
        <ul className="list-disc list-inside ml-2 text-hciSecondary">
          <li><span className=" text-black">Lung cancer</span></li>
          <li><span className=" text-black">Kidney cancer</span></li>
          <li><span className=" text-black">Melanoma</span></li>
          <li><span className=" text-black">Breast cancer</span></li>
          <li><span className=" text-black">Colon cancer</span></li>
        </ul>
        {/* <DataSurgery data={data.section_1} /> */}
        <H2
          title="Diagnosis of Brain Metastases"
          className="font-semibold mb-4 text-center"
        />
        <p className="font-light" text="">
          Diagnosing brain metastases typically involves a series of tests and
          imaging studies to confirm the presence and extent of cancer spread.
          Common diagnostic approaches include
        </p>
        <div className="grid grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[130px] w-full bg-hciSecondary text-white hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>
        {/* <p>
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p>
        <KnowMore title={data.title} /> */}
        {/* <div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="A benign peripheral nerve tumour can lead to symptoms if it presses on the affected nerve or nearby tissues. Tumour growth may increase the likelihood of symptoms, though even small tumours can cause discomfort. Symptoms depend on the tumour's size, location, and the structures it affects and may include:"
                titleCss="text-black font-semibold text-center"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-1"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                text="Diagnosis of benign peripheral nerve tumours involves a comprehensive evaluation, including a physical examination, medical history, and imaging tests. Common diagnostic procedures include:"
                header=""
                titleCss="text-black font-semibold text-center"
                data={data.diagnosis}
                myclass="grid grid-cols-1"
              />
              
            </div>
          </div>
        </div> */}
        <div>
          <H2
            title="Treatment"
            className="font-semibold mb-4 text-center"
          />
          <p className="font-light">
            In addition to the primary treatment methods previously mentioned,
            there are several advanced therapies used to manage brain metastases
          </p>
          <DataLists
            // desc="If the fracture is unstable or involves displaced bone fragments, surgery is typically required:"
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
  )
}

export default GeneralSurgery

import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
// import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/cardiacComponents/H2'
// import KnowMore from '@/components/cardiacComponents/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
// import TextComponent from '@/components/Common/TextComponent'
import Link from 'next/link'

const data = {
  title: 'Lung Cancer',
  bannerImage: '/oncology/lung-cancer.png',
  description: `Lung cancer is one of the most serious health concerns in India, significantly contributing to cancer-related mortality. Although often associated with smoking, this cancer can also develop in non-smokers due to various predispositions. Early detection and a comprehensive treatment approach are crucial to positively influence the those affected.`,
  overview:
    'Several factors contribute to the development of lung cancer, with smoking being the leading cause. However, environmental exposure can also be an issue to other environmental and genetic factors.',

  causes: [
    {
      title: 'Smoking',
      description:
        'Tobacco use is responsible for about 80% of lung cancer deaths. The longer someone smokes and the more cigarettes smoked per day, the higher the risk of lung cancer.',
    },
    {
      title: 'Exposure to Carcinogens',
      description:
        'Harmful substances like asbestos, radon gas, and chemicals in the workplace can pose a risk for lung cancer when someone is exposed for extended periods.',
    },
    {
      title: 'Air Pollution',
      description:
        'Long-term exposure to high levels of pollution, particularly diesel exhaust, can contribute to the development of lung cancer.',
    },
    {
      title: 'Family History',
      description:
        "Having a close relative with lung cancer may increase risk. However, it's unclear whether this is due to genetics or shared environmental factors.",
    },
    {
      title: 'Previous Radiation Therapy',
      description:
        "Individuals who have undergone radiation therapy for other cancers, like breast or Hodgkin's disease, may be at increased risk.",
    },
    {
      title: 'Genetic Mutations',
      description:
        'Some people may develop lung cancer due to genetic mutations. These mutations may be inherited or may develop over time.',
    },
  ],

  symptoms: [
    {
      category: 'Persistent Cough',
      description:
        'A cough that linger or worsens over time, especially with blood or mucus production.',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Chest Pain',
      description:
        'Discomfort in the chest, particularly when breathing deeply, laughing, or coughing.',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Shortness of Breath',
      description:
        'Difficulty breathing, often due to blocked airways or fluid buildup around the lungs.',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Fatigue',
      description: 'Persistent tiredness or weakness.',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Unexplained Weight Loss',
      description:
        'Significant weight loss without a change in diet or activity level.',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Hoarseness',
      description:
        'A change in voice, often indicating a tumor affecting the voice box.',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Bone Pain',
      description:
        'Pain specifically in the back or hips, indicating that the cancer has spread.',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Recurring Infections',
      description: 'Frequent episodes of pneumonia or bronchitis.',
      bgColor: 'bg-blue-700 text-white',
    },
  ],

  diagnosis: [
    {
      category: 'Imaging Tests',
      description:
        'Used to detect abnormal masses, consisting of CT scans for precise images, staging, and monitoring treatment response.',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'Chest X-ray',
      description: 'Common diagnostic method for detecting abnormalities.',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'CT Scan',
      description: 'Detailed imaging of the lungs and surrounding structures.',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'PET Scan',
      description:
        'Used to detect cancerous cells by highlighting areas of increased metabolic activity.',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'Sputum Cytology',
      description: 'Analysis of lung secretions to check for cancerous cells.',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'Biopsy',
      description:
        'Tissue samples taken for evaluation, either through a transbronchial or needle biopsy.',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'Molecular Testing',
      description:
        'Advanced genetic analysis (e.g., EGFR, ALK) to guide targeted therapies.',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'Pulmonary Function Tests',
      description:
        "Assessing lung function to determine a patient's ability to withstand treatments like surgery.",
      bgColor: 'bg-pink-600 text-white',
    },
  ],

  treatments: [
    {
      heading: 'Surgery',
      description: 'Removes the cancer-containing area of the lung',
      aneurysmSymptoms: [
        { description: 'Wedge resection: Removal of part of a lobe' },
        {
          description:
            'Lobectomy: Complete lobe removal, typically suitable for larger or more aggressive tumors',
        },
        { description: 'Pneumonectomy: Entire lung removal in severe cases' },
      ],
    },
    {
      heading: 'Chemotherapy',
      description:
        'Chemotherapy is used to kill or shrink cancer cells, and can be given before and after surgery to improve the chances for success as well as minimize treatment for the patient',
      aneurysmSymptoms: [
        { description: 'May be administered through IV or oral medications' },
        { description: 'Often given in cycles with rest periods between' },
        { description: 'Can be used alongside other treatments' },
      ],
    },
    {
      heading: 'Targeted Therapy',
      description:
        'Drugs specifically target specific genetic mutations in tumor cells (such as EGFR, ALK, or ROS1), effectively controlling cancer growth with fewer side effects compared to traditional chemotherapy',
      aneurysmSymptoms: [
        {
          description:
            'Requires genetic testing to identify suitable candidates',
        },
        { description: 'Often used for advanced or metastatic cases' },
        { description: 'May be effective when other treatments have failed' },
      ],
    },
    {
      heading: 'Radiation Therapy',
      description:
        'Radiation therapy is a local treatment for lung cancer, particularly for patients unable to undergo surgery or for palliative purposes. High-energy beams target cancer cells, killing or damaging them',
      aneurysmSymptoms: [
        {
          description:
            'External beam radiation: Directed from outside the body',
        },
        {
          description:
            'Stereotactic body radiotherapy (SBRT): Precise high-dose radiation',
        },
        { description: 'Brachytherapy: Internal radiation source placement' },
      ],
    },
    {
      heading: 'Proton Therapy',
      description:
        'An advanced form of radiation that precisely targets cancerous cells while minimizing damage to nearby healthy tissues, such as the heart or esophagus. It allows for higher radiation doses, improving the chance of tumor control while reducing potential side effects',
      aneurysmSymptoms: [
        {
          description:
            'Particularly beneficial for tumors near critical organs',
        },
        {
          description:
            'Reduces radiation exposure to surrounding healthy tissue',
        },
        { description: 'May result in fewer short and long-term side effects' },
      ],
    },
    {
      heading: 'CyberKnife Treatment',
      description:
        'CyberKnife is a robotic system that delivers highly targeted radiation to lung tumors with extreme precision. It tracks the tumor in real-time, adjusting for patient breathing and movement, allowing treatment with minimal impact to surrounding healthy tissue',
      aneurysmSymptoms: [
        {
          description:
            'Non-invasive alternative to surgery for certain patients',
        },
        { description: 'Typically completed in 1-5 sessions' },
        {
          description: 'Particularly effective for small, well-defined tumors',
        },
      ],
    },
    {
      heading: 'Immunotherapy',
      description:
        "This treatment helps the body's own immune system recognize and fight cancer cells. It's often used in combination with other treatments and may be particularly effective for certain forms of lung cancer",
      aneurysmSymptoms: [
        { description: 'Checkpoint inhibitors (e.g., PD-1/PD-L1 inhibitors)' },
        { description: 'May be effective for advanced cases' },
        {
          description:
            'Often produces longer-lasting responses than some other treatments',
        },
      ],
    },
    {
      heading: 'Palliative Care',
      description:
        'For advanced lung cancer, palliative care focuses on relieving symptoms and improving quality of life. This can include pain management, breathing assistance, and emotional support',
      aneurysmSymptoms: [
        { description: 'Can be provided alongside curative treatments' },
        { description: 'Focuses on quality of life and symptom management' },
        {
          description:
            'May include counseling and support for patients and families',
        },
      ],
    },
  ],

  conclusion: [
    {
      header: 'Conclusion',
      paragraph: `Lung cancer is a serious disease, but advancements in surgery, chemotherapy, targeted therapy, and immunotherapy have made treatment outcomes better than in the past. Smoking cessation is the most effective lung cancer prevention strategy. For those already diagnosed, early identification and regular monitoring can ensure timely intervention to manage the disease effectively.`,
    },
  ],

  best_hospitals: [
    { city: 'India', url: '/best-lung-cancer-hospital-india' },
    { city: 'Bangalore', url: '/best-lung-cancer-hospital-bangalore' },
    { city: 'Chennai', url: '/best-lung-cancer-hospital-chennai' },
    { city: 'Delhi', url: '/best-lung-cancer-hospital-delhi' },
    { city: 'Hyderabad', url: '/best-lung-cancer-hospital-hyderabad' },
    { city: 'Mumbai', url: '/best-lung-cancer-hospital-mumbai' },
  ],
}

function LungCancer() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
        <Title title={data.title} />
        <H2 text={data.description} textClass="text-start font-light" />
        <p className="font-light">{data.overview}</p>

        <H2
          text="Causes of Lung Cancer"
          textClass="text-2xl font-semibold mb-4 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {data.causes.map((cause, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {cause.title}
              </h3>
              <p className="text-gray-700 text-sm">{cause.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <Link
            href="/treatment/oncology/lung-cancer-info"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            To Know More About Lung Cancer And Its Treatment, Click Here
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <H2
              text="Symptoms of Lung Cancer"
              textClass="text-xl font-semibold mb-4 text-center"
            />
            <p className="mb-4 font-light">
              In its early stages, lung cancer may not cause symptoms. As the
              disease progresses, symptoms might include:
            </p>
            <div className="space-y-2">
              <DataBoxes
                title=""
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-1 gap-2"
              />
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/treatment/oncology/lung-cancer-causes"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                To Know More About Lung Cancer And Its Causes And Treatment,
                Click Here
              </Link>
            </div>
          </div>
          <div>
            <H2
              text="Diagnosis of Lung Cancer"
              textClass="text-xl font-semibold mb-4 text-center"
            />
            <div className="space-y-2">
              <DataBoxes
                title=""
                header=""
                data={data.diagnosis}
                myclass="grid grid-cols-1 gap-2"
              />
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/treatment/oncology/lung-cancer-diagnosis"
                className="inline-block px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors text-sm"
              >
                To Get The Best Diagnosis For Lung Cancer And Related Issues,
                Click Here
              </Link>
            </div>
          </div>
        </div>

        <H2
          text="Treatment for Lung Cancer"
          textClass="text-2xl font-semibold mb-4 text-center"
        />
        <p className="font-light mb-4">
          Lung cancer treatment is varialized based on the cancer type, stage,
          and the patient&apos;s overall health. The most common treatments
          include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {data.treatments.slice(0, 3).map((treatment, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {treatment.heading}
              </h3>
              <p className="text-gray-700 mb-2 text-sm">
                {treatment.description}
              </p>
              <ul className="text-xs text-gray-600 list-disc pl-5">
                {treatment.aneurysmSymptoms.map((symptom, idx) => (
                  <li key={idx}>{symptom.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {data.treatments.slice(3, 5).map((treatment, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {treatment.heading}
              </h3>
              <p className="text-gray-700 mb-2 text-sm">
                {treatment.description}
              </p>
              <ul className="text-xs text-gray-600 list-disc pl-5">
                {treatment.aneurysmSymptoms.map((symptom, idx) => (
                  <li key={idx}>{symptom.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {data.treatments.slice(5, 8).map((treatment, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {treatment.heading}
              </h3>
              <p className="text-gray-700 mb-2 text-sm">
                {treatment.description}
              </p>
              <ul className="text-xs text-gray-600 list-disc pl-5">
                {treatment.aneurysmSymptoms.map((symptom, idx) => (
                  <li key={idx}>{symptom.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Conclusion data={data.conclusion} />

        <H2
          text="To Consult With The Best Doctor For Treatment Of Lung Cancer, Click Here"
          textClass="text-xl font-semibold mb-4 text-center text-blue-600"
        />

        <div className="space-y-2 mb-8">
          {data.best_hospitals.map((hospital, index) => (
            <div
              key={index}
              className="text-center py-2 border-b border-blue-100 last:border-0"
            >
              <Link
                href={hospital.url}
                className="text-blue-500 hover:text-blue-700"
              >
                For The Best Hospital For The Treatment Of Lung Cancer In{' '}
                {hospital.city}, Click Here
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <Link
            href="/book-appointment"
            className="inline-block px-8 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors font-semibold"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>

        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default LungCancer

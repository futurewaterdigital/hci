import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import Link from 'next/link'
import H3 from '@/components/ui/h3'

const data = {
  title: 'Hematology',
  bannerImage: '/oncology/hematology-banner.png',
  description: `Hematological disorders encompasses a range of conditions affecting the blood, bone marrow, and lymphatic system, disrupting critical functions such as oxygen transport, clotting, and immune defense. These disorders typically fall into three categories: anemia, bleeding disorders, and hematological cancers. As one of the cardinal types of hematological disorders in given below:`,
  overview: '',

  types: {
    anemias: [
      {
        title: 'Iron Deficiency Anemia',
        description:
          'Most common type of anemia, occurs due to insufficient iron in the hemoglobin, leading to fatigue and weakness.',
      },
      {
        title: 'Aplastic Anemia',
        description: 'Bone marrow failure to produce sufficient blood cells.',
      },
      {
        title: 'Megaloblastic Anemia',
        description:
          'A condition caused by vitamin B12 or folate deficiency, resulting in the formation of abnormally large, immature red blood cells.',
      },
      {
        title: 'Chronic Anemia',
        description:
          'The blood anemia associated with underlying chronic diseases.',
      },
      {
        title: 'Sickle Cell Anemia',
        description:
          'Results from a lack of iron, impairing hemoglobin production.',
      },
      {
        title: 'Sickle Cell Anemia',
        description:
          'A genetic disorder causing abnormal, crescent-shaped RBCs that block blood flow.',
      },
    ],

    bleeding: [
      {
        title: 'Disseminated Intravascular Coagulation (DIC)',
        description:
          'A serious condition causing improper clotting and bleeding throughout the body.',
      },
      {
        title: 'Hemophilia',
        description:
          'A genetic disorder where blood does not properly clot, often with recurring bleeds.',
      },
    ],

    cancers: [
      {
        title: 'Acute Myeloid Leukemia (AML)',
        description:
          'A rapidly progressing cancer of the bone marrow and blood.',
      },
      {
        title: 'Chronic Lymphocytic Leukemia (CLL)',
        description: 'A slow-growing cancer affecting lymphocytes.',
      },
      {
        title: 'Chronic Myelogenous Leukemia (CML)',
        description:
          'A type of cancer affecting white blood cells, with gradual onset symptoms.',
      },
      {
        title: 'Burkitt Lymphoma',
        description:
          'A fast-growing non-Hodgkin lymphoma, often associated with viral infections.',
      },
      {
        title: 'Multiple Myeloma',
        description: `A cancer of plasma cells, impairing the bone marrow's ability to produce healthy blood cells.`,
      },
    ],
  },

  causes: [
    {
      category: 'Genetic mutations',
      description: '(can be both inherited and developed)',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Nutritional deficiencies',
      description: '(iron, folic acid)',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Infections and autoimmune responses',
      description: '(i.e., autoimmune anemia)',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Exposure to toxins or chemotherapy',
      description: '(aplastic anemia)',
      bgColor: 'bg-blue-700 text-white',
    },
    {
      category: 'Chronic diseases',
      description: '(causing chronic anemia)',
      bgColor: 'bg-blue-700 text-white',
    },
  ],

  diagnosis: [
    {
      category: 'Blood tests',
      description:
        'Complete blood count (CBC), hemoglobin levels, and clotting factors',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'Bone marrow biopsy',
      description: 'For cancer detection and aplastic anemia',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'Genetic tests',
      description:
        'Identifying hereditary conditions (i.e., sickle cell anemia)',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'Imaging studies',
      description: 'CT/MRI scans for suspected lymphoma',
      bgColor: 'bg-pink-600 text-white',
    },
    {
      category: 'Flow cytometry',
      description: 'Analyzing cell types and detecting leukemia or cancer',
      bgColor: 'bg-pink-600 text-white',
    },
  ],

  treatments: [
    {
      heading: 'Medications',
      description: 'Iron supplements for iron deficiency anemia',
      aneurysmSymptoms: [
        {
          description:
            'Erythropoietin agents for chronic kidney disease anemia',
        },
        {
          description:
            'Anticoagulants or clotting factors for bleeding disorders',
        },
      ],
    },
    {
      heading: 'Chemotherapy and Radiation',
      description: 'Used for leukemia, lymphoma, and multiple myeloma',
      aneurysmSymptoms: [
        { description: 'Various protocols based on cancer type and stage' },
        { description: 'May be used before bone marrow transplant' },
      ],
    },
    {
      heading: 'Blood Transfusions',
      description: 'For severe anemia or blood loss',
      aneurysmSymptoms: [
        { description: 'Red blood cell transfusions for severe anemia' },
        { description: 'Platelet transfusions for bleeding disorders' },
      ],
    },
    {
      heading: 'Targeted Therapy & Immunotherapy',
      description:
        'Advanced treatments targeting specific cancer characteristics (e.g., CLL)',
      aneurysmSymptoms: [
        {
          description: 'Monoclonal antibodies to target specific cancer cells',
        },
        { description: 'Immune checkpoint inhibitors' },
      ],
    },
    {
      heading: 'Bone Marrow Transplants',
      description: 'A curative option for leukemia and aplastic anemia',
      aneurysmSymptoms: [
        {
          description:
            "Allogeneic (from donor) or autologous (patient's own cells)",
        },
        { description: 'Requires conditioning therapy before transplant' },
      ],
    },
    {
      heading: 'CAR-T Cell Therapy',
      description:
        'Chimeric antigen receptor (CAR) T-cell therapy is a cancer treatment that uses genetically modified T cells',
      aneurysmSymptoms: [
        {
          description:
            'Currently approved for certain types of leukemias and lymphomas',
        },
        {
          description: "Personalized approach using patient's own immune cells",
        },
      ],
    },
  ],

  conclusion: [
    {
      header: 'Conclusion',
      paragraph: `Hematological disorders require precise diagnosis and individualized treatment plans to manage symptoms and improve quality of life. From nutritional management to advanced therapies, treatment options have expanded significantly in recent years, providing patients with complex conditions effectively. Early detection is critical in the success of treatment, especially for hematological cancers.`,
    },
  ],

  best_hospitals: [
    { city: 'India', url: '/best-hematology-hospital-india' },
    { city: 'Bangalore', url: '/best-hematology-hospital-bangalore' },
    { city: 'Chennai', url: '/best-hematology-hospital-chennai' },
    { city: 'Delhi', url: '/best-hematology-hospital-delhi' },
    { city: 'Hyderabad', url: '/best-hematology-hospital-hyderabad' },
    { city: 'Mumbai', url: '/best-hematology-hospital-mumbai' },
  ],
}

function Hematology() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
        <Title title={data.title} />
        <H2 title={data.description} className="text-start font-light" />

        <H2
          title="Types of Hematological Disorders"
          className="text-2xl font-semibold mb-4 text-center"
        />

        <div className="mb-8 relative">
          <div className="hidden md:block absolute right-0 top-0 w-1/3 h-full">
            <img
              src="/oncology/blood-cell.png"
              alt="Blood cell"
              className="object-contain h-full w-full"
            />
          </div>

          <div className="md:w-2/3 space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <H3 title="Anemias" className="text-xl font-semibold text-blue-600 mb-3"/>
              <div className="space-y-2">
                {data.types.anemias.map((anemia, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-2 last:border-0"
                  >
                    <span className="font-medium text-blue-700">
                      {anemia.title}
                    </span>
                    : {anemia.description}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <H3 title="Bleeding Disorders" className="text-xl font-semibold text-red-600 mb-3"/>
              <div className="space-y-2">
                {data.types.bleeding.map((disorder, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-2 last:border-0"
                  >
                    <span className="font-medium text-red-700">
                      {disorder.title}
                    </span>
                    : {disorder.description}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <H3 title="Hematological Cancers" className="text-xl font-semibold text-purple-600 mb-3"/>
              <div className="space-y-2">
                {data.types.cancers.map((cancer, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-2 last:border-0"
                  >
                    <span className="font-medium text-purple-700">
                      {cancer.title}
                    </span>
                    : {cancer.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <Link
            href="/treatment/hematology/disorders"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            To Know More About Hematological Disorders And Their Causes And
            Treatment, Click Here
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <H2
              title="Causes"
              className="text-xl font-semibold mb-4 text-center"
            />
            <div className="space-y-2">
              <DataBoxes
                title=""
                header=""
                data={data.causes}
                myclass="grid grid-cols-1 gap-2"
              />
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/treatment/hematology/treatment"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                To Know More About Hematological Disorders And Treatment, Click
                Here
              </Link>
            </div>
          </div>

          <div>
            <H2
              title="Diagnosis"
              className="text-xl font-semibold mb-4 text-center"
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
                href="/treatment/hematology/diagnosis"
                className="inline-block px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors text-sm"
              >
                To Get The Best Diagnosis For Hematological Disorders And
                Related Issues, Click Here
              </Link>
            </div>
          </div>
        </div>

        <H2
          title="Treatment"
          className="text-2xl font-semibold mb-4 text-center"
        />
        <p className="font-light mb-4">
          Treatment for blood cancer depends on its origin, type, and individual
          patient needs. It often involves a combination of therapies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <H3 title="Medications" className="text-lg font-semibold text-blue-600 mb-2"/>
            <p className="text-gray-700 mb-2 font-light">
              Iron supplements for iron deficiency anemia
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Erythropoietin agents for chronic kidney disease anemia</li>
              <li>Anticoagulants or clotting factors for bleeding disorders</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <H3 title="Chemotherapy and Radiation" className="text-lg font-semibold text-blue-600 mb-2"/>   
            <p className="text-gray-700 mb-2 font-light">
              Used for leukemia, lymphoma, and multiple myeloma
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Various protocols based on cancer type and stage</li>
              <li>May be used before bone marrow transplant</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <H3 title="Blood Transfusions" className="text-lg font-semibold text-blue-600 mb-2"/>
            <p className="text-gray-700 mb-2 font-light">
              For severe anemia or blood loss
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Red blood cell transfusions for severe anemia</li>
              <li>Platelet transfusions for bleeding disorders</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <H3 title="Targeted Therapy & Immunotherapy" className="text-lg font-semibold text-blue-600 mb-2"/>
            <p className="text-gray-700 mb-2 font-light">
              Advanced treatments targeting specific cancer characteristics
              (e.g., CLL)
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Monoclonal antibodies to target specific cancer cells</li>
              <li>Immune checkpoint inhibitors</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <H3 title="Bone Marrow Transplants" className="text-lg font-semibold text-blue-600 mb-2"/>
            <p className="text-gray-700 mb-2 font-light">
              A curative option for leukemia and aplastic anemia
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>
                Allogeneic (from donor) or autologous (patient&apos;s own cells)
              </li>
              <li>Requires conditioning therapy before transplant</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <H3 title="CAR-T Cell Therapy" className="text-lg font-semibold text-blue-600 mb-2"/>
            <p className="text-gray-700 mb-2 font-light">
              Chimeric antigen receptor (CAR) T-cell therapy is a cancer
              treatment that uses genetically modified T cells
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>
                Currently approved for certain types of leukemias and lymphomas
              </li>
              <li>
                Personalized approach using patient&apos;s own immune cells
              </li>
            </ul>
          </div>
        </div>

        <Conclusion data={data.conclusion} />

        <H2
          title="To Consult With The Best Doctor For Treatment Of Hematological Disorders, Click Here"
          className="text-xl font-semibold mb-4 text-center text-blue-600"
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
                For The Best Hospital For The Treatment Of Hematological
                Disorders In {hospital.city}, Click Here
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

export default Hematology

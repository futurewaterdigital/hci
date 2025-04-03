import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import H3 from '@/components/ui/h3'


const data = {
  title: 'Advanced and Recurrent Cancers',
  bannerImage: '/oncology/advanced-recurrent-cancers.png',
  description: `HCI is a pioneering healthcare provider that offers world-class health solutions for advanced and recurrent cancers. With access to cutting-edge diagnostic techniques and innovative treatments, we are at the forefront of fighting these challenging conditions. Our team of highly experienced oncologists specializes in managing complex cases where standard protocols may have failed or disease has progressed.`,
  overview:
    'The causes and challenges faced for such cancers vary greatly and the following factors are commonly observed:',

  early_symptoms: [
    { description: 'Localized Symptoms' },
    { description: 'Pain' },
    { description: 'Fatigue, Weight Loss and Weakness' },
    { description: 'Abnormal Bleeding' },
  ],

  common_cancers: [
    {
      title: 'Breast Cancer',
      description:
        'The most common cancer among women, locally advanced or metastatic breast cancer (MBC) requires a multi-disciplinary approach. HER2-positive, ER/PR-negative breast cancer (TNBC), hormone-positive and other subtypes each demand specialized approaches.',
    },
    {
      title: 'Advanced and Recurrent Colorectal',
      description:
        'Advanced colorectal cancer often spreads to the liver or lungs requiring approach to target specific mutations including KRAS, NRAS and BRAF. We utilize innovative surgical and radiation techniques for optimal outcomes.',
    },
    {
      title: 'Ovarian Cancer',
      description:
        'Commonly discovered through screening and considered one of the most challenging to treat due to recurrence and chemotherapy resistance. Our approach combines cytoreductive surgery with targeted therapy for platinum-resistant cases.',
    },
    {
      title: 'Lung and Head Cancers',
      description:
        'Often detected in later stages with poor prognosis, we conduct extensive molecular testing for EGFR, ALK, ROS1 and PD-L1 to determine targeted and immunotherapy approaches for personalized treatment.',
    },
  ],

  india_cancer_stats: [
    {
      title: 'Breast Cancer',
      description:
        'The most common cancer in India with highest incidence rate among women. Triple-negative breast cancer (TNBC) has higher prevalence in Indian population than global averages.',
    },
    {
      title: 'Oral Cancer',
      description:
        'India has highest oral cancer rates due to tobacco use (smoking and chewing), with 60% detected in advanced stages with poor prognosis.',
    },
    {
      title: 'Recurrent Colorectal Cancer',
      description:
        'Rising incidence in urban populations with up to 30-40% recurrence rates despite successful initial treatment, often requiring multimodal approaches.',
    },
  ],

  symptoms_factors: [
    {
      heading: 'Tumor Characteristics',
      description: 'Aggressive tumor biology with rapid cellular division',
      aneurysmSymptoms: [
        { description: 'High-grade histology' },
        { description: 'Rapid growth rate' },
        { description: 'Extensive local invasion' },
      ],
    },
    {
      heading: 'Treatment Resistance',
      description:
        'Cancer cells that develop mechanisms to evade standard treatments',
      aneurysmSymptoms: [
        { description: 'Drug resistance mutations' },
        { description: 'Adaptive cellular mechanisms' },
        { description: 'Multiple pathway activation' },
      ],
    },
    {
      heading: 'Late Stage Diagnosis',
      description:
        'Detection after cancer has already metastasized to other organs',
      aneurysmSymptoms: [
        { description: 'Multiple organ involvement' },
        { description: 'Complex symptom management' },
        { description: 'Limited treatment options' },
      ],
    },
    {
      heading: 'Genetic Factors',
      description:
        'Inherited gene mutations that predispose to aggressive cancer forms',
      aneurysmSymptoms: [
        { description: 'BRCA mutations' },
        { description: 'Lynch syndrome' },
        { description: 'P53 mutations' },
      ],
    },
  ],

  treatment_options: [
    {
      heading: 'Chemotherapy and Radiation',
      description:
        'Strategic use of cytotoxic drugs to destroy cancer cells or shrink tumors before surgery',
      aneurysmSymptoms: [
        {
          description:
            'Combination chemotherapy protocols targeting specific cancer pathways',
        },
        { description: 'Dose-dense regimens for aggressive recurrent cases' },
        {
          description:
            'Integration with radiation therapy for localized tumors',
        },
        { description: 'Hypofractionated protocols for patient convenience' },
      ],
    },
    {
      heading: 'Targeted Therapy and Immunotherapy',
      description:
        'Precisely targets specific molecules involved in cancer growth or stimulates immune system to fight cancer',
      aneurysmSymptoms: [
        {
          description:
            'Monoclonal antibodies that target specific cellular receptors',
        },
        {
          description:
            'Checkpoint inhibitors that unleash immune response against cancer cells',
        },
        {
          description:
            'Small molecule inhibitors that block specific growth pathways',
        },
        {
          description:
            'CAR-T cell therapies for eligible hematological malignancies',
        },
      ],
    },
    {
      heading: 'Palliative Care',
      description:
        'Focuses on providing relief from symptoms and improving quality of life',
      aneurysmSymptoms: [
        {
          description:
            'Advanced pain management protocols tailored to individual needs',
        },
        {
          description:
            'Nutritional support to counter cachexia and maintain strength',
        },
        { description: 'Psychological support for patients and caregivers' },
        {
          description:
            'Integration with curative approaches for better outcomes',
        },
      ],
    },
  ],

  surgical_approaches: [
    {
      heading: 'Salvage Surgery',
      description: 'Surgical intervention after failure of primary therapy',
      aneurysmSymptoms: [
        {
          description:
            'Used for isolated recurrences that can be surgically addressed',
        },
        { description: 'Often combined with intraoperative radiation therapy' },
      ],
    },
    {
      heading: 'Cytoreductive Surgery',
      description: 'Removal of as much tumor burden as possible',
      aneurysmSymptoms: [
        { description: 'Particularly beneficial in peritoneal carcinomatosis' },
        {
          description:
            'May be combined with HIPEC (Hyperthermic Intraperitoneal Chemotherapy)',
        },
      ],
    },
    {
      heading: 'Minimally Invasive Techniques',
      description: 'Laparoscopic and robotic approaches for suitable cases',
      aneurysmSymptoms: [
        {
          description:
            'Faster recovery and reduced postoperative complications',
        },
        { description: 'Enhanced precision in difficult anatomical locations' },
      ],
    },
  ],

  barriers: [
    {
      heading: 'Awareness',
      description: 'Low awareness about cancer symptoms and treatment options',
      aneurysmSymptoms: [
        {
          description:
            'Delays in seeking medical attention leading to advanced presentations',
        },
        {
          description:
            'Limited understanding of long-term follow-up importance',
        },
      ],
    },
    {
      heading: 'Access to Healthcare',
      description: 'Uneven distribution of cancer centers across India',
      aneurysmSymptoms: [
        { description: 'Concentration of specialized centers in major cities' },
        {
          description:
            'Transportation and accommodation challenges for rural patients',
        },
      ],
    },
    {
      heading: 'Financial Considerations',
      description: 'High cost of advanced cancer treatments',
      aneurysmSymptoms: [
        { description: 'Limited insurance coverage for novel therapies' },
        {
          description:
            'Catastrophic health expenditure affecting treatment completion',
        },
      ],
    },
    {
      heading: 'Cultural and Social Factors',
      description: 'Stigma and cultural beliefs affecting treatment decisions',
      aneurysmSymptoms: [
        {
          description:
            'Preference for alternative medicines delaying conventional treatment',
        },
        { description: 'Fatalistic attitudes toward cancer diagnosis' },
      ],
    },
  ],

  risk_factors: [
    {
      category: '',
      description:
        'Inadequate treatment of the primary cancer leading to residual cancer cells',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Genetic mutations causing resistance to standard treatment protocols',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Advanced stage at initial diagnosis increasing likelihood of microscopic spread',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnostics: [
    {
      heading: 'Advanced Imaging',
      description: 'High-resolution scanning technologies',
      aneurysmSymptoms: [
        { description: 'PET-CT for metabolic activity assessment' },
        {
          description:
            'MRI with contrast enhancement for soft tissue evaluation',
        },
        { description: 'Whole-body imaging for metastasis detection' },
      ],
    },
    {
      heading: 'Molecular Diagnostics',
      description: 'Genetic and biomarker analysis',
      aneurysmSymptoms: [
        {
          description:
            'Next-generation sequencing for comprehensive genomic profiling',
        },
        { description: 'Liquid biopsies to detect circulating tumor DNA' },
        {
          description:
            'Expression profiling for personalized treatment selection',
        },
      ],
    },
    {
      heading: 'Tissue Sampling',
      description: 'Obtaining specimens for analysis',
      aneurysmSymptoms: [
        { description: 'Image-guided biopsies for difficult-to-access tumors' },
        { description: 'Endoscopic ultrasound-guided fine needle aspiration' },
        { description: 'Sentinel node evaluation for recurrent disease' },
      ],
    },
  ],

  best_hospitals: [
    { city: 'Delhi', url: '/best-cancer-hospital-delhi' },
    { city: 'Mumbai', url: '/best-cancer-hospital-mumbai' },
    { city: 'Bangalore', url: '/best-cancer-hospital-bangalore' },
    { city: 'Chennai', url: '/best-cancer-hospital-chennai' },
    { city: 'Hyderabad', url: '/best-cancer-hospital-hyderabad' },
    { city: 'Pune', url: '/best-cancer-hospital-pune' },
  ],

  conclusion: [
    {
      header: 'Conclusion',
      paragraph: `The management of advanced and recurrent cancers is highly complex and requires a multidisciplinary approach. With significant advancements in molecular diagnostics, targeted therapies, and immunotherapy, many patients now have improved outcomes and quality of life. At HCI, our comprehensive approach combines cutting-edge treatments with personalized care to address each patient's unique needs. We remain committed to advancing cancer care through research, innovation, and dedicated clinical excellence to give our patients the best possible chance for recovery.`,
    },
  ],
}

function AdvancedRecurrentCancers() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
        <Title title={data.title} />
        <H2 title={data.description} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>

        <H2 title="Factors Contributing to Advanced Cancer" className="font-semibold mb-4 text-center" />
        <DataLists
          divClass="grid grid-cols-1 md:grid-cols-2 gap-6"
          data={data.symptoms_factors}
          ulClass="list-disc pl-5 space-y-1"
        />

        <H2 title="Treatment Approaches" className="font-semibold mb-4 text-center" />
        <DataLists
          divClass="grid grid-cols-1 md:grid-cols-3 gap-6"
          data={data.treatment_options}
          ulClass="list-disc pl-5 space-y-1"
        />

        <H2 title="Surgical Options" className="font-semibold mb-4 text-center" />
        <DataLists
          divClass="grid grid-cols-1 md:grid-cols-3 gap-6"
          data={data.surgical_approaches}
          ulClass="list-disc pl-5 space-y-1"
        />

        <H2 title="Treatment Barriers" className="font-semibold mb-4 text-center" />
        <DataLists
          divClass="grid grid-cols-1 md:grid-cols-2 gap-6"
          data={data.barriers}
          ulClass="list-disc pl-5 space-y-1"
        />

        <H2 title="Best Diagnostics for Advanced and Recurrent Cancer And Related Issues, Click Here" className="font-semibold mb-4 text-center" />
        <div className="mb-8">
          <DataLists
            divClass="grid grid-cols-1 gap-4"
            data={data.diagnostics}
            ulClass="list-none"
          />
        </div>

        <H2 title="Recurrent Cancers in India" className="font-semibold mb-4 text-center" />
        <p className="font-light mb-6">
          A recurrent cancer occurs when cancer returns after a period of
          treatment and remission. This is often more challenging to treat and
          may require different approaches than the initial treatment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {data.india_cancer_stats.map((stat, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
                <H3 title={stat.title} className="text-lg font-semibold text-hciPrimary mb-2"/>
              <p className="text-gray-700">{stat.description}</p>
            </div>
          ))}
        </div>

        <H2 title="Common Risk Factors for Recurrence" className="font-semibold mb-4 text-center" />
        <div className="mb-8">
          <DataBoxes
            title=""
            header=""
            data={data.risk_factors}
            myclass="grid grid-cols-1"
          />
        </div>

        <H2 title="Treatment of Recurrent Cancers in India includes all the modalities of the Treatment such as:" className="font-semibold mb-4 text-start" />

        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.symptoms_factors.map((item, index) => (
              <TextComponent
                key={index}
                title={item.title}
                description={item.description}
                boxCss="w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center min-h-[120px]"
              />
            ))}
          </div>
        </div>

        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default AdvancedRecurrentCancers

// generalSurgery.js
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
import IssuesLinks from "@/components/ui/IssuesLinks"


const data = {
  title: 'Sports Injuries',
  bannerImage: '/orthopaedics/sports-injuries.png',
  description: `Sports injuries refer to a wide range of injuries that occur during physical activity, whether in organized sports, exercise, or recreational activities. These injuries can affect athletes of all ages and skill levels, leading to pain, reduced mobility, and sometimes long-term complications. In India and globally, sports injuries are a significant concern, prompting the need for effective prevention, diagnosis, and treatment strategies.`,
  overview: ``,

  causes: [
    {
      title: 'Overuse',
      description:
        'Repetitive strain on muscles, tendons, and joints from excessive training or inadequate recovery can lead to injuries such as tendonitis or stress fractures.',
    },
    {
      title: 'Trauma',
      description:
        'Sudden impact or falls can result in acute injuries like fractures, sprains, and concussions.',
    },
    {
      title: 'Poor Technique',
      description:
        'Improper form or technique during physical activities can increase the risk of injury.',
    },
    {
      title: 'Inadequate Conditioning',
      description:
        'Lack of proper strength and flexibility training can make athletes more susceptible to injuries.',
    },
    {
      title: 'Environmental Factors',
      description:
        'Playing surfaces, weather conditions, and equipment can also contribute to injury risk.',
    },
  ],

  complications: [
    {
      heading: '',
      aneurysmSymptoms: [
        {
          description:
            'Rest and Ice:Immediate rest and application of ice to reduce swelling and alleviate pain.',
        },
        {
          description:
            'Compression and Elevation:Using compression bandages and elevating the injured area to minimize swelling.',
        },
        {
          description:
            'Physical Therapy:Tailored rehabilitation programmes to strengthen muscles, improve flexibility, and facilitate recovery.',
        },
        {
          description:
            'Medications:Over-the-counter pain relievers and anti-inflammatory drugs to manage pain and swelling.',
        },
      ],
    },

    {
      heading: 'Surgical Interventions:',
      aneurysmSymptoms: [
        {
          description:
            'Arthroscopy: Minimally invasive surgery used to diagnose and treat joint injuries, such as cartilage tears.',
        },
        {
          description:
            'Reconstructive Surgery: Procedures to repair torn ligaments or tendons, ensuring stability and function in the joint.',
        },
        {
          description:
            'Fracture Repair: Surgical intervention to realign and stabilise fractured bones.',
        },
      ],
    },
    {
      heading: 'Preventive Measures:',
      aneurysmSymptoms: [
        {
          description:
            'Education: Instruction on proper techniques and training methods to reduce injury risk.',
        },
        {
          description:
            'Strength and Conditioning: Tailored training programmes to improve overall fitness, flexibility, and strength.',
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
 Sports injuries can significantly impact an athlete's performance and quality of life. Early diagnosis and appropriate treatment are crucial for effective management and a successful return to physical activity. With advancements in medical technology, rehabilitation strategies, and injury prevention programmes, many athletes can recover from sports injuries and continue to participate in their chosen activities. Ongoing education about injury prevention and proper training techniques is essential for minimizing risks and promoting long-term athletic health.
          `,
    },
  ],
  DataSurgery: {
    headingTitle: 'Recovery and Rehabilitation',
    description:
      'Post-surgery recovery from robotic knee replacement tends to be quicker and smoother compared to traditional surgery. Key aspects include:',
    DataLists: [
      {
        title: 'Early Mobilization',
        description:
          'Walking with assistance within a day or two post-surgery.',
      },
      {
        title: 'Physical Therapy',
        description: 'Targeted exercises to restore strength and flexibility.',
      },
      {
        title: 'Pain Management',
        description: ' Use of medications to manage post-operative pain.',
      },
      {
        title: 'Follow-Up Visits',
        description:
          'Regular check-ups to monitor recovery and implant performance.',
      },
      {
        title: 'Lifestyle Adjustments',
        description:
          'Advice on resuming activities gradually and avoiding high-impact sports initially.',
      },
    ],
  },

  symptoms: [
    {
      category: 'Pain',
      description:
        'Localized pain at the injury site, which may be sharp or aching.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Swelling and Bruising',
      description: 'Inflammation and discolouration around the affected area.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Limited Range of Motion',
      description:
        'Difficulty moving the injured joint or muscle, often accompanied by stiffness.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Weakness',
      description:
        'Reduced strength in the affected area, making it difficult to perform normal activities.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Instability',
      description:
        'A feeling of looseness or instability in a joint, often seen in ligament injuries.',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: 'Medical History and Physical Examination',
      description: `A detailed assessment of the injury's onset, mechanism, and symptoms, followed by a physical examination to evaluate function and pain levels.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'X-rays',
      description: 'Commonly used to detect fractures or dislocations.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'MRI',
      description:
        'Provides detailed images of soft tissues, helping to identify ligament tears, tendon injuries, or other complex issues.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'CT Scans',
      description:
        'Useful for obtaining cross-sectional images of bones and soft tissues, particularly in complicated cases.',
      bgColor: 'bg-hciSecondary text-white',
    },
  ],
  benefits: [
    {
      title: 'Higher Accuracy',
      description:
        'Precise implant placement reduces the risk of misalignment and complications.',
    },
    {
      title: 'Less Pain and Blood Loss',
      description:
        'Minimally invasive techniques cause less trauma to the surrounding tissues.',
    },
    {
      title: 'Faster Recovery',
      description:
        'Patients often experience reduced hospital stays and quicker return to daily activities.',
    },
    {
      title: 'Longer Implant Lifespan:',
      description:
        'Enhanced precision contributes to improved joint function and durability.',
    },
    {
      title: 'Improved Quality of Life:',
      description:
        'Patients regain mobility, allowing them to resume activities they love.',
    },
  ],
  consideration: [
    {
      title: '',
      description: 'Severe and persistent knee pain limiting daily activities.',
    },
    {
      title: '',
      description:
        'Ineffectiveness of non-surgical treatments such as physiotherapy or medications.',
    },
    {
      title: '',
      description: 'Knee joint deformity or instability affecting mobility.',
    },
    {
      title: '',
      description: 'Chronic inflammation and swelling that does not subside.',
    },
    {
      title: '',
      description:
        'Difficulty walking, climbing stairs, or standing for extended periods.',
    },
  ],
}

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <H1 title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="text-2xl font-medium mb-4 text-center" />
        <p className="font-light" text="">
          Sports injuries can arise from various factors, including:
        </p>
        <div className="grid grid-cols-5 gap-4">
          {data.causes.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[150px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white"
            />
          ))}
        </div>
        <KnowMore title={data.title} />
        <div>
          {/* <h2 className={`text-2xl font-bold text-center text-hciSecondary py-1`}>
          Treatment
        </h2> */}
          {/* <p>Symptoms</p> */}
          <div className="grid lg:grid-cols-1 gap-4">
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                text="Symptoms of sports injuries can vary widely depending on the type and severity of the injury but may include:"
                textCss="font-light py-4"
                titleCss="text-black font-medium text-center text-2xl"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div className='space-y-4'>
              <DataBoxes
                title="Diagnosis"
                text="Diagnosing sports injuries typically involves a comprehensive evaluation, which may include:"
                header=""
                textCss="font-light py-4"
                titleCss="text-black font-medium text-center text-2xl"
                data={data.diagnosis}
                myclass="grid grid-cols-2"
              />
              <IssuesLinks head={data.title} />
            </div>
          </div>
        </div>
        <div>
          <H2
            title="Treatment"
            className="text-2xl font-medium mb-4 text-center"
          />
          <p className="font-light">
            The treatment for sports injuries depends on the specific type and
            severity of the injury. Options may include:
          </p>
          <DataLists data={data.complications} />
        </div>

        {/* <FlexBoxSection data={data.sec_para_3} /> */}
        {/* <CTaButton data={data} /> */}
        <div className="space-y-6 mt-8">
          <Conclusion data={data.conclusion} />
          <FooterLinks head={data.title} />
          <BookButton />
        </div>
      </div>
    </>
  )
}

export default GeneralSurgery

// generalSurgery.js
import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'

const data = {
  title: 'Robotic Knee Replacement Surgery',
  bannerImage: '/orthopaedics/GICancer_Banner.png',
  description: `Designed for individuals suffering from severe knee pain and mobility issues, robotic knee replacement ensures a personalised surgical plan tailored to each patient’s anatomy, helping them regain their active lifestyle with enhanced comfort and functionality.`,
  overview: `Robotic knee replacement surgery is an advanced, minimally invasive procedure that uses robotic-assisted technology to enhance the precision of knee joint replacement. This approach offers improved alignment, faster recovery, and longer-lasting outcomes compared to conventional methods.`,

  causes: [
    {
      title: 'Osteoarthritis',
      description:
        'The most common reason, where cartilage wears down, leading to bone-on-bone friction.',
    },
    {
      title: 'Rheumatoid Arthritis',
      description:
        'An autoimmune condition that causes chronic joint inflammation and pain.',
    },
    {
      title: 'Post-Traumatic Arthritis',
      description: 'Joint degeneration following an injury or fracture.',
    },
    {
      title: 'Meniscal Tears and Ligament Injuries',
      description:
        'Irreparable damage to knee structures requiring surgical intervention.',
    },
    {
      title: 'Avascular Necrosis',
      description:
        'Loss of blood flow to the bone, causing it to collapse and damage the joint.',
    },
  ],

  complications: [
    {
      heading: 'Precision',
      aneurysmSymptoms: [
        {
          description:
            'Accurate alignment of implants to improve joint function and longevity.',
        },
      ],
    },
    {
      heading: 'Personalization',
      aneurysmSymptoms: [
        {
          description:
            'A customised surgical plan based on the patient’s anatomy.',
        },
      ],
    },
    {
      heading: 'Minimally Invasive Approach:',
      aneurysmSymptoms: [
        {
          description:
            'Smaller incisions lead to less tissue damage and faster recovery.',
        },
      ],
    },
    {
      heading: 'Real-Time Feedback:',
      aneurysmSymptoms: [
        {
          description:
            'The surgeon receives instant feedback from the robotic system, ensuring optimal placement of implants.',
        },
      ],
    },
    {
      heading: 'Surgical Procedure',
      aneurysmSymptoms: [
        {
          description:
            'Pre-Surgery Planning: A CT scan or 3D model of the knee joint is created for personalized mapping.',
        },
        {
          description:
            'Incision and Joint Preparation: A small incision is made to access the damaged joint.',
        },
        {
          description:
            'Bone Reshaping and Implant Insertion: The robotic arm assists in reshaping the bone and placing the implant accurately.',
        },
        {
          description:
            'Verification and Adjustment: Real-time data ensures the alignment and placement are correct.',
        },
        {
          description:
            'Closure and Recovery: The incision is closed, and rehabilitation starts shortly after.',
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
      Robotic knee replacement surgery offers a revolutionary approach to treating advanced knee conditions with precision and personalized care. By leveraging cutting-edge technology, patients can enjoy improved mobility, less pain, and long-lasting joint function. If you or a loved one is struggling with chronic knee pain, consider consulting a specialist to explore whether robotic knee replacement surgery is the right choice.
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
      category: 'Chronic Pain',
      description:
        'Persistent pain that limits daily activities and does not respond to conservative treatments.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Joint Stiffness',
      description: 'Difficulty bending or straightening the knee.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Swelling and Inflammation',
      description:
        'Recurring swelling that leads to discomfort and reduced movement.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Mobility Issues',
      description:
        'Inability to walk comfortably or participate in physical activities.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Deformity in the Knee Joint',
      description:
        'Bow-legged or knock-knee appearance due to structural damage.',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: 'Physical Examination',
      description: 'Assessing joint movement, pain, and deformity.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Imaging Tests',
      description:
        'X-rays and MRI scans to determine the extent of cartilage loss and joint damage.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Gait Analysis',
      description:
        'Monitoring walking patterns to evaluate the effect on joint mobility.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Assessment of Previous Treatments',
      description:
        'Determining whether non-surgical methods like physiotherapy or medications have failed to provide relief.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'These evaluations help doctors determine whether robotic knee replacement surgery is the best option.',
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
        <Title title={data.title} />
        <H2 title={data.description} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="text-2xl font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          Knee replacement surgery is typically recommended for patients
          experiencing joint damage caused by:
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
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="Patients suffering from knee conditions requiring robotic surgery often experience:"
                titleCss="text-black font-semibold text-center text-2xl"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-1"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                text="Diagnosis for robotic knee replacement surgery involves a comprehensive evaluation, including:"
                header=""
                titleCss="text-black font-semibold text-center text-2xl"
                data={data.diagnosis}
                myclass="grid grid-cols-1"
              />
              {/* <KnowMore title={title} /> */}
            </div>
          </div>
        </div>
        <div>
          <H2
            title="Treatment"
            className="text-2xl font-semibold mb-4 text-center"
          />
          <p className="text-xl font-semibold mb-4 text-start text-hciPrimary">
            Robotic-Assisted Knee Replacement Surgery
          </p>
          <p className="font-light">
            Robotic knee replacement involves the use of a robotic arm to assist
            the surgeon in replacing the damaged knee joint with an artificial
            implant. The procedure allows for:
          </p>
          <DataLists data={data.complications} />
        </div>
        <H2
          title={data.DataSurgery.headingTitle}
          className="text-2xl font-semibold mb-4 text-center"
        />
        <p
          className="font-light"
          dangerouslySetInnerHTML={{ __html: data.DataSurgery.description }}
        />
        <div>
          {/* First two items */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {data.DataSurgery.DataLists.slice(0, 2).map((item, index) => (
              <TextComponent
                key={index}
                title={item.title}
                description={item.description}
                boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
              />
            ))}
          </div>

          {/* Remaining items */}
          <div className="grid grid-cols-3 gap-4">
            {data.DataSurgery.DataLists.slice(2).map((item, index) => (
              <TextComponent
                key={`remaining-${index}`}
                title={item.title}
                description={item.description}
                boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
              />
            ))}
          </div>
        </div>
        <div className="py-12 space-y-4">
          <h2 className="text-2xl font-semibold text-center text-hciPrimary">
            Benefits of Robotic Knee Replacement
          </h2>
          <div className="flex justify-center items-center gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {data.benefits.slice(0, 4).map((item, index) => (
                  <TextComponent
                    key={`remaining-${index}`}
                    title={item.title}
                    description={item.description}
                    boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                  />
                ))}
              </div>
              <div className="grid grid-cols-1 gap-4">
                {data.benefits.slice(4).map((item, index) => (
                  <TextComponent
                    key={`remaining-${index}`}
                    title={item.title}
                    description={item.description}
                    boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                  />
                ))}
              </div>
            </div>
            <img src="/orthopaedics/joint_1.svg" alt="" />
          </div>
        </div>
        <div className="space-y-4">
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
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.consideration.slice(3, 5).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
          </div>
        </div>
        {/* <FlexBoxSection data={data.sec_para_3} /> */}
        {/* <CTaButton data={data} /> */}
        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default GeneralSurgery

// jointReplacementSurgery.js
import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'

import ListBox from '@/components/cardiacComponents/ListBox'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import KnowMore from '@/components/ui/KnowMore'

const title = 'Joint Replacement Surgery'

const data = {
  bannerImage: '/orthopaedics/joint_Banner.png',
  description:
    'Joint replacement surgery, also known as arthroplasty, is a highly effective procedure designed to relieve pain and restore function in damaged or worn-out joints. It involves replacing parts of a joint with artificial implants made from metal, plastic, or ceramic materials. This surgery is commonly performed on joints such as the hip, knee, shoulder, and elbow. In India, joint replacement surgery has significantly improved the quality of life for individuals suffering from severe joint pain and mobility issues due to conditions like arthritis and trauma.',
  //   overview: `Joint replacement surgery is commonly performed on joints such as the hip, knee, shoulder, and elbow. It involves replacing parts of a joint with artificial implants made from materials like metal, plastic, or ceramic. This surgery is often done in cases of arthritis or trauma where pain and mobility issues severely affect quality of life.`,

  benefits: [
    {
      title: 'Osteoarthritis',
      desc: 'A degenerative joint disease causing the breakdown of cartilage, resulting in pain, stiffness, and loss of joint function.',
    },
    {
      title: 'Rheumatoid Arthritis',
      desc: 'An autoimmune disease that causes inflammation of the joints, leading to pain, swelling, and eventual joint damage.',
    },
    {
      title: 'Trauma',
      desc: 'Severe injuries such as fractures or dislocations, which cause joint damage and may require surgical intervention.',
    },
    {
      title: 'Avascular Necrosis',
      desc: 'A condition where the blood supply to the bone is compromised, leading to the death of bone tissue and joint collapse.',
    },
    {
      title: 'Congenital Conditions',
      desc: 'Some individuals are born with joint deformities that worsen over time, requiring surgical correction.',
    },
  ],

  symptoms: [
    {
      category: 'Chronic Pain',
      description:
        'Persistent, severe joint pain that affects daily activities such as walking, climbing stairs, or even resting.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Stiffness and Limited Mobility',
      description:
        'Difficulty moving the joint, leading to a reduced range of motion and impaired function.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Swelling and Inflammation',
      description:
        'Continuous swelling and inflammation in the joint that do not respond to conservative treatments like medication or physical therapy.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Deformity',
      description:
        'Visible changes in the shape of the joint, such as bowing of the legs or misalignment of the hip or knee.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Reduced Quality of Life',
      description:
        'Difficulty performing everyday tasks and an overall decline in physical activity and independence due to joint pain and dysfunction.',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: 'Medical History and Physical Examination',
      description:
        'The doctor assesses your medical history, symptoms, and the extent of joint damage through a physical examination.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'X-rays',
      description:
        'Provide detailed images of the bone structure, revealing the extent of joint damage or deformity.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'MRI and CT Scans',
      description:
        'Offer more detailed views of the joint, particularly soft tissues like cartilage and ligaments.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Blood Tests',
      description:
        'Used to rule out infections or autoimmune conditions that might be affecting the joints.',
      bgColor: 'bg-hciSecondary text-white',
    },
  ],

  treatment: [
    {
      title: 'Prehabilitation',
      description:
        'Some patients undergo physical therapy before surgery to strengthen muscles and improve flexibility, aiding in recovery.',
    },
    {
      title: 'Surgical Procedure',
      description:
        'Surgical options include Hip Replacement, Knee Replacement, and Shoulder/Elbow Replacement depending on the affected joint.',
    },
    {
      title: 'Types of Implants',
      description:
        'Cemented and Cementless Implants are used depending on the type of procedure and the patient’s bone structure.',
    },
    {
      title: 'Post-Surgical Care',
      description:
        'Physical therapy and pain management are crucial for recovery and ensuring proper joint function after surgery.',
    },
  ],

  complications: [
    {
      heading: 'Preoperative Preparation:',
      aneurysmSymptoms: [
        {
          description:
            'Evaluation: A comprehensive assessment of your overall health, joint condition, and lifestyle to ensure surgery is the best option.',
        },
        {
          description:
            'Prehabilitation: Some patients undergo physical therapy before surgery to strengthen muscles and improve flexibility, aiding in recovery.',
        },
      ],
    },
  ],

  footerData: [
    {
      header: 'Conclusion',
      paragraph: `
      Joint replacement surgery is a transformative procedure that can restore mobility, relieve pain, and enhance the quality of life for individuals suffering from severe joint conditions. Advances in surgical techniques, implant materials, and rehabilitation programs have greatly improved the outcomes of joint replacement surgeries.
      <p>Proper evaluation, timely intervention, and post-surgical care are key to achieving the best results.</p>
      `,
    },
  ],
}

function JointReplacementSurgery() {
  return (
    // <>
    //   <Banner image={data.bannerImage} />
    //   <div className="container mx-auto px-6">
    //     <Title title={title} />
    //     <p className="font-light">{data.description}</p>
    //     <H2
    //       text="Causes Leading to Joint Replacement Surgery"
    //       textClass="text-2xl font-semibold mb-4 text-center"
    //     />
    //     <ListBox data={data} />
    //     <KnowMore title={title} />
    //     <H2
    //       text="Symptoms"
    //       textClass="text-2xl font-semibold mb-4 text-center"
    //     />
    //     <DataBoxes data={data.symptoms} />
    //     <H2
    //       text="Diagnosis"
    //       textClass="text-2xl font-semibold mb-4 text-center"
    //     />
    //     <DataBoxes data={data.diagnosis} />
    //     <H2
    //       text="Treatment"
    //       textClass="text-2xl font-semibold mb-4 text-center"
    //     />
    //     {/* <DataLists data={data.treatment} /> */}
    //     <Conclusion data={data.footerData} />
    //     <BookButton />
    //   </div>
    // </>

    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <Title title={title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="text-2xl font-semibold mb-4 text-center" />
        <p className="font-light">
          Injuries to the ACL, PCL, or MCL are often caused by:
        </p>
        <ListBox data={data} />
        <KnowMore title={title} />
        <div>
          {/* <h2 className={`text-2xl font-bold text-center text-hciSecondary py-1`}>
          Treatment
        </h2> */}
          {/* <p>Symptoms</p> */}
          <div className="grid lg:grid-cols-1 gap-4 space-y-4">
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                text="The symptoms of ACL, PCL, or MCL injuries can include:"
                textCss="font-light py-4"
                titleCss="text-black font-semibold text-center text-2xl"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                text="Accurate diagnosis is essential to determine the extent of ligament damage and the appropriate treatment approach. Common diagnostic methods include:"
                textCss="font-light py-4"
                header=""
                titleCss="text-black font-semibold text-center text-2xl"
                data={data.diagnosis}
                myclass="grid grid-cols-2"
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
          <p className="font-light">
            Joint replacement surgery involves several steps, depending on the
            joint being replaced. The primary goal is to relieve pain and
            improve joint function. The treatment process typically includes:
          </p>
          <DataLists data={data.complications} />
        </div>

        <div className="space-y-4 mt-8">
          <Conclusion data={data.footerData} />
          <FooterLinks head={title} />
          <BookButton />
        </div>
      </div>
    </>
  )
}

export default JointReplacementSurgery

// generalSurgery.js
import React from 'react'
import Banner from '@/components/Common/Banner'
import Image from 'next/image'
import H1 from '@/components/ui/h1'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'

import FlexBox from '@/components/cardiacComponents/FlexBox'
import FlexBoxSection from '@/components/cardiacComponents/FlexBoxSection'
import ListBox from '@/components/cardiacComponents/ListBox'
import CTaButton from '@/components/cardiacComponents/CtaButton'

const data = {
  bannerImage: '/others/urology.png',
  title: 'Urology',
  description: `Comprehensive Care for Urinary and Reproductive Health`,
  overview: `At Healthcare International (HCI), we offer expert urological care, providing advanced treatments for a range of urinary and reproductive health conditions. Our network of highly skilled urologists ensures personalized care that prioritises your well-being and restores optimal function.`,
  sections: [
    {
      title: 'What Is Urology?',
      content: `Urology is a medical field that focuses on the diagnosis, treatment, and management of disorders related to the urinary system (kidneys, bladder, ureters, and urethra) and the male reproductive system (including the prostate, testes, and penis). Urologists are trained to address a wide range of conditions, from infections to cancers, and offer both medical and surgical interventions.`,
      bgColor: 'bg-hciSecondary',
    },
  ],
  sec_para: [
    {
      title: 'Advanced Imaging',
      titleCss: 'text-hciPrimary',
      content: `Ultrasound, CT scans, and MRI for accurate diagnosis and treatment planning.`,
      bgColor: 'border-hciSecondary border text-black shadow-lg text-center',
    },
  ],
  sec_para_1: [
    {
      title: 'Cystoscopy',
      titleCss: 'text-hciPrimary',
      content: `A minimally invasive procedure that allows direct visualization of the urinary tract to diagnose bladder and urethra conditions.`,
      bgColor: 'border-hciSecondary border text-black shadow-lg text-center',
    },
  ],
  sec_para_2: [
    {
      title: 'Urodynamics',
      titleCss: 'text-hciPrimary',
      content: `A series of tests that assess how the bladder and urethra are functioning.`,
      bgColor: 'border-hciSecondary border text-black shadow-lg text-center',
    },
  ],
  sec_para_3: [
    {
      title: 'Robotic Surgery',
      titleCss: 'text-hciPrimary',
      content: `Cutting-edge technology for minimally invasive procedures, reducing recovery time and enhancing precision.`,
      bgColor: 'border-hciSecondary border text-black shadow-lg text-center',
    },
  ],
  sec_para_4: [
    {
      title: 'Laser Treatments',
      titleCss: 'text-hciPrimary',
      content: `Used for treating kidney stones, enlarged prostate, and other urological conditions.`,
      bgColor: 'border-hciSecondary border text-black shadow-lg text-center',
    },
  ],
  sec_para_5: [
    {
      title: 'Medications and Lifestyle Management',
      titleCss: 'text-hciPrimary',
      content: `A combination of drug therapies and lifestyle modifications to manage chronic urological conditions like incontinence or overactive bladder.`,
      bgColor: 'border-hciSecondary border text-black shadow-lg text-center',
    },
  ],
  complications: [
    {
      heading: '',

      aneurysmSymptoms: [
        {
          title: 'Urinary Tract Infections (UTIs)',
          description:
            'Infections affecting any part of the urinary system, causing pain and discomfort.',
        },
        {
          title: 'Kidney Stones',
          description:
            'Hard deposits of minerals and salts that form in the kidneys and cause pain when passing through the urinary tract.',
        },
        {
          title: 'Prostate Disorders',
          description:
            'Conditions like benign prostatic hyperplasia (BPH) and prostate cancer affecting male reproductive health.',
        },
        {
          title: 'Bladder Disorders',
          description:
            'Conditions like overactive bladder, incontinence, and interstitial cystitis.',
        },
        {
          title: 'Male Infertility',
          description:
            'Issues that affect sperm production or delivery, impacting a man’s ability to father a child.',
        },
        {
          title: 'Erectile Dysfunction (ED)',
          description:
            'Inability to maintain or achieve an erection for sexual activity.',
        },
        {
          title: 'Testicular Cancer',
          description:
            'Cancer affecting the testes, commonly diagnosed in younger men.',
        },
        {
          title: 'Hematuria',
          description:
            'Presence of blood in the urine, which may indicate underlying issues.',
        },
        {
          title: 'Hydronephrosis',
          description:
            'Swelling of a kidney due to urine buildup, often caused by obstruction.',
        },
        {
          title: 'Urinary Incontinence',
          description:
            'Loss of bladder control, leading to involuntary urine leakage.',
        },
      ],
    },
  ],
  // invasive: [
  //   {
  //     heading: 'Conditions we Treat',
  //     desc: 'HCI’s sports medicine network addresses a range of conditions, including:',
  //     aneurysmSymptoms: [
  //       {
  //         title: 'Expert Urologists:',
  //         description:
  //           'Access to leading specialists in urology who stay up to date with the latest treatments and advancements.',
  //       },
  //       { description: 'Knee and shoulder injuries' },
  //       { description: 'Tendonitis and cartilage injuries' },
  //       { description: 'Concussions and heat illnesse' },
  //       { description: 'Exercise-induced asthma' },
  //       { description: 'Eating disorders related to athletic performance' },
  //     ],
  //   },
  // ],
  urologist: [
    {
      heading: '',
      aneurysmSymptoms: [
        {
          description:
            'Painful urination, blood in the urine, or difficulty passing urine.',
        },
        {
          description:
            'Frequent urges to urinate, especially during the night.',
        },
        {
          description: 'Erectile dysfunction or other sexual health concerns.',
        },
        { description: 'Persistent pelvic or lower abdominal pain.' },
        { description: 'Swelling or lumps in the genital area or testicles.' },
        { description: 'Urinary incontinence or leakage.' },
        { description: 'Difficulty achieving or maintaining an erection.' },
      ],
    },
  ],
  //   invasive: [
  //     {
  //       heading: 'Minimally Invasive and Non-Surgical Procedures',
  //       aneurysmSymptoms: [
  //         { description: 'Botox and dermal fillers' },
  //         { description: 'Knee and shoulder injuries' },
  //         { description: 'Tendonitis and cartilage injuries' },
  //         { description: 'Concussions and heat illnesse' },
  //         { description: 'Exercise-induced asthma' },
  //         { description: 'Eating disorders related to athletic performance' },
  //       ],
  //     },
  //   ],

  benefits: [
    {
      title: 'Expert Urologists:',
      desc: 'Access to leading specialists in urology who stay up to date with the latest treatments and advancements.',
    },
    {
      title: 'Personalized Care Plans',
      desc: 'Each patient receives a tailored treatment plan based on their condition, medical history, and preferences.',
    },
    {
      title: 'Minimally Invasive Techniques',
      desc: 'We offer the latest minimally invasive procedures to reduce recovery time and improve outcomes.',
    },
    {
      title: 'Comprehensive Support',
      desc: 'From diagnosis to post-treatment care, HCI supports patients every step of the way.',
    },
  ],
  contact: {
    title: 'Contact Us Today',
    head: 'Contact HCI for Expert Urological Care',
    content:
      'Take the first step towards better urological health. Reach out to HCI today to schedule a consultation with one of our skilled urologists and begin your path to recovery and better quality of life.',
  },
}

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <H1 title={data.title} />
        <H2
          title={data.description}
          className="text-start font-medium text-2xl"
        />
        <p className="font-light">{data.overview}</p>
        <FlexBox data={data} />
        
        <H2
          title="Conditions Treated by Urologists"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light text-center">
          HCI’s network of urology specialists offers expertise in diagnosing
          and treating various conditions, including:
        </p>

        <div className="grid grid-cols-1 gap-4">
          <DataLists
            data={data.complications}
            // desc="We work closely with experts such as:"
          />
        </div>
        <H2
          title="Advanced Diagnostic and Treatment Services"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light">
          HCI provides access to state-of-the-art diagnostics and treatments for
          urological conditions, ensuring that each patient receives the best
          care possible:
        </p>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <FlexBoxSection data={data.sec_para} />
            <FlexBoxSection data={data.sec_para_1} />
            <FlexBoxSection data={data.sec_para_2} />
            {/* <DataLists data={data.complications} /> */}
          </div>
          <div className="flex-1">
            <Image
              src="/others/treatment_service.png"
              width={300}
              height={300}
              className="w-full h-[430px] object-cover"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <FlexBoxSection data={data.sec_para_3} />
          <FlexBoxSection data={data.sec_para_4} />
          <FlexBoxSection data={data.sec_para_5} />
        </div>
        <H2
          title="Why Choose HCI for Urological Care?"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light">
          HCI is dedicated to providing the highest standard of urological care,
          supported by a team of compassionate professionals. Here’s why you
          should trust us with your urological health:
        </p>
        <ListBox data={data} />
        <div className=' pt-12'>
          <H2
            title="When to See a Urologist"
            className="text-2xl font-medium mb-4 text-center"
          />
          <p className="font-light">
            If you experience any of the following, it may be time to consult a
            urologist:
          </p>
          <DataLists data={data.urologist} desc="" />
        </div>

        <div className='pb-12'>
          <H2
            title="Take Charge of Your Urological Health"
            className="text-2xl font-medium mb-4 text-center"
          />
          <p className="font-light">
            At HCI, we believe that early diagnosis and expert care are crucial
            for managing urological conditions effectively. Whether you&apos;re
            dealing with a simple issue like a UTI or a more complex condition
            like prostate cancer, our specialists are here to provide
            compassionate, expert care tailored to your needs.
          </p>
        </div>
        <CTaButton data={data} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default GeneralSurgery

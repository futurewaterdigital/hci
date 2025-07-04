// generalSurgery.js
import React from "react";
import Banner from "@/components/Common/Banner";
// import Image from 'next/image'

import DataLists from "@/components/cardiacComponents/Bullets";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H2 from "@/components/ui/h2";

// import FlexBox from '@/components/cardiacComponents/FlexBox'
// import FlexBoxSection from '@/components/cardiacComponents/FlexBoxSection'
import ListBox from "@/components/cardiacComponents/ListBox";
// import CTaButton from '@/components/cardiacComponents/CtaButton'
import KnowMore from "@/components/ui/KnowMore";
import CausesKnowMore from '@/components/ui/CausesKnowMore'
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import DataSurgery from "@/components/cardiacComponents/Button";
import H1 from "@/components/ui/h1";
import IssuesLinks from "@/components/ui/IssuesLinks";

const title = "ACL, PCL, and MCL Surgeries";

const data = {
  bannerImage: "/orthopaedics/GICancer_Banner.png",
  description: ``,
  overview: `ACL (Anterior Cruciate Ligament), PCL (Posterior Cruciate Ligament), and MCL (Medial Collateral Ligament) surgeries are performed to restore knee stability after ligament injuries. These ligaments are crucial for knee joint function, especially in sports or high-impact activities. Injuries to the ACL, PCL, or MCL can result from sudden twists, direct trauma, or overuse.
While minor injuries may respond to conservative management, severe tears often require surgical reconstruction to restore knee strength and prevent long-term instability. Timely surgical intervention helps patients regain mobility and return to their regular activities, including sports.`,

  benefits: [
    {
      title: "Sudden Changes in Movement",
      desc: "Pivoting or turning rapidly during sports.",
    },
    {
      title: "Direct Trauma",
      desc: "A blow to the knee during contact sports or accidents.",
    },
    {
      title: "Overextension of the Knee",
      desc: "Stretching the knee joint beyond its normal range of motion.",
    },
    {
      title: "Landing Incorrectly",
      desc: "Awkward landings from a jump or fall.",
    },
    {
      title: "Motor Vehicle Accidents",
      desc: "High-impact trauma affecting the knee structure.",
    },
    {
      title: "Repetitive Stress or Overuse",
      desc: "Common among athletes in sports like football, basketball, and skiing.",
    },
  ],

  complications: [
    {
      heading: "ACL Reconstruction Surgery",
      aneurysmSymptoms: [
        {
          description:
            "Involves replacing the torn ligament with a tissue graft (from the patient’s own body or a donor).",
        },
        {
          description:
            "Performed arthroscopically to reduce recovery time and improve outcomes.",
        },
        {
          description:
            "Helps restore stability, allowing patients to return to sports and physical activities.",
        },
      ],
    },
    {
      heading: "PCL Reconstruction Surgery",
      aneurysmSymptoms: [
        {
          description:
            "Uses grafts to replace the damaged posterior cruciate ligament.",
        },
        {
          description:
            "Recommended when the injury leads to knee instability or affects other ligaments.",
        },
        {
          description:
            "Arthroscopy is commonly used to minimize scarring and speed up recovery.",
        },
      ],
    },
    {
      heading: "MCL Repair or Reconstruction",
      aneurysmSymptoms: [
        {
          description:
            "Mild MCL injuries often heal with conservative treatment, but severe tears may need surgical repair.",
        },
        {
          description:
            "Surgery involves stitching the torn ligament or reconstructing it with grafts if necessary.",
        },
        {
          description:
            "Helps prevent chronic instability and enhances knee function.",
        },
      ],
    },
    {
      heading: "Combined Ligament Reconstruction",
      aneurysmSymptoms: [
        {
          description:
            "In cases of multi-ligament injury (e.g., ACL + PCL tears), multiple ligaments are repaired or reconstructed in a single surgery.",
        },
        {
          description: "Aims to restore full knee stability and functionality.",
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

  footerData: [
    {
      header: "Conclusion",
      paragraph: `
      <p>ACL, PCL, and MCL surgeries play a vital role in restoring knee stability and preventing chronic pain and dysfunction. With advancements in arthroscopic techniques, patients can benefit from minimally invasive procedures, shorter recovery periods, and improved outcomes.
Timely surgical intervention, followed by a comprehensive rehabilitation plan, enables individuals to return to their regular activities and athletic pursuits without compromising knee health.</p>
<p><span className="text-hciSecondary font-semibold">Don’t let knee injuries hold you back</span> - consult with our expert orthopaedic surgeons to explore the best treatment options for your knee condition.</p>
          `,
    },
  ],
  DataSurgery: {
    headingTitle: "Rehabilitation and Recovery",
    description:
      "Post-surgical rehabilitation is essential for restoring knee function and preventing re-injury. Recovery timelines can vary, but patients typically follow these steps:",
    DataLists: [
      {
        title: "Immobilization",
        description:
          "Use of braces to stabilise the knee during the early healing phase.",
        minHeight: "min-h-[150px] text-center",
      },
      {
        title: "Physical Therapy",
        description:
          "Strengthening exercises to rebuild muscle support and regain range of motion.",
        minHeight: "min-h-[150px] text-center",
      },
      {
        title: "Gradual Return to Activities",
        description:
          "With guidance from a physiotherapist, patients progress from non-weight-bearing activities to light exercises and eventually to high-impact sports.",
        minHeight: "min-h-[150px] text-center",
      },
      {
        title: "Pain Management",
        description: "Medications to manage post-operative pain and swelling.",
        minHeight: "min-h-[150px] text-center",
      },
      {
        title: "Regular Follow-Ups:",
        description:
          "Monitoring the healing process and ensuring the grafts are integrating properly.",
        minHeight: "min-h-[150px] text-center",
      },
    ],
  },

  symptoms: [
    {
      category: "Sudden Pain in the Knee",
      description: "Especially at the moment of injury.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Swelling and Inflammation",
      description: "Often occurs within a few hours of injury.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Instability or Buckling",
      description: "The knee may feel unstable or give way during movement.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Limited Range of Motion",
      description: "Difficulty bending or straightening the knee.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Popping Sensation",
      description:
        'A noticeable "pop" at the time of ligament tear, especially with ACL injuries.',
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Bruising and Tenderness",
      description: "Around the knee joint.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Difficulty Walking",
      description:
        "Bearing weight on the injured leg can be painful and unstable.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "Physical Examination",
      description: "Evaluating joint stability, swelling, and movement.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Lachman Test and Drawer Tests",
      description: "Used to assess ACL and PCL integrity.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "MRI Scan",
      description:
        "Provides detailed images of the ligaments and surrounding tissues.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "X-rays",
      description: "To rule out associated bone fractures.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Ultrasound",
      description: "May be used to check for soft tissue damage.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Arthroscopy",
      description:
        "A minimally invasive procedure to visually inspect the knee joint.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <H1 title={title} />
        <H2
          title={data.description}
          className="text-start font-semibold text-xl"
        />
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="text-2xl font-medium mb-4 text-center" />
        <p className="font-light">
          Injuries to the ACL, PCL, or MCL are often caused by:
        </p>
        <ListBox data={data} />
        <CausesKnowMore title={title} />
        <div>
          {/* <h2 className={`text-2xl font-bold text-center text-hciSecondary py-1`}>
          Treatment
        </h2> */}
          {/* <p>Symptoms</p> */}
          <div className="grid lg:grid-cols-1 gap-4">
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                text="The symptoms of ACL, PCL, or MCL injuries can include:"
                textCss="font-light py-2 min-h-[80px]"
                titleCss="text-black font-medium text-center text-2xl mt-4"
                header=""
                data={data.symptoms}
                myclass="grid md:grid-cols-2"
              />
              <KnowMore title={title} />
            </div>
            <div className="space-y-4">
              <DataBoxes
                title="Diagnosis"
                text="Accurate diagnosis is essential to determine the extent of ligament damage and the appropriate treatment approach. Common diagnostic methods include:"
                header=""
                textCss="font-light py-2 min-h-[80px]"
                titleCss="text-black font-medium text-center text-2xl mt-4"
                data={data.diagnosis}
                myclass="grid md:grid-cols-2"
              />
              <IssuesLinks head={title} />
            </div>
          </div>
        </div>
        <div>
          <H2
            title="Treatment"
            className="text-2xl font-medium mb-4 text-center"
          />
          <p className="font-light">
            Treatment for ACL, PCL, and MCL injuries depends on the severity of
            the tear. Mild sprains may respond to rest and physical therapy, but
            full tears usually require surgical reconstruction. Here are the
            common surgical procedures:
          </p>
          <DataLists data={data.complications} />
        </div>
        <H2
          title={data.DataSurgery.headingTitle}
          className="text-2xl font-medium mb-4 text-center"
        />
        <p
          className="font-light"
          dangerouslySetInnerHTML={{ __html: data.DataSurgery.description }}
        />
        <DataSurgery data={data.DataSurgery.DataLists} />
        {/* <FlexBoxSection data={data.sec_para_3} /> */}
        {/* <CTaButton data={data} /> */}
        <div className="space-y-6 pt-10">
          <Conclusion data={data.footerData} />
          <FooterLinks head={title} />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default GeneralSurgery;

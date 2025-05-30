// generalSurgery.js
import React from "react";
import Banner from "@/components/Common/Banner";

import DataLists from "@/components/cardiacComponents/Bullets";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinkOthers from "@/components/cardiacComponents/FooterLinkTwo";
import H2 from "@/components/ui/h2";
import H1 from "@/components/ui/h1";
import FlexBox from "@/components/cardiacComponents/FlexBox";
import ListBox from "@/components/cardiacComponents/ListBox";
import CTaButton from "@/components/cardiacComponents/CtaButton";

const data = {
  bannerImage: "/others/general-surgery.png",
  title: "General Surgery",
  description: `Expert Care for Comprehensive Surgical Needs`,
  overview: `At Healthcare International (HCI), we understand that surgical interventions require expertise, precision, and compassionate care. Our network of experienced general surgeons provides comprehensive care for a wide range of conditions, ensuring optimal outcomes and a smooth recovery journey for every patient.`,
  sections: [
    {
      title: "What is General Surgery?",
      content: `General surgery is a medical specialty that focuses on diagnosing and surgically treating conditions affecting various parts of the body. These include the digestive system, abdominal organs, skin, soft tissues, and more. Our general surgeons are highly skilled in performing both routine and complex procedures, offering care tailored to individual patient needs.`,
      bgColor: "bg-hciSecondary",
    },
    {
      title: "Specialties in General Surgery",
      content: `HCI’s network of general surgeons is proficient in managing surgical procedures for a variety of conditions, including:`,
      bullets: [
        "Minimally invasive laparoscopic surgery",
        "Emergency surgical care",
        "Pre and post-operative management",
      ],
      bgColor: "bg-hciPrimary",
    },
  ],
  complications: [
    {
      heading: "",
      aneurysmSymptoms: [
        { description: "Hernias (inguinal, umbilical, and incisional)" },
        { description: "Gallbladder issues, including gallstones" },
        { description: "Appendicitis" },
        { description: "Gastrointestinal conditions" },
        { description: "Thyroid and parathyroid disorders" },
        {
          description:
            "Skin and soft tissue conditions, including cysts and abscesses",
        },
        { description: "Benign and malignant tumors" },
      ],
    },
  ],
  benefits: [
    { title: "Reduced pain and scarring" },
    { title: "Faster recovery times" },
    { title: "Shorter hospital stays" },
  ],
  contact: {
    title: "Contact Us Today",
    head: "Connect with HCI",
    content:
      "To explore our general surgery services and access top-quality surgical care tailored to your needs.",
  },
};

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
        <p className="font-light">
          Our multidisciplinary approach ensures that patients receive
          comprehensive care, often collaborating with specialists in
          gastroenterology, oncology, and other fields.
        </p>
        <div>
          <H2
            title="Conditions We Treat"
            className="text-2xl font-medium mt-8 text-center"
          />

          {/* <p className="text-center font-light">
            Our general surgery services encompass a broad range of conditions,
            including:
          </p> */}
          <DataLists data={data.complications} />
        </div>
        <H2
          title="Why Choose General Surgery Through HCI?"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light">
          HCI&apos;s expert surgeons and specialists utilize advanced surgical
          techniques, including minimally invasive and robotic-assisted
          procedures. These techniques result in:
        </p>
        <ListBox data={data} />
        <div className="pt-12 space-y-4">
          <div className="font-light">
            <H2
              title="When to Consider General Surgery"
              className="font-medium mb-4 text-center text-2xl"
            />
            <p className="font-light">
              If you have a condition that requires surgical intervention, our
              general surgery network is here to provide expert guidance.
              Symptoms such as persistent abdominal pain, swelling, or
              unexplained changes in your health may indicate the need for
              evaluation by a specialist. Our goal is to ensure timely
              intervention and the best possible outcomes.
            </p>
          </div>
          <div className="font-light">
            <H2
              title="Committed to Your Recovery"
              className="font-medium mb-4 text-center text-2xl"
            />
            <p className="font-light">
              At HCI, we believe in delivering world-class surgical care with a
              personal touch. Our network of highly skilled general surgeons are
              dedicated to addressing your concerns, providing clarity on
              treatment options, and supporting you every step of the way.
            </p>
          </div>
        </div>
        <CTaButton data={data} />
        <FooterLinkOthers head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;

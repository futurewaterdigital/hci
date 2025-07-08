// generalSurgery.js
import React from "react";
import Banner from "@/components/Common/Banner";
// import Image from 'next/image'
import H1 from "@/components/ui/h1";
import DataLists from "@/components/cardiacComponents/Bullets"; 
import BookButton from "@/components/cardiacComponents/BookButton"; 
import FooterLinkOthersTwo from "@/components/cardiacComponents/FooterLinkOthersTwo";
import H2 from "@/components/ui/h2";

import FlexBox from "@/components/cardiacComponents/FlexBox";
import ListBox from "@/components/cardiacComponents/ListBox";
import CTaButton from "@/components/cardiacComponents/CtaButton";

const data = {
  bannerImage: "/others/sports-medicine.png",
  title: "Sports Medicine",
  description: `Comprehensive Care for Active Lifestyles`,
  overview: `At Healthcare International (HCI), we are committed to helping individuals recover from sports-related injuries and return to their active lifestyles with confidence. Whether you're a professional athlete, a fitness enthusiast, or someone with a physically demanding job, our sports medicine services offer holistic care to address your unique needs.`,
  sections: [
    {
      title: "What is Sports Medicine?",
      content: `Sports medicine is a specialized field focused on preventing, diagnosing, and treating injuries related to physical activity. Our expert network includes healthcare providers trained to manage injuries in children, teens, and adults, ensuring the highest level of care for people of all ages and activity levels.`,
      bgColor: "bg-hciSecondary",
    },
    {
      title: "Specialists in Sports Medicine",
      content: `Our sports medicine specialists undergo advanced training in:`,
      bullets: [
        "Injury prevention",
        "Physical rehabilitation",
        "Surgical and non-surgical interventions",
        "Nutrition and exercise counselling",
      ],
      bgColor: "bg-hciPrimary",
    },
  ],
  complications: [
    {
      heading: "Expert Care",

      aneurysmSymptoms: [
        {
          description: `<span className='font-medium'>Sports medicine specialist:</span>  to provide expert opinion and solutions for sports injury related. `,
        },
        {
          description: `<span className='font-medium'>Physical Therapists:</span> To aid in recovery and improve mobility. `,
        },
        {
          description: `<span className='font-medium'>Certified Athletic Trainers:</span> To design rehabilitation programs and prevent future injuries.`,
        },
        {
          description: `<span className='font-medium'>Nutritionists:</span> To optimize performance and assist with weight management.`,
        },
      ],
    },
  ],
  invasive: [
    {
      heading: "Conditions we Treat",
      desc: "HCI’s sports medicine network addresses a range of conditions, including:",
      aneurysmSymptoms: [
        { description: "Ankle sprains and fractures" },
        { description: "Knee and shoulder injuries" },
        { description: "Tendonitis and cartilage injuries" },
        { description: "Concussions and heat illness" },
        { description: "Exercise-induced asthma" },
        { description: "Eating disorders related to athletic performance" },
      ],
    },
  ],
  reconstructive: [
    {
      heading: "Conditions we Treat",
      aneurysmSymptoms: [
        { description: "Ankle sprains and fractures" },
        { description: "Cleft lip and palate repair" },
        { description: "Hand and microsurgery" },
        { description: " Scar revision surgery" },
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
      title: "",
      desc: "Pain management",
    },
    {
      title: "",
      desc: "Immobilization with casts or slings",
    },
    {
      title: "",
      desc: "Rehabilitation exercises",
    },
    {
      title: "",
      desc: "Surgical interventions, if necessary",
    },
  ],
  contact: {
    title: "Contact Us Today",
    head: "For the best in Sports Medicine",
    content:
      "Contact HCI to explore our comprehensive sports medicine services and discover how we can support your recovery journey.",
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

        <div className="grid lg:grid-cols-2 gap-4">
          <DataLists
            data={data.complications}
            desc="We work closely with experts such as:"
            boxClass="min-h-[375px]"
          />
          <DataLists
            data={data.invasive}
            desc="HCI’s sports medicine network addresses a range of conditions, including:"
            boxClass="min-h-[370px]"
          />
        </div>
        <p className="font-light">
          Our specialists also provide guidance on proper exercise techniques,
          injury prevention strategies, and the use of supplements to support
          overall health and performance.
        </p>

        <H2
          title="When to Seek Care"
          className="text-2xl font-medium mb-4 text-center pt-12"
        />
        <p className="font-light">
          At HCI, we partner with leading hospitals and specialists to provide
          cutting-edge treatment for sports injuries. Our goal is to help you or
          your loved ones recover quickly and safely, empowering you to return
          to the activities you love.
        </p>
        <ListBox data={data} />
        <div className="pb-12">
          <H2
            title="Empowering Recovery Through Expert Care"
            className="text-2xl font-medium mb-4 text-center pt-12"
          />
          <p className="font-light">
            At HCI, we partner with leading hospitals and specialists to provide
            cutting-edge treatment for sports injuries. Our goal is to help you
            or your loved ones recover quickly and safely, empowering you to
            return to the activities you love.
          </p>
        </div>

        <CTaButton data={data} />
        <FooterLinkOthersTwo head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;

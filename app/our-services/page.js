import React from "react";
import Image from "next/image";
import Banner from "@/components/Common/Banner";
const bannerImage = "/images/Neurology.png";
import BookButton from "@/components/cardiacComponents/BookButton";
import Title from "@/components/cardiacComponents/Title";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import H1 from "@/components/ui/h1";

const helpData = [
  {
    title: "Finding the Right Doctor",
    content:
      "Our global network of leading clinicians allows us to connect you with top specialists. We can even assemble a team to review your records and recommend the best treatment options. Video consultations are available if you'd like to discuss your condition directly with our doctors.",
  },
  {
    title: "Choosing the Reputed Hospital",
    content:
      "HCI partners with highly regarded hospitals in India, Egypt, UAE, and Mauritius, all known for advanced technology and patient care. We guide you in selecting a facility that fits your specific medical need.",
  },
  {
    title: "Understanding Treatment Costs",
    content:
      "To ensure transparency, we provide cost estimates from multiple hospitals, helping you make informed financial decisions. Countries like India and Egypt often offer high-quality care at a fraction of the cost, making treatment accessible and affordable.",
  },
  {
    title: "Evaluating Success Rates",
    content:
      "We share clinician profiles, patient testimonials, and information about treatment outcomes, so you know what to expect and can make confident choices about your healthcare.",
  },
  {
    title: "Life after Surgery",
    content:
      "With new technologies like minimally invasive, laser, and robotic surgery, recovery times are shorter, and outcomes are highly successful. We recommend the best procedures for your condition to support a fast and smooth recovery.",
  },
  {
    title: "Starting the Process",
    content:
      "Submit your medical reports via our form, and our team will reach out within 24 hours with a treatment plan, cost estimate, and other details. You'll have a dedicated manager who will guide you through each step.",
  },
];
const services = [
  {
    title: "Cardiac Surgery",
    description: "Cardiac Surgery",
    icon: "/images/Cardiac.svg",
  },
  {
    title: "Cancer Treatment",
    description: "Cancer Treatment",
    icon: "/images/Cancer.svg",
  },
  {
    title: "Brain and Spine Surgery",
    description: "Brain and Spine Surgery",
    icon: "/images/BrainSpine.svg",
  },
  {
    title: "Gastroenterology and complicated surgeries",
    description: "Gastroenterology and complicated surgeries",
    icon: "/images/GastroImage.svg",
  },
  {
    title: "Orthopaedics and Joint Replacement",
    description: "Orthopaedics and Joint Replacement",
    icon: "/images/Orthopaedics.svg",
  },
  {
    title: "Organ Transplants (Liver & Kidney)",
    description: "Organ Transplants (Liver & Kidney)",
    icon: "/images/Organ.svg",
  },
  {
    title: "Urology and Infertility (IVF)",
    description: "Urology and Infertility (IVF)",
    icon: "/images/Urology.svg",
  },
  {
    title: "Ophthalmology",
    description: "Ophthalmology",
    icon: "/images/Ophthalmology.svg",
  },
  {
    title: "Dental and Cosmetic Surgery",
    description: "Dental and Cosmetic Surgery",
    icon: "/images/DentalCosmetic.svg",
  },
];

const faqData = [
  "Who is the most qualified doctor for my condition?",
  "Which hospital best suits my needs?",
  "How much will treatment cost?",
  "What are the success rates?",
  "What can I expect during recovery?",
  "How do I manage travel and logistics?",
  "Who will handle post-treatment follow-up?",
];

const servicesData = [
  "Visa assistance and invitation letters",
  "Accommodation bookings near your hospital",
  "City orientation and recommended Apps for your stay",
  "Currency exchange and money transfer guidance",
  "Translation services (French, Bangla, Arabic)",
  "Appointment scheduling and hospital coordination",
];

function Page() {
  return (
    <>
      <Banner image={bannerImage} />
      <div className="lg:container mx-auto mt-6 space-y-12 px-4 lg:px-0">
        {/* banner end here */}

        <div className="space-y-6">
          <H1 title="Our Services" />
          <p className="text-center font-light">
            Healthcare International (HCI) is your trusted partner, supporting
            you at every stage of your medical journey. Navigating medical
            decisions, selecting the right healthcare providers, and managing
            logistics can be overwhelming. That&apos;s why HCI streamlines the
            process, providing clear guidance, connecting you with world-class
            healthcare providers, and addressing your concerns - allowing you to
            focus on what truly matters: your health and recovery.
          </p>
          <H2
            title="Helping You Find The Right Answers"
            textClass="text-start"
          />
          <p className="font-roboto font-light">
            Healthcare can be complex, and seeking treatment abroad adds an
            extra layer of uncertainty. HCI is here to address your key
            questions:
          </p>
          <ul className="list-disc list-inside space-y-2 font-roboto font-light text-pink-500 text-xl">
            {faqData.map((question, index) => (
              <li key={index}>
                <span className="text-black text-[16px]">{question}</span>
              </li>
            ))}
          </ul>
          <H2
            title="How We Help"
            textclassName="font-regular mb-4 text-center font-roboto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpData.map((section, index) => (
              <div
                key={index}
                className="p-4 bg-hciYellow rounded-lg hover:scale-105 hover:cursor-pointer transition-all ease-in-out"
              >
                <h4 className="text-xl font-regular mb-2 text-center font-roboto">
                  {section.title}
                </h4>
                <p className="text-center font-light">{section.content}</p>
              </div>
            ))}
          </div>
          <H3
            title="Handling Logistics"
            className="text-3xl font-regular font-roboto text-center text-hciPrimary"
          />

          <p className="font-light">
            We manage all logistics to make your experience as smooth as
            possible, including
          </p>
          <ul className="list-disc list-inside space-y-2 font-roboto font-light text-pink-500 text-xl">
            {servicesData.map((question, index) => (
              <li key={index}>
                <span className="text-black text-[16px]">{question}</span>
              </li>
            ))}
          </ul>

          <H3
            title="What treatments do we specialize in?"
            className="text-3xl font-regular font-roboto text-center text-hciPrimary"
          />
          <p className="text-center font-light">
            With experience in over 50 specialties, HCI has supported patients
            from 125+ countries. Our specialties include:
          </p>
        </div>
      </div>
      <div className="bg-hciPrimary my-6">
        <div className="grid lg:grid-cols-5 gap-4 p-6 lg:w-9/12 mx-auto">
          {services.map((service, index) => (
            <div
              className="p-4 bg-white border rounded-lg flex flex-col items-center justify-center hover:scale-105 hover:cursor-pointer transition-all ease-in-out"
              key={index}
            >
              <Image
                width={300}
                height={300}
                alt={service.title}
                className="mx-auto mb-2 h-12"
                src={service.icon}
              />
              <p className="text-center font-light">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:container mx-auto space-y-6 px-4 lg:px-0">
        <p className="font-light">
          Whether you&apos;re a Kenyan seeking orthopaedic care in the UAE or
          India, a family from Nigeria seeking neurological care for a child in
          India, or a Bangladeshi couple pursuing transplant surgery, HCI is
          here to guide and support you every step of the way.
        </p>
        <p className="font-light">
          HCI bridges the gap between you and the world&apos;s best healthcare
          providers, empowering you with peace of mind and confidence on your
          journey to recovery. We strive to be the #1 choice for patients
          worldwide seeking medical treatment abroad.
        </p>
        <BookButton />
      </div>
      {/* section end here */}
    </>
  );
}

export default Page;

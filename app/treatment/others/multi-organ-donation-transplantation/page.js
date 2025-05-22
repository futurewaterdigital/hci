// generalSurgery.js
import React from "react";
import Banner from "@/components/Common/Banner";

// import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinkOthersTwo from "@/components/cardiacComponents/FooterLinkTwo";
import H2 from "@/components/ui/h2";
import H1 from "@/components/ui/h1";
import FlexBox from "@/components/cardiacComponents/FlexBox";
import ListBox from "@/components/cardiacComponents/ListBox";
import CTaButton from "@/components/cardiacComponents/CtaButton";
import Conclusion from "@/components/cardiacComponents/Conclusion";

const title = "Organ Donation and Transplantation";
const data = {
  bannerImage: "/others/Multi-OrganDonationandTransplantation.png",
  title: "Multi-Organ Donation and Transplantation",
  description: ``,
  overview: `Organ donation and transplantation serve as a life-saving procedure, enabling deceased or living donors to give the gift of life to individuals in need. By surgically transferring a healthy organ or tissue from a donor to a recipient, critical conditions caused by organ failure can be effectively addressed. Organs commonly transplanted include the liver, kidneys, heart, lungs, pancreas, and others, with the process extending to tissues like corneas, tendons, and bone marrow.`,
  sections: [
    {
      title: "What is organ donation and transplantation?",
      content: `Organ donation and transplantation is a surgical intervention aimed at replacing a failing organ with a healthy one from a donor. Donors may be individuals who have recently passed away and consented to donate their organs during their lifetime or whose families made the decision posthumously. Alternatively, living donors can contribute certain organs or tissues, such as a kidney or a part of their liver, without compromising their own health.
This life-saving procedure often offers a second chance to individuals in critical need, but the availability of suitable donor organs remains a significant challenge. Many patients face prolonged waits, underscoring the importance of organ donation.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      title: "Why is organ donation important?",
      content: `Organ donation represents a significant medical breakthrough, giving hope to individuals of all ages suffering from life-threatening conditions. While solid organ transplants save lives, tissue donations can restore vital functions, such as sight and mobility. Despite the demand for organ transplants, the supply remains insufficient.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      title: "What organs and tissues can be donated and transplanted?",
      content: `Organs that can be donated include the liver, kidneys, pancreas, heart, lungs, intestines, and uterus. Tissues such as corneas, bone marrow, skin, tendons, ligaments, cartilage, and blood vessels can also be donated. Living donors can offer one kidney, a portion of the liver, gestational tissues, and in rare cases, segments of the lungs or pancreas.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      title: "Who can be an organ donor?",
      content: `Anyone from the patient’s family (a first degree relative like the father, mother, son,  daughter, sister or brother) regardless of age, has the potential to be an organ donor. Medical evaluations at the time of donation determine the suitability of organs and tissues. Living donors undergo a thorough assessment to ensure their safety and the viability of the organ being donated.`,
      bgColor: "bg-hciPrimary text-white",
    },
  ],
  complications: [
    {
      heading: "Possible Complications",
      aneurysmSymptoms: [
        { description: "Organ rejection" },
        { description: "Infections and immune system suppression" },
        { description: "Surgical risks and complications" },
        { description: "Post-transplant medication side effects" },
      ],
    },
  ],
  services: [
    {
      heading: "Transplant Services Offered",
      aneurysmSymptoms: [
        { description: "Kidney transplantation" },
        { description: "Liver transplantation" },
        { description: "Heart transplantation" },
        { description: "Lung transplantation" },
        { description: "Pancreas transplantation" },
        { description: "Intestinal transplantation" },
      ],
    },
  ],

  benefits: [
    {
      title: "Directed Donation",
      desc: "Donation to a specific recipient, often a family member or friend.",
    },
    {
      title: "Paired Donation",
      desc: "Swapping of organs between donor-recipient pairs to ensure compatibility.",
    },
    {
      title: "Non-Directed Donation",
      desc: "Anonymous donations to individuals in need, facilitated by transplant programs.",
    },
    {
      title: "Tissue Donation",
      desc: "Gestational tissues donated post-childbirth for medical use.",
    },
  ],
  additionalInfo: [
    {
      title: "Why Choose HCI for Transplantation?",
      content: `HCI ensures ethical, safe, and efficient organ transplantation with a team of dedicated specialists and cutting-edge medical technology.`,
    },
    {
      title: "Who Needs an Organ Transplant?",
      content: `Patients experiencing end-stage organ failure due to chronic illnesses, genetic conditions, or acute injuries may require transplantation.`,
      bullets: [
        "Chronic kidney disease (CKD)",
        "Liver cirrhosis and failure",
        "Heart failure",
        "Lung disease",
        "Type 1 diabetes requiring pancreas transplant",
      ],
    },
    {
      title: "Post-Transplant Care and Recovery",
      content: `After a successful transplant, patients require ongoing monitoring, medication management, and lifestyle adjustments to ensure long-term health and organ function.`,
    },
  ],
  contact: {
    title: "Contact Us Today",
    head: "Contact HCI for Expert in Multi-Organ transplant",
    content:
      "Contact HCI to learn more about our comprehensive multi-organ donation and transplantation services and discover how we can support your journey to a healthier life.",
  },
  footerData: [
    {
      header: "Conclusion",
      paragraph: `Organ donation and transplantation are transformative medical advancements that embody the spirit of generosity and compassion. By bridging the gap between hope and survival, they offer critically ill individuals a second chance at life. With specialized care and informed decisions, donors play an invaluable role in shaping brighter futures for recipients. Despite challenges, organ donation remains a noble and life-changing act, ensuring a legacy of life and health for generations to come.`,
    },
  ],
};
function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <div className="py-4">
          <H1 title={data.title} />
          <H2
            title={data.description}
            className="text-start font-medium text-2xl"
          />
          <p className="font-light">{data.overview}</p>
        </div>
        <FlexBox data={data} />
        <div className="py-4">
          <H2
            title="Types of Living Donor Transplants"
            className="text-2xl font-medium mb-4 text-center"
          />
          <p className="font-light">
            Living donor transplants can take several forms:
          </p>
          <ListBox data={data} />
        </div>
        <H2
          title="Benefits of Organ Donation"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light">
          Organ donation can save up to eight lives and enhance the quality of
          life for many others. Living donors can directly save lives, reduce
          waiting times, and ensure better outcomes for recipients.
        </p>
        <H2
          title="Risks of Organ Donation"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light">
          While the benefits of organ transplantation are profound, risks exist
          for both recipients and donors. Recipients face surgical risks, the
          potential for organ rejection, and increased susceptibility to
          infections. Living donors may experience surgical complications,
          reduced organ function, and logistical challenges such as time off
          work or insurance issues.
        </p>
        <H2
          title="Recovery and Outlook"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light">
          Recovery from organ transplant surgery, whether as a donor or
          recipient, typically spans two to six months. Hospital stays and
          rehabilitation requirements depend on the type of transplant. Despite
          these challenges, organ donation offers unparalleled opportunities to
          save lives and restore health.
        </p>
        <div className="space-y-4 mt-8">
          <Conclusion data={data.footerData} />
          <CTaButton data={data} />

          <FooterLinkOthersTwo head={title} />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default GeneralSurgery;

// generalSurgery.js
import React from 'react'
import Banner from '@/components/Common/Banner'

import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import H1 from '@/components/ui/h1'
import FlexBox from '@/components/cardiacComponents/FlexBox'
import ListBox from '@/components/cardiacComponents/ListBox'
import CTaButton from '@/components/cardiacComponents/CtaButton'

const data = {
  bannerImage: "/others/Gynecology.png",
  title: "Gynecology and Infertility",
  description: `Expert Care for Women's Health`,
  overview: `At Healthcare International (HCI), we are dedicated to supporting women through every stage of life. From routine gynecological care to advanced fertility treatments, HCI partners with leading hospitals and specialists to provide personalized and compassionate healthcare.`,
  sections: [
    {
      title: "What is Gynecology?",
      content: `Gynecology focuses on the diagnosis, treatment, and prevention of conditions affecting the female reproductive system. This includes menstrual health, hormonal disorders, and issues related to pregnancy and fertility.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      title: "What is Infertility?",
      content: `Infertility refers to the inability to conceive after a year of regular, unprotected intercourse. It can affect both women and men, often requiring a multidisciplinary approach to identify and address underlying causes.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      title: "Specialists in Women’s Health",
      content: `HCI collaborates with expert gynecologists, fertility specialists, and endocrinologists to ensure comprehensive care. These professionals are experienced in addressing a wide range of women's health concerns, using advanced diagnostic tools and treatment techniques.`,
      bgColor: "bg-hciPrimary text-white",
    },
  ],
  complications: [
    {
      heading: "",
      aneurysmSymptoms: [
        { description: "Menstrual irregularities and abnormal bleeding" },
        { description: "Polycystic Ovary Syndrome (PCOS)" },
        { description: "Endometriosis" },
        { description: "Uterine fibroids" },
        { description: "Ovarian cysts" },
        { description: "Pelvic inflammatory disease" },
        { description: "Menopause-related symptoms" },
        { description: "Urinary tract infections (UTIs)" },
      ],
    },
  ],
  services: [
    {
      heading: "",
      aneurysmSymptoms: [
        { description: "Hormonal assessments" },
        { description: "Ovulation tracking" },
        { description: "Intrauterine Insemination (IUI)" },
        { description: "In Vitro Fertilization (IVF)" },
        { description: "Intracytoplasmic Sperm Injection (ICSI)" },
        { description: "Egg and sperm freezing" },
        { description: "Donor egg and sperm programmes" },
      ],
    },
  ],

  benefits: [
    {
      title: "Expert Specialists",
      desc: "Access to board-certified gynecologists and fertility experts.",
    },
    {
      title: "Advanced Technology",
      desc: "Partner hospitals are equipped with state-of-the-art diagnostic and treatment facilities.",
    },
    {
      title: "Comprehensive Care",
      desc: "From routine check-ups to complex fertility treatments, we provide end-to-end support.",
    },
    {
      title: "Personalized Treatment Plans",
      desc: "Tailored approaches for every woman and couple, considering individual needs and medical history.",
    },
  ],
  additionalInfo: [
    {
      title: "Why Choose HCI for Gynecology and Infertility Care?",
      content: `HCI's holistic approach ensures that women receive the highest standard of care, combining clinical expertise with empathetic support. Here's why women trust HCI.`,
    },
    {
      title: "When to See a Gynecologist or Fertility Specialist",
      content: `Women are encouraged to see a gynecologist for routine care, including annual exams and screenings. Specific reasons to consult a specialist include:`,
      bullets: [
        "Severe menstrual pain or irregular cycles",
        "Persistent pelvic pain",
        "Unexplained infertility after a year of trying to conceive",
        "Recurrent pregnancy loss",
        "Symptoms of menopause affecting quality of life",
      ],
    },
    {
      title: "Comprehensive Care for Women’s Health",
      content: `At HCI, we recognize that women's health requires a delicate balance of physical, emotional, and reproductive well-being. Whether you're seeking routine gynecological care, guidance on family planning, or advanced infertility treatments, HCI's network of experts are here to guide you every step of the way.`,
    },
  ],
  contact: {
    title: "Contact Us Today",
    head: "Start Your Journey Towards Better Health Today",
    content:
      "Contact HCI to access expert gynecology and infertility care. Let us support you in achieving optimal health and fulfilling your dreams of starting a family.",
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

        <div className="grid lg:grid-cols-2 gap-4 pt-8">
          <div>
            <H2 title="Conditions Treated by Gynecologists" />
            <p className="font-light min-h-16">
              Gynecologists in HCI’s network address a variety of health
              concerns, including:
            </p>
            <DataLists data={data.complications} boxClass="h-[380px]" />
          </div>
          <div>
            <H2 title="Infertility Services" />
            <p className="font-light min-h-16">
              For couples facing challenges in starting a family, HCI offers
              access to cutting-edge fertility care, including:
            </p>
            <DataLists data={data.services} boxClass="h-[380px]" />
          </div>
        </div>

        <H2
          title="Why Choose HCI for Gynecology and Infertility Care?"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light">
          HCI’s holistic approach ensures that women receive the highest
          standard of care, combining clinical expertize with empathetic
          support. Here’s why women trust HCI:
        </p>
        <ListBox data={data} />
        <div className="pt-2">
          <H2
            title="Comprehensive Care for Women’s Health"
            className="text-2xl font-medium mb-4 text-center"
          />
          <p className="font-light">
            At HCI, we recognize that women’s health requires a delicate balance
            of physical, emotional, and reproductive well-being. Whether you’re
            seeking routine gynaecological care, guidance on family planning, or
            advanced infertility treatments, HCI’s network of experts are here
            to guide you every step of the way.
          </p>
        </div>
        <div className="space-y-6 mt-8">
          <CTaButton data={data} />
          <FooterLinks head={data.title} />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default GeneralSurgery;

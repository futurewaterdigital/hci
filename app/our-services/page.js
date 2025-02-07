import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/images/Neurology.png'
import BookButton from '@/components/cardiacComponents/BookButton'

const helpData = [
  {
    title: 'Finding the Right Doctor',
    content:
      "Our global network of leading clinicians allows us to connect you with top specialists. We can even assemble a team to review your records and recommend the best treatment options. Video consultations are available if you'd like to discuss your condition directly with our doctors.",
  },
  {
    title: 'Choosing the Best Hospital',
    content:
      'HCI partners with highly regarded hospitals in India, Egypt, UAE, and Mauritius, all known for advanced technology and patient care. We guide you in selecting a facility that fits your specific medical need.',
  },
  {
    title: 'Understanding Treatment Costs',
    content:
      'To ensure transparency, we provide cost estimates from multiple hospitals, helping you make informed financial decisions. Countries like India and Egypt often offer high-quality care at a fraction of the cost, making treatment accessible and affordable.',
  },
  {
    title: 'Evaluating Success Rates',
    content:
      'We share clinician profiles, patient testimonials, and information about treatment outcomes, so you know what to expect and can make confident choices about your healthcare.',
  },
  {
    title: 'Life after Surgery',
    content:
      'With new technologies like minimally invasive, laser, and robotic surgery, recovery times are shorter, and outcomes are highly successful. We recommend the best procedures for your condition to support a fast and smooth recovery.',
  },
  {
    title: 'Starting the Process',
    content:
      "Submit your medical reports via our form, and our team will reach out within 24 hours with a treatment plan, cost estimate, and other details. You'll have a dedicated manager who will guide you through each step.",
  },
]
const services = [
  {
    title: 'Cardiac Surgery',
    description: 'Cardiac Surgery',
    icon: '/images/Cardiac.svg',
  },
  {
    title: 'Cancer Treatment',
    description: 'Cancer Treatment',
    icon: '/images/Cancer.svg',
  },
  {
    title: 'Brain and Spine Surgery',
    description: 'Brain and Spine Surgery',
    icon: '/images/BrainSpine.svg',
  },
  {
    title: 'Gastroenterology and complicated surgeries',
    description: 'Gastroenterology and complicated surgeries',
    icon: '/images/Gastro.svg',
  },
  {
    title: 'Orthopaedics and Joint Replacement',
    description: 'Orthopaedics and Joint Replacement',
    icon: '/images/Orthopaedics.svg',
  },
  {
    title: 'Organ Transplants (Liver & Kidney)',
    description: 'Organ Transplants (Liver & Kidney)',
    icon: '/images/Organ.svg',
  },
  {
    title: 'Bone Marrow Transplant (for blood cancers)',
    description: 'Bone Marrow Transplant (for blood cancers)',
    icon: '/images/BoneMarrow.svg',
  },
  {
    title: 'Urology and Infertility (IVF)',
    description: 'Urology and Infertility (IVF)',
    icon: '/images/Urology.svg',
  },
  {
    title: 'Ophthalmology',
    description: 'Ophthalmology',
    icon: '/images/Ophthalmology.svg',
  },
  {
    title: 'Dental and Cosmetic Surgery',
    description: 'Dental and Cosmetic Surgery',
    icon: '/images/DentalCosmetic.svg',
  },
]

function Page() {
  return (
    <>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      <div className="container mx-auto p-6">
        <section className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-hciSecondary">
              Our Services
            </h1>
          </div>
        </section>

        <main class="px-4 py-8">
          <div>
            <p class="mt-4 text-center font-light">
              Healthcare International (HCI) is your trusted partner, supporting
              you at every stage of your medical journey. Navigating medical
              decisions, selecting the right healthcare providers, and managing
              logistics can be overwhelming. That&apos;s why HCI streamlines the
              process, providing clear guidance, connecting you with world-class
              healthcare providers, and addressing your concerns - allowing you
              to focus on what truly matters: your health and recovery.
            </p>
          </div>

          <div class="py-8">
            <h3 class="text-2xl font-roboto font-semibold">
              Helping You Find The Right Answers
            </h3>
            <p className="py-4 font-roboto font-light">
              Healthcare can be complex, and seeking treatment abroad adds an
              extra layer of uncertainty. HCI is here to address your key
              questions:
            </p>
            <ul class="list-disc list-inside space-y-2 font-roboto font-light">
              <li>Who is the most qualified doctor for my condition?</li>
              <li>Which hospital best suits my needs?</li>
              <li>How much will treatment cost?</li>
              <li>What are the success rates?</li>
              <li>What can I expect during recovery?</li>
              <li>How do I manage travel and logistics?</li>
              <li>Who will handle post-treatment follow-up?</li>
            </ul>
          </div>
          <section class="mb-8">
            <h3 class="text-2xl font-bold mb-4 text-center font-roboto">
              How We Help
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {helpData.map((section, index) => (
                <div key={index} className="p-4 bg-hciYellow rounded-lg">
                  <h4 className="text-xl font-bold mb-2 text-center font-roboto">
                    {section.title}
                  </h4>
                  <p className="text-center font-light">{section.content}</p>
                </div>
              ))}
            </div>
          </section>
          <section class="">
            <h3 class="text-2xl font-bold text-hciPrimary font-roboto">
              Handling Logistics
            </h3>
            <p className="py-4 font-light">
              We manage all logistics to make your experience as smooth as
              possible, including
            </p>
            <ul class="list-disc list-inside space-y-2 font-light">
              <li>Visa assistance and invitation letters</li>
              <li>Airport pickup and drop-off</li>
              <li>Accommodation bookings near your hospital</li>
              <li>City orientation and recommended Apps for your stay</li>
              <li>Currency exchange and money transfer guidance</li>
              <li>Translation services (French, Bangla, Arabic)</li>
              <li>Appointment scheduling and hospital coordination</li>
            </ul>
          </section>
        </main>
      </div>
      <section class="text-center">
        <h3 class="text-2xl font-bold mb-4 font-roboto">
          What treatments do we specialize in?
        </h3>
        <p class=" mb-4 font-light">
          With experience in over 50 specialties, HCI has supported patients
          from 125+ countries. Our specialties include:
        </p>
      </section>
      <div className="bg-hciPrimary ">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 container mx-auto p-6">
          {services.map((service, index) => (
            <div
              class="p-4 bg-white border rounded-lg flex flex-col items-center justify-center"
              key={index}
            >
              <img
                alt={service.title}
                class="mx-auto mb-2 h-12"
                src={service.icon}
              />
              <p className="text-center font-light">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-6">
        <section class="text-center py-8">
          <p class="mb-4 font-light">
            Whether you&apos;re a Kenyan seeking orthopaedic care in the UAE or
            India, a family from Nigeria seeking neurological care for a child
            in India, or a Bangladeshi couple pursuing transplant surgery, HCI
            is here to guide and support you every step of the way.
          </p>
          <p class="mb-4 font-light">
            HCI bridges the gap between you and the world&apos;s best healthcare
            providers, empowering you with peace of mind and confidence on your
            journey to recovery. We strive to be the #1 choice for patients
            worldwide seeking medical treatment abroad.
          </p>
          <BookButton />
        </section>
      </div>
    </>
  )
}

export default Page

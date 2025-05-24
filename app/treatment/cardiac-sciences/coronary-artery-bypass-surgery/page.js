import React from "react";
import Banner from "@/components/Common/Banner";
const bannerImage = "/cardio/CoronaryArteryBypassSurgery.png";
import DataSurgery from "@/components/cardiacComponents/Button";
import DataBoxes from "@/components/cardiacComponents/Box";
import FooterLinks from "@/components/cardiacComponents/FooterLinkTwo";
import BookButton from "@/components/cardiacComponents/BookButton";
import SimpleLists from "@/components/cardiacComponents/SimpleLists";
import DataLists from "@/components/cardiacComponents/Bullets";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import Conclusion from "@/components/cardiacComponents/Conclusion";

const title = "Coronary Artery Bypass Surgery";
const surgeryInclude = [
  {
    title: "Coronary artery bypass grafting",
    description: "",
    minHeight: "h-[80px]",
  },
  {
    title: "CABG",
    description: "",
    minHeight: "h-[80px]",
  },

  {
    title: "Heart bypass surgery",
    description: "",
    minHeight: "h-[80px]",
  },
  {
    title: "Coronary artery bypass graft surgery",
    description: "",
    minHeight: "h-[80px]",
  },
];
const vascularConditions = [
  {
    category: "",
    description:
      "There is a <strong class='font-medium'>blockage in the left main coronary artery</strong>, which supplies most of the heart's blood.",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description:
      "A blockage can't be managed with less invasive treatments like <strong class='font-medium'>angioplasty or stenting</strong>, or if previous procedures have failed.",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description:
      "You experience <strong class='font-medium'>severe chest pain</strong> due to narrowed arteries that limit blood flow even during rest.",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description:
      "An emergency bypass is needed during a <strong class='font-medium'>heart attack</strong> when other treatments are ineffective.",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description:
      "Multiple heart arteries are diseased, and the heart's main pumping chamber (left ventricle) isn't functioning well.",
    bgColor: "bg-hciYellow",
  },
];
const dataLists = [
  {
    title:
      '<span class="text-hciSecondary font-medium">Bleeding</span><span class="text-black"> or infection at the surgical site</span> ',
    description: "",
  },
  {
    title:
      '<span class="text-hciSecondary font-medium">Arrhythmias</span><span class="text-black"> (irregular heartbeats)</span>',
    description: "",
  },
  {
    title:
      '<span class="text-black">Blood clots, which can lead to a</span> <span class="text-hciSecondary font-medium">heart attack or stroke</span><span class="text-black">.</span>',
    description: "",
  },
  {
    title:
      '<span class="text-hciSecondary font-medium">Kidney problems</span><span class="text-black"> or temporary memory issues</span>',
    description: "",
  },
  {
    title:
      '<span class="text-black">Prolonged dependence on a breathing machine in rare cases</span>',
    description: "",
  },
];
const dataList = [
  {
    title:
      '<span class="text-black">Follow instructions on dietary changes and medication adjustments.</span>',
    description: "",
  },
  {
    title:
      '<span class="text-black">Arrange for someone to assist you after discharge.</span>',
    description: "",
  },
  {
    title:
      '<span class="text-black">Undergo necessary heart and blood tests in the days leading up to surgery.</span>',
    description: "",
  },
];
const bypassSurgery = [
  {
    heading: "",
    aneurysmSymptoms: [
      {
        title: "",
        description: `<span class="text-hciSecondary font-medium ">General Anesthesia</span> is administered, ensuring you're in a sleep-like state.`,
      },
      {
        title: "",
        description: `A <span class="text-hciSecondary font-medium">breathing tube</span> is inserted and connected to a ventilator.`,
      },
      {
        title: "",
        description: `If on-pump surgery is performed, a <span class="text-hciSecondary font-medium">heart-lung machine</span> takes over the heart's functions while the heart is temporarily stopped.`,
      },
      {
        title: "",
        description: `A section of a healthy blood vessel, called a graft, is attached to bypass the blockage.`,
      },
    ],
  },
];
const advancedApproaches = [
  {
    heading: "",
    aneurysmSymptoms: [
      {
        title: "",
        description: `<span class="text-hciSecondary font-medium">Off-pump or beating-heart surgery</span>, which doesn't use a heart-lung machine.`,
      },
      {
        title: "",
        description: `<span class="text-hciSecondary font-medium">Minimally invasive bypass surgery</span>, performed through small incisions instead of opening the chest.`,
      },
    ],
  },
];

const footerData = [
  {
    header: "Conclusion",
    paragraph: `
        By adopting these lifestyle changes, you can improve your overall
              heart health and minimize the risk of needing additional
              procedures.`,
  },
];

function page() {
  return (
    <div>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      {/* <!-- Content --> */}
      <div className="lg:container mx-auto p-6">
        <H1 title={title} />
        <p className="text-start mt-8 font-light">
          Coronary artery bypass surgery, often called
          {` `}
          <strong>CABG</strong>
          {` `}
          (pronounced &apos;cabbage&apos;), creates a new route for blood to
          flow around a blocked or narrowed coronary artery. This procedure
          involves using a healthy blood vessel, often taken from the chest,
          arm, or leg, to bypass the blockage. The new blood flow restores
          oxygen supply to the heart muscle, reducing symptoms such as chest
          pain and improving overall heart function.
        </p>
        <div className="py-4">
          <H2
            title="Alternative Names for the Surgery Include"
            className="text-center font-medium text-2xl"
          />
          <DataSurgery data={surgeryInclude} />
          <p className="py-4 text-start font-light">
            While the surgery doesn&apos;t cure the underlying heart condition
            like atherosclerosis or coronary artery disease, it alleviates
            symptoms and reduces the risk of life-threatening complications such
            as heart attacks.
          </p>
        </div>
        <div>
          <DataBoxes
            title="Why is it Performed"
            titleCss="text-2xl font-medium text-center text-black mb-4"
            text="This surgery is recommended for restoring blood flow when one or more coronary arteries are severely blocked or narrowed.<p class='py-4 font-medium text-lg'><strong class='font-medium'>Your healthcare provider may suggest coronary artery bypass surgery if:</strong></p>"
            data={vascularConditions}
            myclass="grid lg:grid-cols-2"
            textCss="font-light"
          />
        </div>
        <div className="mt-8">
          <div className="grid lg:grid-cols-2 gap-4">
            <SimpleLists
              data={dataLists}
              heading="Risks of Coronary Artery Bypass Surgery"
              headingCss="font-medium"
              subHeading="As with any major surgery, there are risks involved. These may include:"
            />
            <SimpleLists
              data={dataList}
              heading="Preparation for Surgery"
              headingCss="font-medium"
              subHeading="Before the surgery:"
            />
          </div>
          <p className="py-4 font-light">
            Certain factors, like diabetes, kidney disease, or chronic
            obstructive pulmonary disease (COPD), can increase the risk of
            complications.
          </p>
        </div>

        <div>
          <H2
            title="What to Expect During the Procedure"
            className="text-center mt-8 mb-4 font-medium text-2xl"
          />

          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <p className="h-12 font-light mb-4">
                Coronary artery bypass surgery typically lasts 3 to 6 hours and
                involves the following steps:
              </p>
              <DataLists
                data={bypassSurgery}
                boxClass={"border border-hciSecondary rounded-lg p-4 shadow-lg h-[260px]"}
                ulClass="list-disc list-outside text-hciSecondary h-40"
              />
            </div>
            <div>
              <p className="h-12 font-light mb-4">
                Some advanced approaches include:
              </p>
              <DataLists
                data={advancedApproaches}
                boxClass={"border border-hciSecondary rounded-lg p-4 shadow-lg h-[260px]"}
                ulClass="list-disc list-outside text-hciSecondary h-40"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <section className="mb-8 gap-4 grid mt-4">
            <div className="border border-hciSecondary rounded-lg p-4 shadow-lg h-[260px]">
              <H2
                title="After the Surgery"
                className="mb-4 font-medium text-lg"
              />
              <p className="mb-4 font-light">
                Post-surgery care involves close monitoring and gradually
                resuming activities:
              </p>
              <ul className="list-disc list-inside mb-4 font-light space-y-2 text-black [&>li::marker]:text-hciSecondary">

                <li>
                  A{" "}
                  <strong className="font-medium text-hciSecondary">breathing tube</strong>{" "}
                  remains until you can breathe on your own.
                </li>
                <li>
                  Expect a{" "}
                  <strong className="font-medium text-hciSecondary">hospital stay</strong>{" "}
                  of about 5 to 7 days, with initial recovery in an ICU.
                </li>
                <li>
                  <strong className="font-medium text-hciSecondary">
                    Cardiac rehabilitation
                  </strong>{" "}
                  begins early to improve heart health and prevent future
                  issues.
                </li>
              </ul>
            </div>
            <div className="border border-hciSecondary rounded-lg p-4 shadow-lg h-[260px]">
              <p className="mb-4 font-medium text-lg ">
                Contact your healthcare provider if you notice:
              </p>
              <ul className="list-disc list-inside mb-4 font-light space-y-2 text-black [&>li::marker]:text-hciSecondary">

                <li>Fever or rapid heart rate.</li>
                <li>New or worsening chest pain.</li>
                <li>Discharge, redness, or swelling near the surgical site.</li>
              </ul>
              <p className="font-light">
                Recovery typically takes 6 to 12 weeks. You can return to daily
                activities, including driving, work, or exercise, as advised by
                your doctor.
              </p>
            </div>
          </section>
          <section className="mb-8 gap-4 grid mt-4">
            <div className="border border-hciSecondary rounded-lg p-4 shadow-lg h-[260px]">
              <H2
                title="Results and Long-Term Care"
                className="mb-4 font-medium text-lg"
              />
              <p className="mb-4 font-light">
                Most people experience significant relief from symptoms and
                improved quality of life after coronary artery bypass surgery.
                However, grafts or arteries may narrow again over time.
              </p>
            </div>
            <div className="border border-hciSecondary rounded-lg p-4 shadow-lg h-[260px]">
              <p className="mb-4 font-medium text-lg">
                To maintain your heart health:
              </p>
              <ul className="list-disc list-inside mb-4 font-light space-y-2 text-black [&>li::marker]:text-hciSecondary">

                <li>
                  <strong className="font-medium text-hciSecondary">Quit smoking</strong>{" "}
                  and avoid second-hand smoke.
                </li>
                <li>
                  Follow a{" "}
                  <strong className="font-medium text-hciSecondary">
                    heart-healthy diet
                  </strong>{" "}
                  rich in fruits, vegetables, and whole grains.
                </li>
                <li>
                  <strong className="font-medium text-hciSecondary">
                    Exercise regularly
                  </strong>{" "}
                  under medical guidance.
                </li>
                <li>
                  Manage stress and consider mindfulness or support groups.
                </li>
                <li>
                  Control conditions like{" "}
                  <strong className="font-medium text-hciSecondary">
                    diabetes, high blood pressure, and high cholesterol
                  </strong>
                  .
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="mt-2 space-y-6">
          <Conclusion data={footerData} />
          <FooterLinks head={title} />
          <BookButton />
        </div>
      </div>
    </div>
  );
}

export default page;

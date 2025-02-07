import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/CoronaryArteryBypassSurgery.png'
import DataSurgery from '@/components/cardiacComponents/Button'
import DataBoxes from '@/components/cardiacComponents/Box'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import BookButton from '@/components/cardiacComponents/BookButton'
import SimpleLists from '@/components/cardiacComponents/SimpleLists'
import DataLists from '@/components/cardiacComponents/Bullets'

const surgeryInclude = [
  {
    title: 'Coronary artery bypass grafting',
    description: '',
  },
  {
    title: 'Coronary artery bypass graft surgery',
    description: '',
  },
  {
    title: 'Heart bypass surgery',
    description: '',
  },
  {
    title: 'CABG',
    description: '',
  },
]

const vascularConditions = [
  {
    category: '',
    description:
      "There is a <strong>blockage in the left main coronary artery</strong>, which supplies most of the heart's blood.",
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description:
      "A blockage can't be managed with less invasive treatments like <strong>angioplasty or stenting</strong>, or if previous procedures have failed.",
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description:
      'You experience <strong>severe chest pain</strong> due to narrowed arteries that limit blood flow even during rest.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description:
      'An emergency bypass is needed during a <strong>heart attack</strong> when other treatments are ineffective.',
    bgColor: 'bg-hciYellow',
  },
  {
    category: '',
    description:
      "Multiple heart arteries are diseased, and the heart's main pumping chamber (left ventricle) isn't functioning well.",
    bgColor: 'bg-hciYellow',
  },
]

const dataLists = [
  {
    title: 'Bleeding or infection at the surgical site',
    description: '',
  },
  {
    title: 'Arrhythmias (irregular heartbeats)',
    description: '',
  },
  {
    title: 'Blood clots',
    description: '',
  },
  {
    title: 'Kidney problems or temporary memory issues',
    description: '',
  },
  {
    title: 'Prolonged dependence on a breathing machine',
    description: '',
  },
]

const dataList = [
  {
    title: 'Follow instructions on dietary changes and medication adjustments.',
    description: '',
  },
  {
    title: 'Arrange for someone to assist you after discharge.',
    description: '',
  },
  {
    title:
      'Undergo necessary heart and blood tests in the days leading up to surgery.',
    description: '',
  },
]

const bypassSurgery = [
  {
    heading: '',
    aneurysmSymptoms: [
      {
        title: '',
        description: `General Anesthesia is administered, ensuring you're in a sleep-like state.`,
      },
      {
        title: '',
        description: `A breathing tube is inserted and connected to a ventilator.`,
      },
      {
        title: '',
        description: `If on-pump surgery is performed, a heart-lung machine takes over the heart's functions while the heart is temporarily stopped.`,
      },
      {
        title: '',
        description: `A section of a healthy blood vessel, called a graft, is attached to bypass the blockage.`,
      },
    ],
  },
]
const advancedApproaches = [
  {
    heading: '',
    aneurysmSymptoms: [
      {
        title: '',
        description: `General Anesthesia is administered, ensuring you're in a sleep-like state.`,
      },
      {
        title: '',
        description: `A breathing tube is inserted and connected to a ventilator.`,
      },
      {
        title: '',
        description: `If on-pump surgery is performed, a heart-lung machine takes over the heart's functions while the heart is temporarily stopped.`,
      },
      {
        title: '',
        description: `A section of a healthy blood vessel, called a graft, is attached to bypass the blockage.`,
      },
    ],
  },
]

function page() {
  return (
    <div>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      {/* <!-- Content --> */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-pink-500 text-center mb-4">
          Coronary Artery Bypass Surgery
        </h1>
        <p className="text-center mb-8">
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
          <h2 className="text-xl font-bold mb-2 text-center">
            Alternative Names for the Surgery Include
          </h2>
          <DataSurgery data={surgeryInclude} />
          <p className="py-4">
            While the surgery doesn&apos;t cure the underlying heart condition
            like atherosclerosis or coronary artery disease, it alleviates
            symptoms and reduces the risk of life-threatening complications such
            as heart attacks.
          </p>
        </div>
        <div>
          <DataBoxes
            title="Why is it Performed"
            text="This surgery is recommended for restoring blood flow when one or more coronary arteries are severely blocked or narrowed.<p class='py-4'><strong>Your healthcare provider may suggest coronary artery bypass surgery if:</strong></p>"
            data={vascularConditions}
            myclass="grid grid-cols-2"
          />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <SimpleLists
              data={dataLists}
              heading="Risks of Coronary Artery Bypass Surgery"
              subHeading="As with any major surgery, there are risks involved. These may include:"
            />
            <SimpleLists
              data={dataList}
              heading="Preparation for Surgery"
              subHeading="Before the surgery:"
            />
          </div>
          <p className="py-4">
            Certain factors, like diabetes, kidney disease, or chronic
            obstructive pulmonary disease (COPD), can increase the risk of
            complications.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            What to Expect During the Procedure
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>
                Coronary artery bypass surgery typically lasts 3 to 6 hours and
                involves the following steps:
              </p>
              <DataLists data={bypassSurgery} />
            </div>
            <div>
              <p>Some advanced approaches include:</p>
              <DataLists data={advancedApproaches} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">After the Surgery</h2>
            <p className="mb-4">
              Post-surgery care involves close monitoring and gradually resuming
              activities:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                A <strong className="text-hciSecondary">breathing tube</strong>{' '}
                remains until you can breathe on your own.
              </li>
              <li>
                Expect a{' '}
                <strong className="text-hciSecondary">hospital stay</strong> of
                about 5 to 7 days, with initial recovery in an ICU.
              </li>
              <li>
                <strong className="text-hciSecondary">
                  Cardiac rehabilitation
                </strong>{' '}
                begins early to improve heart health and prevent future issues.
              </li>
            </ul>
            <p className="mb-4">
              Contact your healthcare provider if you notice:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Fever or rapid heart rate.</li>
              <li>New or worsening chest pain.</li>
              <li>Discharge, redness, or swelling near the surgical site.</li>
            </ul>
            <p>
              Recovery typically takes 6 to 12 weeks. You can return to daily
              activities, including driving, work, or exercise, as advised by
              your doctor.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Results and Long-Term Care
            </h2>
            <p className="mb-4">
              Most people experience significant relief from symptoms and
              improved quality of life after coronary artery bypass surgery.
              However, grafts or arteries may narrow again over time.
            </p>
            <p className="mb-4 font-semibold">To maintain your heart health:</p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong className="text-hciSecondary">Quit smoking</strong> and
                avoid second-hand smoke.
              </li>
              <li>
                Follow a{' '}
                <strong className="text-hciSecondary">
                  heart-healthy diet
                </strong>{' '}
                rich in fruits, vegetables, and whole grains.
              </li>
              <li>
                <strong className="text-hciSecondary">
                  Exercise regularly
                </strong>{' '}
                under medical guidance.
              </li>
              <li>Manage stress and consider mindfulness or support groups.</li>
              <li>
                Control conditions like{' '}
                <strong className="text-hciSecondary">
                  diabetes, high blood pressure, and high cholesterol
                </strong>
                .
              </li>
            </ul>
            <p>
              By adopting these lifestyle changes, you can improve your overall
              heart health and minimize the risk of needing additional
              procedures.
            </p>
          </section>
        </div>
        <FooterLinks head="Coronary Artery Bypass Surgery" />
        <BookButton />
      </div>
    </div>
  )
}

export default page

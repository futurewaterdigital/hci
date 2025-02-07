import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/cardio/main-banner.png'

function page() {
  return (
    <div>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      {/* <!-- Content --> */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-pink-500 text-center mb-4">
          Angioplasty
        </h1>
        <p className="text-start mb-6">
          Angioplasty, also known as{' '}
          <strong>percutaneous coronary intervention (PCI)</strong>, is a
          minimally invasive procedure designed to open blocked or narrowed
          coronary arteries caused by coronary artery disease (CAD). By
          restoring blood flow to the heart, it alleviates symptoms such as
          chest pain and reduces the risk of a heart attack. Angioplasty can be
          performed in emergency cases like heart attacks or scheduled as
          elective surgery for diagnosed heart conditions.
        </p>
        <h2 className="text-xl font-bold mb-2 text-center py-10">
          How is Angioplasty Performed?
        </h2>
        <p className="mb-6">
          During angioplasty, a thin tube (catheter) with a small balloon at its
          tip is inserted into a blood vessel, usually in the groin or wrist.
          Using X-ray imaging called <strong>fluoroscopy</strong>, the catheter
          is guided to the blocked artery. The balloon is then inflated to push
          the plaque against the artery walls, creating more space for blood
          flow.
        </p>
        <p className="mb-6">
          In most cases, a <strong>stent</strong> (a small, expandable metal
          mesh) is placed to keep the artery open and prevent re-narrowing.
          Stents may be coated with medication (
          <strong>drug-eluting stents</strong>) to minimize scar tissue
          formation or may be bare metal stents without medication.
        </p>
        <h2 className="text-xl font-bold mb-4">Additional Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-hciPrimary p-4 rounded text-white">
            <h3 className="font-bold">Atherectomy:</h3>
            <p>Sometimes, the plaque is removed using a rotating catheter.</p>
          </div>
          <div className="bg-hciPrimary p-4 rounded text-white">
            <h3 className="font-bold">Brachytherapy:</h3>
            <p>
              In rare cases, radiation therapy is used to treat scar tissue
              within the stent.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-gray-300 p-4 rounded">
            <h3 className="text-hciPrimary font-bold mb-2">
              Why is Angioplasty needed?
            </h3>
            <p className="text-hciSecondary py-1">
              Angioplasty is recommended for conditions such as:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Blocked coronary arteries causing chest pain or reduced blood
                flow
              </li>
              <li>Heart attack requiring immediate intervention</li>
              <li>
                Significant narrowing detected during coronary angiography
              </li>
            </ul>
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded">
            <h3 className="font-bold text-hciPrimary mb-2">
              Risks associated with Angioplasty
            </h3>
            <p className="text-hciSecondary py-1">
              While generally safe, angioplasty carries some risks, including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Bleeding or infection at the catheter insertion site</li>
              <li>Blood clots or damage to blood vessels</li>
              <li>Allergic reactions to the contrast dye</li>
              <li>Abnormal heart rhythms, heart attack, or stroke</li>
              <li>Kidney damage from the dye used</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded">
            <h3 className="font-bold text-hciPrimary mb-2">
              Preparing for Angioplasty
            </h3>
            <p className="text-hciSecondary py-1">Preparation involves:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Informing your healthcare team about allergies, medications, or
                existing conditions
              </li>
              <li>Fasting for several hours before the procedure</li>
              <li>Stopping certain medications, if advised</li>
              <li>Ensuring arrangements for post-procedure transportation</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded">
            <h3 className="font-bold text-hciPrimary mb-2">
              What happens during Angioplasty?
            </h3>
            <p className="text-hciSecondary py-1">
              The procedure typically takes 1-2 hours, and most patients spend
              one night in the hospital for observation.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-hciSecondary">Sedation:</strong>
                You&apos;ll receive medication to help you relax but remain
                awake.
              </li>
              <li>
                <strong className="text-hciSecondary">Insertion:</strong>A
                catheter is inserted through a sheath into the blood vessel.
              </li>
              <li>
                <strong className="text-hciSecondary">
                  Imaging and Inflation:
                </strong>
                Contrast dye is used to locate the blockage, and the balloon is
                inflated to open the artery.
              </li>
              <li>
                <strong className="text-hciSecondary">Stent Placement:</strong>A
                stent is deployed, if necessary, to maintain blood flow.
              </li>
            </ul>
            <p>
              The procedure typically takes 1-2 hours, and most patients spend
              one night in the hospital for observation.
            </p>
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded">
            <h3 className="font-bold text-hciPrimary mb-2">
              Recovery after Angioplasty
            </h3>
            <p className="text-hciSecondary py-1">
              Post-procedure care includes:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Monitoring for bleeding or complications at the insertion site
              </li>
              <li>
                Avoiding strenuous activities or heavy lifting for a few days
              </li>
              <li>
                Taking prescribed antiplatelet medications to prevent blood
                clots
              </li>
              <li>Drinking plenty of fluids to flush out the contrast dye</li>
            </ul>
            <p className="pt-2">
              Patients can usually resume normal activities within a week, but
              driving and heavy exertion should be avoided until cleared by the
              healthcare provider.
            </p>
          </div>
          <div className="bg-white border border-gray-300 p-4 rounded">
            <h3 className="font-bold text-hciPrimary mb-2">
              When to seek Medical Attention
            </h3>
            <p className="text-hciSecondary py-1">
              Contact your healthcare team if you experience:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Fever, chills, or signs of infection</li>
              <li>Persistent bleeding or swelling at the insertion site</li>
              <li>
                Chest pain or other heart-related symptoms reactions to the
                contrast dye
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start mb-6 underline space-y-2">
          <a className="text-hciPrimary block" href="#">
            To Consult The Best Doctor For Angioplasty, Click Here.
          </a>
          <a className="text-hciPrimary block" href="#">
            For The Best Hospital For Angioplasty In India, Click Here
          </a>
          <a className="text-hciPrimary block" href="#">
            For The Best Hospital For Angioplasty In Bangalore, Click Here
          </a>
          <a className="text-hciPrimary block" href="#">
            For The Best Hospital For Angioplasty In Chennai, Click Here
          </a>
          <a className="text-hciPrimary block" href="#">
            For The Best Hospital For Angioplasty In Delhi, Click Here
          </a>
          <a className="text-hciPrimary block" href="#">
            For The Best Hospital For Angioplasty In Hyderabad, Click Here
          </a>
          <a className="text-hciPrimary block" href="#">
            For The Best Hospital For Angioplasty In Mumbai, Click Here
          </a>
        </div>
        <div className="text-center mb-6">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  )
}

export default page

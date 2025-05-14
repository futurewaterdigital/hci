import React from "react";
import Banner from "@/components/Common/Banner";
const bannerImage = "/cardio/HearFailure.png";
import DataBoxes from "@/components/cardiacComponents/Box";
import DataLists from "@/components/cardiacComponents/Bullets";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import BookButton from "@/components/cardiacComponents/BookButton";
import KnowMore from "@/components/ui/KnowMore";
import H2 from "@/components/ui/h2";
import H1 from "@/components/ui/h1";
import DataSurgery from "@/components/cardiacComponents/Button";
import Conclusion from "@/components/cardiacComponents/Conclusion";
const title = "Heart Failure";

const commonCauses = [
  {
    title: "Coronary artery disease",
    description:
      "This occurs when the arteries that supply blood to the heart muscle become narrow, causing the heart to work harder to pump blood. Eventually, coronary artery disease can weaken the heart muscle and affect the heart’s pumping ability.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    title: "Heart attack",
    description:
      "A heart attack (myocardial infarction) can cause scar tissue that interferes with the heart’s ability to pump. Heart attacks are usually caused by blockages in the heart’s arteries.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    title: "High blood pressure",
    description:
      "Also called hypertension, this increased pressure on the artery walls can lead to heart failure.",
    bgColor: "bg-hciSecondary text-white",
  },
];

const otherCauses = [
  {
    category: "Cardiomyopathy",
    description:
      "This is a disease in the heart muscle that makes the heart less able to pump blood effectively. Several conditions can cause cardiomyopathy, including amyloidosis and sarcoidosis.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Congenital heart defects",
    description:
      "Structural problems in the heart that are present from birth.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Lung disease",
    description:
      "Examples include chronic obstructive pulmonary disease (COPD), emphysema or pulmonary embolism (blood clot in the lungs). Lung conditions often cause low oxygen levels. Low oxygen can put extra strain on the heart, weakening it and possibly leading to heart failure.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Diabetes",
    description: "Complications of diabetes can lead to heart failure.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Infection",
    description:
      "Previous infections like endocarditis, myocarditis, or rheumatic fever can lead to heart failure.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Arrhythmias",
    description:
      "Irregular heartbeat can affect the heart's ability to pump effectively.",
    bgColor: "bg-hciSecondary text-white",
  },
];

const typesOfHeartFailure = [
  {
    category: "",
    description:
      "Aldosterone blockers block the effects of the hormone aldosterone, encouraging the body to release sodium and water. They also help prevent scarring in the heart.",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "",
    description:
      "Angiotensin receptor-neprilysin inhibitor (ARNI): Treatment with sacubitril-valsartan reduces excess fluid in the body and relaxes blood vessels. This makes it easier for your heart to pump blood. Alternatives to ARNIs include angiotensin-converting enzyme (ACE) inhibitors and angiotensin receptor blockers (ARBs).",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "",
    description:
      "Beta blockers make the heart beat more slowly and with less force. They also help keep heart rhythm regular.",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "",
    description:
      "Sodium-glucose transport protein 2 (SGLT2) inhibitors are diabetes drugs that have recently been found to be very beneficial in heart failure. They help remove glucose (sugar) via the kidneys into the urine.",
    bgColor: "bg-hciYellow text-black",
  },
];

const treatmentMedications = [
  {
    category: "",
    description: "Diuretics reduce the amount of fluid in the body.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "",
    description:
      "Vasodilators dilate (open) the blood vessels and reduce the heart’s workload.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "",
    description:
      "Digoxin helps the heart beat stronger with a more regular rhythm.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "",
    description:
      "Antiarrhythmics control arrhythmia and maintain normal heart rhythm.",
    bgColor: "bg-hciSecondary text-white",
  },
];

const complications = [
  {
    heading: "What are the possible complications of heart failure?",
    description: "Complications of heart failure include:",
    aneurysmSymptoms: [
      {
        title: "",
        description: "Arrhythmia",
      },
      {
        title: "",
        description:
          "Blood clots, which can lead to pulmonary embolism or stroke",
      },
      {
        title: "",
        description: "Impaired kidney function or liver function",
      },
      {
        title: "",
        description:
          "Muscle wasting (loss of muscle tissue throughout the body)",
      },
      {
        title: "",
        description: "Pulmonary edema (extra fluid in the lungs)",
      },
      {
        title: "",
        description: "Respiratory distress ",
      },
    ],
  },
];

const prevention = [
  {
    heading: "What is heart failure versus heart attack and cardiac arrest?",
    aneurysmSymptoms: [
      {
        title: "",
        description:
          "Heart failure, heart attack and cardiac arrest are different kinds of heart disease. They can be related to each other, but they’re not the same thing.",
      },
      {
        title: "",
        description:
          "With heart failure, the heart keeps pumping, just not as effectively. ",
      },
      {
        title: "",
        description:
          "With heart attack (myocardial infarction), blood flow to the heart is blocked, and heart muscle begins to die.",
      },
      {
        title: "",
        description: "Cardiac arrest means the heart stops beating",
      },
    ],
  },
];

const someMedications = [
  {
    category: "",
    description: "Certain anti-arrhythmic medications",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "",
    description:
      "Ibuprofen, naproxen and other nonsteroidal anti-inflammatory drugs (NSAIDs) that treat pain and inflammation",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "",
    description:
      "Specific calcium channel blockers to treat high blood pressure",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "",
    description: "Specific types of chemotherapy for cancer",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "",
    description:
      "Tricyclics and selective serotonin reuptake inhibitors, which treat depression",
    bgColor: "bg-hciYellow text-black",
  },
];

const symptoms = [
  {
    category: "",
    description:
      "People can experience heart failure differently. Sometimes symptoms appear suddenly, and sometimes they develop slowly over time.",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "",
    description:
      "The most common heart failure symptoms are shortness of breath and swelling in the lower body.",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "Types of Heart Failure",
    description: `The main types of heart failure are named for where they occur in the heart:
    <ul class='list-disc list-inside text-hciSecondary mt-2'>
      <li><span class="text-black">Left-sided heart failure</span></li>
      <li><span class="text-black">Right-sided heart failure</span></li>
      <li><span class="text-black">Biventricular heart failure (both sides)</span></li>
    </ul>
    `,
    bgColor: "bg-hciYellow text-black",
  },
];

const conclusionData = [
  {
    header: "Conclusion",
    paragraph:
      "Heart failure is a serious condition that weakens the heart’s ability to pump blood efficiently, often requiring lifelong management. With timely diagnosis, appropriate treatment and lifestyle changes, patients can lead improved and fulfilling lives.",
  },
];

export default function page() {
  return (
    <div>
      <Banner image={bannerImage} />
      <main className="lg:container mx-auto py-8 px-6">
        <div className="space-y-4">
          <H1 title={title} />
          <p className="text-start font-light">
            Heart failure is a condition that occurs when the heart can&apos;t
            pump as well as it should. This may happen when the heart muscle
            becomes weak or stiff. As a result, it doesn&apos;t deliver enough
            blood to the rest of the body. When the body doesn&apos;t get enough
            blood, it doesn&apos;t get enough oxygen and nutrients.
          </p>
        </div>

        <div className="space-y-4">
          <H2
            title="What Causes Heart Failure?"
            className="text-center font-medium mt-8 text-2xl"
          />
          <p className="mt-4 text-start font-light">
            Heart failure is usually caused by another health problem.
            Understanding the various causes helps in prevention and treatment.
          </p>
          <div className="grid lg:grid-cols-1 gap-4">
            <DataSurgery data={commonCauses} />
          </div>

          <div className="grid lg:grid-cols-1 gap-4">
            <DataBoxes
              title=""
              text=""
              header="Other heart failure causes include:"
              headerCss="text-2xl text-start font-medium capitalize"
              data={otherCauses}
              myclass="grid grid-cols-2"
            />
          </div>
        </div>

        <KnowMore title={title} />

        <div className="grid lg:grid-cols-2 gap-4 mt-8">
          <DataBoxes
            title=""
            text=""
            header="In addition, some medications can worsen heart failure or interfere with heart medicines, including:"
            headerCss="text-xl text-start font-medium capitalize h-24"
            data={someMedications}
            myclass="grid grid-cols-1"
          />
          <DataBoxes
            title=""
            text=""
            header="What are the symptoms of heart failure?"
            headerCss="text-xl text-start font-medium capitalize h-24"
            data={symptoms}
            myclass="grid grid-cols-1"
          />
        </div>
        <KnowMore title={title} />

        <div class="my-12">
          <div class="border border-pink-200 rounded-lg p-6">
            <h2 class="text-2xl font-medium mb-6">
              Clinicians also may classify Heart Failure as:
            </h2>

            <div class="space-y-4 mb-6">
              <div>
                <h3 class="text-pink-500 font-medium">Acute:</h3>
                <p class="text-gray-700 font-light">
                  You have active symptoms of heart failure, with either a new
                  diagnosis or with long-term (chronic) heart failure.
                </p>
              </div>
              <div>
                <h3 class="text-pink-500 font-medium">Chronic:</h3>
                <p class="text-gray-700 font-light">
                  You have a history of heart failure, but your condition is
                  relatively stable with no symptoms or with manageable
                  symptoms.
                </p>
              </div>
            </div>

            <div class="mb-6">
              <h3 class="text-pink-500 font-medium mb-2">
                Left-sided heart failure
              </h3>
              <p class="text-gray-700 font-light mb-4">
                Left-sided heart failure involves the left ventricle (bottom
                left chamber of the heart). When the left ventricle doesn&apos;t
                pump enough blood, it backs up in the blood vessels that carry
                blood away from the lungs. It&apos;s the most common type of
                heart failure, and tends to cause breathing symptoms.
              </p>

              <h4 class="text-pink-500 font-medium mb-2">
                Left-sided heart failure can be classified further as heart
                failure with reduced or preserved ejection fraction:
              </h4>
              <ul class="list-disc pl-6 space-y-2 font-light text-hciSecondary">
                <li>
                  <span class="text-black">
                    In heart failure with preserved ejection fraction (sometimes
                    called diastolic heart failure), the left ventricle
                    can&apos;t relax normally. As a result, the heart can&apos;t
                    fill with blood between beats and things back up.
                  </span>
                </li>
                <li>
                  <span class="text-black">
                    In heart failure with reduced ejection fraction (or systolic
                    heart failure), the left ventricle can&apos;t contract
                    (squeeze) normally, so less blood gets into circulation.
                  </span>
                </li>
                <li>
                  <span class="text-black ">
                    Ejection fraction is the percentage of blood the left
                    ventricle of the heart pumps out with every beat. A normal,
                    healthy ejection fraction is 55% to 65%.
                  </span>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h3 class="text-pink-500 font-medium mb-2">
                Right-sided heart failure
              </h3>
              <p class="text-gray-700 font-light mb-4">
                Right-sided heart failure involves the right ventricle (bottom
                right chamber of the heart). When the right ventricle
                doesn&apos;t pump well, blood backs up in the blood vessels that
                carry blood from the rest of the body back to the heart. This
                can push fluid out of the veins and into other tissue, often
                leading to swelling.
              </p>
            </div>

            <div class="mb-6">
              <h3 class="text-pink-500 font-medium mb-2">
                Biventricular heart failure
              </h3>
              <p class="text-gray-700 font-light mb-4">
                Biventricular heart failure is a combination of left-sided and
                right-sided heart failure. It involves both sides of the heart,
                and can cause a mix of both types of symptoms.
              </p>
            </div>

            <div class="mb-6">
              <h3 class="text-pink-500 font-medium mb-2">
                Acute versus chronic heart failure
              </h3>
              <p class="text-gray-700 font-light mb-4">
                Acute heart failure is any heart failure that develops suddenly,
                such as after a heart attack or with arrhythmia. Chronic heart
                failure develops over time from medical conditions such as
                long-term hypertension (high blood pressure) or coronary artery
                disease.
              </p>
            </div>

            <div>
              <h3 class="text-pink-500 font-medium mb-2">
                Congestive heart failure
              </h3>
              <ul class="space-y-2 text-gray-700 font-light">
                <li>
                  Many people use the terms heart failure and congestive heart
                  failure interchangeably.
                </li>
                <li>
                  Congestive heart failure involves fluid backing up into the
                  body&apos;s tissues to the point that the tissues get
                  congested and patients have symptoms. The symptoms and
                  complications can become life-threatening, requiring timely
                  medical attention.
                </li>
              </ul>
            </div>
          </div>
          <KnowMore title={title} />
        </div>

        <div class="mb-12">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="border border-pink-200 rounded-lg p-6">
              <h2 class="text-2xl font-medium mb-4">
                How is Heart Failure Diagnosed?
              </h2>
              <p class="mb-4 font-light">
                Your health care team may use a variety of strategies and tests
                to diagnose heart failure.
              </p>
              <p class="mb-4 font-light">History and physical exam.</p>
              <p class="mb-4 font-medium">
                A clinician listens to your heart and lungs and measures your
                blood pressure and weight. They will also ask about your:
              </p>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  <span class="text-md font-light">
                    Family&apos;s medical history, especially previous cardiac
                    problems
                  </span>
                </li>
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  <span class="text-md font-light">
                    Lifestyle (such as whether you smoke or exercise)
                  </span>
                </li>
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  <span class="text-md font-light">
                    Medications, including prescriptions, over-the-counter drugs
                    and supplements
                  </span>
                </li>
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  <span class="text-md font-light">
                    Personal medical history
                  </span>
                </li>
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  <span class="text-md font-light">Symptoms</span>
                </li>
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  <span class="text-md font-light">Blood tests</span>
                </li>
              </ul>
              <p class="mt-4 font-medium">
                Blood tests can measure several things related to heart failure:
              </p>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  <span class="text-md font-light">
                    Sodium and potassium levels (electrolytes)
                  </span>
                </li>
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  <span class="text-md font-light">
                    Creatinine, which helps measure how well your kidneys are
                    working
                  </span>
                </li>
              </ul>
            </div>

            <div class="border border-pink-200 rounded-lg p-6">
              <h2 class="text-2xl font-medium mb-4">Imaging and Other Tests</h2>
              <p class="text-gray-700 mb-4 font-light">
                Other tests provide pictures of the heart and surrounding
                structures or show how well the heart is working.
              </p>

              <h3 class="text-pink-500 font-medium mb-2">
                Electrocardiogram (EKG or ECG):
              </h3>
              <p class="text-gray-700 mb-4 font-light">
                An electrocardiogram test uses small sensors to measure heart
                rate (how fast the heart is beating), rhythm (steady or
                irregular) and electrical impulses.
              </p>

              <h3 class="text-pink-500 font-medium mb-2">Chest X-ray:</h3>
              <p class="text-gray-700 mb-4 font-light">
                A chest X-ray is a picture of your lungs, heart and surrounding
                structures. It can show whether there is fluid in your lungs
                from heart failure, or if your heart muscle is enlarged.
              </p>

              <h3 class="text-pink-500 font-medium mb-2">
                Echocardiogram (also called an echo):
              </h3>
              <p class="text-gray-700 mb-4 font-light">
                Echocardiography uses sound waves to create images of your
                heart. It can show how thick the heart muscle has become, as
                well as measure ejection fraction.
              </p>

              <h3 class="text-pink-500 font-medium mb-2">MRI:</h3>
              <p class="text-gray-700 mb-4 font-light">
                MRI is an advanced imaging test that takes pictures of the heart
                and surrounding structures. It helps determine your heart
                function and size and whether there are any changes in the heart
                muscle. A cardiac MRI may help your doctors identify causes of
                heart failure.
              </p>
            </div>
          </div>
          <KnowMore title={title} />
        </div>

        <div class="mb-12">
          <h2 class="text-2xl font-medium mb-6">
            What are the Four Stages of Heart Failure?
          </h2>
          <p class="mb-8 font-light">
            There are two classification systems for heart failure, which
            indicate how severe the condition is. Your doctor might use one or
            both systems.
          </p>

          <div class="mb-8">
            <h3 class="text-2xl font-medium mb-4">
              NYHA Functional Classification System
            </h3>
            <p class="text-gray-700 font-light mb-6">
              The New York Heart Association (NYHA) functional classification
              considers heart failure symptoms that happen during exercise to
              determine stage. Patients can go back and forth between stages
              depending on how well-controlled symptoms are on a given day.
            </p>

            <div class="grid md:grid-cols-4 gap-4">
              <div class="border border-pink-200 rounded-lg p-4">
                <p class="text-pink-500 text-center font-medium">
                  The person has heart disease, but it isn&apos;t yet causing
                  symptoms or limiting activities.
                </p>
              </div>
              <div class="border border-pink-200 rounded-lg p-4">
                <p class="text-pink-500 text-center font-medium">
                  The person has mild symptoms that only slightly limits
                  activity.
                </p>
              </div>
              <div class="border border-pink-200 rounded-lg p-4">
                <p class="text-pink-500 text-center font-medium">
                  The person has significant limitations to activities. He or
                  she is only comfortable when resting.
                </p>
              </div>
              <div class="border border-pink-200 rounded-lg p-4">
                <p class="text-pink-500 text-center font-medium">
                  The person has major limitations and experiences symptoms when
                  at rest.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-medium mb-4">
              ACC/AHA Classification System
            </h3>
            <p class="text-gray-700 mb-6">
              The American College of Cardiology (ACC) and American Heart
              Association (AHA) developed a separate system to classify heart
              failure. Once you reach a specific stage, you remain there or
              progress, but you do not go backwards.
            </p>

            <div class="grid md:grid-cols-4 gap-4">
              <div class="border border-pink-200 rounded-lg p-4">
                <h4 class="text-pink-500 font-medium mb-2">Stage A:</h4>
                <p class="text-gray-700 font-light">
                  This describes a person who has a high risk of developing
                  heart failure because of family history or personal medical
                  conditions. It&apos;s also called pre-heart failure.
                </p>
              </div>
              <div class="border border-pink-200 rounded-lg p-4">
                <h4 class="text-pink-500 font-medium mb-2">Stage B:</h4>
                <p class="text-gray-700 font-light">
                  This stage is sometimes called silent heart failure. It means
                  you have changes in your heart function, but you haven&apos;t
                  developed heart failure symptoms yet.
                </p>
              </div>
              <div class="border border-pink-200 rounded-lg p-4">
                <h4 class="text-pink-500 font-medium mb-2">Stage C:</h4>
                <p class="text-gray-700 font-light">
                  Stage C means heart failure has been diagnosed, and the person
                  has had symptoms.
                </p>
              </div>
              <div class="border border-pink-200 rounded-lg p-4">
                <h4 class="text-pink-500 font-medium mb-2">Stage D:</h4>
                <p class="text-gray-700 font-light">
                  Stage D is advanced heart failure that isn&apos;t responding
                  to standard treatment. A person usually has symptoms when they
                  are being mildly active or even resting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-2xl font-medium mb-6">
              How is Heart Failure Treated?
            </h2>
            <p class="mb-6 font-light">
              We have many proven treatments to improve heart function, symptoms
              and survival for patients.
            </p>

            <div class="mb-6">
              <h3 class="text-pink-500 font-medium mb-4">
                Treatments also improve quality of life by:
              </h3>
              <ul class="space-y-2 text-gray-700 font-light">
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  Addressing any underlying causes
                </li>
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  Relieving symptoms
                </li>
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  Improving overall health
                </li>
                <li class="flex items-center">
                  <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                  Education and lifestyle choices
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 class="text-pink-500 font-medium mb-4">
              Education is an important part of heart failure treatment. Your
              team will talk with you about the importance of:
            </h3>
            <ul class="space-y-2 text-gray-700 font-light">
              <li class="flex items-center">
                <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                Controlling blood pressure and controlling blood sugar (if you
                have diabetes)
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                Eating a heart-healthy diet, including controlling sodium
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                Participating in moderate exercise
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                Recognizing small warning signs in your body, such as swelling
                or weight gain
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                Getting enough sleep
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                Losing weight if necessary
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                Quitting smoking
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
                Avoiding alcohol
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 class="text-2xl font-medium mb-6">
            Medications for Heart Failure
          </h2>
          <div className="grid lg:grid-cols-1 gap-4">
            <DataBoxes
              title=""
              text=""
              header="Certain medications can help treat heart failure and its underlying cause:"
              data={typesOfHeartFailure}
              myclass="grid grid-cols-1"
            />
            <DataBoxes
              title=""
              text=""
              header="Other medications which can relieve the heart failure symptoms:"
              data={treatmentMedications}
              myclass="grid grid-cols-1"
            />
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-2xl font-medium mb-6">Surgery for Heart Failure</h2>
          <p class="text-gray-700 mb-6 font-light">
            Your doctor may recommend surgery to implant a medical device that
            helps the heart function more effectively:
          </p>

          <ul class="space-y-4 mb-6 list-disc list-inside ml-4">
            <li class="flex items-center">
              <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
              <p class="text-gray-700 font-light text-md">
                Pacemaker, which maintains a steady heart beat in people with a
                slow or irregular heartbeat
              </p>
            </li>

            <li class="flex items-center">
              <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
              <p class="text-gray-700 font-light text-md">
                Implantable cardioverter defibrillator (ICD), which monitors the
                heart for fast rhythm and delivers an electrical shock to reset
                normal rhythm
              </p>
            </li>
            <li class="flex items-center">
              <span class="text-pink-500 mr-2 text-2xl leading-none">•</span>
              <p class="text-gray-700 font-light text-md">
                Left ventricular assist device (LVAD), which takes over the
                pumping action of the heart
              </p>
            </li>
          </ul>

          <p class="text-gray-700 font-light text-md">
            People with advanced heart failure may be candidates for heart
            transplantation. A heart transplant replaces the diseased heart with
            a donated heart from a person who has died.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <DataLists data={complications} boxClass="h-[360px]" />
          <DataLists data={prevention} boxClass="h-[360px]" />
        </div>

        <div className="py-8">
          <Conclusion data={conclusionData} />
          <FooterLinks head={title} />
          <BookButton />
        </div>
      </main>
    </div>
  );
}

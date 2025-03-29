'use client'
import { useEffect } from 'react'

export default function RareCancers() {
  useEffect(() => {
    document.title = 'Rare Cancers Treatment in India'
  }, [])

  return (
    <>
      <section class="relative">
        <img
          alt="DNA Strand"
          class="w-full h-96 object-cover"
          src="https://placehold.co/1920x400"
        />
      </section>
      {/* <!-- Main Content --> */}
      <main class="container mx-auto py-12 px-6">
        <h1 class="text-4xl font-bold text-center text-pink-500 mb-8">
          Rare Cancers
        </h1>
        <p class="text-lg mb-6">
          Rare cancers are those cancers that occur in a small percentage of the
          population, often with unique characteristics, and are not as commonly
          diagnosed as more prevalent cancers. In developing and developed
          countries, the development of rare cancers poses unique challenges as
          the healthcare infrastructure is not always equipped to handle these
          less common conditions, and awareness among the public and healthcare
          providers is limited.
        </p>
        <p class="text-lg mb-6">
          While exact numbers are difficult to determine due to lack of
          comprehensive cancer registries for rare cancers, it is estimated that
          rare cancers represent around 20-25% of all cancers globally. This
          proportion is likely to be similar in India. These cancers often
          present prolonged periods of time before diagnosis and treatment,
          leading to their advancement into later, more difficult-to-treat
          stages.
        </p>
        <p class="text-lg mb-6">
          Patients diagnosed with rare cancers in India may face delays in
          receiving treatment due to lack of specialized care centers, advanced
          diagnostic tools, and targeted therapies. Most cancer treatments in
          India are still focused on the more common types of cancer.
        </p>
        <h2 class="text-2xl font-bold text-pink-500 mb-4">
          Some of the Rare Cancers identified in the Indian context could
          include:
        </h2>
        <div class="bg-yellow-100 p-4 mb-6">
          <h3 class="text-xl font-bold mb-2">Sarcomas</h3>
          <p class="mb-2">
            Sarcomas are cancers that arise from connective tissues like
            muscles, fat, bones, and cartilage. They can occur in various forms,
            including osteosarcoma (bone), liposarcoma (fat), and
            rhabdomyosarcoma (muscle). Sarcomas are rare, accounting for only
            about 1% of all cancers. However, they are increasingly being
            recognized due to advancements in diagnostic imaging and oncology.
            Sarcomas are often diagnosed late because their symptoms can mimic
            benign conditions such as muscle strains or injuries. Treatment
            usually involves a combination of surgery, chemotherapy, and
            sometimes radiation.
          </p>
        </div>
        <div class="bg-yellow-100 p-4 mb-6">
          <h3 class="text-xl font-bold mb-2">Neuroendocrine Tumors (NETs)</h3>
          <p class="mb-2">
            NETs are a group of cancers that arise in the neuroendocrine system,
            which can produce hormones. They can occur in various parts of the
            body, including the lungs, pancreas, and gastrointestinal tract.
            Although neuroendocrine tumors are relatively rare, their incidence
            is gradually increasing in India, associated with improved
            diagnostic methods. Symptoms can be non-specific, such as abdominal
            pain, flushing, and diarrhea, leading to delayed diagnosis. NETs may
            be associated with more common cancers of the digestive tract and
            lung. Treatment involves surgery, targeted therapies, and sometimes
            radiation. India has advanced centers of excellence for the
            treatment of NETs.
          </p>
        </div>
        <div class="bg-yellow-100 p-4 mb-6">
          <h3 class="text-xl font-bold mb-2">Gastric Lymphoma</h3>
          <p class="mb-2">
            Gastric lymphoma is a cancer of the lymphatic tissue in the stomach.
            It is a rare type of non-Hodgkin lymphoma and accounts for a very
            small percentage of all gastric cancers. It is rare but more common
            than other lymphomas, with a strong incidence in certain regions,
            possibly linked to dietary habits and Helicobacter pylori infection.
            Diagnosis can be delayed because the symptoms (such as nausea,
            weight loss, and stomach pain) are often mistaken for common gastric
            disorders. Treatment involves chemotherapy, radiation, and in some
            cases, surgery. Specialized lymphoma centers in India offer
            treatment for gastric lymphoma.
          </p>
        </div>
        <div class="bg-yellow-100 p-4 mb-6">
          <h3 class="text-xl font-bold mb-2">Mesothelioma</h3>
          <p class="mb-2">
            Mesothelioma is a rare and aggressive cancer linked to exposure to
            asbestos. It typically affects the lining of the lungs (pleura) but
            can also affect the abdomen (peritoneum) and the heart
            (pericardium).
          </p>
          <p class="mb-2">
            <strong>Prevalence in India:</strong>
            Though mesothelioma is rare globally, it has been reported in
            industrial regions of India, especially in areas with significant
            asbestos exposure from industries.
          </p>
          <p class="mb-2">
            <strong>Challenges:</strong>
            It often presents in an advanced stage, as it can mimic other
            respiratory conditions. Symptoms include coughing, shortness of
            breath, and chest pain.
          </p>
          <p class="mb-2">
            <strong>Treatment:</strong>
            Due to its rarity, treatment options in India are evolving, with a
            focus on improving early diagnosis and providing specialized care.
          </p>
        </div>
        <div class="bg-yellow-100 p-4 mb-6">
          <h3 class="text-xl font-bold mb-2">Retinoblastoma</h3>
          <p class="mb-2">
            Retinoblastoma is a rare cancer of the eye that is the most common
            eye cancer among children. It originates in the retina and can lead
            to vision loss or even death if untreated. It is critical that
            diagnosing this condition is critical for preserving vision, as many
            children are diagnosed too late, especially in rural areas where
            there is limited access to specialized ophthalmological care.
            Treatment may involve chemotherapy, radiation, or laser therapy, and
            in some cases, eye removal (enucleation) is necessary.
          </p>
        </div>
        <a class="text-blue-500 underline mb-6 block" href="#">
          To Know More About Rare Cancers, Click Here
        </a>
        <h2 class="text-2xl font-bold text-pink-500 mb-4">
          Challenges in Managing Rare Cancers in India
        </h2>
        <div class="bg-pink-100 p-4 mb-6">
          <ul class="list-disc list-inside">
            <li class="mb-2">
              Many rare cancers are diagnosed late due to the lack of awareness
              among both patients and healthcare providers. Symptoms may mimic
              more common conditions, leading to misdiagnosis or delayed
              diagnosis.
            </li>
            <li class="mb-2">
              Rural areas often lack access to advanced diagnostic and treatment
              facilities for rare cancers.
            </li>
            <li class="mb-2">
              Both the public and medical professionals may not be aware of the
              signs and symptoms of rare cancers, leading to missed
              opportunities for early intervention.
            </li>
            <li class="mb-2">
              The cost of treatment for rare cancers, particularly with newer
              therapies like targeted therapy and immunotherapy, can be
              prohibitive, especially for patients from low-income families.
            </li>
            <li class="mb-2">
              Currently, there is limited data on the incidence and outcomes of
              rare cancers in India, which makes it difficult to develop
              standardized treatment protocols.
            </li>
          </ul>
        </div>
        <p class="text-lg mb-6">
          Rare cancers present significant diagnostic and treatment challenges
          in India due to the lack of awareness, limited access to specialized
          care, and high treatment costs. However, with improvements in
          healthcare infrastructure, access to advanced diagnostic tools, and
          growing awareness, India is gradually making progress in the
          management of rare cancers. Specialized treatment centers, clinical
          trials, and better public health initiatives hold promise for
          improving outcomes for patients with these rare but serious diseases.
        </p>
        <a class="text-blue-500 underline mb-6 block" href="#">
          To Consult With The Best Doctor For Treatment Of A Rare Cancer, Click
          Here
        </a>
        <a class="text-blue-500 underline mb-6 block" href="#">
          For The Best Hospital For The Treatment Of A Rare Cancer In Bangalore,
          Click Here
        </a>
        <a class="text-blue-500 underline mb-6 block" href="#">
          For The Best Hospital For The Treatment Of A Rare Cancer In Mumbai,
          Click Here
        </a>
        <button class="bg-pink-500 text-white px-6 py-3 rounded mt-6">
          Book An Appointment
        </button>
      </main>
    </>
  )
}

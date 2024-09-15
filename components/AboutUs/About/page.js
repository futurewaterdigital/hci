import React from 'react'

export default function aboutUs() {
  return (
    <div className="mt-0 flex flex-col justify-center items-center text-center py-8">
      <div className="pt-0 w-10/12 gap-10">
        <h4 className="text-3xl font-bold pb-10 font-roboto">
          About Us <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
        </h4>
        <p className="font-light">
          Promoted by professionals with rich experience, HCI has forged
          enduring alliances with some of India’s best known names in healthcare
          to offer patients a range of advanced treatments and procedures in
          various cities of their choice. We offer patients access to competent
          specialists, proven treatment protocols, and the best possible care,
          giving them the best possible chance of recovery.
        </p>
        <p className="py-4 font-light">
          Leveraging decades of experience in healthcare, we provide patients
          with a transformative experience, backed by transparency, integrity
          and compassion.
        </p>
      </div>
    </div>
  )
}

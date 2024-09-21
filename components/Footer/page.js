import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerMenu, bottomSection } from '@/utils/data'

export default function Footer() {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id)
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <>
      <div className="bg-[#F1F8FF] p-10 grid grid-cols-4 font-light">
        <div className="p-6">
          <Image
            src="/images/logo.svg"
            className="rounded-lg"
            alt="Logo"
            width={250}
            height={250}
          />
          <p className="py-4 text-[12px]">
            Healthcare International is a medical value travel undertaking that
            connects patients with world-class healthcare services across India
            and other medical destinations. It is a top-tier hospital network
            and over hundreds of expert clinicians to accord personalized care,
            advanced treatment, and global access to ensure the best possible
            medical outcomes for each of its patients.
          </p>
          {/* <p className="text-[12px]">
            Email :{' '}
            <b>
              <Link href="mailto:info@healthcareinternational.in">
                info@healthcareinternational.in
              </Link>
            </b>
          </p> */}
        </div>
        {footerMenu.map((section, index) => (
          <div key={index} className="flex flex-col p-6">
            <h6 className="text-black font-semibold text-xl pb-4">
              {section.category}
            </h6>
            {section.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                className={`py-2 list-decimal  ${
                  link.url ? 'link link-hover cursor-pointer' : 'cursor-pointer'
                }`}
                href={link.url}
                // onClick={() => handleResultClick(result.categories[0]?.slug)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-[#0E56A0] p-4 grid grid-cols-2 px-16 text-white font-light text-1xl">
        <div>
          {bottomSection.links.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' | '}
              <Link href="#" className="link link-hover">
                {link.name}
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className="text-end">
          <p>{bottomSection.copyright}</p>
        </div>
      </div>
    </>
  )
}

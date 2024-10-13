'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerMenu, bottomSection } from '@/utils/data'
import ScrollToTop from 'react-scroll-to-top'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { FaSquareXTwitter } from 'react-icons/fa6'

export default function Footer() {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id)
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <>
      <ScrollToTop
        className="w-12 h-12 rounded-full flex justify-center items-center z-50 mb-10"
        smooth
      />
      <div className="bg-[#F1F8FF] lg:p-10 grid lg:grid-cols-4 font-light mt-10">
        <div className="p-6">
          <Image
            src="/images/logo.svg"
            className="rounded-lg w-6/12 lg:w-10/12"
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
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col p-6">
          <h6 className="text-black font-semibold text-xl pb-4">Contact Us</h6>
          <ul className="">
            <li className="py-2">
              <Link href="tel:+919008764954">+91 9008 764 954</Link>
            </li>
            <li className="py-2">
              <Link href="mailto:info@healthcareinternational.in">
                info@healthcareinternational.in
              </Link>
            </li>
          </ul>
          <div className="py-6">
            <h6 className="text-black font-semibold text-xl pb-4">Follow Us</h6>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/people/HCI-India/61563761362532/"
                target="_blank"
              >
                <FaSquareFacebook size={25} className="hover:fill-blue-700" />
              </Link>
              <Link
                href="https://www.instagram.com/_hci_india/"
                target="_blank"
              >
                <FaInstagram size={25} className="hover:fill-pink-700" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/healthcare-international-mvt/?viewAsMember=true"
                target="_blank"
              >
                <FaLinkedin size={25} className="hover:fill-blue-600" />
              </Link>
              <Link href="https://x.com/HCI_MVT_service" target="_blank">
                <FaSquareXTwitter size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0E56A0] p-4 grid lg:grid-cols-2 lg:px-16 text-white font-light text-1xl">
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
        <div className="lg:text-end">
          <p>{bottomSection.copyright}</p>
        </div>
      </div>
    </>
  )
}

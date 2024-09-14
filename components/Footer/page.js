import React from 'react'
import Image from 'next/image'

export default function Footer() {
  const footerMenu = [
    {
      category: 'Useful Links',
      links: ['Branding', 'Design', 'Marketing', 'Advertisement'],
    },
    {
      category: 'Departments',
      links: ['About us', 'Contact', 'Jobs', 'Press kit'],
    },
    {
      category: 'Contacts',
      links: ['Terms of use', 'Privacy policy', 'Cookie policy'],
    },
  ]

  const bottomSection = {
    links: ['Sitemap', 'Privacy Statement', 'Disclaimer'],
    copyright: 'Copyright © 2024, Healthcare International',
  }

  return (
    <>
      <div className="bg-[#F1F8FF] p-10 grid grid-cols-4 font-light">
        <div className="p-6">
          <Image
            src="/images/logo.png"
            className="rounded-lg"
            alt="Logo"
            width={250}
            height={250}
          />
          <p className="py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
        </div>
        {footerMenu.map((section, index) => (
          <div key={index} className="flex flex-col p-6">
            <h6 className="text-black font-semibold text-xl pb-4">
              {section.category}
            </h6>
            {section.links.map((link, linkIndex) => (
              <a key={linkIndex} className="link link-hover">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-[#0E56A0] p-10 grid grid-cols-2 px-16 text-white font-light text-1xl">
        <div>
          {bottomSection.links.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' | '}
              <a href="#" className="link link-hover">
                {link}
              </a>
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

import React from 'react'
import Link from 'next/link'
export default function FooterLink({ head }) {
  const linkshead = [
    {
      text: `To get the the best diagnosis for ${head} and related issues, click here`,
      url: 'https://jalal.com/', // Replace "#" with the actual link
    },
   
  ]

  return (
    <div className="text-start space-y-4">
      {linkshead.map((link, index) => (
        <Link
          key={index}
          className="text-hciPrimary underline block mb-2 font-semibold capitalize"
          href={link.url}
        >
          {link.text}
        </Link>
      ))}
    </div>
  )
}

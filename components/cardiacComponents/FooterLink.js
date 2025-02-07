import React from 'react'

export default function FooterLink({ head }) {
  const linkshead = [
    {
      text: `To Consult The Best Doctor For Treatment Of ${head}, Click Here`,
      url: '#', // Replace "#" with the actual link
    },
    {
      text: `For The Best Hospital For ${head} In India, Click Here`,
      url: '#', // Replace "#" with the actual link
    },
    {
      text: `For The Best Hospital For ${head} In Bangalore, Click Here`,
      url: '#', // Replace "#" with the actual link
    },
    {
      text: `For The Best Hospital For ${head} In Chennai, Click Here`,
      url: '#', // Replace "#" with the actual link
    },
    {
      text: `For The Best Hospital For ${head} In Delhi, Click Here`,
      url: '#', // Replace "#" with the actual link
    },
    {
      text: `For The Best Hospital For ${head} In Hyderabad, Click Here`,
      url: '#', // Replace "#" with the actual link
    },
    {
      text: `For The Best Hospital For ${head} In Mumbai, Click Here`,
      url: '#', // Replace "#" with the actual link
    },
  ]

  return (
    <div className="text-start py-12 space-y-4">
      {linkshead.map((link, index) => (
        <a
          key={index}
          className="text-hciPrimary underline block mb-2 "
          href={link.href}
        >
          {link.text}
        </a>
      ))}
    </div>
  )
}

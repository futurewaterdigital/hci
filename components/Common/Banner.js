import React from 'react'

export default function Banner({ image }) {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover lg:h-[600px] h-44 my-6"
      style={{ backgroundImage: `url(${image})` }}
    />
  )
}

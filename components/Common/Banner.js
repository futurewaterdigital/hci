import React from 'react'

export default function Banner({ image }) {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover lg:h-[550px] h-44"
      style={{ backgroundImage: `url(${image})` }}
    />
  )
}

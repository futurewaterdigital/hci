import React from 'react'

export default function Banner({ image }) {
  return (
    <div
      className="bg-center bg-no-repeat bg-contain h-[700px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* {image} */}
    </div>
  )
}

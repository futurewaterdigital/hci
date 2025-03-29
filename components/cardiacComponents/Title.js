import React from 'react'

function Title({ title }) {
  return (
    // <h1 className="w-full text-[#D84598] lg:text-[60px] text-center font-normal text-[30px]">
    //   {title}
    // </h1>
    <h1 className="lg:text-4xl font-bold text-center text-hciSecondary mt-6">
      {title}
    </h1>
  )
}

export default Title

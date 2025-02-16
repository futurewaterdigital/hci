import React from 'react'

function CtaButton({ data }) {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 text-center ">
        {data.contact.title}
      </h3>
      <div className="text-center bg-gradient-to-l from-hciSecondary to-hciPrimary rounded-lg py-6 text-white min-h-40 flex justify-center flex-col">
        <h4 className="font-semibold uppercase">{data.contact.head}</h4>
        <p className="mt-4 font-light">{data.contact.content}</p>
      </div>
    </>
  )
}

export default CtaButton

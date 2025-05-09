import React from 'react'
import H3 from '@/components/ui/h3'
function CtaButton({ data }) {
  return (
    <>
      
      <h2 className="font-medium mb-4 text-center text-2xl text-black">
        {data.contact.title}
      </h2>
      <div className="text-center bg-gradient-to-l from-hciSecondary to-hciPrimary rounded-lg py-1 pb-8 text-white flex justify-center flex-col">
        <H3 title={data.contact.head} className="font-semibold uppercase text-white"/>
        <p className="mt-4 font-light">{data.contact.content}</p>
      </div>
    </>
  )
}

export default CtaButton

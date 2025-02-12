import React from 'react'

function BlueHeader({ dataFile }) {
  return (
    <div className="bg-[#F1F8FF] min-h-60 flex items-center justify-center ">
      <div className="lg:w-8/12 mx-auto space-y-2 px-6 lg:px-0">
        <p className={dataFile[0].headers.className}>
          {dataFile[0].headers.title}
        </p>
        <p className="font-light">{dataFile[0].headers.content}</p>
      </div>
    </div>
  )
}

export default BlueHeader

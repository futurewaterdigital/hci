import React from 'react'

function NetworkFacilities({ dataFile }) {
  // console.log(dataFile)
  return (
    <>
      <h2
        className={
          dataFile[0].networkFacilities
            ? dataFile[0].networkFacilities.className
            : ''
        }
      >
        {dataFile[0].networkFacilities
          ? dataFile[0].networkFacilities.title
          : ''}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataFile[0].networkFacilities &&
          dataFile[0].networkFacilities.facilities.map((facility, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6 border">
              <h3 className="text-hciSecondary font-bold mb-2">
                {facility.name}
              </h3>
              <p className="text-gray-700 mb-1 font-light">
                <span className="font-medium">City:</span> {facility.city}
              </p>
              <p className="text-gray-700 mb-1 font-light">
                <span className="font-medium">No. of Beds:</span>{' '}
                {facility.beds}
              </p>
              <p className="text-gray-700 font-light">
                <span className="font-medium">Speciality:</span>{' '}
                {facility.speciality}
              </p>
            </div>
          ))}
      </div>
    </>
  )
}

export default NetworkFacilities

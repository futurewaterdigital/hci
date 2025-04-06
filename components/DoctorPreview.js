'use client';

import { FaStar, FaCheck, FaAward } from 'react-icons/fa';
import { useState } from 'react';

export default function DoctorPreview({ doctor }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
       
              <div className="">
                <div className="relative w-full items-center flex justify-center">
                  <img
                    src={doctor.image || '/default-doctor.jpg'}
                    alt={doctor.name}
                    fill
                    className="object-cover"
          />
          {doctor.isVerified && (
                        <img src="/doctors/accredited.svg" alt={doctor.name}
                        fill className="w-20 h-20 absolute right-20 top-48" />
                    )}
        
        </div>
       
                <div className="p-4">
                  <div className="flex items-center gap-2 justify-center">
                    <h2 className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
                    {doctor.isVerified && (
                      <FaCheck className="text-blue-500" title="Verified" />
                    )}
                    {doctor.isFeatured && (
                      <FaAward className="text-hciSecondary" title="Featured" />
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-2 justify-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < Math.floor(doctor.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          } w-4 h-4`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600 text-center">{doctor.experience} Years of experience</p>
                  <div className="mt-2 flex flex-wrap gap-1 items-center justify-center">
                    {(isExpanded ? doctor.expertise : doctor.expertise.slice(0, 3)).map((exp, index) => (
                      <span
                        key={index}
                        className="inline-block bg-hciSecondary text-white text-xs px-2 py-1 rounded-full"
                      >
                        {exp}
                      </span>
                    ))}
                    {!isExpanded && doctor.expertise.length > 3 && (
                      <span 
                        className="text-gray-500 text-xs cursor-pointer hover:text-hciSecondary transition-colors"
                        onClick={() => setIsExpanded(true)}
                      >
                        +{doctor.expertise.length - 3} more
                      </span>
                    )}
                    {isExpanded && doctor.expertise.length > 3 && (
                      <span 
                        className="text-gray-500 text-xs cursor-pointer hover:text-hciSecondary transition-colors"
                        onClick={() => setIsExpanded(false)}
                      >
                        Show less
                      </span>
                    )}
          </div>
          <div className="mt-4">
          <h2 className="text-pink-500 text-2xl font-bold mb-4">
          Qualifications
          </h2>
          <ul className="list-disc list-inside text-hciSecondary space-y-2">
            {doctor.qualification.map((qualification, index) => (
              <li key={index} className='font-light'>
                <span className='text-black'>{qualification}</span>
              </li>
            ))}
          </ul>
            </div>
          <div className="mt-4">
          <h2 className="text-pink-500 text-2xl font-bold mb-4">
          Expertise
          </h2>
          <ul className="list-disc list-inside text-hciSecondary space-y-2">
            {doctor.expertise.map((expertise, index) => (
              <li key={index} className='font-light'>
                <span className='text-black'>{expertise}</span>
              </li>
            ))}
          </ul>
            </div>
          <div className="mt-4">
          <h2 className="text-pink-500 text-2xl font-bold mb-4">
            {doctor.researchData.heading}
          </h2>
          <ul className="list-disc list-inside text-hciSecondary space-y-2">
            {doctor.researchData.research.map((research, index) => (
              <li key={index} className='font-light'>
                <span className='text-black'>{research}</span>
              </li>
            ))}
          </ul>
            </div>
          <div className="mt-4">
          <h2 className="text-pink-500 text-2xl font-bold mb-4">
            {doctor.publicationData.heading}
          </h2>
          <ul className="list-disc list-inside text-hciSecondary space-y-2">
            {doctor.publicationData.publications.map((publication, index) => (
              <li key={index} className='font-light'>
                <span className='text-black'>{publication}</span>
              </li>
            ))}
          </ul>
            </div>
          <div className="mt-4">
          <h2 className="text-pink-500 text-2xl font-bold mb-4">
            {doctor.aboutData.heading}
          </h2>
          <p className="text-gray-600 font-light text-start">
            {doctor.aboutData.about}
            </p>
            </div>
                </div>
              </div>
           
      </div>
  );
} 
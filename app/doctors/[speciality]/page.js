'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function DoctorsPage({ params }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [expandedDoctors, setExpandedDoctors] = useState({});
  const [title, setTitle] = useState('Our Doctors');
  const [noData, setNoData] = useState(false);

  const slug = params.speciality;

  useEffect(() => {
    // Set title based on slug
    if (slug === 'cardiac-sciences') {
      setTitle('Our Cardiologists');
    } else if (slug === 'orthopedics') {
      setTitle('Our Orthopedic Surgeons');
    } else if (slug === 'neuro-sciences') {
      setTitle('Our Neurosurgeons');
    } else if (slug === 'others') {
      setTitle('Other Specialists');
    } else if (slug === 'oncology') {
      setTitle('Our Oncologists');
    } else if (slug === 'gastroenterology') {
      setTitle('Our Gastroenterologists');
    }

    const fetchDoctor = async () => {
      try {
        const response = await fetch(`/api/speciality/${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch doctor');
        }

        const data = await response.json();

        // Filter out doctors who are both featured and verified
        const filteredDoctors = data.filter(
          (doc) => !(doc.isFeatured && doc.isVerified)
        );

        if(filteredDoctors.length === 0){
          setNoData(true)
        }

        setDoctors(filteredDoctors);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [slug]);

  const toggleReadMore = (id) => {
    setExpandedDoctors((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const loadMoreDoctors = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }
 

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <div className="flex justify-center items-center relative">
        <h1 className="text-3xl font-bold text-hciPrimary mb-8 text-center">{title}</h1>
        {!noData &&
          <div className="absolute left-0">
            <Link href={`/treatment/${slug}`} className="text-hciSecondary font-semibold">Back to <span className='text-hciSecondary capitalize'>{slug} page</span></Link>
          </div>}
      </div>
    
     {/* No profiles available message */}
      {!loading && doctors.length === 0 && (
        <>
        <div className="text-center text-gray-500 text-lg mt-10">
            <h2 className='text-2xl font-light'>No profiles available at the moment.</h2>
            
            <div className="mt-12">
          <Link href={`/treatment/${slug}`} className="text-hciSecondary font-semibold border border-hciSecondary px-4 py-2 rounded-lg">Back to <span className='text-hciSecondary capitalize'>{slug} page</span></Link>
        </div>
          </div>
         
        </>
      )}

      <div className="grid grid-cols-1 gap-6">
        {doctors.slice(0, visibleCount).map((doctor) => {
          const isExpanded = expandedDoctors[doctor._id];
          const aboutText = doctor.aboutData.about;
          const shouldTruncate = aboutText.length > 300;
          const displayText =
            isExpanded || !shouldTruncate
              ? aboutText
              : `${aboutText.slice(0, 300)}...`;

          return (
            <div
              key={doctor._id}
              className={`relative w-full flex flex-row border border-hciSecondary rounded-lg shadow-lg overflow-hidden ${
                isExpanded ? 'h-full' : 'min-h-[300px]'
              }`}
            >
              <div className="relative w-[300px]">
                <Image
                  src={doctor.image || '/default-doctor.jpg'}
                  alt={doctor.name}
                  fill
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="p-4 w-[800px]">
                <div className="flex items-start gap-2 flex-col">
                  <h2 className="text-3xl font-bold text-hciSecondary">{doctor.name}</h2>
                  <p className="text-hciSecondary font-semibold">
                    {doctor.qualification[0]?.slice(0, 100)}
                  </p>
                  <p className="text-gray-600 font-light">
                    {displayText}
                    {shouldTruncate && (
                      <span
                        onClick={() => toggleReadMore(doctor._id)}
                        className="text-hciSecondary cursor-pointer ml-2"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[200px]">
                <button className="border border-hciSecondary text-hciSecondary px-4 py-2 rounded-xl mt-4 hover:bg-hciSecondary hover:text-white transition-all duration-300">
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < doctors.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreDoctors}
            className="bg-hciSecondary text-white px-6 py-2 rounded-full hover:bg-hciPrimary transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

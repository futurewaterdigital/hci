'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [expandedDoctors, setExpandedDoctors] = useState({});

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('/api/doctors');
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json();
        console.log('Fetched doctors:', data); // Debug log
        setDoctors(data);
      } catch (err) {
        console.error('Error fetching doctors:', err); // Debug log
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

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
      <h1 className="text-3xl font-bold text-hciPrimary mb-8 text-center">Our Doctors</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {doctors.slice(0, visibleCount).map((doctor) => {
          const isExpanded = expandedDoctors[doctor._id];
          const aboutText = doctor.aboutData.about;
          const shouldTruncate = aboutText.length > 300;
          const displayText = isExpanded || !shouldTruncate ? aboutText : `${aboutText.slice(0, 300)}...`;

          return (
            <div key={doctor._id} className={`relative ${isExpanded ? 'h-full' : 'min-h-[300px]'} w-full flex flex-row border border-hciSecondary rounded-lg shadow-lg overflow-hidden ${isExpanded ? 'h-[400px]' : ''}`}>
              <div className="relative w-[300px]">
                <Image
                  src={doctor.image || '/default-doctor.jpg'}
                  alt={doctor.name}
                  fill
                  className="w-full h-[200px]"
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

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function DoctorsPage({ params }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [expandedDoctors, setExpandedDoctors] = useState({});
  const [title, setTitle] = useState('Our Doctors');
  const [noData, setNoData] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const slug = params.speciality;
  const router = useRouter();


  const handleDoctorClick = (e) => {
    e.preventDefault();
    router.push("/?scrollTo=form");
  };

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

        if (filteredDoctors.length === 0) {
          setNoData(true);
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

  // Reset visible count on new search
  useEffect(() => {
    setVisibleCount(10);
  }, [searchTerm]);

  const toggleReadMore = (id) => {
    setExpandedDoctors((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const loadMoreDoctors = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  // Filtered doctors based on search term
  const filteredDoctors = doctors.filter((doctor) => {
    const term = searchTerm.toLowerCase();
    const name = doctor.name.toLowerCase();
    const qualification = doctor.qualification?.join(' ').toLowerCase() || '';
    const about = doctor.aboutData?.about?.toLowerCase() || '';
    return (
      name.includes(term) ||
      qualification.includes(term) ||
      about.includes(term)
    );
  });

  if (loading) {
    return (
      <div className="md:max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-hciPrimary text-center md:text-left mb-6">
          {title}
        </h1>
        <div className="grid md:grid-cols-1 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row border border-gray-200 rounded-lg shadow-md p-4 animate-pulse"
            >
              {/* Skeleton Image */}
              <div className="md:w-[700px] h-[300px] md:h-[280px] bg-gray-200 rounded-lg mb-4 md:mb-0"></div>

              {/* Skeleton Text Info */}
              <div className="flex-1 md:pl-4 space-y-4">
                <div className="h-6 bg-gray-300 rounded w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-11/12"></div>
                  <div className="h-3 bg-gray-200 rounded w-10/12"></div>
                </div>
              </div>

              {/* Skeleton Button */}
              <div className="flex justify-center items-center mt-4 md:mt-0 md:w-[500px]">
                <div className="h-10 w-32 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
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
    <div className="md:max-w-7xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-hciPrimary text-center md:text-left mb-6">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Back Link (conditionally rendered) */}
        {!noData && (
          <div className="flex items-center gap-2 text-center md:text-left">
            <Link
              href={`/treatment/${slug}`}
              className="flex items-center gap-1 text-hciSecondary font-semibold text-lg"
            >
              <IoMdArrowRoundBack className="text-hciSecondary text-2xl" />
              Back to <span className="capitalize">{slug} page</span>
            </Link>
          </div>

        )}

        {/* Search Input */}
        <div className="w-full md:w-auto">
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search Doctors by Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:min-w-[300px] pl-10 pr-4 py-2 h-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hciSecondary placeholder:text-sm placeholder:align-middle"
            />

          </div>
        </div>
      </div>

      {/* No search results */}
      {!loading && filteredDoctors.length === 0 && (
        <div className="text-center text-gray-500 text-lg mt-10">
          <h2 className="text-2xl font-light">No doctors match your search.</h2>
          <div className="mt-12">
            <Link
              href={`/treatment/${slug}`}
              className="text-hciSecondary font-semibold border border-hciSecondary px-4 py-2 rounded-lg"
            >
              Back to{' '}
              <span className="text-hciSecondary capitalize">{slug} page</span>
            </Link>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-1 gap-6">
        {filteredDoctors.slice(0, visibleCount).map((doctor) => {
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
              className={`relative w-full flex flex-col md:flex-row border border-hciSecondary rounded-lg shadow-lg overflow-hidden p-2 transition-all duration-300 ${isExpanded ? 'h-auto' : 'min-h-[300px]'
                }`}
            >
              {/* Image Section */}
              <div className="relative md:w-[700px] h-[350px] md:h-[280px] ">
                <Image
                  src={doctor.image || '/default-doctor.jpg'}
                  alt={doctor.name}
                  fill
                  className="w-[200px] h-[200px]"
                />
              </div>

              {/* Info Section */}
              <div className="p-4 md:w-[1800px]">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-hciSecondary">
                    {doctor.name}
                  </h2>
                  <p className="text-hciSecondary font-semibold text-sm md:text-base">
                    {doctor.qualification[0]?.slice(0, 100)}
                  </p>
                  <p className="text-gray-600 font-light text-sm md:text-base">
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

              {/* Button Section */}
              <div className="flex flex-col items-center justify-center md:w-[500px]">
                <button onClick={handleDoctorClick}
                  className="border border-hciSecondary text-hciSecondary px-4 py-2 rounded-xl mt-4 hover:bg-hciSecondary hover:text-white transition-all duration-300">
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredDoctors.length && (
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

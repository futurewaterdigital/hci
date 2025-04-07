'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar} from 'react-icons/fa';

export default function TreatmentDoctors({ pathname, paramSlug }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    

  useEffect(() => {
      if (paramSlug === 'cardiac-sciences') {
    setTitle('Our Cardiologists');
  } else if (paramSlug === 'orthopedics') {
    setTitle('Our Orthopedic Surgeons');
  } else if (paramSlug === 'neuro-sciences') {
    setTitle('Our Neurologists');
  } else if (paramSlug === 'others') {
    setTitle('Other Specialists');
  } else if (paramSlug === 'oncology') {
    setTitle('Our Oncologists');
  } else if (paramSlug === 'gastroenterology') {
    setTitle('Our Gastroenterologists');
  }
console.log('my api',pathname)
      
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`/api/${pathname}`);
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

  const createSlug = (name) => {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Only allow letters, numbers, spaces, and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim(); // Remove leading/trailing spaces
    
    // console.log(`Creating slug for "${name}": "${slug}"`); // Debug log
    return slug;
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
    <div className="px-20 py-8 bg-[#F1F8FF] my-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h1>
      <div className="grid lg:grid-cols-6 gap-2">
      {doctors
  .filter((doctor) => doctor.isFeatured && doctor.isVerified)
  .map((doctor) => {
    const slug = doctor.slug || createSlug(doctor.name);
    return (
      <Link
        key={doctor._id}
        href={`/doctors/${slug}`}
        className="block"
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-1 border border-hciSecondary">
          <div className="relative h-40 w-full">
            <Image
              src={doctor.image || '/default-doctor.jpg'}
              alt={doctor.name}
              fill
              className=""
            />
          </div>
          <div className="py-2">
            <div className="flex gap-2 flex-col">
              <h2 className="text-sm font-semibold text-hciSecondary text-start">{doctor.name}</h2>
              <p
                className="text-sm text-gray-600 font-light text-start flex-nowrap h-10 overflow-hidden text-ellipsis whitespace-nowrap"
                title={doctor.qualification[0]}
              >
                {doctor.qualification[0]}
              </p>
             
            </div>
            <div className="mt-2 flex items-center gap-4">
              <span className="text-sm text-gray-600 font-semibold">
                {doctor.reviews}
              </span> 
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.floor(doctor.rating)
                        ? 'text-hciSecondary'
                        : 'text-gray-300'
                    } w-4 h-4`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  })}

      </div>
      <div className='flex justify-center items-center mt-10'>
      <Link href={`/doctors/${paramSlug}`} className="border border-hciSecondary text-hciSecondary px-4 py-2 rounded-xl mt-4 hover:bg-hciSecondary hover:text-white transition-all duration-300">
                  VIEW MORE
        </Link>
        </div>
    </div>
  );
}

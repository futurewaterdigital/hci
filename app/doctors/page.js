'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaCheck, FaAward } from 'react-icons/fa';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const createSlug = (name) => {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Only allow letters, numbers, spaces, and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim(); // Remove leading/trailing spaces
    
    console.log(`Creating slug for "${name}": "${slug}"`); // Debug log
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => {
          const slug = createSlug(doctor.name);
          return (
            <Link
              key={doctor._id}
              href={`/doctors/${slug}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={doctor.image || '/default-doctor.jpg'}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
                    {doctor.isVerified && (
                      <FaCheck className="text-blue-500" title="Verified" />
                    )}
                    {doctor.isFeatured && (
                      <FaAward className="text-yellow-500" title="Featured" />
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
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
                  <p className="mt-2 text-gray-600">{doctor.experience} of experience</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {doctor.expertise.slice(0, 3).map((exp, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {exp}
                      </span>
                    ))}
                    {doctor.expertise.length > 3 && (
                      <span className="text-gray-500 text-xs">+{doctor.expertise.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

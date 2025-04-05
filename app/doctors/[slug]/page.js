'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaCheck, FaAward } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import React from 'react'
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";


export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const slug = params.slug;
  const [flipped, setFlipped] = useState(true);

  // Trigger flip on page load
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFlipped(false); // Trigger the flip after page loads
  //   }, 10); // 100ms delay for better UX
  //   return () => clearTimeout(timer); // Cleanup timer on unmount
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(prevState => !prevState); // Toggle flipped state
    }, 8000); // Set interval to 2 seconds for each flip (adjust as needed)

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, []);



  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`/api/doctors/${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json();
        setDoctors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);



  // const createSlug = (name) => {
  //   return name.toLowerCase().replace(/\s+/g, '-');
  // };
  // console.log(slug)
  // console.log(params)
  console.log(doctors.image)
  // console.log(loading)
  
 
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
    <>
<div className=' bg-[#F1F8FF]'>
        <div className="container mx-auto px-6 p-6 flex flex-col md:flex-row items-center ">
          <div className='flex flex-col items-center'>
            <img alt="Dr. Mazda K Turel" className="mr-6" src={doctors.image} height={300} width={300} />
            <button className="border border-hciSecondary text-hciSecondary px-4 py-2 rounded-xl mt-4">
      ENQUIRE NOW
     </button>
            </div>
    <div className="flex-1">
     <h1 className="text-pink-500 text-3xl font-bold">
      {doctors.name}
     </h1>
     <p className="text-gray-600 mt-2">
      <strong className='text-hciSecondary font-semibold'>
       Qualification
      </strong>
      <br/>
      {doctors.qualification.map((qualification, index) => (
        <div key={index} className=' font-light'>
          {qualification}
        </div>
      ))}
      <br/>
     </p>
     <p className="text-gray-600 mt-2">
      <strong className='text-hciSecondary'>
       Years of Experience
      </strong>
      <br/>
      <span className='font-light text-lg'>{doctors.experience}</span> 
     </p>
     <div className="flex items-center mt-2">
      <span className=" text-2xl font-bold">
       {doctors.rating}
      </span>
              <div className="flex ml-2">
              {Array.from({ length: 5 }).map((_, index) => {
  // Check if the current index is less than the rating (for full stars)
  if (index < Math.floor(doctors.rating)) {
    return <IoStarSharp key={index} className='text-hciSecondary text-2xl' />;
  }
  // Check if the current index is less than the rating + 0.5 (for a half star)
  if (index < Math.floor(doctors.rating) + 0.5 && doctors.rating % 1 >= 0.5) {
    return <IoStarHalfSharp key={index} className='text-hciSecondary text-2xl' />;
  }
  // Otherwise, render empty stars
  return <IoStarOutline key={index} className='text-hciSecondary text-2xl' />;
})}


      
      </div>
      <span className="text-gray-600 ml-2 font-light">
       ({doctors.reviews} reviews)
      </span>
     </div>
          </div>

     
    <div className="card mt-4 md:mt-0 md:ml-6 flex flex-col items-center h-[360px] justify-between">
            {doctors.isVerified && (
              <div className={`card ${flipped ? 'flipped' : ''}`}>
                <h2 className='text-hciPrimary text-2xl font-bold mb-4'>Accredited by HCI</h2>
<div className="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
        <div className="card__front absolute top-0 bottom-0 right-0 left-0  flex items-center justify-center">
        <img alt="Accredited by HCI"  height="200" src="/doctors/accredited.svg" width="200" />
        </div>
        <div className="card__back absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <img alt="Accredited by HCI"  height="200" src="/doctors/accredited.svg" width="200" />
        </div>
      </div>

                
                </div>
            )}

            {doctors.reviewEnabled && (
              <button className="border border-hciSecondary text-hciSecondary px-4 py-2 rounded-xl mt-4">
                WRITE A REVIEW
              </button>
            )}
    </div>
   </div>     


</div>
  <main className="container mx-auto mt-8 px-6">
   
   <section className="mt-8">
    <h2 className="text-pink-500 text-2xl font-bold text-center">
     Area of Expertise
    </h2>
    <div className="flex flex-wrap justify-center mt-4">
     {doctors.expertise.map((expertise, index) => (
      <span key={index} className="border border-hciSecondary text-hciSecondary px-4 py-2 rounded-full m-2">
        {expertise}
      </span>
     ))}
     
     
     
     
    </div>
   </section>
   <section className="mt-8">
  <div className="bg-white shadow-md rounded-lg p-6 mt-4 border border-hciSecondary">
  <h2 className="text-pink-500 text-2xl font-bold mb-4">
     {doctors.publicationData.heading}
    </h2>
     <ul className="list-disc list-inside text-hciSecondary space-y-2">
      {doctors.publicationData.publications.map((publication, index) => (
        <li key={index} className='text-xl font-light'>
          <span className='text-black text-lg'>{publication}</span>
        </li>
      ))}
     </ul>
    </div>
   </section>
   <section className="mt-8">
  <div className="bg-white shadow-md rounded-lg p-6 mt-4 border border-hciSecondary">
  <h2 className="text-pink-500 text-2xl font-bold mb-4">
     {doctors.researchData.heading}
    </h2>
     <ul className="list-disc list-inside text-hciSecondary space-y-2">
      {doctors.researchData.research.map((research, index) => (
        <li key={index} className='text-xl font-light'>
          <span className='text-black text-lg'>{research}</span>
        </li>
      ))}
     </ul>
    </div>
   </section>
   <section className="mt-8">
    <p className="text-gray-600 text-lg font-light" dangerouslySetInnerHTML={{ __html: doctors.aboutData.about }} />
    
   </section>
  
  </main>
 

  </>  
  );
}
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoStarOutline, IoStarHalfSharp, IoStarSharp } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ReviewForm from '@/components/ReviewForm';
import ReviewList from '@/components/ReviewList';

export default function DoctorsPage() {
  const { slug } = useParams();
  const router = useRouter();

  const [doctors, setDoctors] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flipped, setFlipped] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`/api/doctors/${slug}`);
        if (!response.ok) throw new Error('Failed to fetch doctor');

        const data = await response.json();
        console.log(data);
        // Redirect if not featured or not verified
        if (!data.isFeatured || !data.isVerified) {
          router.push('/doctors');
          return;
        }

        setDoctors(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [slug, router]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews/${slug}`);
        if (!response.ok) throw new Error('Failed to fetch reviews');

        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [slug]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleReviewSubmit = async (newReview) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  if (!doctors) return <div>Doctor not found</div>;

  return (
    <>
      <div className='bg-[#F1F8FF]'>
        <div className="container mx-auto px-6 p-6 flex flex-col md:flex-row items-center">
          <div className='flex flex-col items-center'>
            <img alt={doctors.name} className="mr-6" src={doctors.image} height={300} width={300} />
            <button className="border border-hciSecondary text-hciSecondary px-4 py-2 rounded-xl mt-4">
              ENQUIRE NOW
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-pink-500 text-3xl font-bold">{doctors.name}</h1>
            <p className="text-gray-600 mt-2">
              <strong className='text-hciSecondary font-semibold'>Qualification</strong><br />
              {doctors.qualification.map((qualification, index) => (
                <div key={index} className='font-light'>{qualification}</div>
              ))}
            </p>
            <p className="text-gray-600 mt-2">
              <strong className='text-hciSecondary'>Years of Experience</strong><br />
              <span className='font-light text-lg'>{doctors.experience}</span>
            </p>
            
            
            {/* temparory rating */}

             {doctors.rating > 0 && (
              <div className="flex items-center mt-2">
                <div className="flex ml-0 space-x-2"><strong className='text-xl font-medium '>{doctors.rating}</strong>
                  <div className='flex'>
                  {Array.from({ length: 5 }).map((_, index) => {
                    if (index < Math.floor(doctors.rating)) {
                      return <IoStarSharp key={index} className='text-hciSecondary text-2xl' />;
                    }
                    if (index < Math.floor(doctors.rating) + 0.5 && doctors.rating % 1 >= 0.5) {
                      return <IoStarHalfSharp key={index} className='text-hciSecondary text-2xl' />;
                    }
                    return <IoStarOutline key={index} className='text-hciSecondary text-2xl' />;
                  })}
                    </div>
                </div>
                <span className="text-gray-600 ml-2 font-light">({doctors.reviews} reviews)</span>
              </div>
            )}

            {/* temparory rating end here */}

            {/* {reviews.total > 0 && (
              <div className="flex items-center mt-2">
                <div className="flex ml-2">
                  {Array.from({ length: 5 }).map((_, index) => {
                    if (index < Math.floor(reviews.total)) {
                      return <IoStarSharp key={index} className='text-hciSecondary text-2xl' />;
                    }
                    if (index < Math.floor(reviews.total) + 0.5 && reviews.total % 1 >= 0.5) {
                      return <IoStarHalfSharp key={index} className='text-hciSecondary text-2xl' />;
                    }
                    return <IoStarOutline key={index} className='text-hciSecondary text-2xl' />;
                  })}
                </div>
                <span className="text-gray-600 ml-2 font-light">({reviews.total} reviews)</span>
              </div>
            )} */}
          </div>

          <div className="card mt-8 md:mt-0 md:ml-6 flex flex-col items-center h-[360px] justify-between">
            {doctors.isVerified && (
              <div className={`card ${flipped ? 'flipped' : ''}`}>
                <h2 className='text-hciPrimary text-2xl font-bold mb-4'>Accredited by HCI</h2>
                <div className="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
                  <div className="card__front absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                    <img alt="Accredited by HCI" height="200" src="/doctors/accredited.svg" width="200" />
                  </div>
                  <div className="card__back absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                    <img alt="Accredited by HCI" height="200" src="/doctors/accredited.svg" width="200" />
                  </div>
                </div>
              </div>
            )}

            {doctors.reviewEnabled && (
              <button onClick={openModal} className="border border-hciSecondary text-hciSecondary px-4 py-2 rounded-xl mt-4 uppercase">
                Write a Review
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative rounded-lg">
            <button onClick={closeModal} className="absolute -top-4 -right-4 text-lg font-bold text-hciSecondary">
              <IoIosCloseCircleOutline size={34} />
            </button>
            <ReviewForm doctorId={doctors._id} doctorName={doctors.name} onSubmit={handleReviewSubmit} />
          </div>
        </div>
      )}

      <main className="container mx-auto mt-8 px-6">
        <section className="mt-8">
          <h2 className="text-pink-500 text-2xl font-bold text-center">Area of Expertise</h2>
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
            <h2 className="text-pink-500 text-2xl font-bold mb-4">{doctors.publicationData.heading}</h2>
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
            <h2 className="text-pink-500 text-2xl font-bold mb-4">{doctors.researchData.heading}</h2>
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

        {/* Reviews Section */}
        {reviews.total > 0 && (
          <section className="mt-12">
            <h2 className="text-pink-500 text-2xl font-bold mb-6">Patient Reviews</h2>
            <div className="grid grid-cols-1">
              <ReviewList reviewsDb={reviews} />
            </div>
          </section>
        )}
      </main>
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Partners = ({ pathname, paramSlug }) => {
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
      setTitle('Our Neurosurgeons');
    } else if (paramSlug === 'others') {
      setTitle('Other Specialists');
    } else if (paramSlug === 'oncology') {
      setTitle('Our Oncologists');
    } else if (paramSlug === 'gastroenterology') {
      setTitle('Our Gastroenterologists');
    }

    const fetchDoctors = async () => {
      try {
        const response = await fetch(`/api/${pathname}`);
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

  const createSlug = (name) => {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    return slug;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    arrows: false,
    className: 'mx-auto',
    slidesToShow: 6,
    slidesToScroll: 6,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const SkeletonCard = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-1 border border-hciSecondary m-1 animate-pulse">
      <div className="relative h-48 w-full bg-gray-200"></div>
      <div className="py-2">
        <div className="flex gap-2 flex-col">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2 mt-1"></div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-4 w-8 bg-gray-300 rounded"></div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (error) {
    return <></>;
  }

  return (
    <div className="md:px-20 px-4 py-8 bg-[#F1F8FF] md:my-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h1>
      <div className="gap-4">
        <Slider {...settings}>
          {loading
            ? [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
            : doctors
                .filter((doctor) => doctor.isFeatured && doctor.isVerified)
                .map((doctor) => {
                  const slug = doctor.slug || createSlug(doctor.name);
                  return (
                    <Link
                      key={doctor._id}
                      href={`/doctors/${paramSlug}/${slug}`}
                      className="block"
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-1 border border-hciSecondary m-1">
                        <div className="relative lg:h-[230px] h-[350px] w-full">
                          <Image
                            src={doctor.image || '/default-doctor.jpg'}
                            alt={doctor.name}
                            fill
                            className="object-cover w-full"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex gap-2 flex-col">
                            <h2 className="text-sm font-semibold text-hciSecondary text-start">{doctor.name}</h2>
                            <p
                              className="text-sm text-gray-600 font-light text-start flex-nowrap h-10 overflow-hidden text-ellipsis whitespace-nowrap"
                              title={doctor.qualification[0]}
                            >
                              {doctor.qualification[0]}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center gap-2">
                            <span className="text-sm text-gray-600 font-semibold flex items-center mt-1">
                              {doctor.rating}
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
        </Slider>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link
          href={`/doctors/${paramSlug}`}
          className="border border-hciSecondary text-hciSecondary px-4 py-2 rounded-xl mt-4 hover:bg-hciSecondary hover:text-white transition-all duration-300"
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};

export default Partners;

"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic"; // Lazy load Footer
import Header from "../../../components/Header/page";
import Banner from "../../../components/Treatment/Banner/page";
import { usePathname, useSearchParams } from "next/navigation";
import CardioMenu from "../../../components/cardiacComponents/Menu";
import OthersMenu from "../../../components/OthersComppnents/Menu";
import OrthopedicsMenu from "../../../components/OrthopedicsMenu/page";
import BookNow from "@/components/cardiacComponents/BookButton";
import OurNetwork from "@/components/HomePage/Partners/Partners";
import Testimonials from "@/components/HomePage/Testimonials/page";
import NeuroMenu from "../../../components/NeuroMenu/page";
import GastroenterologyMenu from "../../../components/GastroenterologyMenu/page";
import OncologyMenu from "../../../components/OncologyMenu/page";
import H1 from "@/components/ui/h1";
import TreatmentDoctors from "@/components/TreatmentDoctors";
// Dynamically import Footer to lazy-load
const Footer = dynamic(() => import("../../../components/Footer/page"), {
  loading: () => <div className="bg-gray-300 h-24 w-full"></div>, // Placeholder while Footer is loading
});

export default function City({ params }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategory] = useState(params.slug);
  const [network, setNetworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noData, setNoData] = useState(null);
  const cache = useRef(new Map());
  const doctorsSectionRef = useRef(null);

  // Handle scrolling when the query parameter is present
  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo === 'doctors' && !loading) {
      const attemptScroll = () => {
        const doctorsSection = document.getElementById('doctors');
        if (doctorsSection) {
          const yOffset = -100; // Adjust this value based on your header height
          const y = doctorsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };

      // Try multiple times to ensure the section is found
      attemptScroll();
      setTimeout(attemptScroll, 100);
      setTimeout(attemptScroll, 500);
      setTimeout(attemptScroll, 1000);
    }
  }, [searchParams, loading]);

  useEffect(() => {
    // Check if data is already cached to prevent redundant API calls
    if (cache.current.has(selectedCategory)) {
      setNetworks(cache.current.get(selectedCategory));
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(
      `https://cdn.healthcareinternational.in/wp-json/wp/v2/posts?embed&slug=${selectedCategory}&_fields=title,content,acf.banner`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          // Sort the data if necessary
          const sortedData = data.sort((a, b) =>
            a.title.rendered.localeCompare(b.title.rendered)
          );
          setNetworks(sortedData);
          //console.log(object)
          cache.current.set(selectedCategory, sortedData); // Cache the response
          setNoData(null);
        } else {
          setNoData("No Data Available");
          setNetworks([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <>
      <Header />

      {error && <p className="text-red-500">{error}</p>}
      {noData && <p className="text-gray-500">{noData}</p>}

      {loading ? (
        // Skeleton Loader
        <>
          <div className="animate-pulse">
            <div className="relative h-screen bg-gray-300"></div>
            <div className="w-9/12 mx-auto mt-10">
              <div className="h-10 bg-gray-300 w-full mb-4"></div>
              <div className="h-6 bg-gray-300 w-full mb-2"></div>
              <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-300 w-1/2 mb-2"></div>
            </div>
          </div>
        </>
      ) : (
        // Actual Content
        <>
          {network.map((items, index) => (
            <React.Fragment key={index}>
              {items.acf?.banner?.url ? (
                // Render Banner component with the banner URL
                <Banner city={params.slug} banner={items.acf.banner.url} />
              ) : (
                // Skeleton Placeholder for banner if no URL
                <div className="relative h-screen bg-gray-300 animate-pulse"></div>
              )}

              <div className="w-9/12 mx-auto py-4">
                <div className="">
                  <H1 title={items.title.rendered} />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: items.content.rendered }}
                  className="font-light"
                />
              </div>
            </React.Fragment>
          ))}
          <div className="container mx-auto text-center pt-4 space-y-8">
            {pathname === "/treatment/cardiac-sciences" && <CardioMenu />}
            {pathname === "/treatment/orthopedics" && <OrthopedicsMenu />}
            {pathname === "/treatment/neuro-sciences" && <NeuroMenu />}
            {pathname === "/treatment/others" && <OthersMenu />}
            {pathname === "/treatment/oncology" && <OncologyMenu />}
            {pathname === "/treatment/gastroenterology" && (
              <GastroenterologyMenu />
            )}
          </div>
          <div id="doctors" ref={doctorsSectionRef} className="scroll-mt-24">
            <TreatmentDoctors pathname={pathname} paramSlug={params.slug} />
          </div>
          <OurNetwork />
          <Testimonials />
          <BookNow />
        </>
      )}

      <Footer />
    </>
  );
}

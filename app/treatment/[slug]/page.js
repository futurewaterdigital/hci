"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
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

const Footer = dynamic(() => import("../../../components/Footer/page"), {
  loading: () => <div className="bg-gray-300 h-24 w-full"></div>,
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

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo === "doctors" && !loading) {
      const attemptScroll = () => {
        const doctorsSection = document.getElementById("doctors");
        if (doctorsSection) {
          const yOffset = -100;
          const y =
            doctorsSection.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };
      attemptScroll();
      setTimeout(attemptScroll, 100);
      setTimeout(attemptScroll, 500);
      setTimeout(attemptScroll, 1000);
    }
  }, [searchParams, loading]);

  useEffect(() => {
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
          const sortedData = data.sort((a, b) =>
            a.title.rendered.localeCompare(b.title.rendered)
          );
          setNetworks(sortedData);
          cache.current.set(selectedCategory, sortedData);
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

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {noData && <p className="text-gray-500 text-center mt-4">{noData}</p>}

      {loading ? (
        <div className="animate-pulse">
          <div className="relative h-[300px] sm:h-[400px] md:h-screen bg-gray-300"></div>
          <div className="w-full max-w-screen-md mx-auto mt-10 px-4 space-y-4">
            <div className="h-10 bg-gray-300 w-full"></div>
            <div className="h-6 bg-gray-300 w-full"></div>
            <div className="h-6 bg-gray-300 w-3/4"></div>
            <div className="h-6 bg-gray-300 w-1/2"></div>
          </div>
        </div>
      ) : (
        <>
          {network.map((items, index) => (
            <React.Fragment key={index}>
              {items.acf?.banner?.url ? (
                <Banner city={params.slug} banner={items.acf.banner.url} />
              ) : (
                <div className="relative h-[300px] sm:h-[400px] md:h-screen bg-gray-300 animate-pulse"></div>
              )}

              <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-4">
                <H1 title={items.title.rendered} />
                <div
                  className="font-light prose prose-sm sm:prose md:prose-lg max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: items.content.rendered,
                  }}
                />
              </div>
            </React.Fragment>
          ))}

          <div className="md:container mx-auto text-center pt-4 px-4 md:space-y-8 ">
            {pathname === "/treatment/cardiac-sciences" && <CardioMenu />}
            {pathname === "/treatment/orthopedics" && <OrthopedicsMenu />}
            {pathname === "/treatment/neuro-sciences" && <NeuroMenu />}
            {pathname === "/treatment/others" && <OthersMenu />}
            {pathname === "/treatment/oncology" && <OncologyMenu />}
            {pathname === "/treatment/gastroenterology" && (
              <GastroenterologyMenu />
            )}
          </div>

          <div
            id="doctors" 
            ref={doctorsSectionRef}
            className="scroll-mt-24 px-4 sm:px-6 lg:px-8"
          >
            <TreatmentDoctors pathname={pathname} paramSlug={params.slug} />
          </div>

          <div className="px-4 sm:px-6 lg:px-8">
            <OurNetwork />
            <Testimonials />
          </div>

          <div className="w-full px-4 text-center mt-8">
            <BookNow />
          </div>
        </>
      )}

      <Footer />
    </>
  );
}

import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full bg-gray-100">
      <img
        src="/blogs/main-blog-page-banner.webp" // replace with your actual image path
        alt="Doctor with tablet"
        className="w-full h-[600px] object-cover"
      />
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
          Blogs
        </h1>
      </div> */}
    </section>
  );
};

export default Banner;

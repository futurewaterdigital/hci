import React from "react";

const blogs = [
  {
    id: 1,
    date: "Aug 21, 2024",
    title: "Bone Marrow Transplant: A Life-saving Procedure",
    description:
      "Bone marrow transplant, also known as hematopoietic stem cell transplant, is a medical procedure that replaces damaged or diseased bone marrow with healthy functioning marrow.",
    image: "/blogs/blog-1.webp",
  },
  {
    id: 2,
    date: "Sep 21, 2024",
    title:
      "Breakthrough in mRNA Delivery: New Lipid Nanoparticle System Crosses the Blood-brain Barrier",
    description:
      "Researchers at the Icahn School of Medicine at Mount Sinai have developed an improved lipid nanoparticle system capable of delivering messenger RNA (mRNA) directly to the brain via intravenous injection.",
    image: "/blogs/blog-2.webp",
  },
  {
    id: 3,
    date: "Oct 21, 2024",
    title:
      "GLP-1 Receptor Agonists Linked to Reduced Risk of Cirrhosis Progression in Early-Stage Metabolic Liver Disease",
    description:
      "A recent cohort study has revealed potential benefits of GLP-1 receptor agonists (GLP-1 RAs) in treating metabolic dysfunction-associated steatotic liver disease (MASLD)...",
    image: "/blogs/blog-3.webp",
  },
  {
    id: 4,
    date: "Dec 21, 2024",
    title:
      "Revolutionizing Healthcare: How Artificial Intelligence is Transforming Patient Care",
    description:
      "Artificial Intelligence (AI) is ushering in a new era of innovation in healthcare, unlocking possibilities that were once thought to be far in the future...",
    image: "/blogs/blog-4.webp",
  },
  {
    id: 5,
    date: "Jan 21, 2025",
    title:
      "Robot that Watched Surgery Videos performs with the Skill of a Human Doctor",
    description:
      "A robot, trained for the first time by watching videos of seasoned surgeons, executed the same surgical procedures as skillfully as human doctors...",
    image: "/blogs/blog-5.webp",
  },
  {
    id: 6,
    date: "Feb 21, 2025",
    title: "The Development of Implantable Artificial Organs",
    description:
      "In the realm of modern medicine, the development of implantable artificial organs stands as a beacon of hope for millions of patients worldwide...",
    image: "/blogs/blog-5.webp",
  },
];

const BlogComponent = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold text-pink-600 mb-10">
          Blogs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-pink-300 rounded-lg p-4 hover:shadow-lg transition-all"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 min-h-24">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {blog.description}
              </p>
              <button className="px-4 py-2 text-sm text-white bg-pink-600 rounded-md hover:bg-pink-700">
                READ MORE
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 space-x-3">
          <button className="text-gray-500 hover:text-pink-600">&lt;</button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-white bg-pink-600">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
            3
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
            4
          </button>
          <button className="text-gray-500 hover:text-pink-600">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;

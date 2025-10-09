'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const treatments = [
    { title: "Cardiac Sciences", img: "/specialized-treatments/cardiac-science.png", link: "/treatment/cardiac-sciences" },
    { title: "Oncology", img: "/specialized-treatments/oncology.png", link: "/treatment/oncology" },
    { title: "Neurosciences", img: "/specialized-treatments/neurosciences.png", link: "/treatment/neuro-sciences" },
    { title: "Gastroenterology", img: "/specialized-treatments/gastroenterology.png", link: "/treatment/gastroenterology" },
    { title: "Orthopedics", img: "/specialized-treatments/orthopedic.png", link: "/treatment/orthopedics" },
    { title: "Other Conditions", img: "/specialized-treatments/other-conditions.png", link: "/treatment/others" },
]

const Treatments = () => {
    return (
        <section className="py-12 px-6 bg-white">
            <div className="text-center mb-8">
                <p className="py-4 lg:text-5xl text-2xl p-4 lg:p-4 font-semibold">
                    Bespoke medical solutions for your medical problems<br /> by a team of the best experts, curated by HCI.
                </p>
                <hr className="w-64 h-1 mx-auto my-6 bg-[#D84498] border-0 rounded" />
                <h3 className="text-lg md:text-xl font-semibold mt-2">
                    Specialized Treatments In
                </h3>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {treatments.map((item, index) => (
                    <Link key={index} href={item.link} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col items-center cursor-pointer">
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={250}
                            className="object-cover w-full h-48"
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Treatments

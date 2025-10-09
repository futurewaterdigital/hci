'use client'
import React from 'react'
import H1 from '@/components/ui/h1'

const Banner = () => {
    return (
        <div className="relative lg:h-[740px] h-[100vh]" id="home">
            {/* Background Image */}
            <div className="absolute inset-0 bg-right bg-no-repeat bg-[url('/specialized-treatments/SpecializedTreatmentsBanner.png')] bg-cover"></div>
            {/* Gradient + Content */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0e57a0] via-[#0e57a0cf] to-transparent opacity-90"></div> */}

            <div className="relative flex flex-col items-center justify-end h-full text-white p-6 pb-12">
                <H1
                    title="Expert advisory and treatment from the most reputed specialists in India, The Middle East and ASEAN countries."
                    className="font-semibold lg:text-[40px] text-[36px] text-center mt-2 px-36"
                />
            </div>
        </div>
    )
}



export default Banner

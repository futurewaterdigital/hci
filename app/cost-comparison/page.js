import React from "react";
import Banner from "@/components/Common/Banner";
const bannerImage = "/images/price-comparison.png";
import BookButton from "@/components/cardiacComponents/BookButton";
import H2 from "@/components/ui/h2";
import H1 from "@/components/ui/h1";

// const medicalProcedures = [
//   {
//     procedure: 'Heart Bypass (CABG)',
//     India: '5,200',
//     UK: '134,000',
//     USA: '144,000',
//     Thailand: '15,121',
//     Singapore: '37,000',
//     Turkey: '15,000',
//   },
//   {
//     procedure: 'Angioplasty',
//     India: '3,300',
//     UK: '13,000',
//     USA: '57,000',
//     Thailand: '13,000',
//     Singapore: '13,000',
//     Turkey: '15,000',
//   },
//   {
//     procedure: 'Heart Valve Replacement',
//     India: '5,500',
//     UK: '30,000',
//     USA: '170,000',
//     Thailand: '17,000',
//     Singapore: '17,000',
//     Turkey: '17,000',
//   },
//   {
//     procedure: 'Total Hip Replacement',
//     India: '3,500',
//     UK: '12,500',
//     USA: '50,000',
//     Thailand: '12,000',
//     Singapore: '13,000',
//     Turkey: '13,000',
//   },
//   {
//     procedure: 'Total Knee Replacement',
//     India: '11,000',
//     UK: '40,000',
//     USA: '50,000',
//     Thailand: '13,000',
//     Singapore: '14,000',
//     Turkey: '11,000',
//   },
//   {
//     procedure: 'IVF Treatment',
//     India: '65,000',
//     UK: '12,000',
//     USA: '12,000',
//     Thailand: '12,000',
//     Singapore: '15,000',
//     Turkey: '5,000',
//   },
//   {
//     procedure: 'Dental Implant',
//     India: '1,500',
//     UK: '4,000',
//     USA: '3,500',
//     Thailand: '2,400',
//     Singapore: '3,000',
//     Turkey: '1,000',
//   },
//   {
//     procedure: 'Gastric Bypass',
//     India: '12,000',
//     UK: '15,000',
//     USA: '35,000',
//     Thailand: '16,800',
//     Singapore: '15,000',
//     Turkey: '15,000',
//   },
//   {
//     procedure: 'Spinal Fusion',
//     India: '18,000',
//     UK: '30,000',
//     USA: '110,000',
//     Thailand: '15,000',
//     Singapore: '15,000',
//     Turkey: '15,000',
//   },
//   {
//     procedure: 'Liver Transplant',
//     India: '95,000',
//     UK: '200,000',
//     USA: '300,000',
//     Thailand: '75,000',
//     Singapore: '150,000',
//     Turkey: '120,000',
//   },
//   {
//     procedure: 'Dental Crown',
//     India: '1,200',
//     UK: '1,000',
//     USA: '1,200',
//     Thailand: '600',
//     Singapore: '800',
//     Turkey: '600',
//   },
//   {
//     procedure: 'Gastric Sleeve',
//     India: '5,000',
//     UK: '12,000',
//     USA: '20,000',
//     Thailand: '14,000',
//     Singapore: '15,000',
//     Turkey: '12,000',
//   },
//   {
//     procedure: 'Gastric Band',
//     India: '5,000',
//     UK: '10,000',
//     USA: '18,000',
//     Thailand: '12,000',
//     Singapore: '14,000',
//     Turkey: '9,000',
//   },
//   {
//     procedure: 'Breast Implants',
//     India: '12,000',
//     UK: '8,000',
//     USA: '10,000',
//     Thailand: '5,000',
//     Singapore: '8,000',
//     Turkey: '4,500',
//   },
//   {
//     procedure: 'Rhinoplasty',
//     India: '6,000',
//     UK: '7,000',
//     USA: '8,500',
//     Thailand: '4,500',
//     Singapore: '8,000',
//     Turkey: '3,500',
//   },
//   {
//     procedure: 'Face Lift',
//     India: '15,000',
//     UK: '12,000',
//     USA: '15,000',
//     Thailand: '7,000',
//     Singapore: '12,000',
//     Turkey: '6,500',
//   },
//   {
//     procedure: 'Liposuction',
//     India: '5,500',
//     UK: '7,000',
//     USA: '9,000',
//     Thailand: '4,000',
//     Singapore: '8,000',
//     Turkey: '3,000',
//   },
//   {
//     procedure: 'Tummy Tuck',
//     India: '7,000',
//     UK: '9,000',
//     USA: '9,500',
//     Thailand: '5,500',
//     Singapore: '9,000',
//     Turkey: '4,500',
//   },
//   {
//     procedure: 'Hair Transplant',
//     India: '6,200',
//     UK: '15,000',
//     USA: '15,000',
//     Thailand: '7,000',
//     Singapore: '12,000',
//     Turkey: '2,500',
//   },
//   {
//     procedure: 'Lasik (both eyes)',
//     India: '6,500',
//     UK: '5,000',
//     USA: '4,000',
//     Thailand: '2,500',
//     Singapore: '3,500',
//     Turkey: '2,000',
//   }
// ];

// const hotelData = [
//   {
//     category: '5-Star Hotel',
//     Bangalore: '100',
//     Chennai: '100',
//     Delhi: '133',
//     Hyderabad: '63',
//   },

//   {
//     category: '3-Star Hotel',
//     Bangalore: '33',
//     Chennai: '27',
//     Delhi: '43',
//     Hyderabad: '43',
//   },

// ]

// const medicalProcedures = [
//   {
//     procedure: 'Heart Bypass',
//     India: '$5,200',
//     'Costa Rica': '$25,000',
//     Korea: '$28,900',
//     Malaysia: '$11,430',
//     Thailand: '$15,121',
//     US: '$144,000',
//   },
//   {
//     procedure: 'Angioplasty',
//     India: '$3,300',
//     'Costa Rica': '$13,000',
//     Korea: '$15,200',
//     Malaysia: '$5,430',
//     Thailand: '$3,788',
//     US: '$57,000',
//   },
//   {
//     procedure: 'Heart Valve Replacement',
//     India: '$5,500',
//     'Costa Rica': '$30,000',
//     Korea: '$43,500',
//     Malaysia: '$10,580',
//     Thailand: '$21,212',
//     US: '$170,000',
//   },
//   {
//     procedure: 'Hip Replacement',
//     India: '$7,000',
//     'Costa Rica': '$12,500',
//     Korea: '$14,120',
//     Malaysia: '$7,500',
//     Thailand: '$7,879',
//     US: '$50,000',
//   },
//   {
//     procedure: 'Hip Resurfacing',
//     India: '$7,000',
//     'Costa Rica': '$12,500',
//     Korea: '$15,600',
//     Malaysia: '$12,350',
//     Thailand: '$15,152',
//     US: '$50,000',
//   },
//   {
//     procedure: 'Knee Replacement',
//     India: '$6,200',
//     'Costa Rica': '$11,500',
//     Korea: '$19,800',
//     Malaysia: '$7,000',
//     Thailand: '$12,297',
//     US: '$50,000',
//   },
//   {
//     procedure: 'Spinal Fusion',
//     India: '$6,500',
//     'Costa Rica': '$11,500',
//     Korea: '$15,400',
//     Malaysia: '$6,000',
//     Thailand: '$9,091',
//     US: '$100,000',
//   },
//   {
//     procedure: 'Dental Implant',
//     India: '$1,000',
//     'Costa Rica': '$900',
//     Korea: '$4,200',
//     Malaysia: '$345',
//     Thailand: '$3,636',
//     US: '$2,800',
//   },
//   {
//     procedure: 'Lap Band',
//     India: '$3,000',
//     'Costa Rica': '$8,500',
//     Korea: 'N/A',
//     Malaysia: 'N/A',
//     Thailand: '$11,515',
//     US: '$30,000',
//   },
//   {
//     procedure: 'Breast Implants',
//     India: '$3,500',
//     'Costa Rica': '$3,800',
//     Korea: '$12,500',
//     Malaysia: 'N/A',
//     Thailand: '$2,727',
//     US: '$10,000    ',
//   },
//   {
//     procedure: 'Rhinoplasty',
//     India: '$4,000',
//     'Costa Rica': '$4,500',
//     Korea: '$5,000',
//     Malaysia: '$1,293',
//     Thailand: '$3,901',
//     US: '$8,000',
//   },
//   {
//     procedure: 'Face Lift',
//     India: '$4,000',
//     'Costa Rica': '$6,000',
//     Korea: '$15,300',
//     Malaysia: '$3,400',
//     Thailand: '$3,697',
//     US: '$15,000',
//   },
//   {
//     procedure: 'Hysterectomy',
//     India: '$2,500',
//     'Costa Rica': '$5,700',
//     Korea: '$11,000',
//     Malaysia: '$5,250',
//     Thailand: '$2,727',
//     US: '$15,000',
//   },
//   {
//     procedure: 'Gastric Sleeve',
//     India: '$5,000',
//     'Costa Rica': '$10,500',
//     Korea: 'N/A',
//     Malaysia: 'N/A',
//     Thailand: '$13,636',
//     US: '$28,700',
//   },
//   {
//     procedure: 'Gastric Bypass',
//     India: '$5,000',
//     'Costa Rica': '$12,500',
//     Korea: 'N/A',
//     Malaysia: '$9,450',
//     Thailand: '$16,667',
//     US: '$32,972',
//   },
//   {
//     procedure: 'Liposuction',
//     India: '$2,800',
//     'Costa Rica': '$3,900',
//     Korea: 'N/A',
//     Malaysia: '$2,299',
//     Thailand: '$2,303',
//     US: '$9,000',
//   },
//   {
//     procedure: 'Tummy Tuck',
//     India: '$3,000',
//     'Costa Rica': '$5,300',
//     Korea: 'N/A',
//     Malaysia: 'N/A',
//     Thailand: '$5,000',
//     US: '$9,750',
//   },
//   {
//     procedure: 'Lasik (both eyes)',
//     India: '$500',
//     'Costa Rica': '$1,800',
//     Korea: '$6,000',
//     Malaysia: '$477',
//     Thailand: '$1,818',
//     US: '$4,400',
//   },
//   {
//     procedure: 'Cornea (both eyes)',
//     India: 'N/A',
//     'Costa Rica': '$4,200',
//     Korea: '$7,000',
//     Malaysia: 'N/A',
//     Thailand: '$1,800',
//     US: 'N/A',
//   },
//   {
//     procedure: 'Retina',
//     India: '$850',
//     'Costa Rica': '$4,500',
//     Korea: '$10,200',
//     Malaysia: '$3,000',
//     Thailand: '$4,242',
//     US: 'N/A',
//   },
//   {
//     procedure: 'IVF Treatment',
//     India: '$3,250',
//     'Costa Rica': '$2,800',
//     Korea: '$2,180',
//     Malaysia: '$3,819',
//     Thailand: '$9,091',
//     US: 'N/A',
//   },
// ]
// const hotelData = [
//   {
//     category: '5-Star Hotel',
//     Bangalore: '$100',
//     Chennai: '$100',
//     Delhi: '$133',
//     Hyderabad: '$63',
//   },
//   {
//     category: 'Static mean for 3 months (5-star)',
//     Bangalore: '$9,000',
//     Chennai: '$9,000',
//     Delhi: '$11,970',
//     Hyderabad: '$5,670',
//   },
//   {
//     category: '3-Star Hotel',
//     Bangalore: '$33',
//     Chennai: '$27',
//     Delhi: '$43',
//     Hyderabad: '$43',
//   },
//   {
//     category: 'Static Mean for 3 months (3-star)',
//     Bangalore: '$2,970',
//     Chennai: '$2,430',
//     Delhi: '$3,870',
//     Hyderabad: '$3,870',
//   },
// ]

function page() {
  // const countries = [
  //   'India',
  //   'UK',
  //   'USA',
  //   'Thailand',
  //   'Singapore',
  //   'Turkey',
  // ]
  // const places = ['Bangalore', 'Chennai', 'Delhi', 'Hyderabad']

  return (
    <>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      <div className="md:container mx-auto px-4">
        <div className="relative py-4">
          <div className=" flex items-center justify-center">
            <H1 title="Cost Comparison" />
          </div>
        </div>

        <section className="md:container mx-auto md:px-6">
          <p className="mb-8 font-light">
            Value based medicine and treatment is a very compelling reason why
            people are travelling abroad to avail the best medical facilities at
            a lower cost of what they have to pay in their resident country.
            India is able to afford world-class medical care at a value for
            money, thanks to the focus on healthcare, innovations, make in India,
            selfless care, private hospitals leading the improved access to
            healthcare and doctors who go beyond the call of duty putting
            patients first.
          </p>
          <p className="mb-8 font-light">
            As per a cost comparison study by the American Medical Association, a knee replacement surgery will cost $75,000 in US, $15,000 in Thailand and $32,000 in Singapore, and only $6200 in India. Similarly, in the US for a bone marrow transplant you will have to pay around $450,000, in UK $150,000 but in India it will cost just $18,000. No matter what treatment you opt for, you are going to save around 70-75 % of the total cost including health or medical services, wellness travel, accommodation and food services.
          </p>
          <p className="mb-8 font-light">
            Refer to the chart below for a comparative analysis of treatment
            costs:
          </p>
          <div className="text-center py-4">
            <h2 className="text-black font-semibold text-lg">
              Treatment Cost Comparison (USD)
            </h2>
          </div>
          <div className="overflow-x-auto">
            <img src="/images/table2.png" alt="Treatment Cost Comparison" />
            {/* <table className="min-w-full bg-white border border-hciPrimary">
              <thead>
                <tr className="bg-pink-600 text-white">
                  <th className="py-2 px-4 border border-hciPrimary font-roboto">
                    Procedures
                  </th>
                  {countries.map((country) => (
                    <th
                      key={country}
                      className={`py-2 px-4 border border-hciPrimary font-roboto ${
                        country === 'India' ? 'bg-hciYellow text-black' : ''
                      }`}
                    >
                      {country}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {medicalProcedures.map((procedure) => (
                  <tr key={procedure.procedure} className="hover:bg-pink-200">
                    <td className="py-2 px-4 border border-hciPrimary ">
                      {procedure.procedure}
                    </td>
                    {countries.map((country) => (
                      <td
                        key={country}
                        className={`py-2 px-4 border border-hciPrimary ${
                          country === 'India' ? 'bg-hciYellow' : ''
                        }`}
                      >
                        {procedure[country] ? procedure[country] : 'N/A'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>

          <div className="max-w-6xl mx-auto text-start mt-12">
            <p className="font-light mb-8">
              The cost of treatment in India is much lower, almost three times
              less expensive in comparison to a number of western countries such
              as the United States and United Kingdom. Just opt for healthcare
              tourism services through Healthcare International and get the best
              of healthcare services. We, at Healthcare International offer
              excellent assistance to patients who visit India to avail advanced
              surgery/treatment. We are dedicated in offering the most advanced
              treatments in the world through our network of JCI & HCI
              accredited hospitals and specialists.
            </p>
          </div>

          <H2
            title="Hotel Expenses in India"
            className=" text-pink-600 font-bold mb-4 text-center text-lg"
          />
          <div className="overflow-x-auto">
            <img src="/images/hotels.png" alt="Treatment Cost Comparison" />
            {/* <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-pink-600 text-white">
                  <th className="py-2 px-4 border border-hciPrimary">Place</th>
                  {places.map((place) => (
                    <th
                      key={place}
                      className="py-2 px-4 border border-hciPrimary "
                    >
                      {place} <small>(USD)</small>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hotelData.map((item) => (
                  <tr key={item.category} className="hover:bg-pink-200">
                    <td className="py-2 px-4 border border-hciPrimary">
                      {item.category}
                    </td>
                    {places.map((place) => (
                      <td
                        key={place}
                        className="py-2 px-4 border border-hciPrimary"
                      >
                        ${item[place]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
          <div className="py-12">
            <BookButton />
          </div>
        </section>
      </div>
    </>
  );
}

export default page;

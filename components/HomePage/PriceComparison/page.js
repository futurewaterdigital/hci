import Link from 'next/link'
export default function PriceComparison() {
  return (
    <div className="bg-white container mx-auto">
          
          <h3 class="py-4 lg:text-3xl text-2xl p-4 lg:p-4 text-center">Cost Comparison - India vs Other Countries</h3>
      <div className="flex justify-center items-center">
        <div className="space-y-4 flex flex-col items-center">
          <p className="font-light">The cost of treatment in India is much lower, almost three times less expensive in comparison to a number of western countries such as the United States and the United Kingdom. Just opt for healthcare tourism services through Healthcare International and get the best of healthcare services. We, at Healthcare International have been offering excellent assistance to foreign patients who visit India to avail advanced surgery treatments at low cost operations. Lower cost does not mean any compromise in quality. We are dedicated to offering the most advanced treatments in the world at reasonable costs so that you can fulfill your dream of leading a healthy life.</p>
            <Link href="/price-comparison" className="uppercase bg-hciSecondary text-white px-4 py-2 rounded-lg">compare now</Link>
              </div>
        
      </div>
    </div>
  );
}
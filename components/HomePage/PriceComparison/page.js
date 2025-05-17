import Link from "next/link";
export default function PriceComparison() {
  return (
    <div className="bg-white container mx-auto">
      <h3 class="py-4 lg:text-3xl text-2xl p-4 lg:p-4 text-center">
        Cost Comparison - India vs Other Countries
      </h3>
      <div className="flex justify-center items-center">
        <div className="space-y-4 flex flex-col items-center">
          <p className="font-light text-center max-w-6xl mx-auto">
            The cost of treatment in India is much lower, compared to other
            countries. We at Healthcare international offer medical value travel
            and solutions for advance treatments, and ensure you lead a healthy
            life.
          </p>
          <Link
            href="/cost-comparison"
            className="uppercase bg-hciSecondary text-white px-4 py-2 rounded-lg"
          >
            compare now
          </Link>
        </div>
      </div>
    </div>
  );
}

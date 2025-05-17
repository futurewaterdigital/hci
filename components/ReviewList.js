'use client';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

export default function ReviewList({ reviewsDb }) {
  const [visibleReviews, setVisibleReviews] = useState(1); // Initially show 10 reviews

  if (!reviewsDb || reviewsDb.total=== 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        <p className="text-gray-500">No reviews yet. Be the first to review!</p>
      </div>
    );
  }

  // Handle the "Load More" button click
  const loadMoreReviews = () => {
    setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 10); // Load 10 more reviews
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">Reviews ({reviewsDb.total})</h3>
      <div className="space-y-6">
        {Array.isArray(reviewsDb.reviews) &&
          reviewsDb.reviews.slice(0, visibleReviews).map((review) => (
            <div key={review._id} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {review.rating.toFixed(1)} stars
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{review.comment}</p>
              <p className="text-sm text-gray-500">- {review.patientName}</p>
            </div>
          ))}
      </div>

      {/* Load More Button */}
      {visibleReviews < reviewsDb.total && (
        <div className="text-center mt-6">
          <button
            onClick={loadMoreReviews}
            className="px-4 py-2 border-hciSecondary text-hciSecondary border rounded-md  disabled:opacity-50"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

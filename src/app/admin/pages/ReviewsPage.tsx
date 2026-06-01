import { Star } from "lucide-react";

export function ReviewsPage() {
  const reviews = [
    { id: "1", customer: "Rajesh Patel", item: "Signature Chicken Akni", rating: 5, comment: "Best Akni in Ahmedabad! The flavors are absolutely authentic.", date: "2026-05-30" },
    { id: "2", customer: "Priya Shah", item: "Butter Chicken", rating: 5, comment: "Love the loyalty program! Food quality is consistently excellent.", date: "2026-05-29" },
    { id: "3", customer: "Mohammed Khan", item: "Mutton Biryani", rating: 4, comment: "Very good taste, delivery was a bit late.", date: "2026-05-28" },
  ];

  const avgRating = 4.8;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Reviews</h1>
        <p className="text-gray-600">Monitor and respond to customer feedback</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="text-4xl font-bold text-orange-600 mb-2">{avgRating}</div>
          <div className="flex gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < Math.floor(avgRating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
            ))}
          </div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-medium text-gray-900">{review.customer}</div>
                  <div className="text-sm text-gray-500">{review.item}</div>
                </div>
                <div className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('en-IN')}</div>
              </div>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

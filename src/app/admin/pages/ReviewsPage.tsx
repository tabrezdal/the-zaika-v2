import { useState } from "react";
import { Star, MessageSquare, X } from "lucide-react";

export function ReviewsPage() {
  const [reviews, setReviews] = useState([
    { id: "1", customer: "Rajesh Patel", item: "Signature Chicken Akni", rating: 5, comment: "Best Akni in Ahmedabad! The flavors are absolutely authentic.", date: "2026-05-30", reply: null },
    { id: "2", customer: "Priya Shah", item: "Butter Chicken", rating: 5, comment: "Love the loyalty program! Food quality is consistently excellent.", date: "2026-05-29", reply: "Thank you for your kind words! We're thrilled to have you as a valued customer." },
    { id: "3", customer: "Mohammed Khan", item: "Mutton Biryani", rating: 4, comment: "Very good taste, delivery was a bit late.", date: "2026-05-28", reply: null },
  ]);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const avgRating = 4.8;

  const handleSubmitReply = (reviewId: string) => {
    setReviews(reviews.map(review =>
      review.id === reviewId ? { ...review, reply: replyText } : review
    ));
    setReplyingTo(null);
    setReplyText("");
  };

  const handleDeleteReply = (reviewId: string) => {
    setReviews(reviews.map(review =>
      review.id === reviewId ? { ...review, reply: null } : review
    ));
  };

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
              <p className="text-gray-700 mb-3">{review.comment}</p>

              {/* Admin Reply */}
              {review.reply && (
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg mb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-900">The Zaika Team</span>
                    </div>
                    <button
                      onClick={() => handleDeleteReply(review.id)}
                      className="text-orange-600 hover:text-orange-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-orange-900">{review.reply}</p>
                </div>
              )}

              {/* Reply Form */}
              {replyingTo === review.id ? (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write your response to the customer..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSubmitReply(review.id)}
                      disabled={!replyText.trim()}
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                    >
                      Submit Reply
                    </button>
                    <button
                      onClick={() => {
                        setReplyingTo(null);
                        setReplyText("");
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : !review.reply && (
                <button
                  onClick={() => setReplyingTo(review.id)}
                  className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  <MessageSquare className="w-4 h-4" />
                  Reply to Review
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

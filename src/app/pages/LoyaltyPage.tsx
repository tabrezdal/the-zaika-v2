import { Star, Gift, Clock, TrendingUp } from "lucide-react";
import { ComingSoonOverlay } from "../components/ComingSoonOverlay";

export function LoyaltyPage() {
  const currentPoints = 450;
  const pointsToNextReward = 50;

  const rewards = [
    { id: 1, name: "Free Beverage", points: 500, image: "🥤", available: false },
    { id: 2, name: "Free Starter", points: 1000, image: "🍢", available: false },
    { id: 3, name: "₹200 Discount", points: 2000, image: "💳", available: false },
    { id: 4, name: "Signature Meal Reward", points: 5000, image: "🍛", available: false },
  ];

  const activityTimeline = [
    { date: "May 28, 2026", action: "Earned 50 points", detail: "Order #ORD12345" },
    { date: "May 25, 2026", action: "Redeemed reward", detail: "Free Starter (-250 pts)" },
    { date: "May 22, 2026", action: "Earned 80 points", detail: "Order #ORD12344" },
    { date: "May 18, 2026", action: "Earned 60 points", detail: "Order #ORD12343" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ComingSoonOverlay label="The Zaika Rewards — Launching Soon">
          <h1 className="text-4xl font-bold mb-2">The Zaika Rewards</h1>
          <p className="text-gray-600 text-lg mb-8">Enjoy exclusive benefits every time you order directly. Earn points, unlock rewards and receive member-only offers.</p>

        {/* Current Points Card */}
        <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-xl p-8 mb-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-orange-100 mb-2">Your Points</p>
              <div className="text-5xl font-bold">{currentPoints}</div>
            </div>
            <Star className="w-16 h-16 text-orange-300" />
          </div>
          <div className="bg-white/20 rounded-full h-3 mb-2 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{ width: `${(currentPoints % 500) / 5}%` }}
            />
          </div>
          <p className="text-orange-100">
            {pointsToNextReward} points until your next reward!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rewards Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Available Rewards</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {rewards.map((reward) => (
                <div
                  key={reward.id}
                  className={`bg-white rounded-xl p-6 shadow-sm ${
                    reward.available
                      ? "border-2 border-orange-600"
                      : "opacity-60"
                  }`}
                >
                  <div className="text-5xl mb-3">{reward.image}</div>
                  <h3 className="font-bold text-xl mb-2">{reward.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-orange-600" />
                      <span className="font-medium">{reward.points} pts</span>
                    </div>
                    {reward.available ? (
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                        Redeem
                      </button>
                    ) : (
                      <span className="text-gray-500 text-sm">
                        {reward.points - currentPoints} pts needed
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How it Works + Activity */}
          <div className="space-y-6">
            {/* How it Works */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Earn Points</h4>
                    <p className="text-sm text-gray-600">₹100 = 10 points on every order</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Redeem Rewards</h4>
                    <p className="text-sm text-gray-600">Use points for free items & discounts</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Never Expire</h4>
                    <p className="text-sm text-gray-600">Points stay valid forever</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {activityTimeline.map((activity, index) => (
                  <div key={index} className="border-l-2 border-orange-600 pl-4">
                    <p className="text-xs text-gray-500 mb-1">{activity.date}</p>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </ComingSoonOverlay>
      </div>
    </div>
  );
}

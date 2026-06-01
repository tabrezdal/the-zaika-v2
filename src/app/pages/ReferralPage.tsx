import { Copy, Users, Award, TrendingUp, Check } from "lucide-react";
import { useState } from "react";

export function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const referralCode = "ZAIKA-USER123";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = {
    friendsInvited: 12,
    rewardsEarned: 600,
    pendingRewards: 150,
  };

  const referrals = [
    { name: "Rajesh P.", status: "Completed", reward: 50, date: "May 28" },
    { name: "Priya S.", status: "Completed", reward: 50, date: "May 25" },
    { name: "Mohammed K.", status: "Pending", reward: 50, date: "May 22" },
    { name: "Neha D.", status: "Completed", reward: 50, date: "May 20" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-2">Invite Friends, Get Rewarded</h1>
        <p className="text-gray-600 text-lg mb-8">Food tastes even better when shared. Invite your friends and earn rewards when they place their first order.</p>

        {/* Hero Card */}
        <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Share Great Food. Earn Great Rewards.</h2>
          <p className="text-orange-100 text-lg mb-6">
            Invite your friends to try The Zaika. When they place their first order, both of you receive rewards.
          </p>

          {/* Referral Code */}
          <div className="bg-white text-gray-900 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-600 mb-2">Your Referral Code</p>
            <div className="flex items-center justify-between">
              <code className="text-2xl font-bold font-mono">{referralCode}</code>
              <button
                onClick={handleCopy}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* How it Works */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-1">1. Share</h3>
              <p className="text-sm text-orange-100">Send your code to friends</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-1">2. They Get ₹100</h3>
              <p className="text-sm text-orange-100">On their first order</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-1">3. You Get ₹50</h3>
              <p className="text-sm text-orange-100">For each referral</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Users className="w-8 h-8 text-orange-600 mb-3" />
            <div className="text-3xl font-bold mb-1">{stats.friendsInvited}</div>
            <p className="text-gray-600">Friends Invited</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Award className="w-8 h-8 text-green-600 mb-3" />
            <div className="text-3xl font-bold mb-1">₹{stats.rewardsEarned}</div>
            <p className="text-gray-600">Rewards Earned</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
            <div className="text-3xl font-bold mb-1">₹{stats.pendingRewards}</div>
            <p className="text-gray-600">Pending Rewards</p>
          </div>
        </div>

        {/* Referral List */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Your Referrals</h2>
          <div className="space-y-4">
            {referrals.map((referral, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">
                    {referral.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{referral.name}</p>
                    <p className="text-sm text-gray-600">{referral.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-medium ${
                      referral.status === "Completed"
                        ? "text-green-600"
                        : "text-orange-600"
                    }`}
                  >
                    {referral.status}
                  </p>
                  <p className="text-sm text-gray-600">₹{referral.reward}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

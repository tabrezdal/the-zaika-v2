import { BUSINESS_RULES } from "../../data/businessRules";

export function SettingsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Configure business rules and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Business Rules */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Business Rules</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <div className="font-medium text-gray-900">Minimum Order Value</div>
                <div className="text-sm text-gray-500">Required minimum for checkout</div>
              </div>
              <div className="font-bold text-orange-600">₹{BUSINESS_RULES.MINIMUM_ORDER_VALUE}</div>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <div className="font-medium text-gray-900">Free Delivery Threshold</div>
                <div className="text-sm text-gray-500">Orders above this get free delivery</div>
              </div>
              <div className="font-bold text-orange-600">₹{BUSINESS_RULES.FREE_DELIVERY_THRESHOLD}</div>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <div className="font-medium text-gray-900">Delivery Fee</div>
                <div className="text-sm text-gray-500">Standard delivery charge</div>
              </div>
              <div className="font-bold text-orange-600">₹{BUSINESS_RULES.DELIVERY_FEE}</div>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium text-gray-900">Delivery Radius</div>
                <div className="text-sm text-gray-500">Maximum delivery distance</div>
              </div>
              <div className="font-bold text-orange-600">{BUSINESS_RULES.DELIVERY_RADIUS_KM} km</div>
            </div>
          </div>
        </div>

        {/* Loyalty Program */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Loyalty Program</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <div className="font-medium text-gray-900">Points Earning Rate</div>
                <div className="text-sm text-gray-500">Points per ₹100 spent</div>
              </div>
              <div className="font-bold text-orange-600">{BUSINESS_RULES.POINTS_PER_RUPEE * 100} points</div>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium text-gray-900">Points Redemption Rate</div>
                <div className="text-sm text-gray-500">Value of each point</div>
              </div>
              <div className="font-bold text-orange-600">₹{BUSINESS_RULES.LOYALTY_REDEMPTION_RATE}</div>
            </div>
          </div>
        </div>

        {/* Referral Program */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Referral Program</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <div className="font-medium text-gray-900">Referrer Reward</div>
                <div className="text-sm text-gray-500">Reward for existing customer</div>
              </div>
              <div className="font-bold text-orange-600">₹{BUSINESS_RULES.REFERRAL_REWARD_REFERRER}</div>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium text-gray-900">Referee Reward</div>
                <div className="text-sm text-gray-500">Reward for new customer</div>
              </div>
              <div className="font-bold text-orange-600">₹{BUSINESS_RULES.REFERRAL_REWARD_REFEREE}</div>
            </div>
          </div>
        </div>

        {/* Delivery Areas */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Delivery Areas</h2>
          <div className="flex flex-wrap gap-2">
            {BUSINESS_RULES.DELIVERY_AREAS.map((area) => (
              <span key={area} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

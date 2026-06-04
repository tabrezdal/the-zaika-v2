import { useState } from "react";
import { BUSINESS_RULES } from "../../data/businessRules";
import { Edit2, Check, X } from "lucide-react";

export function SettingsPage() {
  const [settings, setSettings] = useState({
    minimumOrderValue: BUSINESS_RULES.MINIMUM_ORDER_VALUE,
    freeDeliveryThreshold: BUSINESS_RULES.FREE_DELIVERY_THRESHOLD,
    deliveryFee: BUSINESS_RULES.DELIVERY_FEE,
    deliveryRadius: BUSINESS_RULES.DELIVERY_RADIUS_KM,
    pointsPerRupee: BUSINESS_RULES.POINTS_PER_RUPEE,
    loyaltyRedemptionRate: BUSINESS_RULES.LOYALTY_REDEMPTION_RATE,
    referralRewardReferrer: BUSINESS_RULES.REFERRAL_REWARD_REFERRER,
    referralRewardReferee: BUSINESS_RULES.REFERRAL_REWARD_REFEREE
  });

  const [editing, setEditing] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<any>("");

  const handleEdit = (field: string, currentValue: any) => {
    setEditing(field);
    setTempValue(currentValue);
  };

  const handleSave = (field: string) => {
    setSettings({ ...settings, [field]: tempValue });
    setEditing(null);
  };

  const handleCancel = () => {
    setEditing(null);
    setTempValue("");
  };

  const renderEditableField = (field: string, label: string, description: string, value: any, suffix: string = "") => (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex-1">
        <div className="font-medium text-gray-900">{label}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      {editing === field ? (
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={field === "pointsPerRupee" ? tempValue * 100 : tempValue}
            onChange={(e) => setTempValue(field === "pointsPerRupee" ? parseFloat(e.target.value) / 100 : parseFloat(e.target.value))}
            className="w-24 px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            autoFocus
          />
          <button onClick={() => handleSave(field)} className="text-green-600 hover:text-green-700">
            <Check className="w-5 h-5" />
          </button>
          <button onClick={handleCancel} className="text-red-600 hover:text-red-700">
            <X className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="font-bold text-orange-600">
            {field === "pointsPerRupee" ? `${value * 100} points` : `₹${value}${suffix}`}
          </div>
          <button onClick={() => handleEdit(field, value)} className="text-gray-400 hover:text-gray-600">
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Configure business rules and preferences</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Business Rules</h2>
          <div className="space-y-4">
            {renderEditableField("minimumOrderValue", "Minimum Order Value", "Required minimum for checkout", settings.minimumOrderValue)}
            {renderEditableField("freeDeliveryThreshold", "Free Delivery Threshold", "Orders above this get free delivery", settings.freeDeliveryThreshold)}
            {renderEditableField("deliveryFee", "Delivery Fee", "Standard delivery charge", settings.deliveryFee)}
            {renderEditableField("deliveryRadius", "Delivery Radius", "Maximum delivery distance", settings.deliveryRadius, " km")}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Loyalty Program</h2>
          <div className="space-y-4">
            {renderEditableField("pointsPerRupee", "Points Earning Rate", "Points per ₹100 spent", settings.pointsPerRupee)}
            {renderEditableField("loyaltyRedemptionRate", "Points Redemption Rate", "Value of each point", settings.loyaltyRedemptionRate)}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Referral Program</h2>
          <div className="space-y-4">
            {renderEditableField("referralRewardReferrer", "Referrer Reward", "Reward for existing customer", settings.referralRewardReferrer)}
            {renderEditableField("referralRewardReferee", "Referee Reward", "Reward for new customer", settings.referralRewardReferee)}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Delivery Areas</h2>
          <div className="flex flex-wrap gap-2">
            {BUSINESS_RULES.DELIVERY_AREAS.map((area) => (
              <span key={area} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                {area}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">Contact support to modify delivery areas</p>
        </div>
      </div>
    </div>
  );
}

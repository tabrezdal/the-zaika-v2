import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface EditCouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (coupon: any) => void;
  coupon: any;
}

export function EditCouponModal({ isOpen, onClose, onSubmit, coupon }: EditCouponModalProps) {
  const [formData, setFormData] = useState({
    code: "",
    type: "fixed" as "fixed" | "percentage" | "free_delivery",
    value: "",
    minOrderValue: "",
    maxDiscount: "",
    usageLimit: "",
    validFrom: "",
    validUntil: "",
    description: "",
    active: true
  });

  useEffect(() => {
    if (coupon) {
      setFormData({
        code: coupon.code || "",
        type: coupon.type || "fixed",
        value: coupon.value?.toString() || "",
        minOrderValue: coupon.minOrderValue?.toString() || "",
        maxDiscount: coupon.maxDiscount?.toString() || "",
        usageLimit: coupon.usageLimit?.toString() || "",
        validFrom: coupon.validFrom || "",
        validUntil: coupon.validUntil || "",
        description: coupon.description || "",
        active: coupon.active ?? true
      });
    }
  }, [coupon]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...coupon,
      ...formData,
      value: formData.type === "free_delivery" ? 0 : parseFloat(formData.value),
      minOrderValue: parseFloat(formData.minOrderValue),
      maxDiscount: formData.maxDiscount ? parseFloat(formData.maxDiscount) : null,
      usageLimit: parseInt(formData.usageLimit)
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-2xl w-full my-8">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h3 className="text-xl font-bold text-gray-900">Edit Coupon</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Coupon Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
              placeholder="e.g., FIRST50"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 uppercase"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Use uppercase letters and numbers only</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Discount Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="fixed">Fixed Amount (₹)</option>
              <option value="percentage">Percentage (%)</option>
              <option value="free_delivery">Free Delivery</option>
            </select>
          </div>

          {formData.type !== "free_delivery" && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Discount Value <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.value}
                  onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                  placeholder={formData.type === "percentage" ? "10" : "100"}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  min="0"
                  step={formData.type === "percentage" ? "1" : "0.01"}
                  max={formData.type === "percentage" ? "100" : undefined}
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {formData.type === "percentage" ? "%" : "₹"}
                </div>
              </div>
            </div>
          )}

          {formData.type === "percentage" && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Maximum Discount (₹)
              </label>
              <input
                type="number"
                value={formData.maxDiscount}
                onChange={(e) => setFormData({ ...formData, maxDiscount: e.target.value })}
                placeholder="200"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                min="0"
                step="0.01"
              />
              <p className="text-xs text-gray-500 mt-1">Optional: Cap the maximum discount amount</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Minimum Order Value (₹) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={formData.minOrderValue}
              onChange={(e) => setFormData({ ...formData, minOrderValue: e.target.value })}
              placeholder="149"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Get flat ₹50 off on orders above ₹149"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Valid From <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.validFrom}
                onChange={(e) => setFormData({ ...formData, validFrom: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Valid Until <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.validUntil}
                onChange={(e) => setFormData({ ...formData, validUntil: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                min={formData.validFrom}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Usage Limit <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={formData.usageLimit}
              onChange={(e) => setFormData({ ...formData, usageLimit: e.target.value })}
              placeholder="100"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              min="1"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Total number of times this coupon can be used</p>
          </div>

          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <div>
              <div className="font-medium text-gray-900">Active Status</div>
              <div className="text-sm text-gray-500">Make this coupon available for use</div>
            </div>
            <input
              type="checkbox"
              checked={formData.active}
              onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
            />
          </label>

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Plus, Edit, Trash2, Copy } from "lucide-react";
import { AddCouponModal } from "../components/AddCouponModal";
import { EditCouponModal } from "../components/EditCouponModal";

export function OffersPage() {
  const [coupons, setCoupons] = useState([
    { id: "1", code: "WELCOME100", type: "fixed", value: 100, minOrderValue: 149, usageCount: 234, usageLimit: 1000, active: true, description: "Get ₹100 off on your first order", validFrom: "2026-01-01", validUntil: "2026-12-31" },
    { id: "2", code: "FEST20", type: "percentage", value: 20, minOrderValue: 399, usageCount: 156, usageLimit: 500, active: true, maxDiscount: 200, description: "Flat 20% off up to ₹200", validFrom: "2026-01-01", validUntil: "2026-12-31" },
    { id: "3", code: "FREESHIP", type: "free_delivery", value: 0, minOrderValue: 299, usageCount: 445, usageLimit: null, active: true, description: "Free delivery on orders above ₹299", validFrom: "2026-01-01", validUntil: "2026-12-31" },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<any>(null);

  const handleAddCoupon = (newCoupon: any) => {
    setCoupons([newCoupon, ...coupons]);
  };

  const handleEditCoupon = (updatedCoupon: any) => {
    setCoupons(coupons.map(c => c.id === updatedCoupon.id ? updatedCoupon : c));
  };

  const handleDeleteCoupon = (couponId: string) => {
    if (confirm('Are you sure you want to delete this coupon?')) {
      setCoupons(coupons.filter(c => c.id !== couponId));
    }
  };

  const copyCouponCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Offers & Coupons</h1>
          <p className="text-gray-600">Create and manage promotional offers</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-700"
        >
          <Plus className="w-5 h-5" />
          Create Coupon
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Min Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {coupons.map((coupon) => (
                <tr key={coupon.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <code className="font-mono font-bold text-orange-600">{coupon.code}</code>
                      <button
                        onClick={() => copyCouponCode(coupon.code)}
                        className="text-gray-400 hover:text-gray-600"
                        title="Copy code"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="capitalize text-sm text-gray-700">{coupon.type.replace('_', ' ')}</span>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {coupon.type === 'percentage' ? `${coupon.value}%` : coupon.type === 'free_delivery' ? 'Free Delivery' : `₹${coupon.value}`}
                  </td>
                  <td className="px-6 py-4 text-gray-600">₹{coupon.minOrderValue}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <span className="font-medium">{coupon.usageCount}</span>
                      {coupon.usageLimit && <span className="text-gray-500"> / {coupon.usageLimit}</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      coupon.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {coupon.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedCoupon(coupon);
                          setIsEditModalOpen(true);
                        }}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteCoupon(coupon.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddCouponModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddCoupon}
      />

      <EditCouponModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedCoupon(null);
        }}
        onSubmit={handleEditCoupon}
        coupon={selectedCoupon}
      />
    </div>
  );
}

import { Plus, Edit, Trash2, Copy } from "lucide-react";

export function OffersPage() {
  const coupons = [
    { id: "1", code: "WELCOME100", type: "fixed", value: 100, minOrder: 149, uses: 234, limit: 1000, active: true },
    { id: "2", code: "FEST20", type: "percentage", value: 20, minOrder: 399, uses: 156, limit: 500, active: true },
    { id: "3", code: "FREESHIP", type: "free_delivery", value: 40, minOrder: 299, uses: 445, limit: null, active: true },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Offers & Coupons</h1>
          <p className="text-gray-600">Create and manage promotional offers</p>
        </div>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-700">
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
                      <button className="text-gray-400 hover:text-gray-600">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="capitalize text-sm text-gray-700">{coupon.type.replace('_', ' ')}</span>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {coupon.type === 'percentage' ? `${coupon.value}%` : `₹${coupon.value}`}
                  </td>
                  <td className="px-6 py-4 text-gray-600">₹{coupon.minOrder}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <span className="font-medium">{coupon.uses}</span>
                      {coupon.limit && <span className="text-gray-500"> / {coupon.limit}</span>}
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
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
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
    </div>
  );
}

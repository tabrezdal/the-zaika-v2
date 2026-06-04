import { useState } from "react";
import { Plus, TrendingUp, TrendingDown, X } from "lucide-react";

export function RevenueSourcesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [entries, setEntries] = useState([
    {
      id: "1",
      date: "2026-06-01",
      source: "Zomato",
      totalOrders: 45,
      successfulOrders: 42,
      cancelledOrders: 3,
      revenue: 18900,
      orderSource: "Organic",
      avgOrderValue: 450
    },
    {
      id: "2",
      date: "2026-06-01",
      source: "Swiggy",
      totalOrders: 38,
      successfulOrders: 36,
      cancelledOrders: 2,
      revenue: 15480,
      orderSource: "Ads",
      avgOrderValue: 430
    },
    {
      id: "3",
      date: "2026-05-31",
      source: "Zomato",
      totalOrders: 52,
      successfulOrders: 50,
      cancelledOrders: 2,
      revenue: 22100,
      orderSource: "Organic",
      avgOrderValue: 442
    }
  ]);

  const totalRevenue = entries.reduce((sum, entry) => sum + entry.revenue, 0);
  const totalOrders = entries.reduce((sum, entry) => sum + entry.totalOrders, 0);
  const zomatoRevenue = entries.filter(e => e.source === "Zomato").reduce((sum, e) => sum + e.revenue, 0);
  const swiggyRevenue = entries.filter(e => e.source === "Swiggy").reduce((sum, e) => sum + e.revenue, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Revenue Sources</h1>
          <p className="text-gray-600">Track orders and revenue from aggregator platforms</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Entry
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Revenue</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{totalOrders}</div>
          <div className="text-sm text-gray-600">Total Orders</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-orange-600">₹{zomatoRevenue.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Zomato Revenue</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-red-600">₹{swiggyRevenue.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Swiggy Revenue</div>
        </div>
      </div>

      {/* Entries Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Successful</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cancelled</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">AOV</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {entries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(entry.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      entry.source === "Zomato" ? "bg-orange-100 text-orange-800" : "bg-red-100 text-red-800"
                    }`}>
                      {entry.source}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{entry.totalOrders}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      {entry.successfulOrders}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1 text-sm text-red-600">
                      <TrendingDown className="w-4 h-4" />
                      {entry.cancelledOrders}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">₹{entry.revenue.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">₹{entry.avgOrderValue}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      entry.orderSource === "Organic" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}>
                      {entry.orderSource}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Entry Modal */}
      <AddRevenueEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={(entry) => {
          setEntries([{ ...entry, id: Date.now().toString() }, ...entries]);
          setIsAddModalOpen(false);
        }}
      />
    </div>
  );
}

function AddRevenueEntryModal({ isOpen, onClose, onSubmit }: any) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    source: "Zomato",
    totalOrders: "",
    successfulOrders: "",
    cancelledOrders: "",
    revenue: "",
    orderSource: "Organic"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const avgOrderValue = Math.round(parseFloat(formData.revenue) / parseFloat(formData.successfulOrders));
    onSubmit({
      ...formData,
      totalOrders: parseInt(formData.totalOrders),
      successfulOrders: parseInt(formData.successfulOrders),
      cancelledOrders: parseInt(formData.cancelledOrders),
      revenue: parseFloat(formData.revenue),
      avgOrderValue
    });
    setFormData({
      date: new Date().toISOString().split('T')[0],
      source: "Zomato",
      totalOrders: "",
      successfulOrders: "",
      cancelledOrders: "",
      revenue: "",
      orderSource: "Organic"
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Add Revenue Entry</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Platform <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.source}
              onChange={(e) => setFormData({ ...formData, source: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="Zomato">Zomato</option>
              <option value="Swiggy">Swiggy</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Total Orders <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={formData.totalOrders}
              onChange={(e) => setFormData({ ...formData, totalOrders: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              min="0"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Successful <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.successfulOrders}
                onChange={(e) => setFormData({ ...formData, successfulOrders: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                min="0"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Cancelled <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.cancelledOrders}
                onChange={(e) => setFormData({ ...formData, cancelledOrders: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                min="0"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Revenue (₹) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={formData.revenue}
              onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Order Source <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.orderSource}
              onChange={(e) => setFormData({ ...formData, orderSource: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="Organic">Organic</option>
              <option value="Ads">Platform Ads</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Add Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

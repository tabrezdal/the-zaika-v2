import { TrendingUp, DollarSign, ShoppingBag, Users, Star } from "lucide-react";
import { salesData, productPerformance, dashboardStats } from "../data/mockAdminData";

export function AnalyticsPage() {
  const totalRevenue = salesData.reduce((sum, day) => sum + day.revenue, 0);
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Reports</h1>
        <p className="text-gray-600">Track performance and insights</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Last 7 Days Revenue</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalOrders}</div>
          <div className="text-sm text-gray-600">Total Orders</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-sm text-green-600 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              +5.3%
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">₹{Math.round(avgOrderValue)}</div>
          <div className="text-sm text-gray-600">Avg Order Value</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-sm text-green-600 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              +8.2%
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{dashboardStats.returningCustomers}</div>
          <div className="text-sm text-gray-600">Returning Customers</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-6">Revenue Trend (Last 7 Days)</h2>
          <div className="space-y-4">
            {salesData.map((day, index) => {
              const maxRevenue = Math.max(...salesData.map(d => d.revenue));
              const percentage = (day.revenue / maxRevenue) * 100;
              return (
                <div key={index}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">
                      {new Date(day.date).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">{day.orders} orders</span>
                      <span className="font-bold text-gray-900">₹{day.revenue.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-600 to-orange-500 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-6">Top Performing Products</h2>
          <div className="space-y-4">
            {productPerformance.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center font-bold text-orange-600">
                    #{index + 1}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-600">{product.orders} orders</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">₹{product.revenue.toLocaleString()}</div>
                  <div className="flex items-center gap-1 text-sm text-yellow-600">
                    <Star className="w-4 h-4 fill-yellow-600" />
                    {product.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

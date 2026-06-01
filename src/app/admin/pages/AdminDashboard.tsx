import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Target } from "lucide-react";
import { dashboardStats, salesData, mockOrders } from "../data/mockAdminData";

export function AdminDashboard() {
  const stats = dashboardStats;
  const recentOrders = mockOrders.slice(0, 5);

  const statCards = [
    {
      title: "Today's Revenue",
      value: `₹${stats.todayRevenue.toLocaleString()}`,
      change: "+12.5%",
      trend: "up" as const,
      icon: DollarSign,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Today's Orders",
      value: stats.todayOrders,
      change: "+8.2%",
      trend: "up" as const,
      icon: ShoppingBag,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Active Orders",
      value: stats.activeOrders,
      subtitle: `${stats.pendingOrders} pending`,
      icon: Target,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Avg Order Value",
      value: `₹${stats.avgOrderValue}`,
      change: "+5.3%",
      trend: "up" as const,
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-800",
      accepted: "bg-blue-100 text-blue-800",
      preparing: "bg-purple-100 text-purple-800",
      out_for_delivery: "bg-indigo-100 text-indigo-800",
      delivered: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getStatusLabel = (status: string) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                {stat.change && (
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    <TrendIcon className="w-4 h-4" />
                    {stat.change}
                  </div>
                )}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">
                {stat.subtitle || stat.title}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Quick Stats */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Top Selling Item</span>
              <span className="font-medium">{stats.topSellingItem.name}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Orders Today</span>
              <span className="font-medium">{stats.topSellingItem.count} orders</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Conversion Rate</span>
              <span className="font-medium text-green-600">{stats.conversionRate}%</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-600">Returning Customers</span>
              <span className="font-medium">{stats.returningCustomers}</span>
            </div>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Last 7 Days Revenue</h2>
          <div className="space-y-2">
            {salesData.map((day, index) => {
              const maxRevenue = Math.max(...salesData.map(d => d.revenue));
              const percentage = (day.revenue / maxRevenue) * 100;
              return (
                <div key={index}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">{new Date(day.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
                    <span className="font-medium">₹{day.revenue.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-600 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-bold">Recent Orders</h2>
          <a href="/admin/orders" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
            View All
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{order.orderNumber}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{order.customerName}</div>
                    <div className="text-xs text-gray-500">{order.customerPhone}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.items.length} items
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">₹{order.total}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusLabel(order.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
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

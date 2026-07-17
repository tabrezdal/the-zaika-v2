import { useState } from "react";
import { User, Package, MapPin, Star, Gift, Settings, LogOut } from "lucide-react";

export function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "orders", name: "Orders", icon: Package },
    { id: "addresses", name: "Addresses", icon: MapPin },
    { id: "rewards", name: "Rewards", icon: Star },
    { id: "referrals", name: "Referrals", icon: Gift },
    { id: "settings", name: "Settings", icon: Settings },
  ];

  const orders = [
    {
      id: "ORD12345",
      date: "May 28, 2026",
      items: "Chicken Akni, Mutton Biryani",
      total: 630,
      status: "Delivered",
    },
    {
      id: "ORD12344",
      date: "May 25, 2026",
      items: "Butter Chicken, Tandoori Chicken",
      total: 670,
      status: "Delivered",
    },
    {
      id: "ORD12343",
      date: "May 22, 2026",
      items: "Veg Biryani, Paneer Tikka",
      total: 520,
      status: "Delivered",
    },
  ];

  const addresses = [
    {
      id: 1,
      label: "Home",
      address: "A-101, Shanti Apartment, Sarkhej",
      city: "Ahmedabad, Gujarat 380055",
      default: true,
    },
    {
      id: 2,
      label: "Office",
      address: "5th Floor, Tech Park, Prahlad Nagar",
      city: "Ahmedabad, Gujarat 380015",
      default: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>

        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <div className="flex flex-col items-center mb-6 pb-6 border-b border-gray-200">
                <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-3">
                  RK
                </div>
                <h3 className="font-bold text-lg">Rajesh Kumar</h3>
                <p className="text-gray-600 text-sm">+91 7405407034</p>
              </div>
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-orange-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.name}
                    </button>
                  );
                })}
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Profile */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Rajesh Kumar"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="rajesh@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+91 7405407034"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Orders */}
            {activeTab === "orders" && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Order History</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-mono font-medium text-sm text-gray-600">
                            {order.id}
                          </p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {order.status}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">{order.items}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">₹{order.total}</span>
                        <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                          Reorder
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses */}
            {activeTab === "addresses" && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Saved Addresses</h2>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                    Add New
                  </button>
                </div>
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-orange-600" />
                          <span className="font-bold">{address.label}</span>
                          {address.default && (
                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                              Default
                            </span>
                          )}
                        </div>
                        <button className="text-orange-600 hover:text-orange-700 text-sm">
                          Edit
                        </button>
                      </div>
                      <p className="text-gray-700">{address.address}</p>
                      <p className="text-gray-600 text-sm">{address.city}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Other tabs would show similar content */}
            {activeTab === "rewards" && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Your Rewards</h2>
                <p className="text-gray-600">
                  You have 450 loyalty points. Visit the{" "}
                  <a href="/loyalty" className="text-orange-600 hover:underline">
                    Loyalty page
                  </a>{" "}
                  to redeem rewards.
                </p>
              </div>
            )}

            {activeTab === "referrals" && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Referral Program</h2>
                <p className="text-gray-600">
                  You've referred 12 friends and earned ₹600! Visit the{" "}
                  <a href="/referral" className="text-orange-600 hover:underline">
                    Referral page
                  </a>{" "}
                  for more details.
                </p>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-3">Notifications</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span>Order updates</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span>Promotional emails</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>SMS notifications</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

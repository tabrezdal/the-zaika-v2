import { X, Phone, Mail, MapPin, Calendar, Award, ShoppingBag } from "lucide-react";

interface CustomerDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer: any;
}

export function CustomerDetailModal({ isOpen, onClose, customer }: CustomerDetailModalProps) {
  if (!isOpen || !customer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{customer.name}</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
              customer.segment === "VIP" ? "bg-purple-100 text-purple-800" :
              customer.segment === "Regular" ? "bg-blue-100 text-blue-800" :
              "bg-gray-100 text-gray-800"
            }`}>
              {customer.segment} Customer
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <Phone className="w-4 h-4 text-orange-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500">Phone</div>
                <a href={`tel:${customer.phone}`} className="text-sm font-medium text-orange-600 hover:text-orange-700">
                  {customer.phone}
                </a>
              </div>
              <button
                onClick={() => window.open(`tel:${customer.phone}`)}
                className="px-3 py-1.5 text-sm bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                Call Now
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500">Email</div>
                <a href={`mailto:${customer.email}`} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  {customer.email}
                </a>
              </div>
              <button
                onClick={() => window.open(`mailto:${customer.email}`)}
                className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Send Email
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <ShoppingBag className="w-5 h-5 text-orange-600" />
                <div className="text-xs text-orange-600 font-medium">Total Orders</div>
              </div>
              <div className="text-2xl font-bold text-gray-900">{customer.totalOrders}</div>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-green-600" />
                <div className="text-xs text-green-600 font-medium">Loyalty Points</div>
              </div>
              <div className="text-2xl font-bold text-gray-900">{customer.loyaltyPoints}</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-xs text-purple-600 font-medium">Total Spent</div>
              </div>
              <div className="text-2xl font-bold text-gray-900">₹{customer.totalSpent.toLocaleString()}</div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-xs text-blue-600 font-medium">Avg Order Value</div>
              </div>
              <div className="text-2xl font-bold text-gray-900">₹{Math.round(customer.totalSpent / customer.totalOrders)}</div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Customer Details</h4>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <div className="text-xs text-gray-500">Customer Since</div>
                <div className="text-sm font-medium text-gray-900">
                  {new Date(customer.joinedDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
              <ShoppingBag className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <div className="text-xs text-gray-500">Last Order</div>
                <div className="text-sm font-medium text-gray-900">
                  {new Date(customer.lastOrderDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <div className="text-xs text-gray-500">Saved Addresses</div>
                <div className="text-sm font-medium text-gray-900">
                  {customer.segment === "VIP" ? "3 addresses" : customer.segment === "Regular" ? "2 addresses" : "1 address"}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              View Order History
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Send Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

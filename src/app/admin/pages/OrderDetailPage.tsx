import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Phone, MapPin, CreditCard, Clock, Package } from "lucide-react";
import { mockOrders } from "../data/mockAdminData";
import { useState } from "react";
import { CancelOrderModal } from "../components/CancelOrderModal";
import { OrderCancelledSuccessModal } from "../components/OrderCancelledSuccessModal";

export function OrderDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = mockOrders.find((o) => o.id === id);
  const [currentStatus, setCurrentStatus] = useState(order?.status || 'pending');
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  if (!order) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Order not found</h2>
          <button
            onClick={() => navigate('/admin/orders')}
            className="text-orange-600 hover:text-orange-700"
          >
            Back to Orders
          </button>
        </div>
      </div>
    );
  }

  const statusFlow = [
    { value: 'pending', label: 'Pending', color: 'yellow' },
    { value: 'accepted', label: 'Accepted', color: 'blue' },
    { value: 'preparing', label: 'Preparing', color: 'purple' },
    { value: 'out_for_delivery', label: 'Out for Delivery', color: 'indigo' },
    { value: 'delivered', label: 'Delivered', color: 'green' },
  ];

  const currentStatusIndex = statusFlow.findIndex(s => s.value === currentStatus);

  const handleStatusUpdate = (newStatus: string) => {
    setCurrentStatus(newStatus);
    // In real app, would call API to update status
  };

  const handleCancelOrder = (reason: string, customReason?: string) => {
    setCurrentStatus('cancelled');
    setIsCancelModalOpen(false);
    setIsSuccessModalOpen(true);
    // In real app, would call API to cancel order with reason
    console.log('Order cancelled:', reason, customReason);
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      accepted: "bg-blue-100 text-blue-800 border-blue-200",
      preparing: "bg-purple-100 text-purple-800 border-purple-200",
      out_for_delivery: "bg-indigo-100 text-indigo-800 border-indigo-200",
      delivered: "bg-green-100 text-green-800 border-green-200",
      cancelled: "bg-red-100 text-red-800 border-red-200",
    };
    return colors[status] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => navigate('/admin/orders')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Orders
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order {order.orderNumber}</h1>
            <p className="text-gray-600">
              Placed on {new Date(order.createdAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
          <span className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border ${getStatusColor(currentStatus)}`}>
            {currentStatus.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Status Timeline */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-bold mb-6">Order Status</h2>
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-200">
                <div
                  className="h-full bg-orange-600 transition-all duration-500"
                  style={{ width: `${(currentStatusIndex / (statusFlow.length - 1)) * 100}%` }}
                />
              </div>

              {/* Status Steps */}
              <div className="relative flex justify-between">
                {statusFlow.map((status, index) => {
                  const isCompleted = index <= currentStatusIndex;
                  const isCurrent = index === currentStatusIndex;
                  return (
                    <div key={status.value} className="flex flex-col items-center">
                      <button
                        onClick={() => handleStatusUpdate(status.value)}
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2 transition-colors ${
                          isCompleted
                            ? 'bg-orange-600 border-orange-600 text-white'
                            : 'bg-white border-gray-300 text-gray-400'
                        } ${isCurrent ? 'ring-4 ring-orange-100' : ''}`}
                      >
                        <Package className="w-5 h-5" />
                      </button>
                      <span className={`text-xs text-center font-medium ${
                        isCompleted ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {status.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">₹{item.price * item.quantity}</div>
                    <div className="text-sm text-gray-500">₹{item.price} each</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{order.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee</span>
                {order.deliveryFee === 0 ? (
                  <span className="font-medium text-green-600">FREE</span>
                ) : (
                  <span className="font-medium">₹{order.deliveryFee}</span>
                )}
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                <span>Total</span>
                <span className="text-orange-600">₹{order.total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Info */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Customer Details</h2>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-gray-900 mb-1">{order.customerName}</div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  {order.customerPhone}
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Delivery Details</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700">{order.address}</div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700">{order.deliverySlot}</div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Payment Details</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Method</span>
                <span className="text-sm font-medium">{order.paymentMethod}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <span className={`text-sm font-medium ${
                  order.paymentStatus === 'completed' ? 'text-green-600' :
                  order.paymentStatus === 'pending' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                Print Receipt
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                Contact Customer
              </button>
              {currentStatus !== 'cancelled' && currentStatus !== 'delivered' && (
                <button
                  onClick={() => setIsCancelModalOpen(true)}
                  className="w-full border border-red-300 text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <CancelOrderModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={handleCancelOrder}
        orderNumber={order.orderNumber}
      />

      <OrderCancelledSuccessModal
        isOpen={isSuccessModalOpen}
        orderNumber={order.orderNumber}
      />
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { ChevronLeft, MapPin, Clock, CreditCard, CheckCircle } from "lucide-react";

export function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    address: "",
    city: "",
    phone: "",
    deliverySlot: "",
    paymentMethod: "",
  });

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <button
            onClick={() => navigate("/menu")}
            className="text-orange-600 hover:text-orange-700"
          >
            Go to Menu
          </button>
        </div>
      </div>
    );
  }

  const deliverySlots = [
    "Today, 12:00 PM - 1:00 PM",
    "Today, 1:00 PM - 2:00 PM",
    "Today, 7:00 PM - 8:00 PM",
    "Today, 8:00 PM - 9:00 PM",
    "Tomorrow, 12:00 PM - 1:00 PM",
    "Tomorrow, 7:00 PM - 8:00 PM",
  ];

  const handlePlaceOrder = () => {
    const orderId = `ORD${Date.now()}`;
    clearCart();
    navigate(`/order-success?orderId=${orderId}`);
  };

  const steps = [
    { number: 1, name: "Address", icon: MapPin },
    { number: 2, name: "Delivery", icon: Clock },
    { number: 3, name: "Payment", icon: CreditCard },
    { number: 4, name: "Review", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>

        <h1 className="text-4xl font-bold mb-2">Complete Your Order</h1>
        <p className="text-gray-600 text-lg mb-8">Just a few steps away from enjoying your meal.</p>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    step >= s.number
                      ? "bg-orange-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  <s.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">{s.name}</span>
              </div>
            ))}
          </div>
          <div className="relative mt-4">
            <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full" />
            <div
              className="absolute top-0 left-0 h-1 bg-orange-600 transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Address */}
            {step === 1 && (
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">Delivery Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Address</label>
                    <input
                      type="text"
                      value={orderData.address}
                      onChange={(e) =>
                        setOrderData({ ...orderData, address: e.target.value })
                      }
                      placeholder="House No., Street, Area"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input
                      type="text"
                      value={orderData.city}
                      onChange={(e) =>
                        setOrderData({ ...orderData, city: e.target.value })
                      }
                      placeholder="Ahmedabad"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={orderData.phone}
                      onChange={(e) =>
                        setOrderData({ ...orderData, phone: e.target.value })
                      }
                      placeholder="+91 7405407034"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!orderData.address || !orderData.city || !orderData.phone}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Continue to Delivery Slot
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Delivery Slot */}
            {step === 2 && (
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">Select Delivery Time</h2>
                <div className="space-y-3">
                  {deliverySlots.map((slot) => (
                    <label
                      key={slot}
                      className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-orange-600 transition-colors"
                    >
                      <input
                        type="radio"
                        name="deliverySlot"
                        value={slot}
                        checked={orderData.deliverySlot === slot}
                        onChange={(e) =>
                          setOrderData({ ...orderData, deliverySlot: e.target.value })
                        }
                        className="w-5 h-5 text-orange-600"
                      />
                      <span className="font-medium">{slot}</span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!orderData.deliverySlot}
                    className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                <div className="space-y-3">
                  {["Cash on Delivery", "UPI", "Credit/Debit Card", "Net Banking"].map(
                    (method) => (
                      <label
                        key={method}
                        className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-orange-600 transition-colors"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          checked={orderData.paymentMethod === method}
                          onChange={(e) =>
                            setOrderData({ ...orderData, paymentMethod: e.target.value })
                          }
                          className="w-5 h-5 text-orange-600"
                        />
                        <span className="font-medium">{method}</span>
                      </label>
                    )
                  )}
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    disabled={!orderData.paymentMethod}
                    className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-bold mb-2">Delivery Address</h3>
                    <p className="text-gray-700">
                      {orderData.address}, {orderData.city}
                    </p>
                    <p className="text-gray-700">{orderData.phone}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Delivery Time</h3>
                    <p className="text-gray-700">{orderData.deliverySlot}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Payment Method</h3>
                    <p className="text-gray-700">{orderData.paymentMethod}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-700">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-medium">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-orange-600">₹{cartTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

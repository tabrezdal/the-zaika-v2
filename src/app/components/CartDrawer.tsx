import { X, Plus, Minus, ShoppingBag, AlertCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import { BUSINESS_RULES, calculateDeliveryFee, isMinimumOrderMet, calculateLoyaltyPoints } from "../data/businessRules";

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  const deliveryFee = calculateDeliveryFee(cartTotal);
  const total = cartTotal + deliveryFee;
  const minimumOrderMet = isMinimumOrderMet(cartTotal);
  const shortfall = minimumOrderMet ? 0 : BUSINESS_RULES.MINIMUM_ORDER_VALUE - cartTotal;
  const pointsToEarn = calculateLoyaltyPoints(cartTotal);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-600 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-500">Add items from our menu to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                    <p className="text-orange-600 font-medium mt-1">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-50"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-50"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-sm text-red-600 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4">
            {/* Minimum Order Warning */}
            {!minimumOrderMet && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-orange-900">Minimum order: ₹{BUSINESS_RULES.MINIMUM_ORDER_VALUE}</p>
                  <p className="text-orange-700">Add ₹{shortfall} more to proceed</p>
                </div>
              </div>
            )}

            {/* Free Delivery Progress */}
            {minimumOrderMet && deliveryFee > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-blue-900">Add ₹{BUSINESS_RULES.FREE_DELIVERY_THRESHOLD - cartTotal} for free delivery</span>
                  <span className="font-medium text-blue-600">{Math.round((cartTotal / BUSINESS_RULES.FREE_DELIVERY_THRESHOLD) * 100)}%</span>
                </div>
                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${Math.min((cartTotal / BUSINESS_RULES.FREE_DELIVERY_THRESHOLD) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Points to Earn -- hidden until the loyalty program is live */}
            {false && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-center">
              <span className="text-green-900">🎁 You&apos;ll earn <span className="font-bold">{pointsToEarn} points</span> on this order</span>
            </div>
            )}

            {/* Order Summary */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                {deliveryFee === 0 ? (
                  <span className="font-medium text-green-600">FREE</span>
                ) : (
                  <span className="font-medium">₹{deliveryFee}</span>
                )}
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-orange-600">₹{total}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className={`block w-full text-white text-center py-3 rounded-lg font-medium transition-colors ${
                minimumOrderMet
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              {...(!minimumOrderMet && { onClick: (e) => e.preventDefault() })}
            >
              {minimumOrderMet ? "Proceed to Checkout" : `Add ₹${shortfall} to continue`}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

import { MessageCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router";

export function OrderSuccessPage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-xl p-8 text-center shadow-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold mb-2">One Last Step! 📲</h1>
          <p className="text-gray-600 mb-6">
            We&apos;ve opened WhatsApp with your order details filled in. Please review and hit <strong>Send</strong> there to confirm your order with The Zaika.
          </p>

          {orderId && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-600 mb-1">Reference ID</p>
              <p className="font-mono font-bold text-lg">{orderId}</p>
            </div>
          )}

          <div className="space-y-3">
            <div
              className="w-full bg-gray-200 text-gray-500 py-3 rounded-lg font-medium text-center cursor-not-allowed"
              title="Launching soon"
            >
              Track Your Order (Coming Soon)
            </div>
            <Link
              to="/menu"
              className="block w-full border-2 border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Order Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

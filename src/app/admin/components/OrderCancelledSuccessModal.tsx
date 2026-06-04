import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

interface OrderCancelledSuccessModalProps {
  isOpen: boolean;
  orderNumber: string;
}

export function OrderCancelledSuccessModal({ isOpen, orderNumber }: OrderCancelledSuccessModalProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Cancelled Successfully</h2>
        <p className="text-gray-600 mb-6">
          Order #{orderNumber} has been cancelled. The customer will be notified via SMS and WhatsApp.
        </p>

        <button
          onClick={() => navigate("/admin")}
          className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

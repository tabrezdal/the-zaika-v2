import { useState } from "react";
import { X, AlertCircle } from "lucide-react";

interface CancelOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string, customReason?: string) => void;
  orderNumber: string;
}

export function CancelOrderModal({ isOpen, onClose, onConfirm, orderNumber }: CancelOrderModalProps) {
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const reasons = [
    "Customer requested cancellation",
    "Unable to deliver to location",
    "Items not available",
    "Payment failed",
    "Duplicate order",
    "Other"
  ];

  const handleSubmit = () => {
    if (!selectedReason) return;
    onConfirm(selectedReason, selectedReason === "Other" ? customReason : undefined);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Cancel Order</h3>
              <p className="text-sm text-gray-500">Order #{orderNumber}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Select cancellation reason
          </label>
          <div className="space-y-2">
            {reasons.map((reason) => (
              <label
                key={reason}
                className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input
                  type="radio"
                  name="reason"
                  value={reason}
                  checked={selectedReason === reason}
                  onChange={(e) => setSelectedReason(e.target.value)}
                  className="mt-0.5 w-4 h-4 text-orange-600 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">{reason}</span>
              </label>
            ))}
          </div>

          {selectedReason === "Other" && (
            <div className="mt-3">
              <textarea
                placeholder="Please specify the reason..."
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Keep Order
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedReason || (selectedReason === "Other" && !customReason.trim())}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}

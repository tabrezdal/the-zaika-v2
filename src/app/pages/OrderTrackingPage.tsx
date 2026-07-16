import { useSearchParams } from "react-router";
import { CheckCircle, Clock, Package, Truck, Home } from "lucide-react";
import { ComingSoonOverlay } from "../components/ComingSoonOverlay";

export function OrderTrackingPage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  const currentStep = 2;

  const steps = [
    { icon: CheckCircle, label: "Order Placed", time: "2:30 PM", status: "completed" },
    { icon: Package, label: "Preparing", time: "2:45 PM", status: "active" },
    { icon: Truck, label: "Out for Delivery", time: "Est. 3:15 PM", status: "pending" },
    { icon: Home, label: "Delivered", time: "Est. 3:30 PM", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ComingSoonOverlay label="Live Order Tracking — Launching Soon">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold mb-2">Track Your Order</h1>
            {orderId && (
              <p className="text-gray-600 mb-8">
                Order ID: <span className="font-mono font-medium">{orderId}</span>
              </p>
            )}

          {/* Delivery ETA */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-6 h-6 text-orange-600" />
              <span className="text-lg font-bold">Estimated Delivery Time</span>
            </div>
            <div className="text-4xl font-bold text-orange-600">3:30 PM</div>
            <p className="text-gray-600 mt-2">Your food is being prepared fresh</p>
          </div>

          {/* Order Timeline */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = index < currentStep;
              const isActive = index === currentStep;

              return (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive
                          ? "bg-orange-600 text-white animate-pulse"
                          : isCompleted
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      <StepIcon className="w-6 h-6" />
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-0.5 h-12 ${
                          isCompleted ? "bg-green-600" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <h3
                      className={`font-bold text-lg ${
                        isActive ? "text-orange-600" : isCompleted ? "text-green-600" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </h3>
                    <p className="text-gray-600">{step.time}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Updates */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-3">Live Updates</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>✓ Order confirmed by restaurant</p>
              <p>✓ Chef has started preparing your order</p>
              <p className="text-orange-600 font-medium">🔥 Your food is being cooked fresh</p>
            </div>
          </div>
          </div>
        </ComingSoonOverlay>
      </div>
    </div>
  );
}

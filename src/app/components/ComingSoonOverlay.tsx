import { ReactNode } from "react";
import { Clock } from "lucide-react";

interface ComingSoonOverlayProps {
  children: ReactNode;
  label?: string;
}

export function ComingSoonOverlay({ children, label = "Launching Soon" }: ComingSoonOverlayProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none select-none filter grayscale blur-[2px] opacity-60">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gray-900 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 text-center mx-4">
          <Clock className="w-6 h-6 text-orange-400 flex-shrink-0" />
          <div>
            <div className="font-bold">{label}</div>
            <div className="text-sm text-gray-300">This feature is on its way!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { MapPin } from 'lucide-react';

export default function ShipmentMap() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-4">Live Shipment Tracker</h2>
      <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-2" />
            <p>Map visualization would go here</p>
            <p className="text-sm text-gray-500">Integrate with your preferred mapping service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
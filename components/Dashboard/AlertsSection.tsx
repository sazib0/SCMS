import React from 'react';
import { AlertCircle } from 'lucide-react';

const alerts = [
  { id: 1, type: 'warning', message: 'Low stock warning: SKU-123 below threshold' },
  { id: 2, type: 'error', message: 'Shipment #45678 is delayed' },
  { id: 3, type: 'info', message: 'New supplier response pending review' },
];

export default function AlertsSection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-start space-x-3 p-3 rounded-lg ${
              alert.type === 'warning' ? 'bg-yellow-50' :
              alert.type === 'error' ? 'bg-red-50' : 'bg-blue-50'
            }`}
          >
            <AlertCircle className={`w-5 h-5 ${
              alert.type === 'warning' ? 'text-yellow-600' :
              alert.type === 'error' ? 'text-red-600' : 'text-blue-600'
            }`} />
            <p className="text-sm text-gray-700">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
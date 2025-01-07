import React from 'react';
import { Package, Truck, MapPin, ThermometerIcon } from 'lucide-react';
import { useTracking } from '../../hooks/useTracking';
import type { Shipment } from '../../types';

interface ShipmentDetailsProps {
  shipmentId: string;
}

export default function ShipmentDetails({ shipmentId }: ShipmentDetailsProps) {
  const { shipment, loading, error } = useTracking(shipmentId);

  if (loading) return <div>Loading shipment details...</div>;
  if (error) return <div>Error loading shipment: {error.message}</div>;
  if (!shipment) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Shipment #{shipment.trackingNumber}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(shipment.status)}`}>
          {formatStatus(shipment.status)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ShipmentInfoCard
          icon={<MapPin className="w-5 h-5" />}
          label="Current Location"
          value={shipment.currentLocation?.name || 'In Transit'}
        />
        <ShipmentInfoCard
          icon={<ThermometerIcon className="w-5 h-5" />}
          label="Temperature"
          value={`${shipment.temperature}°C`}
        />
      </div>
    </div>
  );
}

function ShipmentInfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
      <div className="text-gray-500">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function getStatusColor(status: Shipment['status']): string {
  const colors = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_transit: 'bg-blue-100 text-blue-800',
    delivered: 'bg-green-100 text-green-800',
    delayed: 'bg-red-100 text-red-800',
  };
  return colors[status];
}

function formatStatus(status: string): string {
  return status.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}
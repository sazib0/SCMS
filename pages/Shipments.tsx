import React from 'react';
import { Truck, Clock, MapPin } from 'lucide-react';
import MetricsCard from '../components/Dashboard/MetricsCard';
import ShipmentDetails from '../components/Tracking/ShipmentDetails';

export default function Shipments() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Shipment Tracking</h1>
        <p className="text-gray-600">Monitor active shipments and delivery status.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricsCard
          title="Active Shipments"
          value="143"
          trend={5.3}
          icon={<Truck className="w-6 h-6" />}
        />
        <MetricsCard
          title="Average Transit Time"
          value="2.3 days"
          trend={-0.5}
          icon={<Clock className="w-6 h-6" />}
        />
        <MetricsCard
          title="Delivery Success Rate"
          value="98.2%"
          trend={1.2}
          icon={<MapPin className="w-6 h-6" />}
        />
      </div>

      <div className="space-y-6">
        <ShipmentDetails shipmentId="ship-123" />
      </div>
    </div>
  );
}
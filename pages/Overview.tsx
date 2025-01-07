import React from 'react';
import { Clock, TrendingUp, Truck, Package } from 'lucide-react';
import MetricsCard from '../components/Dashboard/MetricsCard';
import ShipmentMap from '../components/Dashboard/ShipmentMap';
import AlertsSection from '../components/Dashboard/AlertsSection';

export default function Overview() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricsCard
          title="On-time Delivery Rate"
          value="94.2%"
          trend={2.1}
          icon={<Clock className="w-6 h-6" />}
        />
        <MetricsCard
          title="Supply Chain Costs"
          value="$324,582"
          trend={-1.8}
          icon={<TrendingUp className="w-6 h-6" />}
        />
        <MetricsCard
          title="Active Shipments"
          value="143"
          trend={5.3}
          icon={<Truck className="w-6 h-6" />}
        />
        <MetricsCard
          title="Low Stock Items"
          value="12"
          trend={-3.2}
          icon={<Package className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ShipmentMap />
        </div>
        <div>
          <AlertsSection />
        </div>
      </div>
    </div>
  );
}
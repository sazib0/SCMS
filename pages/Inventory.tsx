import React from 'react';
import { Package, AlertTriangle, ArrowUpDown } from 'lucide-react';
import MetricsCard from '../components/Dashboard/MetricsCard';
import StockLevel from '../components/Inventory/StockLevel';

export default function Inventory() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
        <p className="text-gray-600">Monitor and manage stock levels across all locations.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricsCard
          title="Total Stock Items"
          value="1,234"
          trend={5.2}
          icon={<Package className="w-6 h-6" />}
        />
        <MetricsCard
          title="Low Stock Alerts"
          value="8"
          trend={-2.1}
          icon={<AlertTriangle className="w-6 h-6" />}
        />
        <MetricsCard
          title="Stock Turnover Rate"
          value="4.5x"
          trend={0.8}
          icon={<ArrowUpDown className="w-6 h-6" />}
        />
      </div>

      <div className="space-y-6">
        <StockLevel locationId="warehouse-1" />
      </div>
    </div>
  );
}
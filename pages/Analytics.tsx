import React from 'react';
import { LineChart, BarChart, PieChart } from 'lucide-react';
import MetricsCard from '../components/Dashboard/MetricsCard';

export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Analytics & Reports</h1>
        <p className="text-gray-600">View detailed insights and performance metrics.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricsCard
          title="Supply Chain Efficiency"
          value="87%"
          trend={3.2}
          icon={<LineChart className="w-6 h-6" />}
        />
        <MetricsCard
          title="Cost per Shipment"
          value="$342"
          trend={-2.1}
          icon={<BarChart className="w-6 h-6" />}
        />
        <MetricsCard
          title="Inventory Accuracy"
          value="95.8%"
          trend={0.7}
          icon={<PieChart className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Monthly Performance</h3>
          <div className="h-80 flex items-center justify-center text-gray-400">
            Chart visualization would go here
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Cost Analysis</h3>
          <div className="h-80 flex items-center justify-center text-gray-400">
            Chart visualization would go here
          </div>
        </div>
      </div>
    </div>
  );
}
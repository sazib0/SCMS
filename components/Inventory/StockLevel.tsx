import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { useInventory } from '../../hooks/useInventory';
import type { InventoryItem } from '../../types';

interface StockLevelProps {
  locationId: string;
}

export default function StockLevel({ locationId }: StockLevelProps) {
  const { inventory, loading, error } = useInventory(locationId);

  if (loading) return <div>Loading inventory...</div>;
  if (error) return <div>Error loading inventory: {error.message}</div>;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Inventory Status</h3>
      <div className="space-y-4">
        {inventory.map((item) => (
          <InventoryItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function InventoryItemCard({ item }: { item: InventoryItem }) {
  const stockStatus = getStockStatus(item);

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-500">SKU: {item.sku}</p>
      </div>
      <div className="flex items-center space-x-2">
        {stockStatus.icon}
        <span className={stockStatus.className}>{item.quantity} units</span>
      </div>
    </div>
  );
}

function getStockStatus(item: InventoryItem) {
  if (item.quantity <= item.minThreshold) {
    return {
      icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      className: 'text-red-600 font-medium',
    };
  }
  if (item.quantity >= item.maxThreshold) {
    return {
      icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
      className: 'text-yellow-600 font-medium',
    };
  }
  return {
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    className: 'text-green-600 font-medium',
  };
}
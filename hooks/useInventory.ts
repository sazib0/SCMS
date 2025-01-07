import { useState, useEffect } from 'react';
import type { InventoryItem } from '../types';
import { fetchInventory } from '../services/inventoryService';

export function useInventory(locationId: string) {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getInventory = async () => {
      try {
        const data = await fetchInventory(locationId);
        setInventory(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch inventory'));
        setLoading(false);
      }
    };

    getInventory();
  }, [locationId]);

  return { inventory, loading, error };
}
import { mockInventory } from './mockData';
import type { InventoryItem } from '../types';

export async function fetchInventory(locationId: string): Promise<InventoryItem[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Filter inventory by location
  return mockInventory.filter(item => item.locationId === locationId);
}
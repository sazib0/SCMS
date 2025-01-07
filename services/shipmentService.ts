import { mockShipment } from './mockData';
import type { Shipment } from '../types';

export async function fetchShipment(shipmentId: string): Promise<Shipment> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real app, we would fetch the specific shipment
  // For now, return our mock shipment if IDs match
  if (shipmentId === mockShipment.id) {
    return mockShipment;
  }
  
  throw new Error('Shipment not found');
}
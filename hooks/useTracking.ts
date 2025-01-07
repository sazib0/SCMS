import { useState, useEffect } from 'react';
import type { Shipment } from '../types';
import { fetchShipment } from '../services/shipmentService';

export function useTracking(shipmentId: string) {
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const updateShipmentLocation = async () => {
      try {
        const data = await fetchShipment(shipmentId);
        setShipment(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch shipment'));
        setLoading(false);
      }
    };

    const interval = setInterval(updateShipmentLocation, 30000); // Update every 30 seconds
    updateShipmentLocation();

    return () => clearInterval(interval);
  }, [shipmentId]);

  return { shipment, loading, error };
}
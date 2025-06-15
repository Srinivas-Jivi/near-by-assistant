import { useState, useEffect, useCallback } from 'react';
import { UseLocationReturn, LocationService } from '../types';

export const useLocation = (
  locationService?: LocationService
): UseLocationReturn => {
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState(false);

  const requestLocation = useCallback(async () => {
    if (!locationService) {
      setError('Location service not available');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Check permission first if available
      if (locationService.requestPermission) {
        const permitted = await locationService.requestPermission();
        setHasPermission(permitted);
        if (!permitted) {
          throw new Error('Location permission denied');
        }
      }

      const location = await locationService.getCurrentLocation();
      setUserLocation(location);
      setHasPermission(true);
      
      // Store location in localStorage for future use
      if (typeof window !== 'undefined') {
        localStorage.setItem('nearbyAssistant_lastLocation', JSON.stringify(location));
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get location';
      setError(errorMessage);
      setHasPermission(false);
      
      // Try to get cached location
      if (typeof window !== 'undefined') {
        const cachedLocation = localStorage.getItem('nearbyAssistant_lastLocation');
        if (cachedLocation) {
          try {
            const parsed = JSON.parse(cachedLocation);
            setUserLocation(parsed);
            setError('Using cached location');
          } catch {
            // Ignore parsing errors
          }
        }
      }
    } finally {
      setLoading(false);
    }
  }, [locationService]);

  // Auto-request location on mount
  useEffect(() => {
    if (locationService && !userLocation && !loading) {
      requestLocation();
    }
  }, [locationService, userLocation, loading, requestLocation]);

  return {
    userLocation,
    loading,
    error,
    requestLocation,
    hasPermission,
  };
};
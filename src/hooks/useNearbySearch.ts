import { useState, useCallback } from 'react';
import { PlaceData, SearchParams, UseNearbySearchReturn, ErrorHandler } from '../types';
import { invokeSearchWorkflow } from '../dataManager/NearByAssistant';
import { logSentryError } from '../utilities/helper';

// Define proper type definitions for the API response structure
interface ApiResponse<T = any> {
  data: T;
}

interface NearbySearchWorkflowResponse {
  data: {
    final_result: {
      results: PlaceData[];
    };
  };
}

export const useNearbySearch = (
  errorHandler?: ErrorHandler
): UseNearbySearchReturn => {
  const [places, setPlaces] = useState<PlaceData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchPlaces = useCallback(async (params: SearchParams) => {
    setLoading(true);
    setError(null);

    try {
      const response = await invokeSearchWorkflow("google_nearby_v2", {
        latitude: params.latitude,
        longitude: params.longitude,
        type: params.type,
        keyword: params.keyword,
      }) as ApiResponse<NearbySearchWorkflowResponse>;

      const finalData = response?.data?.data?.final_result?.results;
      if (finalData) {
        setPlaces(finalData);
        
        // Track successful search
        if (typeof window !== 'undefined' && (window as any).analytics) {
          (window as any).analytics.track('nearby_search_completed', {
            category: params.type,
            keyword: params.keyword,
            resultsCount: finalData?.length || 0,
            location: { lat: params.latitude, lng: params.longitude }
          });
        }
      } else {
        setPlaces([]);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to search places';
      setError(errorMessage);
      logSentryError(err);
      errorHandler?.logError(err, 'useNearbySearch.searchPlaces');
      
      // Track search error
      if (typeof window !== 'undefined' && (window as any).analytics) {
        (window as any).analytics.track('nearby_search_error', {
          category: params.type,
          error: errorMessage
        });
      }
    } finally {
      setLoading(false);
    }
  }, [errorHandler]);

  
  const clearPlaces = useCallback(() => {
    setPlaces([]);
    setError(null);
  }, []);

  return {
    places,
    loading,
    error,
    searchPlaces,
    clearPlaces,
  };
};
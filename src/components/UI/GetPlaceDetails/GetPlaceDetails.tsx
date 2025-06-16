import { useState, useCallback } from 'react';
import { invokeSearchWorkflow } from '../../../dataManager/NearByAssistant';
import { logSentryError } from '../../../utilities/helper';
import { PlaceWithLocation } from '../../../types';

// Define proper type definitions for the API response structure
interface ApiResponse<T = any> {
  data: T;
}

interface PlaceDetailsWorkflowResponse {
  data: {
    final_result: {
      formatted_address?: string;
      geometry?: {
        location: {
          lat: number;
          lng: number;
        };
      };
      name?: string;
      vicinity?: string;
      place_id?: string;
      rating?: number;
      user_ratings_total?: number;
      types?: string[];
      business_status?: string;
      formatted_phone_number?: string;
      price_level?: number;
    };
  };
}

export interface UsePlaceDetailsReturn {
  placeDetails: PlaceWithLocation | null;
  loading: boolean;
  error: string | null;
  fetchPlaceDetails: (placeId: string) => Promise<PlaceWithLocation | null>;
}

const usePlaceDetails = (): UsePlaceDetailsReturn => {
  const [placeDetails, setPlaceDetails] = useState<PlaceWithLocation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPlaceDetails = useCallback(async (placeId: string): Promise<PlaceWithLocation | null> => {
    if (!placeId) {
      setError('Place ID is required');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await invokeSearchWorkflow("google_nearby_place_details", {
        place_id: placeId,
        fields: "formatted_address,geometry"
      }) as ApiResponse<PlaceDetailsWorkflowResponse>;

      console.log('place details response', response);
      
      // Extract place details from the response structure with proper typing
      const result = response?.data?.data?.final_result;
      
      if (result) {
        const placeDetailsData: PlaceWithLocation = {
          name: result.name || '',
          vicinity: result.vicinity || '',
          place_id: placeId,
          formatted_address: result.formatted_address,
          geometry: result.geometry,
          rating: result.rating,
          user_ratings_total: result.user_ratings_total,
          types: result.types,
          business_status: result.business_status,
          formatted_phone_number: result.formatted_phone_number,
          price_level: result.price_level
        };
        
        setPlaceDetails(placeDetailsData);
        return placeDetailsData;
      } else {
        throw new Error('No place details found in response');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error fetching place details';
      console.error('Error fetching place details:', errorMessage);
      logSentryError(error);
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    placeDetails,
    loading,
    error,
    fetchPlaceDetails
  };
};

export default usePlaceDetails;
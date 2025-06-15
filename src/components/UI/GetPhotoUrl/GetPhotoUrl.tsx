import { useCallback, useState } from 'react';
import { invokeSearchWorkflow } from '../../../dataManager/NearByAssistant';
import { logSentryError } from '../../../utilities/helper';
import { PlaceData, UsePhotoUrlReturn } from '../../../types';

// Workflow response type definitions
interface WorkflowResponse {
  data: {
    data: {
      final_result: {
        photo_url: string;
      };
    };
  };
}

interface PhotoResult {
  placeId: string;
  photoUrl: string | null;
}

export const usePhotoUrl = (): UsePhotoUrlReturn => {
  const [placePhotos, setPlacePhotos] = useState<Record<string, string>>({});

  const getPhotoUrl = useCallback(async (photoReference: string): Promise<string> => {
    try {
      const response = await invokeSearchWorkflow("google_nearby_location_image", {
        photoreference: photoReference,
        maxwidth: 400
      }) as WorkflowResponse;

      // Return the photo URL from the response structure
      const photoUrl = response?.data?.data?.final_result?.photo_url;
      if (!photoUrl) {
        throw new Error('No photo URL in response');
      }
      return photoUrl;
    } catch (error) {
      logSentryError(error);
      throw error; // Re-throw to match the expected Promise<string> return type
    }
  }, []);

  const loadPlacePhotos = useCallback(async (places: PlaceData[]): Promise<void> => {
    const placesWithPhotos = places.filter(place => 
      place.photos && place.photos.length > 0 && place.photos[0]?.photo_reference
    );
    
    if (placesWithPhotos.length === 0) {
      return;
    }

    const photoPromises = placesWithPhotos.map(async (place): Promise<PhotoResult> => {
      try {
        const photoUrl = await getPhotoUrl(place.photos![0].photo_reference);
        return { placeId: place.place_id, photoUrl };
      } catch (error) {
        logSentryError(error);
        return { placeId: place.place_id, photoUrl: null };
      }
    });

    try {
      const results = await Promise.allSettled(photoPromises);
      
      const newPlacePhotos: Record<string, string> = {};
      results.forEach((result) => {
        if (result.status === 'fulfilled' && result.value.photoUrl) {
          newPlacePhotos[result.value.placeId] = result.value.photoUrl;
        }
      });

      setPlacePhotos(prev => ({ ...prev, ...newPlacePhotos }));
    } catch (error) {
      logSentryError(error);
    }
  }, [getPhotoUrl]);

  const resetPhotos = useCallback(() => {
    setPlacePhotos({});
  }, []);

  return {
    placePhotos,
    loadPlacePhotos,
    getPhotoUrl,
    resetPhotos,
  };
};

export default usePhotoUrl;
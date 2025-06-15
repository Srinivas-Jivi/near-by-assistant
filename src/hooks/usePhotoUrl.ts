import { useState, useCallback } from 'react';
import { PlaceData, UsePhotoUrlReturn, SearchService, ErrorHandler } from '../types';

export const usePhotoUrl = (
  searchService: SearchService,
  errorHandler?: ErrorHandler
): UsePhotoUrlReturn => {
  const [placePhotos, setPlacePhotos] = useState<Record<string, string>>({});

  const getPhotoUrl = useCallback(async (photoReference: string): Promise<string> => {
    try {
      return await searchService.getPhotoUrl(photoReference);
    } catch (error) {
      errorHandler?.logError(error, 'usePhotoUrl.getPhotoUrl');
      throw error;
    }
  }, [searchService, errorHandler]);

  const loadPlacePhotos = useCallback(async (places: PlaceData[]) => {
    const placesWithPhotos = places.filter(place => place.photos && place.photos.length > 0);
    
    if (placesWithPhotos.length === 0) {
      return;
    }

    const photoPromises = placesWithPhotos.map(async (place) => {
      try {
        const photoUrl = await getPhotoUrl(place.photos![0].photo_reference);
        return { placeId: place.place_id, photoUrl };
      } catch (error) {
        errorHandler?.logError(error, `loadPlacePhotos for ${place.place_id}`);
        return { placeId: place.place_id, photoUrl: '' };
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
      errorHandler?.logError(error, 'loadPlacePhotos batch operation');
    }
  }, [getPhotoUrl, errorHandler]);

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
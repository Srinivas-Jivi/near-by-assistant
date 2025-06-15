import { PlaceWithLocation } from '../../../types';

export interface UsePlaceDetailsReturn {
    placeDetails: PlaceWithLocation | null;
    loading: boolean;
    error: string | null;
    fetchPlaceDetails: (placeId: string) => Promise<PlaceWithLocation | null>;
}
declare const usePlaceDetails: () => UsePlaceDetailsReturn;
export default usePlaceDetails;

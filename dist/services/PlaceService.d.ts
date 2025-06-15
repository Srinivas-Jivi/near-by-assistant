export declare class DefaultPlaceService {
    private apiKey;
    private baseUrl;
    constructor(apiKey: string, baseUrl: string);
    searchPlaces(params: any): Promise<any>;
    getPhotoUrl(photoReference: string): Promise<any>;
    getPlaceDetails(placeId: string): Promise<any>;
}

import { SearchService, PlaceData, PlaceDetails, SearchParams } from '../types';

// Mock place data for testing
const mockPlaces: Record<string, PlaceData[]> = {
  doctor: [
    {
      place_id: 'demo_doctor_1',
      name: 'City Medical Center',
      vicinity: '123 Medical Ave, Downtown',
      rating: 4.5,
      formatted_phone_number: '+1 (555) 123-4567',
      types: ['doctor', 'health', 'establishment']
    },
    {
      place_id: 'demo_doctor_2',
      name: 'Family Health Clinic',
      vicinity: '456 Health St, Medical District',
      rating: 4.2,
      formatted_phone_number: '+1 (555) 234-5678',
      types: ['doctor', 'health', 'establishment']
    }
  ],
  hospital: [
    {
      place_id: 'demo_hospital_1',
      name: 'Central Hospital',
      vicinity: '789 Emergency Blvd, Hospital District',
      rating: 4.0,
      formatted_phone_number: '+1 (555) 345-6789',
      types: ['hospital', 'health', 'establishment']
    }
  ],
  pharmacy: [
    {
      place_id: 'demo_pharmacy_1',
      name: 'HealthMart Pharmacy',
      vicinity: '321 Pharmacy Lane, Shopping Center',
      rating: 4.3,
      formatted_phone_number: '+1 (555) 456-7890',
      types: ['pharmacy', 'health', 'establishment']
    }
  ],
  lab: [
    {
      place_id: 'demo_lab_1',
      name: 'Diagnostic Labs Inc',
      vicinity: '654 Lab Street, Medical Complex',
      rating: 4.1,
      formatted_phone_number: '+1 (555) 567-8901',
      types: ['health', 'establishment']
    }
  ],
  restaurant: [
    {
      place_id: 'demo_restaurant_1',
      name: 'Bella Vista Restaurant',
      vicinity: '987 Food Ave, Restaurant Row',
      rating: 4.6,
      formatted_phone_number: '+1 (555) 678-9012',
      types: ['restaurant', 'food', 'establishment']
    }
  ],
  cafe: [
    {
      place_id: 'demo_cafe_1',
      name: 'Morning Brew Coffee',
      vicinity: '111 Coffee St, Arts District',
      rating: 4.7,
      formatted_phone_number: '+1 (555) 789-0123',
      types: ['cafe', 'food', 'establishment']
    }
  ]
};

// Demo search service implementation
export const createDemoSearchService = (): SearchService => ({
  searchPlaces: async (params: SearchParams): Promise<PlaceData[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('🔍 Demo Search:', params);
    
    // Get mock data for the requested category
    const categoryPlaces = mockPlaces[params.type] || [];
    
    // Filter by keyword if provided
    let filteredPlaces = categoryPlaces;
    if (params.keyword) {
      filteredPlaces = categoryPlaces.filter(place => 
        place.name.toLowerCase().includes(params.keyword!.toLowerCase()) ||
        place.vicinity.toLowerCase().includes(params.keyword!.toLowerCase())
      );
    }
    
    // Simulate location-based results by slightly randomizing the order
    const shuffled = [...filteredPlaces].sort(() => Math.random() - 0.5);
    
    return shuffled;
  },

  getPhotoUrl: async (photoReference: string): Promise<string> => {
    // Return a placeholder image service URL
    return `https://picsum.photos/400/300?random=${photoReference}`;
  },

  getPlaceDetails: async (placeId: string): Promise<PlaceDetails> => {
    // Find the place in our mock data
    for (const category of Object.values(mockPlaces)) {
      const place = category.find(p => p.place_id === placeId);
      if (place) {
        return {
          ...place,
          // Add some additional details for the detail view
          formatted_address: place.vicinity,
          geometry: { location: { lat: 37.7749, lng: -122.4194 } },
          opening_hours: { open_now: true },
          website: 'https://example.com',
          photos: [{ photo_reference: `photo_${placeId}`, height: 400, width: 600 }]
        };
      }
    }
    
    // Return a default place if not found
    return {
      place_id: placeId,
      name: 'Demo Place',
      vicinity: 'Demo Location',
      formatted_address: '123 Demo Street, Demo City',
      geometry: { location: { lat: 37.7749, lng: -122.4194 } },
      opening_hours: { open_now: true },
      website: 'https://example.com',
      photos: [{ photo_reference: `photo_${placeId}`, height: 400, width: 600 }]
    };
  }
});

export default createDemoSearchService; 
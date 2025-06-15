import { 
    Stethoscope, 
    TestTube, 
    Pill, 
    Hospital, 
    Utensils, 
    ShoppingCart,
    Car,
    Coffee
  } from 'lucide-react';
  import { NearByAssistantConfig, CategoryConfig, SpecialtyConfig } from '../types';
  
  export const defaultSpecialties: SpecialtyConfig[] = [
    { id: 'all', name: 'All Specialists' },
    { id: 'general_physician', name: 'General Physician', keywords: ['general practitioner', 'family doctor'] },
    { id: 'cardiologist', name: 'Cardiologist', keywords: ['heart doctor', 'cardiology'] },
    { id: 'dermatologist', name: 'Dermatologist', keywords: ['skin doctor', 'dermatology'] },
    { id: 'pediatrician', name: 'Pediatrician', keywords: ['child doctor', 'pediatrics'] },
    { id: 'orthopedic', name: 'Orthopedic', keywords: ['bone doctor', 'orthopedics'] },
    { id: 'gynecologist', name: 'Gynecologist', keywords: ['women doctor', 'gynecology'] },
    { id: 'dentist', name: 'Dentist', keywords: ['dental', 'tooth doctor'] },
    { id: 'ophthalmologist', name: 'Ophthalmologist', keywords: ['eye doctor', 'optometrist'] },
    { id: 'neurologist', name: 'Neurologist', keywords: ['brain doctor', 'neurology'] },
    { id: 'psychiatrist', name: 'Psychiatrist', keywords: ['mental health', 'psychology'] },
    { id: 'ent', name: 'ENT Specialist', keywords: ['ear nose throat', 'otolaryngology'] },
  ];
  
  export const defaultCategories: CategoryConfig[] = [
    {
      id: 'doctor',
      label: 'Doctors',
      icon: Stethoscope,
      color: 'blue',
      specialties: defaultSpecialties,
      keywords: ['doctor', 'physician', 'clinic', 'medical']
    },
    {
      id: 'hospital',
      label: 'Hospitals',
      icon: Hospital,
      color: 'red',
      keywords: ['hospital', 'medical center', 'emergency']
    },
    {
      id: 'lab',
      label: 'Labs',
      icon: TestTube,
      color: 'green',
      keywords: ['diagnostic lab', 'laboratory', 'pathology', 'blood test']
    },
    {
      id: 'pharmacy',
      label: 'Pharmacy',
      icon: Pill,
      color: 'purple',
      keywords: ['pharmacy', 'medical store', 'chemist', 'drugstore']
    },
    {
      id: 'restaurant',
      label: 'Restaurants',
      icon: Utensils,
      color: 'orange',
      keywords: ['restaurant', 'food', 'dining']
    },
    {
      id: 'gas_station',
      label: 'Gas Stations',
      icon: Car,
      color: 'indigo',
      keywords: ['gas station', 'fuel', 'petrol']
    },
    {
      id: 'cafe',
      label: 'Cafes',
      icon: Coffee,
      color: 'amber',
      keywords: ['cafe', 'coffee shop', 'coffee']
    },
    {
      id: 'shopping_mall',
      label: 'Shopping',
      icon: ShoppingCart,
      color: 'pink',
      keywords: ['shopping mall', 'store', 'market']
    }
  ];
  
  export const defaultTheme = {
    colors: {
      primary: '#3B82F6',
      secondary: '#6B7280',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
    },
  };
  
  export const defaultTranslations = {
    en: {
      nearby_places: 'Nearby Places',
      doctors: 'Doctors',
      hospitals: 'Hospitals',
      labs: 'Labs',
      pharmacy: 'Pharmacy',
      restaurants: 'Restaurants',
      shopping: 'Shopping',
      gas_stations: 'Gas Stations',
      cafes: 'Cafes',
      loading: 'Loading...',
      no_results: 'No places found nearby',
      try_again: 'Try expanding your search',
      call: 'Call',
      directions: 'Directions',
      book_appointment: 'Book Appointment',
      view_details: 'View Details',
      getting_location: 'Getting your location...',
      location_required: 'Location access required',
      select_specialty: 'Select Specialty',
      all_specialists: 'All Specialists',
      rating: 'Rating',
      open_now: 'Open Now',
      closed: 'Closed',
      loading_nearby_places: 'Finding nearby places...',
      no_places_found_nearby: 'No places found nearby',
      try_expanding_search: 'Try expanding your search radius',
    }
  };
  
  // Default service implementations
  export const createDefaultLocationService = () => ({
    getCurrentLocation: async (): Promise<{lat: number, lng: number}> => {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error('Geolocation is not supported'));
          return;
        }
  
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            reject(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000
          }
        );
      });
    },
    
    requestPermission: async (): Promise<boolean> => {
      if (!navigator.permissions) return true;
      
      try {
        const result = await navigator.permissions.query({ name: 'geolocation' });
        return result.state === 'granted';
      } catch {
        return true;
      }
    }
  });
  
  export const createDefaultAnalyticsService = () => ({
    track: (event: string, properties: Record<string, any>) => {
      console.log(`📊 Analytics Event: ${event}`, properties);
      
      // Optional: Send to analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', event, properties);
      }
    }
  });
  
  export const createDefaultErrorHandler = () => ({
    logError: (error: any, context?: string) => {
      console.error(`❌ Error${context ? ` in ${context}` : ''}:`, error);
      
      // Optional: Send to error tracking service
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        (window as any).Sentry.captureException(error, { tags: { context } });
      }
    }
  });
  
  export const createDefaultI18nService = (language = 'en') => ({
    t: (key: string) => {
      const translations = defaultTranslations[language as keyof typeof defaultTranslations] || defaultTranslations.en;
      return translations[key as keyof typeof translations] || key;
    },
    language
  });
  
  export const createDefaultConfig = (overrides: Partial<NearByAssistantConfig> = {}): NearByAssistantConfig => ({
    searchService: {
      searchPlaces: async () => { 
        throw new Error('🚨 searchPlaces service not implemented. Please provide your own implementation.'); 
      },
      getPhotoUrl: async () => { 
        throw new Error('🚨 getPhotoUrl service not implemented. Please provide your own implementation.'); 
      },
      getPlaceDetails: async () => { 
        throw new Error('🚨 getPlaceDetails service not implemented. Please provide your own implementation.'); 
      },
    },
    locationService: createDefaultLocationService(),
    analyticsService: createDefaultAnalyticsService(),
    errorHandler: createDefaultErrorHandler(),
    i18nService: createDefaultI18nService(),
    categories: defaultCategories,
    theme: defaultTheme,
    searchConfig: {
      radius: 5000,
      language: 'en',
      autoSearch: true,
      enableSpecialtyFilter: true,
    },
    features: {
      enableBooking: false,
      enableReviews: true,
      enablePhotos: true,
      enableDirections: true,
      enableCalling: true,
      enableFilters: true,
    },
    ...overrides,
  });
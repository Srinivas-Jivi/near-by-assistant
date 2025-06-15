// Core Data Types
export interface PlaceData {
    name: string;
    vicinity: string;
    place_id: string;
    rating?: number;
    photos?: Array<{
      photo_reference: string;
      height: number;
      width: number;
    }>;
    types?: string[];
    business_status?: string;
    formatted_phone_number?: string;
    price_level?: number;
    user_ratings_total?: number;
  }
  
  export interface PlaceWithLocation extends PlaceData {
    formatted_address?: string;
    geometry?: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }
  
  export interface PlaceDetails extends PlaceWithLocation {
    opening_hours?: {
      open_now: boolean;
      weekday_text?: string[];
    };
    website?: string;
  }
  
  // Search Parameters
  export interface SearchParams {
    latitude: number;
    longitude: number;
    type: string;
    keyword?: string;
    radius?: number;
    language?: string;
    minprice?: number;
    maxprice?: number;
  }
  
  // Plugin Configuration
  export interface CategoryConfig {
    id: string;
    label: string;
    icon: React.ComponentType<any>;
    color: string;
    specialties?: SpecialtyConfig[];
    keywords?: string[];
  }
  
  export interface SpecialtyConfig {
    id: string;
    name: string;
    keywords?: string[];
  }
  
  // Service Interfaces
  export interface SearchService {
    searchPlaces: (params: SearchParams) => Promise<PlaceData[]>;
    getPhotoUrl: (photoReference: string) => Promise<string>;
    getPlaceDetails: (placeId: string) => Promise<PlaceDetails>;
    getStaticMapUrl?: (lat: number, lng: number, options?: MapOptions) => Promise<string>;
  }
  
  export interface MapOptions {
    zoom?: number;
    size?: string;
    maptype?: string;
    markers?: string;
  }
  
  // Layout and Navigation
  export interface LayoutProps {
    title?: string;
    children: React.ReactNode;
    onBack?: () => void;
    showBackButton?: boolean;
    extra?: React.ReactNode;
    className?: string;
  }
  
  export interface NavigationHandlers {
    onPlaceClick?: (place: PlaceData, categoryType: string) => void;
    onCallClick?: (phoneNumber: string, place: PlaceData) => void;
    onDirectionsClick?: (place: PlaceWithLocation) => void;
    onBookingClick?: (place: PlaceData, categoryType: string) => void;
  }
  
  // Analytics and Tracking
  export interface AnalyticsService {
    track: (event: string, properties: Record<string, any>) => void;
  }
  
  // Error Handling
  export interface ErrorHandler {
    logError: (error: any, context?: string) => void;
  }
  
  // Location Services
  export interface LocationService {
    getCurrentLocation: () => Promise<{lat: number, lng: number}>;
    requestPermission?: () => Promise<boolean>;
    watchPosition?: (callback: (position: {lat: number, lng: number}) => void) => number;
    clearWatch?: (watchId: number) => void;
  }
  
  // Internationalization
  export interface I18nService {
    t: (key: string, options?: any) => string;
    language?: string;
    changeLanguage?: (language: string) => void;
  }
  
  // Theme Configuration
  export interface ThemeConfig {
    colors?: {
      primary?: string;
      secondary?: string;
      success?: string;
      warning?: string;
      error?: string;
    };
    spacing?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    };
    borderRadius?: {
      sm?: string;
      md?: string;
      lg?: string;
    };
  }
  
  // Main Plugin Configuration
  export interface NearByAssistantConfig {
    // Core Services
    searchService: SearchService;
    
    // Optional Services
    locationService?: LocationService;
    analyticsService?: AnalyticsService;
    errorHandler?: ErrorHandler;
    i18nService?: I18nService;
    
    // UI Configuration
    layout?: {
      component?: React.ComponentType<LayoutProps>;
      title?: string;
      showBackButton?: boolean;
      className?: string;
    };
    
    // Categories and Specialties
    categories?: CategoryConfig[];
    
    // Navigation Handlers
    navigation?: NavigationHandlers;
    
    // Theme
    theme?: ThemeConfig;
    
    // Default Location
    defaultLocation?: {lat: number, lng: number};
    
    // Search Configuration
    searchConfig?: {
      radius?: number;
      language?: string;
      autoSearch?: boolean;
      enableSpecialtyFilter?: boolean;
    };
    
    // Feature Flags
    features?: {
      enableBooking?: boolean;
      enableReviews?: boolean;
      enablePhotos?: boolean;
      enableDirections?: boolean;
      enableCalling?: boolean;
      enableFilters?: boolean;
    };
  }
  
  // Component Props
  export interface CategoryButtonProps {
    category: CategoryConfig;
    isActive: boolean;
    onClick: () => void;
    disabled?: boolean;
  }
  
  export interface PlaceCardProps {
    place: PlaceData;
    categoryType: string;
    onDetailsClick: () => void;
    onCallClick: () => void;
    onDirectionsClick: () => void;
    onBookingClick?: () => void;
    photoUrl?: string;
    showBooking?: boolean;
    className?: string;
  }
  
  export interface SpecialtyDropdownProps {
    specialties: SpecialtyConfig[];
    selectedSpecialty: string;
    onSpecialtyChange: (specialtyId: string) => void;
    isOpen: boolean;
    onToggle: () => void;
    placeholder?: string;
  }
  
  // Hook Return Types
  export interface UseNearbySearchReturn {
    places: PlaceData[];
    loading: boolean;
    error: string | null;
    searchPlaces: (params: SearchParams) => Promise<void>;
    clearPlaces: () => void;
  }
  
  export interface UseLocationReturn {
    userLocation: {lat: number, lng: number} | null;
    loading: boolean;
    error: string | null;
    requestLocation: () => Promise<void>;
    hasPermission: boolean;
  }
  
  export interface UsePhotoUrlReturn {
    placePhotos: Record<string, string>;
    loadPlacePhotos: (places: PlaceData[]) => Promise<void>;
    getPhotoUrl: (photoReference: string) => Promise<string>;
    resetPhotos: () => void;
  }
  
  // Event Types
  export interface PlaceClickEvent {
    place: PlaceData;
    categoryType: string;
    timestamp: number;
  }
  
  export interface SearchEvent {
    categoryType: string;
    specialty?: string;
    location: {lat: number, lng: number};
    resultsCount: number;
    timestamp: number;
  }
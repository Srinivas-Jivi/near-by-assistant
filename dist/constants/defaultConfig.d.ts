import { NearByAssistantConfig, CategoryConfig, SpecialtyConfig } from '../types';

export declare const defaultSpecialties: SpecialtyConfig[];
export declare const defaultCategories: CategoryConfig[];
export declare const defaultTheme: {
    colors: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        error: string;
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    borderRadius: {
        sm: string;
        md: string;
        lg: string;
    };
};
export declare const defaultTranslations: {
    en: {
        nearby_places: string;
        doctors: string;
        hospitals: string;
        labs: string;
        pharmacy: string;
        restaurants: string;
        shopping: string;
        gas_stations: string;
        cafes: string;
        loading: string;
        no_results: string;
        try_again: string;
        call: string;
        directions: string;
        book_appointment: string;
        view_details: string;
        getting_location: string;
        location_required: string;
        select_specialty: string;
        all_specialists: string;
        rating: string;
        open_now: string;
        closed: string;
        loading_nearby_places: string;
        no_places_found_nearby: string;
        try_expanding_search: string;
    };
};
export declare const createDefaultLocationService: () => {
    getCurrentLocation: () => Promise<{
        lat: number;
        lng: number;
    }>;
    requestPermission: () => Promise<boolean>;
};
export declare const createDefaultAnalyticsService: () => {
    track: (event: string, properties: Record<string, any>) => void;
};
export declare const createDefaultErrorHandler: () => {
    logError: (error: any, context?: string) => void;
};
export declare const createDefaultI18nService: (language?: string) => {
    t: (key: string) => string;
    language: string;
};
export declare const createDefaultConfig: (overrides?: Partial<NearByAssistantConfig>) => NearByAssistantConfig;

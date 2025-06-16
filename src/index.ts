// Import main styles
import './styles/index.css';

// Main Component
export { NearByAssistant } from './components/NearByAssistant/NearByAssistant';

// UI Components
export { default as CategoryButton }  from './components/UI/CategoryButton/CategoryButton';
export { default as StarRating } from './components/UI/StarRating/StarRating';
export { default as PlaceImage } from './components/UI/PlaceImage/PlaceImage';
export { default as PlaceCard } from './components/UI/PlaceCard';
export { default as SpecialtyDropdown } from './components/UI/SpecialtyDropdown';

// Layout Components
export { default as DefaultLayout } from './components/Layout/DefaultLayout/DefaultLayout';

// Hooks
export { useNearbySearch } from './hooks/useNearbySearch';
export { useLocation } from './hooks/useLocation';
export { usePhotoUrl } from './hooks/usePhotoUrl';

// Configuration and Utilities
export { 
  createDefaultConfig,
  createDefaultLocationService,
  createDefaultAnalyticsService,
  createDefaultErrorHandler,
  createDefaultI18nService,
  defaultCategories,
  defaultSpecialties,
  defaultTheme,
  defaultTranslations
} from './constants/defaultConfig';

// Demo Services (for testing)
export { createDemoSearchService } from './services/demoSearchService';

// Types
export type {
  NearByAssistantConfig,
  PlaceData,
  PlaceWithLocation,
  PlaceDetails,
  SearchParams,
  CategoryConfig,
  SpecialtyConfig,
  SearchService,
  LocationService,
  AnalyticsService,
  ErrorHandler,
  I18nService,
  NavigationHandlers,
  LayoutProps,
  ThemeConfig,
  CategoryButtonProps,
  PlaceCardProps,
  SpecialtyDropdownProps,
  UseNearbySearchReturn,
  UseLocationReturn,
  UsePhotoUrlReturn,
  PlaceClickEvent,
  SearchEvent,
  MapOptions
} from './types';

// Native Interface Types
export type {
  AndroidInterface,
  IOSMessageHandler,
  IOSWebKitHandlers,
  IOSWebKit
} from './types/native-interfaces';


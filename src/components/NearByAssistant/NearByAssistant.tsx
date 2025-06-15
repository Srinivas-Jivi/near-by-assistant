import React, { useState, useEffect, useCallback } from 'react';
import { MapPin } from 'lucide-react';
import { NearByAssistantConfig, PlaceData, SearchParams } from '../../types';
import { useNearbySearch } from '../../hooks/useNearbySearch';
import { useLocation } from '../../hooks/useLocation';
import { usePhotoUrl } from '../UI/GetPhotoUrl/GetPhotoUrl';
import DefaultLayout from '../Layout/DefaultLayout/DefaultLayout';
import CategoryButton from '../UI/CategoryButton/CategoryButton';
import PlaceCard from '../UI/PlaceCard/PlaceCard';
import SpecialtyDropdown from '../UI/SpecialtyDropdown/SpecialtyDropdown';
import { createDefaultConfig } from '../../constants/defaultConfig';
import { clsx } from 'clsx';

interface NearByAssistantProps {
  config: NearByAssistantConfig;
  className?: string;
  onError?: (error: string) => void;
}

export const NearByAssistant: React.FC<NearByAssistantProps> = ({ 
  config,
  className = '',
  onError
}) => {
  // Merge with default config
  const mergedConfig = { ...createDefaultConfig(), ...config };
  
  // State
  const [activeCategory, setActiveCategory] = useState(mergedConfig.categories?.[0]?.id || 'doctor');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Hooks
  const { userLocation, loading: locationLoading, requestLocation } = useLocation(mergedConfig.locationService);
  const { places, loading: searchLoading, error: searchError, searchPlaces, clearPlaces } = useNearbySearch(
    mergedConfig.errorHandler
  );
  const { placePhotos, loadPlacePhotos, resetPhotos } = usePhotoUrl();

  // Get services
  const { t } = mergedConfig.i18nService || { t: (key: string) => key };
  const analytics = mergedConfig.analyticsService;
  const LayoutComponent = mergedConfig.layout?.component || DefaultLayout;

  // Get current category
  const currentCategory = mergedConfig.categories?.find(cat => cat.id === activeCategory);
  const hasSpecialties = currentCategory?.specialties && currentCategory.specialties.length > 0;

  // Debug logging
  console.log('🔍 Debug Info:', {
    activeCategory,
    currentCategory: currentCategory?.label,
    hasSpecialties,
    userLocation,
    locationLoading,
    searchLoading,
    searchError,
    enableSpecialtyFilter: mergedConfig.searchConfig?.enableSpecialtyFilter
  });

  // Handle category change
  const handleCategoryClick = useCallback(async (categoryId: string) => {
    if (!userLocation) {
      await requestLocation();
      return;
    }

    setActiveCategory(categoryId);
    setSelectedSpecialty('all');
    clearPlaces();
    resetPhotos();
    setIsDropdownOpen(false);

    // Track category selection
    analytics?.track('nearby_category_selected', {
      category: categoryId,
      location: userLocation
    });

    // Perform search
    const category = mergedConfig.categories?.find(cat => cat.id === categoryId);
    if (category) {
      const searchParams: SearchParams = {
        latitude: userLocation.lat,
        longitude: userLocation.lng,
        type: categoryId,
        radius: mergedConfig.searchConfig?.radius || 5000,
        language: mergedConfig.searchConfig?.language || 'en',
      };

      await searchPlaces(searchParams);
    }
  }, [userLocation, requestLocation, clearPlaces, resetPhotos, analytics, mergedConfig.categories, mergedConfig.searchConfig, searchPlaces]);

  // Handle specialty change
  const handleSpecialtyChange = useCallback(async (specialtyId: string) => {
    if (!userLocation || !currentCategory) return;

    setSelectedSpecialty(specialtyId);
    clearPlaces();
    resetPhotos();

    // Track specialty selection
    analytics?.track('nearby_specialty_selected', {
      category: activeCategory,
      specialty: specialtyId,
      location: userLocation
    });

    // Build search params with specialty keyword
    let keyword = '';
    if (specialtyId !== 'all') {
      const specialty = currentCategory.specialties?.find(s => s.id === specialtyId);
      if (specialty) {
        keyword = specialty.keywords?.[0] || specialty.name;
      }
    }

    const searchParams: SearchParams = {
      latitude: userLocation.lat,
      longitude: userLocation.lng,
      type: activeCategory,
      keyword,
      radius: mergedConfig.searchConfig?.radius || 5000,
      language: mergedConfig.searchConfig?.language || 'en',
    };

    await searchPlaces(searchParams);
  }, [userLocation, currentCategory, activeCategory, clearPlaces, resetPhotos, analytics, searchPlaces, mergedConfig.searchConfig]);

  // Handle place interactions
  const handlePlaceClick = useCallback((place: PlaceData) => {
    analytics?.track('nearby_place_clicked', {
      category: activeCategory,
      place_id: place.place_id,
      place_name: place.name
    });

    mergedConfig.navigation?.onPlaceClick?.(place, activeCategory);
  }, [activeCategory, analytics, mergedConfig.navigation]);

  const handleCallClick = useCallback((place: PlaceData) => {
    if (!place.formatted_phone_number) return;

    analytics?.track('nearby_call_clicked', {
      category: activeCategory,
      place_id: place.place_id,
      phone_number: place.formatted_phone_number
    });

    mergedConfig.navigation?.onCallClick?.(place.formatted_phone_number, place);
  }, [activeCategory, analytics, mergedConfig.navigation]);

  const handleDirectionsClick = useCallback((place: PlaceData) => {
    analytics?.track('nearby_directions_clicked', {
      category: activeCategory,
      place_id: place.place_id
    });

    mergedConfig.navigation?.onDirectionsClick?.(place);
  }, [activeCategory, analytics, mergedConfig.navigation]);

  const handleBookingClick = useCallback((place: PlaceData) => {
    analytics?.track('nearby_booking_clicked', {
      category: activeCategory,
      place_id: place.place_id
    });

    mergedConfig.navigation?.onBookingClick?.(place, activeCategory);
  }, [activeCategory, analytics, mergedConfig.navigation]);

  // Load photos when places change
  useEffect(() => {
    if (places.length > 0 && mergedConfig.features?.enablePhotos) {
      loadPlacePhotos(places);
    }
  }, [places, loadPlacePhotos, mergedConfig.features?.enablePhotos]);

  // Auto-search on location change
  useEffect(() => {
    if (userLocation && mergedConfig.searchConfig?.autoSearch) {
      console.log('🚀 Auto-searching for category:', activeCategory);
      handleCategoryClick(activeCategory);
    }
  }, [userLocation]); // Don't include handleCategoryClick to avoid infinite loop

  // Force location request on mount if needed
  useEffect(() => {
    if (!userLocation && !locationLoading) {
      console.log('🌍 Requesting location on mount');
      requestLocation();
    }
  }, []);

  // Handle errors
  useEffect(() => {
    if (searchError) {
      onError?.(searchError);
      mergedConfig.errorHandler?.logError(searchError, 'NearByAssistant search');
    }
  }, [searchError, onError, mergedConfig.errorHandler]);

  const isLoading = locationLoading || searchLoading;

  return (
    <LayoutComponent
      title={mergedConfig.layout?.title || t('nearby_places')}
      showBackButton={mergedConfig.layout?.showBackButton}
      className={mergedConfig.layout?.className}
    >
      <div className={clsx('w-full h-full flex flex-col', className)}>
        {/* Category Buttons */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 py-4">
          <div className="flex gap-2 overflow-x-auto max-w-full">
            {mergedConfig.categories?.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
                disabled={!userLocation || isLoading}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {/* Specialty Dropdown */}
          {hasSpecialties && mergedConfig.searchConfig?.enableSpecialtyFilter && (
            <div className="max-w-2xl mx-auto mb-4">
              <SpecialtyDropdown
                specialties={currentCategory.specialties!}
                selectedSpecialty={selectedSpecialty}
                onSpecialtyChange={handleSpecialtyChange}
                isOpen={isDropdownOpen}
                onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
                placeholder={t('select_specialty')}
              />
            </div>
          )}

          {/* Loading States */}
          {!userLocation && locationLoading && (
            <div className="text-center py-8">
              <div className="animate-pulse">
                <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-600">{t('getting_location')}</p>
              </div>
            </div>
          )}

          {searchLoading && (
            <div className="text-center py-8">
              <div className="animate-pulse">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-300 border-t-blue-600"></div>
                </div>
                <p className="text-blue-600">{t('loading_nearby_places')}</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {searchError && !isLoading && (
            <div className="text-center py-12">
              <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MapPin size={40} className="text-red-300" />
              </div>
              <p className="text-red-600 font-medium">Search Service Error</p>
              <p className="text-sm text-red-400 mt-1 max-w-md mx-auto">{searchError}</p>
              <button
                onClick={() => handleCategoryClick(activeCategory)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Results */}
          <div className="max-w-2xl mx-auto space-y-3 pb-16">
            {places.map((place) => (
              <PlaceCard
                key={place.place_id}
                place={place}
                categoryType={activeCategory}
                onDetailsClick={() => handlePlaceClick(place)}
                onCallClick={() => handleCallClick(place)}
                onDirectionsClick={() => handleDirectionsClick(place)}
                onBookingClick={() => handleBookingClick(place)}
                photoUrl={placePhotos[place.place_id]}
                showBooking={mergedConfig.features?.enableBooking && activeCategory === 'doctor'}
              />
            ))}

            {/* Empty State */}
            {!isLoading && places.length === 0 && userLocation && !searchError && (
              <div className="text-center py-12">
                <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={40} className="text-gray-300" />
                </div>
                <p className="text-gray-600 font-medium">{t('no_places_found_nearby')}</p>
                <p className="text-sm text-gray-400 mt-1">{t('try_expanding_search')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};
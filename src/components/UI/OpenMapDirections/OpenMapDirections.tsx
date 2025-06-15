import React from 'react';
import { Navigation } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { openExternalLink, isAndroid, isIOSDevice } from '../../../utilities/helper';
import { PlaceData } from '../../../types';

// Import native interface types to ensure global declarations are loaded
import '../../../types/native-interfaces';



// Extended interface for places with additional location data
export interface PlaceWithLocation extends PlaceData {
  name: string;
  vicinity: string;
  formatted_address?: string;
  geometry?: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

// Props for the DirectionsButton component
interface DirectionsButtonProps {
  placeData: PlaceWithLocation;
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void; // Optional custom click handler
}

// Custom hook for handling map directions
// Custom hook for handling map directions
export const useMapDirections = () => {
  const openDirections = (placeData: PlaceWithLocation) => {
  
    if (!placeData) return;
    
    const placeName = placeData.name;
    const address = placeData.formatted_address || placeData.vicinity;
    const lat = placeData.geometry?.location?.lat;
    const lng = placeData.geometry?.location?.lng;
    
    // Detect platform and environment
    const isAndroidDevice = isAndroid();
    const isIOS = isIOSDevice();
    const isNativeApp = typeof AndroidInterface !== 'undefined' || window.webkit?.messageHandlers?.iosInterface;
    
    let mapsUrl: string;
    
    if (lat && lng) {
      if (isAndroidDevice && isNativeApp) {
        // Native Android app: Try multiple URL schemes with proper fallbacks
        const urls = [
          // 1. Try geo scheme with query (most compatible)
          `geo:${lat},${lng}?q=${lat},${lng}(${encodeURIComponent(placeName || 'Destination')})`,
          // 2. Try intent URL for Google Maps app
          `intent://maps.google.com/?daddr=${lat},${lng}&mode=d#Intent;scheme=https;package=com.google.android.apps.maps;end`,
          // 3. Fallback to web URL
          `https://maps.google.com/?daddr=${lat},${lng}`
        ];
        
        tryUrlsInSequence(urls);
        return;
      } else if (isIOS && isNativeApp) {
        // Native iOS app: Use Apple Maps or Google Maps
        mapsUrl = `maps://maps.google.com/?daddr=${lat},${lng}`;
      } else {
        // Browser (any platform): Always use web Google Maps URL
        mapsUrl = `https://maps.google.com/?daddr=${lat},${lng}`;
      }
    } else {
      // Fallback when coordinates are not available
      const query = encodeURIComponent(`${placeName} ${address || ''}`);
      
      if (isAndroidDevice && isNativeApp) {
        const urls = [
          `geo:0,0?q=${query}`,
          `https://maps.google.com/?q=${query}`
        ];
        tryUrlsInSequence(urls);
        return;
      } else if (isIOS && isNativeApp) {
        mapsUrl = `maps://maps.google.com/?q=${query}`;
      } else {
        // Browser (any platform): Always use web Google Maps URL
        mapsUrl = `https://maps.google.com/?q=${query}`;
      }
    }
    
    openExternalLink(mapsUrl, "_blank");
  };

  // Helper function to try multiple URLs for Android native apps
  const tryUrlsInSequence = (urls: string[]) => {
    const tryUrl = (index: number) => {
      if (index >= urls.length) return;
      
      const url = urls[index];
      try {
        openExternalLink(url, "_blank");
      } catch (error) {
        console.warn(`Failed to open URL: ${url}`, error);
        // Try next URL in sequence
        if (index + 1 < urls.length) {
          setTimeout(() => tryUrl(index + 1), 100);
        }
      }
    };
    
    tryUrl(0);
  };

  return { openDirections };
};


// Reusable Directions Button Component
export const DirectionsButton: React.FC<DirectionsButtonProps> = ({
  placeData,
  className = '',
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick
}) => {
  const { t } = useTranslation();
  const { openDirections } = useMapDirections();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openDirections(placeData);
    }
  };

  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-3 text-sm rounded-lg',
    lg: 'px-6 py-4 text-base rounded-xl'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg focus:ring-blue-500',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 focus:ring-gray-500',
    custom: '' // For custom styling
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variant !== 'custom' ? variantClasses[variant] : ''} ${className}`;

  return (
    <button
      onClick={handleClick}
      disabled={disabled || !placeData}
      className={combinedClasses}
    >
      <Navigation className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} mr-2`} />
      {children || t("get_directions")}
    </button>
  );
};

// Default export is the DirectionsButton component
const OpenMapDirections = DirectionsButton;
export default OpenMapDirections;

import React, { useState } from 'react';
import { Stethoscope, TestTube, Pill, Hospital, Utensils, ShoppingCart, MapPin } from 'lucide-react';
import { clsx } from 'clsx';

interface PlaceImageProps {
  photoUrl?: string;
  placeType: string;
  placeName?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const getPlaceTypeIcon = (placeType: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    doctor: Stethoscope,
    hospital: Hospital,
    lab: TestTube,
    pharmacy: Pill,
    restaurant: Utensils,
    shopping_mall: ShoppingCart,
    default: MapPin,
  };
  
  return iconMap[placeType] || iconMap.default;
};

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
};

const iconSizes = {
  sm: 20,
  md: 24,
  lg: 28,
};

const PlaceImage: React.FC<PlaceImageProps> = ({
  photoUrl,
  placeType,
  placeName,
  size = 'md',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  const Icon = getPlaceTypeIcon(placeType);
  const shouldShowImage = photoUrl && !imageError;

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  return (
    <div className={clsx(
      'relative rounded-xl overflow-hidden bg-gray-100 flex-shrink-0',
      sizeClasses[size],
      className
    )}>
      {shouldShowImage ? (
        <>
          <img
            src={photoUrl}
            alt={placeName || `${placeType} image`}
            className={clsx(
              'w-full h-full object-cover transition-opacity duration-200',
              imageLoading ? 'opacity-0' : 'opacity-100'
            )}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-600"></div>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <Icon 
            size={iconSizes[size]} 
            className="text-gray-400" 
          />
        </div>
      )}
    </div>
  );
};

export default PlaceImage;
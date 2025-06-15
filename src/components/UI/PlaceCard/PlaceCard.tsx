import React from 'react';
import { Phone, Navigation, MapPin, Calendar } from 'lucide-react';
import { PlaceCardProps } from '../../../types';
import StarRating from '../StarRating/StarRating';
import PlaceImage from '../PlaceImage/PlaceImage';
import { clsx } from 'clsx';

const PlaceCard: React.FC<PlaceCardProps> = ({
  place,
  categoryType,
  onDetailsClick,
  onCallClick,
  onDirectionsClick,
  onBookingClick,
  photoUrl,
  showBooking = false,
  className = '',
}) => {
  const hasPhone = Boolean(place.formatted_phone_number);
  const hasRating = Boolean(place.rating);

  return (
    <div className={clsx(
      'group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md',
      'transition-all duration-200 border border-gray-100',
      className
    )}>
      {/* Main Content */}
      <div 
        onClick={onDetailsClick}
        className="p-4 cursor-pointer"
      >
        <div className="flex items-start gap-4">
          {/* Place Image */}
          <PlaceImage 
            photoUrl={photoUrl}
            placeType={categoryType}
            placeName={place.name}
            size="md"
          />

          {/* Place Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 truncate">
                  {place.name}
                </h3>
                
                <div className="flex items-center gap-2 mt-1">
                  <MapPin size={14} className="text-gray-400 flex-shrink-0" />
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {place.vicinity}
                  </p>
                </div>
                
                {/* Rating and Status */}
                <div className="flex items-center gap-3 mt-2">
                  {hasRating && (
                    <StarRating 
                      rating={place.rating!} 
                      showRating={true}
                      size={14}
                    />
                  )}
                  
                  {place.business_status === 'OPERATIONAL' && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Open
                    </span>
                  )}
                </div>

                {/* Additional Info */}
                {place.user_ratings_total && (
                  <p className="text-xs text-gray-500 mt-1">
                    {place.user_ratings_total} reviews
                  </p>
                )}
              </div>

              {/* CTA Arrow */}
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center border-t border-gray-100 bg-gray-50/50">
        {/* Phone/Booking Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (showBooking && onBookingClick) {
              onBookingClick();
            } else if (hasPhone) {
              onCallClick();
            }
          }}
          disabled={!hasPhone && !showBooking}
          className={clsx(
            'flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium',
            'transition-colors duration-200 border-r border-gray-100',
            hasPhone || showBooking 
              ? 'text-gray-600 hover:text-blue-600' 
              : 'text-gray-400 cursor-not-allowed'
          )}
        >
          {showBooking ? (
            <>
              <Calendar size={16} />
              <span>Book</span>
            </>
          ) : (
            <>
              <Phone size={16} />
              <span>{categoryType === 'doctor' ? 'Call' : 'Call'}</span>
            </>
          )}
        </button>

        {/* Directions Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDirectionsClick();
          }}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <Navigation size={16} />
          <span>Directions</span>
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
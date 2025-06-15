import React from 'react';
import { Star } from 'lucide-react';
import { clsx } from 'clsx';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  showRating?: boolean;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 16,
  showRating = false,
  className = '',
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = Math.max(0, maxRating - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className={clsx('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star
            key={`full-${index}`}
            size={size}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star size={size} className="text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={size} className="fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Star
            key={`empty-${index}`}
            size={size}
            className="text-gray-300"
          />
        ))}
      </div>
      
      {showRating && (
        <span className="text-sm text-gray-600 ml-1 font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;
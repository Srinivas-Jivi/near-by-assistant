import { default as React } from 'react';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: number;
    showRating?: boolean;
    className?: string;
}
declare const StarRating: React.FC<StarRatingProps>;
export default StarRating;

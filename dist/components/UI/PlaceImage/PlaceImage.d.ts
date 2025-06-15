import { default as React } from 'react';

interface PlaceImageProps {
    photoUrl?: string;
    placeType: string;
    placeName?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
declare const PlaceImage: React.FC<PlaceImageProps>;
export default PlaceImage;

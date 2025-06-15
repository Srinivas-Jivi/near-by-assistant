import { default as React } from 'react';
import { PlaceData } from '../../../types';

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
interface DirectionsButtonProps {
    placeData: PlaceWithLocation;
    className?: string;
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'custom';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    onClick?: () => void;
}
export declare const useMapDirections: () => {
    openDirections: (placeData: PlaceWithLocation) => void;
};
export declare const DirectionsButton: React.FC<DirectionsButtonProps>;
declare const OpenMapDirections: React.FC<DirectionsButtonProps>;
export default OpenMapDirections;

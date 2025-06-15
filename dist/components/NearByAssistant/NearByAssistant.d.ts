import { default as React } from 'react';
import { NearByAssistantConfig } from '../../types';

interface NearByAssistantProps {
    config: NearByAssistantConfig;
    className?: string;
    onError?: (error: string) => void;
}
export declare const NearByAssistant: React.FC<NearByAssistantProps>;
export {};

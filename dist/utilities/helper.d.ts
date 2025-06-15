
export declare const isAndroid: () => boolean;
export declare const isIOSDevice: () => boolean;
export declare const isProduction: () => boolean;
export declare const logSentryError: (error: unknown) => void;
export declare const getMockValue: () => any;
export declare const openExternalLink: (url: string, type?: string) => void;
export declare const handleInApp: (method: string, data: Record<string, unknown>) => boolean;
export declare const isDebug: () => boolean;
export declare const isTrackingAllowed: (key: string) => any;
export declare const analyticsAppTrack: (eventName: string, eventData?: {}) => void;
export declare const removeQueryParams: (params?: string[], url?: string) => string;

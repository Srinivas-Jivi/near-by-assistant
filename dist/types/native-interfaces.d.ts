export interface AndroidInterface {
    /**
     * Opens a URL in the device's default browser
     * @param url - The URL to open
     */
    openUrlInBrowser(url: string): void;
    /**
     * Generic method for handling in-app analytics tracking
     * @param eventData - JSON string containing event data
     * @param configData - JSON string containing configuration data
     */
    analyticsAppTrackEvent(eventData: string, configData: string): void;
    /**
     * Allow dynamic method calls for future Android interface methods
     */
    [key: string]: ((eventData: string, configData: string) => void) | ((url: string) => void) | any;
}
export interface IOSMessageHandler {
    /**
     * Posts a message to the iOS native layer
     * @param message - The message object to send
     */
    postMessage(message: {
        action: string;
        data: Record<string, unknown>;
        isAnalyticsAllowed?: {
            isMixpanelAllowed: boolean;
            isClevertapAllowed: boolean;
        };
    }): void;
}
export interface IOSWebKitHandlers {
    iosInterface: IOSMessageHandler;
}
export interface IOSWebKit {
    messageHandlers: IOSWebKitHandlers;
}
declare global {
    interface Window {
        /**
         * Android native interface injected by the mobile app
         */
        AndroidInterface?: AndroidInterface;
        /**
         * iOS WebKit interface for communication with native iOS layer
         */
        webkit?: IOSWebKit;
    }
    /**
     * Global AndroidInterface object available in Android WebView
     */
    var AndroidInterface: AndroidInterface | undefined;
}
export {};

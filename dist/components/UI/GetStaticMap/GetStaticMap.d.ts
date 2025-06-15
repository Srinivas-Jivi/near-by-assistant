export interface StaticMapOptions {
    zoom?: number;
    size?: string;
    maptype?: string;
}
export declare const useStaticMap: () => {
    getStaticMapUrl: (latitude: number, longitude: number, options?: StaticMapOptions) => Promise<string | null>;
};
export default useStaticMap;

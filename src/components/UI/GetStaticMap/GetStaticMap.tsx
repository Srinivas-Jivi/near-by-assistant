import { useCallback } from 'react';
import { invokeSearchWorkflow } from '../../../dataManager/NearByAssistant';
import { logSentryError } from '../../../utilities/helper';

export interface StaticMapOptions {
  zoom?: number;
  size?: string;
  maptype?: string;
}

// Add proper type definitions for the API response structure
interface ApiResponse<T = any> {
  data: T;
}

interface WorkflowResponse {
  data: {
    final_result: {
      map_url: string;
    };
  };
}

export const useStaticMap = () => {
  const getStaticMapUrl = useCallback(async (
    latitude: number,
    longitude: number,
    options: StaticMapOptions = {}
  ): Promise<string | null> => {
    try {
      const {
        zoom = 15,
        size = "600x200",
        maptype = "roadmap"
      } = options;

      const response = await invokeSearchWorkflow("google_nearby_static_map", {
        latitude,
        longitude,
        zoom,
        size,
        maptype,
      }) as ApiResponse<WorkflowResponse>;

      console.log('Static map response', response);
      
      // Return the map URL from the response structure
      return response?.data?.data?.final_result?.map_url || null;
    } catch (error) {
      logSentryError(error);
      return null;
    }
  }, []);

  return {
    getStaticMapUrl
  };
};

export default useStaticMap;
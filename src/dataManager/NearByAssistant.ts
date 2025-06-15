import * as SERVICEs from "../services/NearByAssistant";

export const invokeSearchWorkflow = (workflowId: string, payload: Record<string, unknown> = {}, headers: Record<string, unknown> = {}) => {
  return SERVICEs.invokeSearchWorkflow(workflowId, payload, headers)
    .then((result: unknown) => {
      return result;
    })
    .catch((error: unknown) => {
      throw error;
    }); 
};
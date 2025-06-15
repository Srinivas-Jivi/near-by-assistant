import * as APIs from "../constants/BackendConstant";
import { axiosInstance } from "../utilities/configureAxios";
import * as ApiResponse from "../constants/ApiResponse";
import { getMockValue } from "../utilities/helper";

export const invokeSearchWorkflow = (workflowId: string, payload = {}, headers = {}) => {
  const url = APIs.INVOKE_WORKFLOW;
  if (getMockValue()) {
    return Promise.resolve(ApiResponse.send_nutrition_chat_message);
  }
  return axiosInstance.post(
    url,
    {
      workflow_id: workflowId,
      input_args: {
        inputs: {
          ...payload,
        },
      },
    },
    {
      headers: headers,
    }
  );
};
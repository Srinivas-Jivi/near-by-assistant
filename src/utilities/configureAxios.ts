import axios from "axios";
import { removeQueryParams } from "./helper";

let apiUrl = import.meta.env.VITE_API_BASE_URL;

const configureAxios = () =>
  axios.create({
    baseURL: apiUrl,
    timeout: 180000,
  });

export const axiosInstance = configureAxios();

axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

axiosInstance.defaults.headers.common["Content-Type"] =
  "application/json;charset=utf-8";

axiosInstance.defaults.headers.common["X-TENANT-ID"] =
  `${window.location.origin}${import.meta.env.VITE_API_URL_PREFIX}`.slice(
    0,
    -1
  );

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status == 401) {
      localStorage.clear();
      window.location.href = `${window.location.origin}${import.meta.env.VITE_API_URL_PREFIX}welcome?referrer=${encodeURIComponent(
        removeQueryParams(["token"], window.location.href)
      )}`;
    }
    if (!(error && error.response)) {
      error = {
        response: {
          data: {
            errors: {
              message: error?.message ?? "Something went wrong.",
              headers: error?.config?.headers ?? {},
              baseUrl: error?.config?.baseURL ?? "",
              url: error?.config?.url ?? "",
              method: error?.config?.method ?? "",
              data: error?.config?.data ?? {},
            },
          },
        },
      };
    }
    return Promise.reject(error);
  }
);

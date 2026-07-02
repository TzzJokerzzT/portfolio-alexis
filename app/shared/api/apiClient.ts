import axios, { type AxiosInstance, type AxiosResponse } from "axios";

const createApiClient = (): AxiosInstance => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  if (!baseURL) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not defined in environment variables",
    );
  }

  const client = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  client.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      console.error("API Error:", error);
      return Promise.reject(error);
    },
  );

  return client;
};

const apiClient = createApiClient();

export const api = {
  get: <T>(url: string) => apiClient.get<T>(url).then((res) => res.data),
};

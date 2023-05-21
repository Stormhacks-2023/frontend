import axios from "axios";

export const baseURL = "https://stormhacks-2023-t5ql44yo2q-uw.a.run.app";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(undefined, (error) => {
  if (error?.response?.status !== 401) {
    return Promise.reject(error);
  }
});

export default axiosInstance;

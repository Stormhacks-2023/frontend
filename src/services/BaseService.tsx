import axios from "axios";

export const baseURL = "http://localhost:3003";

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

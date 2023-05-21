import axios from "axios";

export const baseURL = "https://stormhacks-2023-ql67qndn2q-uw.a.run.app";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(undefined, (error) => {
  console.log("error", error);
  console.log("error", error.response);
  if (error?.response?.status !== 401) {
    return Promise.reject(error);
  }
});

export default axiosInstance;

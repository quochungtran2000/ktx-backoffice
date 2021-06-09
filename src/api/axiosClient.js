import axios from "axios";
import queryString from "query-string";
import { toast } from "react-toastify";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    // "Authorization": localStorage.getItem('token') || null
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    toast.error(error.message)
    throw error;
  }
);

export default axiosClient;

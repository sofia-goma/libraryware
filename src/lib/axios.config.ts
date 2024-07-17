import axios, { InternalAxiosRequestConfig } from "axios";

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : "";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;

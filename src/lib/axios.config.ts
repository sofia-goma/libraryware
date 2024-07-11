import axios, { InternalAxiosRequestConfig } from "axios";

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    let token: string | null;
    if (localStorage.getItem("token") !== undefined)
      token = localStorage.getItem("token");
    else if (sessionStorage.getItem("token") !== undefined)
      token = sessionStorage.getItem("token");
    else token = "";

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

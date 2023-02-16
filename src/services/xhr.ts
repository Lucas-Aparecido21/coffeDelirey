import axios, { AxiosRequestHeaders } from "axios";

// const url = "http://192.168.1.200:3333";

const url = "http://192.168.1.8:3333";

const headers = (): AxiosRequestHeaders => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
});

const api = axios.create({
  baseURL: url,
  headers: headers(),
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;

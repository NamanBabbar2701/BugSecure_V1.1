import axios from "axios";

const API_PORT = process.env.REACT_APP_API_PORT || "8080";

/**
 * Resolves the backend URL automatically:
 * - PC:  http://localhost:3000  → http://localhost:8080
 * - Phone: http://192.168.x.x:3000 → http://192.168.x.x:8080
 * Set REACT_APP_API_URL only if you need a fixed override (e.g. production).
 */
export function getApiBaseUrl() {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, "");
  }
  const host = window.location.hostname;
  return `http://${host}:${API_PORT}`;
}

const API = axios.create({
  baseURL: getApiBaseUrl(),
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;

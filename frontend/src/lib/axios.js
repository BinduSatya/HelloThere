import axios from "axios";

// const BASE_URL =
//   import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL + "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});

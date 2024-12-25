import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
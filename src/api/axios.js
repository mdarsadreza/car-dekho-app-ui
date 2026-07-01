import axios from "axios";

const apiClient = axios.create({
  baseURL: https://car-dekho-app-be.onrender.com || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

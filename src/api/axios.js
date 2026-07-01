import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://car-dekho-app-be.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

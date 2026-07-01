import apiClient from "./axios";

export const getHealth = async () => {
  const response = await apiClient.get("/health");
  return response.data;
};

export const getAllCars = async () => {
  const response = await apiClient.get("/api/cars");
  return response.data;
};

export const getCarById = async (id) => {
  const response = await apiClient.get(`/api/cars/${id}`);
  return response.data;
};

export const addCar = async (car) => {
  const response = await apiClient.post("/api/cars", car);
  return response.data;
};

export const deleteCar = async (id) => {
  const response = await apiClient.delete(`/api/cars/${id}`);
  return response.data;
};

export const getRecommendations = async (payload) => {
  const response = await apiClient.post("/api/recommendations", payload);
  return response.data;
};

export const compareCars = async (payload) => {
  const response = await apiClient.post("/api/compare", payload);
  return response.data;
};

export const searchByBrand = async (brand) => {
  const response = await apiClient.get("/api/search/brand", {
    params: { brand },
  });
  return response.data;
};

export const searchByModel = async (model) => {
  const response = await apiClient.get("/api/search/model", {
    params: { model },
  });
  return response.data;
};

export const searchByFuel = async (fuel) => {
  const response = await apiClient.get("/api/search/fuel", {
    params: { fuel },
  });
  return response.data;
};

export const searchByTransmission = async (transmission) => {
  const response = await apiClient.get("/api/search/transmission", {
    params: { transmission },
  });
  return response.data;
};

export const getReviewsByCar = async (carId) => {
  const response = await apiClient.get(`/api/reviews/car/${carId}`);
  return response.data;
};

export const saveHistory = async (payload) => {
  const response = await apiClient.post("/api/history", payload);
  return response.data;
};

export const getHistory = async () => {
  const response = await apiClient.get("/api/history");
  return response.data;
};

export const saveReview = async (payload) => {
  const response = await apiClient.post("/api/reviews", payload);
  return response.data;
};


export const saveContact = async (payload) => {
  const response = await apiClient.post("/api/contact", payload);
  return response.data;
};

export const getContacts = async () => {
  const response = await apiClient.get("/api/contact");
  return response.data;
};
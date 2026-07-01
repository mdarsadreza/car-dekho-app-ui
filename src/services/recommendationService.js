import { getRecommendations } from "../api/carApi";

export const fetchRecommendations = async (formData) => {
    const payload = {
        budget: Number(formData.budget),
        fuelType: formData.fuelType,
        transmission: formData.transmission,
        familySize: Number(formData.familySize),
        priority: formData.priority,
    };

    return await getRecommendations(payload);
};
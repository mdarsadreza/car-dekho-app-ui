import { useState } from "react";

import { fetchRecommendations } from "../../../services/recommendationService";
import { saveHistory } from "../../../api/carApi";

import RecommendationCard from "./RecommendationCard";
import Loader from "../../common/Loader";

function RecommendationForm() {
  const [formData, setFormData] = useState({
    budget: "",
    fuelType: "",
    transmission: "",
    familySize: "",
    priority: "",
  });

  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setRecommendations([]);

    if (!formData.budget || !formData.familySize) {
      setError("Budget and family size are required.");
      return;
    }

    try {
      setLoading(true);

      const data = await fetchRecommendations(formData);

      setRecommendations(data);

      await saveHistory({
        budget: Number(formData.budget),
        fuelType: formData.fuelType,
        transmission: formData.transmission,
        priority: formData.priority || "Balanced",
      });
    } catch (err) {
      console.error(err);
      setError("Unable to fetch recommendations. Please check backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="recommendation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Budget (₹)</label>
          <input
            type="number"
            name="budget"
            placeholder="1500000"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Fuel Type</label>
          <select
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="CNG">CNG</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        <div className="form-group">
          <label>Transmission</label>
          <select
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>

        <div className="form-group">
          <label>Family Size</label>
          <input
            type="number"
            name="familySize"
            placeholder="5"
            value={formData.familySize}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="">Balanced</option>
            <option value="Safety">Safety</option>
            <option value="Mileage">Mileage</option>
            <option value="Performance">Performance</option>
            <option value="Comfort">Comfort</option>
          </select>
        </div>

        <button className="recommend-btn" disabled={loading}>
          {loading ? "Finding Cars..." : "Get AI Recommendation"}
        </button>
      </form>

      {error && <div className="error-box">{error}</div>}

      {loading && <Loader />}

      {recommendations.length > 0 && (
        <section className="results-section">
          <h2>Your AI Shortlist</h2>

          {recommendations.map((car) => (
            <RecommendationCard key={car.carId} car={car} />
          ))}
        </section>
      )}
    </>
  );
}

export default RecommendationForm;
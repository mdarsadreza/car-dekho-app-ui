import { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import Loader from "../components/common/Loader";

import {
  getAllCars,
  searchByBrand,
  searchByModel,
  searchByFuel,
  searchByTransmission,
  deleteCar,
} from "../api/carApi";

import "../styles/cars.css";

function Cars() {
  const [cars, setCars] = useState([]);
  const [searchType, setSearchType] = useState("brand");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadCars = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getAllCars();
      setCars(data);
    } catch (err) {
      console.error(err);
      setError("Unable to load cars.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCars();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchValue.trim()) {
      loadCars();
      return;
    }

    try {
      setLoading(true);
      setError("");

      let data = [];

      if (searchType === "brand") {
        data = await searchByBrand(searchValue);
      } else if (searchType === "model") {
        data = await searchByModel(searchValue);
      } else if (searchType === "fuel") {
        data = await searchByFuel(searchValue);
      } else if (searchType === "transmission") {
        data = await searchByTransmission(searchValue);
      }

      setCars(data);
    } catch (err) {
      console.error(err);
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this car?");
    if (!confirmDelete) return;

    try {
      await deleteCar(id);
      setCars((prev) => prev.filter((car) => car.id !== id));
    } catch (err) {
      console.error(err);
      setError("Unable to delete car.");
    }
  };

  return (
    <Layout>
      <section className="cars-page">
        <div className="cars-header">
          <h1>Browse Cars</h1>
          <p>Search cars by brand, model, fuel type, or transmission.</p>
        </div>

        <form className="cars-search" onSubmit={handleSearch}>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="brand">Brand</option>
            <option value="model">Model</option>
            <option value="fuel">Fuel</option>
            <option value="transmission">Transmission</option>
          </select>

          <input
            type="text"
            placeholder="Search Tata, Nexon, Petrol, Automatic..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button type="submit">Search</button>

          <button type="button" className="reset-btn" onClick={loadCars}>
            Reset
          </button>
        </form>

        {error && <div className="error-box">{error}</div>}

        {loading && <Loader />}

        {!loading && (
          <div className="cars-grid">
            {cars.map((car) => (
              <div className="car-card" key={car.id}>
                <h2>
                  {car.make} {car.model}
                </h2>

                <p className="variant">{car.variant}</p>

                <div className="car-info">
                  <span>₹{Number(car.price).toLocaleString("en-IN")}</span>
                  <span>{car.fuelType}</span>
                  <span>{car.transmission}</span>
                  <span>{car.bodyType}</span>
                  <span>{car.mileage} kmpl</span>
                  <span>Safety {car.safetyRating}/5</span>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(car.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cars;
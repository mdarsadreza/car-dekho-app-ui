import { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import Loader from "../components/common/Loader";

import { getHistory } from "../api/carApi";

import "../styles/history.css";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadHistory = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getHistory();

      setHistory(data);
    } catch (err) {
      console.error(err);
      setError("Unable to load search history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <Layout>
      <section className="history-page">
        <div className="history-header">
          <h1>Search History</h1>
          <p>Previous recommendation searches saved from backend.</p>
        </div>

        {error && <div className="error-box">{error}</div>}

        {loading && <Loader />}

        {!loading && history.length === 0 && (
          <div className="empty-box">No history found.</div>
        )}

        <div className="history-list">
          {history.map((item) => (
            <div className="history-card" key={item.id}>
              <h3>{item.searchQuery || item.priority || "Car Search"}</h3>

              <p>
                <strong>Budget:</strong>{" "}
                {item.budget ? `₹${Number(item.budget).toLocaleString("en-IN")}` : "N/A"}
              </p>

              <p>
                <strong>Fuel:</strong> {item.fuelType || "N/A"}
              </p>

              <p>
                <strong>Transmission:</strong> {item.transmission || "N/A"}
              </p>

              <p>
                <strong>Recommended:</strong>{" "}
                {item.recommendedCar || item.recommendedCars || "N/A"}
              </p>

              <small>{item.searchedAt || item.createdAt || ""}</small>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default History;
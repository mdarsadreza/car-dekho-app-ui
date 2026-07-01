import { useEffect, useState } from "react";

import Layout from "../components/common/Layout";
import CompareCard from "../components/compare/CompareCard";
import Loader from "../components/common/Loader";

import { getAllCars } from "../api/carApi";
import { fetchCompareResult } from "../services/compareService";

import "../styles/compare.css";

function Compare() {
    const [cars, setCars] = useState([]);
    const [firstCarId, setFirstCarId] = useState("");
    const [secondCarId, setSecondCarId] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        loadCars();
    }, []);

    const loadCars = async () => {
        try {
            const data = await getAllCars();
            setCars(data);
        } catch (err) {
            console.error(err);
            setError("Unable to load cars. Please check backend.");
        }
    };

    const handleCompare = async (event) => {
        event.preventDefault();
        setError("");
        setResult(null);

        if (!firstCarId || !secondCarId) {
            setError("Please select both cars.");
            return;
        }

        if (firstCarId === secondCarId) {
            setError("Please select two different cars.");
            return;
        }

        try {
            setLoading(true);

            const data = await fetchCompareResult(firstCarId, secondCarId);

            setResult(data);
        } catch (err) {
            console.error(err);
            setError("Unable to compare cars.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <section className="compare-page">
                <div className="compare-header">
                    <h1>Compare Cars</h1>
                    <p>
                        Compare two shortlisted cars side-by-side and choose
                        the better option confidently.
                    </p>
                </div>

                <form className="compare-form" onSubmit={handleCompare}>
                    <div className="form-group">
                        <label>First Car</label>
                        <select
                            value={firstCarId}
                            onChange={(e) => setFirstCarId(e.target.value)}
                        >
                            <option value="">Select first car</option>

                            {cars.map((car) => (
                                <option key={car.id} value={car.id}>
                                    {car.make} {car.model} - {car.variant}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Second Car</label>
                        <select
                            value={secondCarId}
                            onChange={(e) => setSecondCarId(e.target.value)}
                        >
                            <option value="">Select second car</option>

                            {cars.map((car) => (
                                <option key={car.id} value={car.id}>
                                    {car.make} {car.model} - {car.variant}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button className="compare-btn" disabled={loading}>
                        {loading ? "Comparing..." : "Compare Cars"}
                    </button>
                </form>

                {error && <div className="error-box">{error}</div>}

                {loading && <Loader />}

                {result && (
                    <section className="compare-result">
                        <div className="winner-box">
                            <h2>Recommended Winner</h2>
                            <p>{result.winner}</p>
                            <small>{result.comparisonSummary}</small>
                        </div>

                        <div className="compare-grid">
                            <CompareCard
                                title="Car 1"
                                car={result.firstCar}
                            />

                            <CompareCard
                                title="Car 2"
                                car={result.secondCar}
                            />
                        </div>
                    </section>
                )}
            </section>
        </Layout>
    );
}

export default Compare;
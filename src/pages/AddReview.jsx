import { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import { getAllCars, saveReview } from "../api/carApi";
import "../styles/reviews.css";
import { getReviewsByCar } from "../api/carApi";
import Loader from "../components/common/Loader";
import "../styles/reviews.css";

function AddReview() {
    const [cars, setCars] = useState([]);

    const [formData, setFormData] = useState({
        carId: "",
        reviewer: "",
        review: "",
        rating: "",
    });

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [loadings, setLoadings] = useState(false);

    useEffect(() => {

        loadReviews();

    }, []);

    const loadReviews = async () => {

        try {

            setLoadings(true);

            const data = await getReviewsByCar(1);

            setReviews(data);

        } finally {

            setLoadings(false);

        }

    };

    useEffect(() => {
        loadCars();
    }, []);

    const loadCars = async () => {
        try {
            const data = await getAllCars();
            setCars(data);
        } catch (err) {
            console.error(err);
            setError("Unable to load cars.");
        }
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        try {
            setLoading(true);

            await saveReview({
                carId: Number(formData.carId),
                reviewer: formData.reviewer,
                review: formData.review,
                rating: Number(formData.rating),
            });

            setSuccess("Review submitted successfully.");

            setFormData({
                carId: "",
                reviewer: "",
                review: "",
                rating: "",
            });
            loadReviews();
        } catch (err) {
            console.error(err);
            setError("Unable to save review.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <section className="reviews-page">
                <h1>Add Review</h1>

                <form className="review-form" onSubmit={handleSubmit}>
                    <select
                        name="carId"
                        value={formData.carId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Car</option>

                        {cars.map((car) => (
                            <option key={car.id} value={car.id}>
                                {car.make} {car.model} - {car.variant}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        name="reviewer"
                        placeholder="Your Name"
                        value={formData.reviewer}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="rating"
                        placeholder="Rating 1 to 5"
                        min="1"
                        max="5"
                        step="0.5"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="review"
                        rows="5"
                        placeholder="Write your review..."
                        value={formData.review}
                        onChange={handleChange}
                        required
                    />

                    <button disabled={loading}>
                        {loading ? "Saving..." : "Submit Review"}
                    </button>
                </form>

                {success && <div className="success-box">{success}</div>}
                {error && <div className="error-box">{error}</div>}
            </section>
            <section className="reviews-page">

                <h1>Customer Reviews</h1>

                {

                    loadings && <Loader />

                }

                {

                    reviews.map(review => (

                        <div
                            className="review-card"
                            key={review.id}>

                            <h3>{review.reviewer}</h3>

                            <p>

                                ⭐ {review.rating}

                            </p>

                            <p>

                                {review.review}

                            </p>

                        </div>

                    ))

                }

            </section>
        </Layout>
    );
}

export default AddReview;
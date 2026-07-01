function RecommendationCard({ car }) {
    return (
        <div className="recommendation-card">
            <div className="card-header">
                <h3>{car.make} {car.model}</h3>
                <span className="score">Score: {car.score}</span>
            </div>

            <p className="variant">{car.variant}</p>

            <div className="car-meta">
                <span>₹{Number(car.price).toLocaleString("en-IN")}</span>
                <span>{car.fuelType}</span>
                <span>{car.transmission}</span>
                <span>{car.mileage} kmpl</span>
                <span>Safety: {car.safetyRating}/5</span>
            </div>

            <div className="ai-reason">
                <strong>AI Recommendation</strong>
                <p>{car.reason}</p>
            </div>
        </div>
    );
}

export default RecommendationCard;
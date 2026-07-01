function CompareCard({ car, title }) {
    if (!car) return null;

    return (
        <div className="compare-card">
            <h3>{title}</h3>

            <h2>{car.make} {car.model}</h2>

            <p className="variant">{car.variant}</p>

            <div className="compare-row">
                <span>Price</span>
                <strong>₹{Number(car.price).toLocaleString("en-IN")}</strong>
            </div>

            <div className="compare-row">
                <span>Fuel</span>
                <strong>{car.fuelType}</strong>
            </div>

            <div className="compare-row">
                <span>Transmission</span>
                <strong>{car.transmission}</strong>
            </div>

            <div className="compare-row">
                <span>Mileage</span>
                <strong>{car.mileage} kmpl</strong>
            </div>

            <div className="compare-row">
                <span>Safety</span>
                <strong>{car.safetyRating}/5</strong>
            </div>

            <div className="compare-row">
                <span>Boot Space</span>
                <strong>{car.bootSpace} L</strong>
            </div>
        </div>
    );
}

export default CompareCard;
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function TripDetails() {
  const { id } = useParams();

  // State to hold the trip we fetched
  const [trip, setTrip] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Load this specific trip when the page loads
  useEffect(() => {
    fetch(`/api/trips/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Error loading trip");
        }
        return res.json();
      })
      .then(data => {
        setTrip(data);
      })
      .catch(err => {
        console.log("Trip details fetch error:", err);
        setErrorMessage("Could not load this trip.");
      });
  }, [id]);

  if (errorMessage) {
    return (
      <div className="page">
        <div className="form-card">
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="page">
        <div className="form-card">
          <p>Loading trip...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="form-card">
        <h2>{trip.title}</h2>

        <p>
          <strong>Location:</strong> {trip.city}, {trip.country}
        </p>

        <p>
          <strong>Dates:</strong> {trip.startDate} → {trip.endDate}
        </p>

        {trip.notes && (
          <p>
            <strong>Notes:</strong> {trip.notes}
          </p>
        )}

        {trip.imageUrl && (
          <div className="trip-image-wrapper">
            <img
              src={trip.imageUrl}
              alt={trip.title}
              className="trip-image"
            />
          </div>
        )}

        <div className="btn-row" style={{ marginTop: "1rem" }}>
          <Link to={`/trips/${trip.id}/edit`}>
            <button className="btn btn-secondary">Edit Trip</button>
          </Link>

          <Link to="/trips">
            <button className="btn btn-primary">Back to All Trips</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;

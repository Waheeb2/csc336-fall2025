import { useState, useEffect } from "react";
import { Link } from "react-router-dom";   
import { toast } from "react-toastify";   

function Trips() {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  const fetchTrips = () => {
    fetch("/api/trips")
      .then(res => {
        if (!res.ok) {
          throw new Error("Error fetching trips");
        }
        return res.json();
      })
      .then(data => {
        setTrips(data);
      })
      .catch(err => {
        console.log("Fetch error:", err);
        setTrips([]);
        toast.error("Could not load trips.");   
      });
  };

  const deleteTrip = (id) => {
    fetch(`/api/trips/${id}`, {
      method: "DELETE",
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Error deleting trip");
        }
        return res.json();
      })
      .then(data => {
        setTrips(data); 
        toast.success("Trip deleted.");          
      })
      .catch(err => {
        console.log("Delete error:", err);
        toast.error("Could not delete trip.");   
      });
  };

  useEffect(() => {
    fetchTrips();
  }, []);


  const filteredTrips = trips.filter(trip => {
    const term = searchTerm.toLowerCase();
    const title = (trip.title || "").toLowerCase();
    const city = (trip.city || "").toLowerCase();
    const country = (trip.country || "").toLowerCase();

    // Match if the search text appears in title, city, or country
    return (
      title.includes(term) ||
      city.includes(term) ||
      country.includes(term)
    );
  });

  return (
  <div className="page">

    <div className="form-card">

      <h2>Your Trips</h2>

      <div className="search-box">
        <label>
          Search by title, city, or country:{" "}
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="e.g. Paris, Italy, Summer..."
          />
        </label>
      </div>

      {filteredTrips.length === 0 ? (
        <p>No trips found.</p>
      ) : (
        <ul className="trip-list">
          {filteredTrips.map(trip => (
            <li key={trip.id} className="trip-item">

              <div className="trip-main">
                <Link to={`/trips/${trip.id}`} className="trip-title-link">
                  <strong>{trip.title}</strong>
                </Link>
                <span>{trip.city}, {trip.country}</span>
              </div>

              <div className="btn-row">
                <Link to={`/trips/${trip.id}/edit`}>
                  <button className="btn btn-secondary">Edit</button>
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteTrip(trip.id)}
                >
                  Delete
                </button>
              </div>

            </li>
          ))}
        </ul>
      )}

    </div>
  </div>
);
}

export default Trips;

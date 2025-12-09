import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";   

// Helper function to validate image URLs
function isValidImageUrl(url) {
  if (!url) return true; 
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(url); // Check if it ends with a these image extension
}

function EditTrip() {
  const { id } = useParams(); 

  // State for each form field
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [imageUrl, setImageUrl] = useState(""); 

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Load the existing trip when the page opens
  useEffect(() => {
    fetch(`/api/trips/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Error loading trip");
        }
        return res.json();
      })
      .then(trip => {
        setTitle(trip.title || "");
        setCountry(trip.country || "");
        setCity(trip.city || "");
        setStartDate(trip.startDate || "");
        setEndDate(trip.endDate || "");
        setNotes(trip.notes || "");
        setImageUrl(trip.imageUrl || "");  
      })
      .catch(err => {
        console.log("Fetch single trip error:", err);
        setErrorMessage("Could not load trip.");
        toast.error("Could not load trip.");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!title || !country || !city || !startDate || !endDate) {
      setErrorMessage("Please fill out all required fields.");
      toast.error("Please fill out all required fields.");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      setErrorMessage("Start date cannot be after end date.");
      toast.error("Start date cannot be after end date.");
      return;
    }

    if (!isValidImageUrl(imageUrl)) {
      setErrorMessage("Please enter a valid image URL (jpg, jpeg, png, gif, webp).");
      toast.error("Invalid image URL.");
      return;
    }

    const updatedTrip = {
      title,
      country,
      city,
      startDate,
      endDate,
      notes,
      imageUrl   
    };

    fetch(`/api/trips/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTrip),
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setErrorMessage(data.error);
          toast.error("Could not update trip.");
        } else {
          setSuccessMessage("Trip updated!");
          toast.success("Trip updated!");
        }
      })
      .catch(err => {
        console.log("Update error:", err);
        setErrorMessage("Something went wrong while updating.");
        toast.error("Something went wrong while updating.");
      });
  };

  return (
  <div className="page">

    <div className="form-card">

      <h2>Edit Trip</h2>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title*:
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Country*:
            <input
              type="text"
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            City*:
            <input
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Start Date*:
            <input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            End Date*:
            <input
              type="date"
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Notes:
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows="3"
            />
          </label>
        </div>

        <div>
          <label>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              placeholder=".jpg, .jpeg, .png, etc..."
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  </div>
);
}

export default EditTrip;

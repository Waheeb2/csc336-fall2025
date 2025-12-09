import { useState } from "react";
import { toast } from "react-toastify";   

// Helper function to validate image URLs
function isValidImageUrl(url) {
  if (!url) return true;
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(url); // Check if it ends with a these image extension
}

function AddTrip() {
  // State for each form field

  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [imageUrl, setImageUrl] = useState(""); 

  // These store messages to show the user
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // handleSubmit runs when the user submits the <form>

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Clear old messages
    setErrorMessage("");
    setSuccessMessage("");

    // Simple validation
    if (!title || !country || !city || !startDate || !endDate) {
      setErrorMessage("Please fill out all required fields.");
      toast.error("Please fill out all required fields.");
      return; // Stop the function here
    }

    // Make sure start date is not after end date
    if (new Date(startDate) > new Date(endDate)) {
      setErrorMessage("Start date cannot be after end date.");
      toast.error("Start date cannot be after end date.");
      return;
    }

    // Validate image URL if provided
    if (!isValidImageUrl(imageUrl)) {
      setErrorMessage("Please enter a valid image URL (jpg, jpeg, png, gif, webp).");
      toast.error("Invalid image URL.");
      return;
    }

    // Build the new trip object we will send
    const newTrip = {
      title,
      country,
      city,
      startDate,
      endDate,
      notes,
      imageUrl   
    };

    // POST request to send data to the server
    // /api/trips
    fetch("/api/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTrip) 
    })
      .then((res) => res.json())
      .then((data) => {
        // If server responds with an error object
        if (data.error) {
          setErrorMessage(data.error);
          toast.error("Could not save trip.");
        } else {
          setSuccessMessage("Trip added!");
          toast.success("Trip added!");

          // Clear all fields after success
          setTitle("");
          setCountry("");
          setCity("");
          setStartDate("");
          setEndDate("");
          setNotes("");
          setImageUrl("");  
        }
      })
      .catch(() => {
        // If something goes wrong with fetch
        setErrorMessage("Something went wrong. Please try again.");
        toast.error("Something went wrong. Please try again.");
      });
  };

  // JSX: The actual form users will fill out on the page
  return (
  <div className="page">
    <div className="form-card">
      <h2>Add a Trip</h2>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <form onSubmit={handleSubmit}>

        <div>
          <label>
            Title*:
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)} 
            />
          </label>
        </div>

        <div>
          <label>
            Country*:
            <input 
              type="text" 
              value={country} 
              onChange={(e) => setCountry(e.target.value)} 
            />
          </label>
        </div>

        <div>
          <label>
            City*:
            <input 
              type="text" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
            />
          </label>
        </div>

        <div>
          <label>
            Start Date*:
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)} 
            />
          </label>
        </div>

        <div>
          <label>
            End Date*:
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)} 
            />
          </label>
        </div>

        <div>
          <label>
            Notes:
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
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
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder=".jpg, .jpeg, .png, etc..."
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Trip
        </button>

      </form>
    </div>
  </div>
);
}

export default AddTrip;

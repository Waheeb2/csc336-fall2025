import express from "express"; 
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.static("./public"));

app.use(express.json());

// Returns all trips stored in data.json
app.get("/api/trips", async (req, res) => {
  try {
    const dataString = await fs.readFileSync("data.json", "utf-8");
    const trips = JSON.parse(dataString);
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: "Could not read trips data" });
  }
});

// Returns a single trip by ID
app.get("/api/trips/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const dataString = await fs.readFileSync("data.json", "utf-8");
    const trips = JSON.parse(dataString);

    const trip = trips.find(t => t.id === id);
    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json(trip);
  } catch (err) {
    res.status(500).json({ error: "Could not read trip" });
  }
});


// Adds a new trip to data.json
app.post("/api/trips", async (req, res) => {
  try {

    const dataString = await fs.readFileSync("data.json", "utf-8");
    const trips = JSON.parse(dataString);

    const newTrip = req.body;

    if (!newTrip.title || !newTrip.country || !newTrip.city) {
      return res.status(400).json({ error: "Missing required trip fields." });
    }

    newTrip.id = Date.now();

    trips.push(newTrip);

    await fs.writeFileSync("data.json", JSON.stringify(trips, null, 2));

    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: "Could not save trip data" });
  }
});


// Updates an existing trip by ID
app.put("/api/trips/:id", async (req, res) => {
  try {
    const idToEdit = Number(req.params.id); 
    const updatedTrip = req.body;          

    const dataString = await fs.readFileSync("data.json", "utf-8");
    const trips = JSON.parse(dataString);

    const newTrips = trips.map((trip) => {
      if (trip.id === idToEdit) {
        return {
          ...trip,
          title: updatedTrip.title || trip.title,
          country: updatedTrip.country || trip.country,
          city: updatedTrip.city || trip.city,
          startDate: updatedTrip.startDate || trip.startDate,
          endDate: updatedTrip.endDate || trip.endDate,
          notes:
            updatedTrip.notes !== undefined
              ? updatedTrip.notes
              : trip.notes,
          imageUrl:
            updatedTrip.imageUrl !== undefined
              ? updatedTrip.imageUrl
              : trip.imageUrl,
        };
      }
      return trip;
    });

    await fs.writeFileSync("data.json", JSON.stringify(newTrips, null, 2));
    res.json(newTrips);
  } catch (err) {
    res.status(500).json({ error: "Could not update trip" });
  }
});


// Deletes a trip by ID from data.json
app.delete("/api/trips/:id", async (req, res) => {
  try {
    const idToDelete = Number(req.params.id); 

    const dataString = await fs.readFileSync("data.json", "utf-8");
    const trips = JSON.parse(dataString);

    const updatedTrips = trips.filter((trip) => trip.id !== idToDelete);

    await fs.writeFileSync("data.json", JSON.stringify(updatedTrips, null, 2));

    res.json(updatedTrips);
  } catch (err) {
    res.status(500).json({ error: "Could not delete trip" });
  }
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

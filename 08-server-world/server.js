import express from "express";
import fs from "fs";

const app = express();

// Serve your "front end" files (HTML, CSS, JS) from the public folder
app.use(express.static("./public"));

// Automatically parse JSON in incoming requests
app.use(express.json());

// GET route: sends world.json data to the client
app.get("/world", async (req, res) => {
  const dataString = await fs.readFileSync("world.json", "utf-8");
  const dataObject = JSON.parse(dataString);
  res.json(dataObject);
});

// POST route: updates a person's mood in world.json
app.post("/update", async (req, res) => {
  // Read and parse the current world data
  const worldData = await fs.readFileSync("./world.json", "utf-8");
  const world = JSON.parse(worldData);

  // Data from the frontend form (e.g., { name: "Ivan A.", newMood: "Sad" })
  const updateInfo = req.body;
  let found = false;

  // Loop through all regions, towns, and people to find a matching name
  for (let region of world.regions) {
    for (let town of region.towns) {
      for (let person of town.notable_people) {
        
        // Check if the top-level person's name matches (Ivan, Peter, Grady)
        if (person.name === updateInfo.name) {
          person.mood = updateInfo.newMood;
          found = true;
        }

        // Also check inside that person's items for nested people (like Alex S.)
        for (let item of person.items) {
          if (typeof item === "object" && item.name === updateInfo.name) {
            item.mood = updateInfo.newMood;
            found = true;
          }
        }
      }
    }
  }

  // Save updated world data back to file
  await fs.writeFileSync("world.json", JSON.stringify(world, null, 2));

  // Handle case where no person matched the given name
  if (!found) {
    return res.status(404).json({ message: "No matching person found." });
  }

  // Send updated data back to client
  res.json(world);
});

// Start the server on port 3000
app.listen(3000, () => console.log("Server running on http://localhost:3000"));

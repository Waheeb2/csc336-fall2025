// This function loads the world data from the server and displays it on the page.
async function loadWorld() {
  const res = await fetch("/world");
  const data = await res.json();

  // Build HTML for all regions, towns, and people
  let html = "<ul>";

  for (const region of data.regions) {
    for (const town of region.towns) {
      for (const person of town.notable_people) {
        // Show top-level person's mood
        const nestedMood = person.items.find(i => typeof i === "object" && i.mood)?.mood;
        const moodToShow = person.mood || nestedMood || "Unknown";

        html += `<li>${person.name} (${person.role}) - Mood: ${moodToShow}</li>`;

        // Show nested people (like Alex S.)
        for (const item of person.items) {
          if (typeof item === "object" && item.name) {
                html += `<li>>>> ${item.name} (${item.role || "Unknown role"}) - Mood: ${item.mood || "Unknown"}</li>`;
          }
        }
      }
    }
  }

  html += "</ul>";
  document.getElementById("worldDiv").innerHTML = html;
}

// Run the function when the script loads
loadWorld();

// Handle form submission to update moods
let updateForm = document.querySelector("#updateForm");

updateForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Read data from the form
  let formData = new FormData(updateForm);
  let formDataInObjectForm = Object.fromEntries(formData.entries());

  // Send the update to the server
  const res = await fetch("/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDataInObjectForm)
  });

  // Get the updated world and reload the display
  if (res.ok) {
    await res.json();
    loadWorld();
  } else {
    const err = await res.json();
    alert(err.message || "Error updating mood");
  }
});

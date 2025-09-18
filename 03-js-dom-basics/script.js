// Show or hide facts
function toggleFacts(id) {
  const facts = document.getElementById("facts-" + id);
  facts.classList.toggle("hidden");
}

// Filter by region
function filterRegion() {
  const region = document.getElementById("region-select").value;
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const match = region === "all" || card.getAttribute("data-region") === region;
    card.style.display = match ? "" : "none";
  });
}

// Add a country to favorites
function addFavorite(name) {
  const ul = document.getElementById("fav-list");
  const li = document.createElement("li");
  li.textContent = name;

  const btn = document.createElement("button");
  btn.textContent = "×";
  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  ul.appendChild(li);
}

// Apply CSS entered by user
function applyCss() {
  const css = document.getElementById("css-input").value;
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.cssText += css;
  });
}

// Randomize border color highlights
function randomizeHighlights() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    card.style.borderColor = randomColor;
    card.classList.add("highlight");
    setTimeout(() => card.classList.remove("highlight"), 500);
  });
}

// Reset inline styles
function resetStyles() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.cssText = "";
  });
}
